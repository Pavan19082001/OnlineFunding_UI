export const signin = () => {
    return{
        type: "SIGNIN",
    };
};

export const signout = () =>{
    return{
        type: "SIGNOUT"
    };
};

export const AddPost = (posts) => async dispatch => {
    dispatch({
        type: "ADD",
        payload: posts
    })
};

export const DeletePost = (post) => async dispatch =>{
    dispatch({
        type: "DELETE",
        payload: post
    });
}

export const AddUser = (userDetails) => async dispatch =>{
    dispatch({
        type: "POST_USER",
        payload: userDetails,
    });
}

export const UserLogin = (userData) => async dispatch =>{
    dispatch({
        type: "USER_LOGIN",
        payload: userData,
    });
}
