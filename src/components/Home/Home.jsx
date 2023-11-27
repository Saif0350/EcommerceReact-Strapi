import { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from '../Home/Banner/Banner'
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api"
import { Context } from "../../utils/Context";



const Home = () => {
    const {categories, setCategories, products, setProducts} =  useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])


    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) =>{
            console.log(res);
            setProducts(res);
        });   
    };



    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) =>{
            console.log(res);
            setCategories(res);
        });   
    };


    return(
        <>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products products={products} headingText="Popular Products" />
                </div>
            </div>
        </>

    ) 
};

export default Home;
