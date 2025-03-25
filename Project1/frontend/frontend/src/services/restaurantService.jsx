import axios from 'axios';

const API_URL = "http://localhost:5000/api/restaurants";

const getRestaurants = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

const addRestaurant = async (data) => {
    const token = localStorage.getItem('token');
    const res = await axios.post(API_URL, data, {
        headers: { Authorization: token }
    });
    return res.data;
};

export default { getRestaurants, addRestaurant };
