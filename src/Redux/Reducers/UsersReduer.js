import { get , set , remove } from '../../utils/Storage'

const initialState = {
    users : []
}

const usersReducer = (state = initialState , action) => {

    let data ;

    switch(action.type) {

        case "Register" :
            data = get("user") ?? [] ;                     
            data.push(action.payload);
            set("user" , data)
            return {
                ...state ,
                users : [...data]
            }

        case "Login" :
            data = get("user") ?? [];
            const authUser = data.find((user)=>
                user.email === action.payload.email &&
                user.password === action.payload.password
                )
                
            if(authUser) {
                console.log("You are Logged In... Wel Come");
            }
            else {
                alert("Please Enter Correct Email & Password")
            }
            
            return {
                ...state ,
                authUser
            }
            

        default :
        return state;
 
    }
}

export default usersReducer;