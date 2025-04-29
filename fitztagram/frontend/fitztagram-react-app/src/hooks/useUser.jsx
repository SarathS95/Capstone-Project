import {useState, useEffect} from 'react';
import axios from 'axios';

function useUser() {
    const [user, setUser] =useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/user/')
        .then (response => {
            setUser(response.data.data);
        }).catch (error => {
            console.error('Error getting User:', error)
        });
    },[]);

    const addUser = (newUser) => {
        axios.post('http://localhost:8081/api/user/create', newUser)
        .then(response => {
            setUser(preUser => [response.data.data, ...preUser]);
        }).catch(error => {
            console.error('Error creating User:', error);
        });
    };

    return {user, addUser};
}

export default useUser;