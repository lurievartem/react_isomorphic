import fetch from 'isomorphic-fetch';

const url = 'http://localhost:3000/graphql';

export default (queryString) => {
    return fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/graphql"
        },
        body: queryString
    }).then(res => {
        if(res.status >= 400){
            throw new Error('Bad response from server');
        }

        return res.json();
    }).then(data => {
        console.log('graphQLApi data:', data);
        return (data ? data : Promise.reject(data.error));
    });
};