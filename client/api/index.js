import axios from 'axios';

const fetchURL = "http://localhost/5000/posts";

export const fetchPosts = () => axios.get(fetchURL); 