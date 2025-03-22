// import { useEffect, useState } from "react"
// import './filter.css'

// export default function FilterProductsByCategory(){

//     const [products, setProducts] = useState([])
//     const [category, setCategory] = useState('')
//     const [filteredArray, setFilteredArray] = useState([])
//     const [filtered, setFiltered] = useState(false)


//     async function fetchProducts(){
//         const response = await fetch("https://dummyjson.com/products", {
//         method: "GET"})
//         const result = await response.json()

//         console.log(result);

//         if(result && result.products.length){
//             setProducts(result.products)
//             setFilteredArray(result.products)
//         }
//     }

//     useEffect(() => {
//         fetchProducts()
//     },[])


//     function handleClickOnCategory(cate){
//         setFiltered(true)
//         setCategory(cate)
//         const arrayToBeFiltered = [...products]
//         const filteredProducts = arrayToBeFiltered.filter((item) => item.category.toLowerCase() === cate.toLowerCase())
//         console.log(filteredProducts);
//         setFilteredArray(filteredProducts)
//         console.log('category clicked !');

//         if(cate === category && filtered){
//             setFilteredArray(arrayToBeFiltered)
//             setFiltered(false)
//         }
//     }

//     return (
//         <div className="main-container">
//             <h1>Filter Products by category</h1>
//             <div className="buttons-div">
//                 <button className="category-btn" onClick={() => handleClickOnCategory('Beauty')}>Beauty</button>
//                 <button className="category-btn" onClick={() => handleClickOnCategory('Fragrances')}>Fragrances</button>
//                 <button className="category-btn" onClick={() => handleClickOnCategory('Furniture')}>Furniture</button>
//                 <button className="category-btn" onClick={() => handleClickOnCategory('Groceries')}>Groceries</button>
//             </div>
//             <div className="rendering-div">
//                 {
//                     filteredArray.map((item) => (
//                         <div className="product" key={item.id}>
//                             <img src={item.thumbnail} alt="" />
//                             <p>{item.title}</p>
//                             <button >{item.category}</button>
//                             <p>Price:{item.price}</p>
//                             <p>Rating:{item.rating}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import "./filter.css";

export default function FilterProductsByCategory() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("");

    async function fetchProducts() {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const result = await response.json();

            if (result?.products?.length) {
                setProducts(result.products);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    function handleClickOnCategory(selectedCategory) {
        setCategory((prevCategory) => (prevCategory === selectedCategory ? "" : selectedCategory));
    }

    // Derive filtered products dynamically instead of storing them in state
    const filteredProducts = category
        ? products.filter((item) => item.category.toLowerCase() === category.toLowerCase())
        : products;

    return (
        <div className="main-container">
            <h1>Filter Products by Category</h1>
            <div className="buttons-div">
                {["Beauty", "Fragrances", "Furniture", "Groceries"].map((cate) => (
                    <button
                        key={cate}
                        className={`category-btn ${category === cate ? "active" : ""}`}
                        onClick={() => handleClickOnCategory(cate)}
                    >
                        {cate}
                    </button>
                ))}
            </div>
            <div className="rendering-div">
                {filteredProducts.map((item) => (
                    <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                        <button>{item.category}</button>
                        <p>Price: {item.price}</p>
                        <p>Rating: {item.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


