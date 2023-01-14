import React,{useEffect, useState} from "react";
function useLocalStorage(nameLocalStorage,initialValue,deleteItem){

  const [Items, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const addNewUser = () =>{
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(info => {
          const newUser = {id: Items.length+1,taskName: 'Marketing coordinator', deadLine: '12 Dec 2020', status: "Active", assignee: info.results[0].picture.thumbnail, completed: false}
        setItem([...Items,newUser])
        localStorage.setItem(nameLocalStorage, JSON.stringify([...Items,newUser]))
      })
  };


  useEffect(()=>{
    setTimeout(()=>{
      if(JSON.parse(localStorage.getItem(nameLocalStorage))==null){
        addNewUser();
      }else{
        if(!(JSON.parse(localStorage.getItem(nameLocalStorage)).length==0)){
          setItem(JSON.parse(localStorage.getItem(nameLocalStorage)))
        }else{
            if (Items.length<1 && !deleteItem){
                addNewUser();
              };
        }
      }
      
      setLoading(false)
    },1500);
    
  },[])
    
    return{
      Items, setItem,loading, error
    }
    
}

export {useLocalStorage}