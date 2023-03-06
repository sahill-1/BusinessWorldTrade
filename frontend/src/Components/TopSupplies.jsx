import React, {useState, useEffect} from 'react'

export default function TopSupplies() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const componentMounted = true;

    useEffect( () => {
        const getProducts = async () => {
            setLoading(true)

            const response = await fetch("https://fakestoreapi.com/products");

            if(componentMounted){
                setData(await response.clone().json());
                setLoading(false);
                setFilter(await response.json());
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
        
    }, [])
  return (
    <div>
      
    </div>
  )
}
