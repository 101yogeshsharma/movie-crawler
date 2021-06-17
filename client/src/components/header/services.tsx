import axios from 'axios';

export function fetchUserData() {
    axios.post('/getUserData')
}