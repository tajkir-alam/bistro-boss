import { useEffect, useState } from "react";

const useMenu = (category) => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const items = data.filter(item => item.category === category);
                setMenu(items);
            })
    }, [])
    return [menu];
}
export default useMenu;