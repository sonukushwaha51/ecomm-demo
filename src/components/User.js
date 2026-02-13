import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actionCreator";

function User(props) {

    const dispatch = useDispatch();

    const usersList = useSelector(state => state.fetchUser.user)
    console.log(usersList)
    useEffect(() => {
        dispatch(getUser())
    },[dispatch])
    return (
        <div>
            <h1>User Component</h1>
                {usersList && usersList.map(user => <h3 key={user.id}>{user.name}</h3>)}
                
        </div>
    )
}

export default User;