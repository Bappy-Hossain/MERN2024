import {useEffect, useState} from "react";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";

export const AdminContacts = () => {
    const [contacts,setContacts] = useState([]);
    const {AuthorizationToken} = useAuth();

    const getAllContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts",{
                method: "GET",
                headers:{
                    Authorization: AuthorizationToken
                }
            });
            const res_data = await response.json();
            setContacts(res_data.payload.contacts);

        }catch (error){
            console.log(error)
        }
    }

    const deleteContact = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json();

            if(response.ok){
                getAllContacts();
                toast.success(data.message);
            }else {
                toast.error(data.message);
            }
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllContacts();
    }, []);


    return(
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Contacts Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            contacts.map ((currentContacts, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{currentContacts.username}</td>
                                        <td>{currentContacts.email}</td>
                                        <td>{currentContacts.message}</td>
                                        <td>
                                            <button onClick={() => deleteContact(currentContacts._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}