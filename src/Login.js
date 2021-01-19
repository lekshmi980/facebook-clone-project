import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
          //sign in...
          auth.signInWithPopup(provider)
          .then((result) => {
              dispatch({
                  type: actionTypes.SET_USER,
                  user: result.user,
              });
              
          })
          .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div classname="login__logo">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt=""
                />
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShwZMjFEHWqAu27o0ReWcrlXnnehzlMW6tUw&usqp=CAU"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    );
}

export default Login;
