const url = '/graphql';

export default (queryString) => {
    return fetch(url, {
        method: 'post',
        headers: {
            "Content-type": "application/graphql"
        },
        body: queryString
    }).then((response) => {
        if(response.status >= 200 && response.status < 300){
            return Promise.resolve(response);
        } else{
            return Promise.reject(new Error(response.statusText));
        }
    });
};