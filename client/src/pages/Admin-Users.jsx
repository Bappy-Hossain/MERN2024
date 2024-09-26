import {useEffect, useState} from "react";
import {useAuth} from "../store/auth.jsx";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export const AdminUsers = () => {
    const [users,setUsers] = useState([]);
    const {AuthorizationToken} = useAuth();
    const getAllUsers = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users",{
                method: "GET",
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json();
            setUsers(data.payload.users);

        }catch (error) {
            console.log(error)
        }
    }

    //Delete user
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
                method: "DELETE",
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            const data = await response.json();

            if(response.ok){
                getAllUsers();
                toast.success(data.message);
            }else {
                toast.error(data.message);
            }

        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    return(
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            users.map ((currentUsers,index) => {
                                return(
                                    <tr key={index}>
                                        <td>{currentUsers.username}</td>
                                        <td>{currentUsers.email}</td>
                                        <td>{currentUsers.phone}</td>
                                        <td>
                                            <Link className="edit_btn" to={`/admin/users/${currentUsers._id}/edit`}>Edit</Link>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteUser(currentUsers._id)}>Delete</button>
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