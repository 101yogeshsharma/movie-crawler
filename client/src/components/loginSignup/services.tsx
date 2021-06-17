import { login_action } from "../../actions/login_action";

import axios from 'axios';

export const login = (formData: any, dispatch: any) => {
    axios.post('http://localhost:4000/c4/login', formData)
        .then((response: any) => {
            if (response.status === 200) {
                dispatch(login_action());
            } else {
                alert("Invalid Credentials");
            }
        })
}

export const signup = (formData: any, dispatch: any) => {
    axios.post('http://localhost:4000/c4/newUser', formData)
        .then((response: any) => {
            if (response.status === 200) {
                dispatch(login_action());
            } else {
                alert("Something's Wrong");
            }
        })
}