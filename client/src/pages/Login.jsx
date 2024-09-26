import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";

const Login = () => {
    const [user,setUser] = useState({
        email:"",
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
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user)
            });

            const res_data = await response.json();

            if(response.ok){
                storeToken(res_data.payload.token)
                setUser({email: "", password: ""});
                toast.success(res_data.message)
                navigate("/");
            }else {
                toast.error(res_data.message)
            }
        }catch (error) {
            console.log("login",error);
        }
    }

    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/login.png" alt="A boy is trying to do login" width="500" height="500"/>
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login-form</h1>
                                <br/>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input name="email" type="email" placeholder="Enter your email" id="email" required
                                               autoComplete="off" value={user.email} onChange={handleInput}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input name="password" type="password" placeholder="Enter strong password" id="password" required
                                               autoComplete="off" value={user.password} onChange={handleInput}/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Login;