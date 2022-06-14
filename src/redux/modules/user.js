import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//Action
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//initialState
const initialState = {
  user: null,
  is_login: false,
  token: "",
};
const user_initial = {
  nickname: "user1",
};


//Action Creator
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//middlewatr actions

//API통신을 통해 서버에 id,pwd를 제공하고 유저 정보와 토큰을 받아 저장
const loginDB = (id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "",
      data: {
        email: id,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        const accessToken = res.data.token;

        //쿠키에 토큰 저장
        setCookie("is_login", `${accessToken}`);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
    //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
  };
};

//reducer
//produce (immer) 이용하여 불변성 유지
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
  getUser,
  loginDB,
  signUpDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };