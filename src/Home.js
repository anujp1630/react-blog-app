import { useState ,useEffect} from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    const [blogs ,setblogs]=useState([

        {title:'my new website',body:'lorem ipsum...',author:'mario',id:1},
        {title:'welcome party',body:'lorem ipsum...',author:'yoshi',id:2},
        {title:'web dev top tips',body:'lorem ipsum...',author:'mario',id:3}


    ]) ;  
    


    const handleDelete=(id) =>{
        const newBlogs=blogs.filter(blog=> blog.id!==id);
         setblogs(newBlogs);
    }

    useEffect(() => {

        console.log("use effect run");
        
    } , []);

    return ( 

        <div className="Home">
            <Bloglist blogs={blogs} title="ALL BLOGS" handleDelete={handleDelete}></Bloglist>
            <p>hello</p>
        </div>
           
        
     );
}
 
export default Home;