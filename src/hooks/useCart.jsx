import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/cart?email=${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
    })
    return [cart, refetch]
}

export default useCart;