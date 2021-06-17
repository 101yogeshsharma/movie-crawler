import './header.css';

import { Avatar, Input, Button, Select, InputLeftElement, InputGroup } from '@chakra-ui/react'

import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchUserData } from './services';
import { search_by_id, search_by_key } from '../../actions/searchAction';

export default function Header() {

    // const [showProfile, setShowProfile] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleForm = (e: any) => {
        e.preventDefault();
        console.log(e.target.tag.value);
        if (e.target.tag.value == "id") {
            const data = {
                id: e.target.keyword.value
            }
            axios.post('/c5/getMovies', data)
                .then((response: any) => {
                    if (response.status === 200) {
                        console.log('result by id', response.data.movieList);
                        console.log('response', response.data.movieList);
                        dispatch(search_by_id([response.data.movieList]));
                        history.push('/movies/' + data.id);
                    }
                })

        }
        else {
            const data = {
                keyword: e.target.keyword.value
            }
            axios.post('/c5/getMovies', data)
                .then((response: any) => {
                    if (response.status === 200) {
                        console.log('result by name', response.data.movieList);
                        dispatch(search_by_key(response.data.movieList));
                        history.push('/search/?q=' + data.keyword);
                    }
                })
            history.push('/search');
        }
    }

    return (
        <div className="main-header-div">
            <h1>IMDB Crawler</h1>
            <form className="header-search-form" onSubmit={(e) => handleForm(e)}>
                <Select id="tag" placeholder="Select Tag">
                    <option value="name">Name</option>
                    <option value="id">ID</option>
                </Select>
                <Input id="keyword" type="text" style={{ width: '70%' }} />
                <Button type="submit" ml={2} mb={1}>Search</Button>
            </form>
            <Avatar mr={2} ml={'auto'} />
        </div>
    )
}