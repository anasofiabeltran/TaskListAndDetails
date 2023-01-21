function UsersImage({user,setSelectedUser}){

    const selectAnUser = (event) =>{
        event.preventDefault();
        setSelectedUser(user)
    }
    return (
        <>
        
        <button className="TodoForm-img-users" onClick={selectAnUser}>
            <img  src={user} />
        </button>
        </>
    
    );
}

export {UsersImage}