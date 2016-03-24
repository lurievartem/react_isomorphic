import Base from './Base';

export default class LoginApi extends Base{
    request(action, data){
        let query = '';
        let child = '';
        let fragment = `
            fragment LoginFragment on AuthToken{
                token
            }
        `;

        switch(action){
            case('logIn'):
                Object.keys(data).forEach((key) => {
                    child += `${key}: \"${data[key]}\",`;
                });

                query = `
                    query RootQuery{
                        login(${child}){
                            ...LoginFragment
                        }
                    }
                `
                break;
            default:
                console.error('Can\'t find action %s and params %O in UserApi', action, data);
                return;
        }

        return this.apiClient(`${query} ${fragment}`);
    }
}