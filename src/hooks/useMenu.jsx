// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

const useMenu = (category) => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             if (category) {
    //                 const items = data.filter(item => item.category === category);
    //                 setMenu(items);
    //             }
    //             else{
    //                 setMenu(data)
    //             }
    //         })
    // }, [])

    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-server-data.vercel.app/menu');
            return res.json();
        }
    })

    return [menu, loading, refetch];
}
export default useMenu;