import {useEffect, useState} from "react";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";

export const AdminUpdate = () => {
    const [data,setData] = useState({
        username: "",
        email: "",
        phone: ""
    });

    const {AuthorizationToken} = useAuth();
    const params = useParams();

    const getSingleUserData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json();
            setData(data.payload.user)

        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: AuthorizationToken
                },
                body: JSON.stringify(data)
            });
            const res_data = await response.json();
            if(response.ok){
                setData({username:"", email:"", phone:""});
                toast.success(res_data.message);
            }else {
                toast.error(res_data.message);
            }
        }catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <section className="section-contact">
                <div className="container contact-content">
                    <h1 className="main-heading">Update User Data</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" onChange={handleInput}
                                       value={data.username} autoComplete="off" placeholder="Enter your username"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" onChange={handleInput} value={data.email}
                                       autoComplete="off" placeholder="Enter your email" required/>
                            </div>
                            <div>
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" id="phone" onChange={handleInput} value={data.phone}
                                       autoComplete="off" placeholder="Enter your mobile number" required/>
                            </div>
                            <div>
                                <button type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}