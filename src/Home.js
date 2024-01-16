
import React from "react";
import  { useState ,useEffect} from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";
const Home = () => {

        const {data: blogs,ispending,error}=useFetch('http://localhost:8000/blogs');

    return ( 

        <div className="Home">
            
            {error && <div>{ error} </div>}
            {ispending && <div>is loading ...</div>}
            { blogs && <Bloglist blogs={blogs} title="ALL BLOGS" ></Bloglist> }
            
            
        </div>
           
        
     );
}
 
export default Home;