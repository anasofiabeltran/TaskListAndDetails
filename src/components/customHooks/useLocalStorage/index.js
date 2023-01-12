function useLocalStorage(item,Items,setItem,deleteItem){

    const addNewUser = () =>{
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(info => {
              const newUser = {id: Items.length+1,taskName: 'Marketing coordinator', deadLine: '12 Dec 2020', status: "Active", assignee: info.results[0].picture.thumbnail, completed: false}
            setItem([...Items,newUser])
            localStorage.setItem(item, JSON.stringify([...Items,newUser]))
          })
      };

      

    if(!(JSON.parse(localStorage.getItem(item)).length==0)){
        setItem(JSON.parse(localStorage.getItem(item)))
    }else{
        if (Items.length<10 && !deleteItem){
            addNewUser()
          };
        
    }

    
}

export {useLocalStorage}