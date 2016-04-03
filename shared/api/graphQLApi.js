import fetch from 'isomorphic-fetch';
import { api } from '../../config/server';

export default (queryString) => {
    return fetch(api.url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/graphql'
        },
        credentials: 'include',
        body: queryString
    }).then(res => {
        const json = res.json();
        if(res.status >= 200 && res.status < 300 ){
            return json;
        } else{
            return json.then(err => {throw err;});
        }
    }).then(res => {
        console.log(res);
        if(res.errors){
            throw res.errors;
        } else{
            return res.data;
        }
    });
};