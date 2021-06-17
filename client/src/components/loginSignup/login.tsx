import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { useDispatch } from 'react-redux';

import { login } from './services';

import './loginSignup.css'

export default function Login() {

    const dispatch = useDispatch();

    const handleForm = (e: any) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        login(formData, dispatch);

    }

    return (

        <form onSubmit={(e: any) => handleForm(e)}>
            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
            </FormControl>

            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Button mt={4} mr={'auto'} ml={'auto'} type="submit">Login</Button>
        </form >
    )
}