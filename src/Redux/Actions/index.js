

export const signup = (values) => {
    return (dispatch) => {
        dispatch({
            type: "Register",
            payload: values
        });
    }
}

export const signin = (payload) => {
    return (dispatch) => {
        dispatch({
            type: "Login",
            payload
        });
    }
}