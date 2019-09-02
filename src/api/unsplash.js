import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 57c9dfb9b543d79fe7d158c924898439814a0312ebbebcdcca5eb35fbb6213ac'
        }

});