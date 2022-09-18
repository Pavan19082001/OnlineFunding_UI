const LoginDetails = []

export const LoginReducer = (state = LoginDetails, {type, payload}) =>{
    switch(type){
        case "USER_LOGIN":
            return {...state, LoginDetails: payload};
        default:
            return state;
    }
}