import { useState,useEffect } from "react";

const useFetch =(url) =>{
    console.log("url",url)

    const [data,setData]=useState(null);
    const [ispending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
   
    useEffect(() => {


        const abortcont=new AbortController();

        setTimeout(() => {
  
          fetch(url , { signal: abortcont.signal})
        
          .then(res =>{
  
              if(!res.ok){
  
                  throw Error('could not fetch the data for that resource');
              }
              
 
          
          return res.json();
  }) 
      .then(data =>{
        console.log("then",data)
  
          setData(data);
           setIsPending(false);
           setError(null);
           
      })
        
         
  
              .catch(err => {
        console.log("err",err)


                if (err.name === 'AbortError'){

                    console.log('fetch aborted')
                }  else{

                    setIsPending(false);
                    setError(err.message);
                }
  
                 
  
              })
        
          
        }, 1000);


      return () => abortcont.abort();
          
      } , [url]);

      return{data,ispending,error}

}
export default useFetch;