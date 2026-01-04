import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Trash2, UserCheck } from 'lucide-react';

const ManageUsers = () => {
    // Assuming we might fetch users here or pass via loader
    // For now, I'll fetch inside useEffect to be safe if loader isn't set up yet
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        fetch('https://social-events-weld.vercel.app/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleMakeAdmin = (user) => {
        fetch(`https://social-events-weld.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                fetchUsers();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://social-events-weld.vercel.app/users/${user._id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        fetchUsers();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    };

    return (
        <div className="w-full p-4">
            <h2 className="text-3xl font-semibold my-4">Total Users: {users.length}</h2>
            <div className="overflow-x-auto rounded-t-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-[#02705e] text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : (
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-sm bg-orange-500 text-white">
                                            <UserCheck size={16} />
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-sm text-red-600">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
