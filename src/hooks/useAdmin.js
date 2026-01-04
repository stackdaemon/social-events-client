import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../pages/Auth/AuthContext";

const useAdmin = () => {
    const { user, loading: authLoading } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (!authLoading && user?.email) {
            fetch(`https://social-events-weld.vercel.app/users/admin/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data?.admin || false);
                    setIsAdminLoading(false);
                })
                .catch(err => {
                    console.error("Failed to check admin status", err);
                    setIsAdminLoading(false);
                });
        } else if (!authLoading && !user) {
            setIsAdmin(false);
            setIsAdminLoading(false);
        }
    }, [user, authLoading]);

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
