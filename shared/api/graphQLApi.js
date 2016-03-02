import fetch from 'isomorphic-fetch';
import { api } from '../../config/server';

export default (queryString) => {
    return fetch(api.url, {
        method: 'post',
        headers: {
            'Content-type': 'application/graphql'
        },
        body: queryString
    }).then(res => {
        const json = res.json();
        if(res.status >= 200 && res.status < 300 ){
            return json;
        } else{
            return json.then(err => {throw err;});
        }
    }).then(res => {
        if(res && res.data){
            return res.data;
        } else{
            throw res.errors;
        }
    });
};