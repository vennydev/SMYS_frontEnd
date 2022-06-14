// action
const LOGIN = "post/LOGIN";
const SIGNUP = "post/SIGNUP";

// initialStates

// action creator
export const signupPosts = (signup_info) => {
    return {type: LOGIN, signup_info : signup_info }
}

export default function reducer(state = {}, action = {})
