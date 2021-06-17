import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

import { useDispatch } from 'react-redux';

import { signup } from './services';

export default function Signup() {

    const dispatch = useDispatch();

    const handleForm = (e: any) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            dob: e.target.dob.value,
            password: e.target.password.value
        }

        signup(formData, dispatch);

    }

    return (

        <form onSubmit={(e: any) => handleForm(e)}>
            <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
            </FormControl>

            <FormControl id="dob">
                <FormLabel>Date Of Birth</FormLabel>
                <Input type="date"></Input>
            </FormControl>

            <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"></Input>
            </FormControl>
            <Button mt={4} mr={'auto'} ml={'auto'} type="submit">Signup</Button>
        </form >
    )
}