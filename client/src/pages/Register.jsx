import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";

const Register = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
    const navigate = useNavigate();
    const {storeToken} = useAuth();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/auth/register`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user)
            });

            const res_data = await response.json();

            if(response.ok){
                storeToken(res_data.payload.token)
                setUser({username:"", email:"", phone:"", password:""});
                toast.success(res_data.message)
                navigate("/");
            }else{
                toast.error(res_data.message)
            }
        }catch (error) {
            console.log("register",error)
        }
    };

    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/register.png" alt="A girl is trying to do registration" width="500" height="500"/>
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Registration-form</h1>
                                <br/>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input name="username" type="text" placeholder="Enter your username" id="username" required
                                               autoComplete="off" value={user.username} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input name="email" type="email" placeholder="Enter your email" id="email" required
                                               autoComplete="off" value={user.email} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input name="phone" type="number" placeholder="Enter phone number" id="phone" required
                                               autoComplete="off" value={user.phone} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input name="password" type="password" placeholder="Enter strong password" id="password" required
                                               autoComplete="off" value={user.password} onChange={handleInput}/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Register;