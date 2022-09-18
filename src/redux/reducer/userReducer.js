const userDetails = [];

export const UserReducer = (state = userDetails, {type, payload}) => {
  switch(type){
    case "POST_USER":
        return {...state, userDetails: payload};
    default:
        return state;
  }
};