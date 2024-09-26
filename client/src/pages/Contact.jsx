import {useState} from "react";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";
const Contact = () => {
    const [contact,setContact] = useState({
        username:"",
        email:"",
        message:""
    });

    const [userData,setUserData] = useState(true);
    const {user} = useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message: ""
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:5000/api/form/contact`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(contact)
            });
            const res_data = await response.json();
            if(response.ok){
                setContact({username:"", email:"", message:""});
                toast.success(res_data.message);
            }else {
                toast.error(res_data.message);
            }
        }catch (error) {
            console.log("register",error)
        }
    }

    return(
        <>
            <section className="section-contact">
                <div className="container contact-content">
                    <h1 className="main-heading">Contact us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/support.png" alt="we are always ready to help"/>
                    </div>
                    <div className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" id="username" onChange={handleInput}
                                       value={contact.username} autoComplete="off" placeholder="Enter your username"
                                       required/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" id="email" onChange={handleInput} value={contact.email}
                                       autoComplete="off" placeholder="Enter your email" required/>
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message" cols="30" rows="6" onChange={handleInput}
                                          value={contact.message} autoComplete="off"
                                          placeholder="Write here your text..." required></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d467541.594733693!2d89.18123992703288!3d23.723521888952494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzIzLjQiTiA4OcKwMTAnMzguNSJF!5e0!3m2!1sen!2sbd!4v1704094544959!5m2!1sen!2sbd"
                        width="100%" height="450" allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
        </>
    )
}
export default Contact;