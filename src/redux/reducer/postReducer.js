const posts = [];


export const postReducer = (state = posts, {type, payload}) =>{
    switch(type){
        case "ADD":
            return {...state, posts: payload};
        default:
            return state;
    }
}