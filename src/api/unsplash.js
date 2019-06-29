import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 45411944f8307e2eec2d9dc88f3d8bb9ba0212167e490016d750257c8a441cb0'
    }
});

