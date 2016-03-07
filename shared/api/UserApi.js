import Base from './Base';

export default class UserApi extends Base{
    request(action, data){
        let query = '';
        const userFragment = `
            fragment UserFragment on User{
                username
                email
                password
                name
                lastname
                gender
                birthday
                logo
            }
        `;

        switch(action){
            case('getUsers'):
                query = `
                    query RootQuery{
                        users{
                            ...UserFragment
                        }
                    }
                `;
                break;
            case('getUser'):
                let child = '';
                Object.keys(data).forEach((key) => {
                    if(data[key] !== undefined){
                        child += `
                            ${key}: user(${key}: \"${data[key]}\"){
                                ...UserFragment
                            }
                        `;
                    }
                });

                query = `
                    query RootQuery{
                        ${child}
                    }
                `;

                break;
            case('save'):
                let user = '';
                Object.keys(data).forEach((key) => {
                    if(data[key] !== undefined){
                        user += `
                            ${key}: \"${data[key]}\"
                        `;
                    }
                });

                query = `
                    mutation RootMutation{
                        addUser(${user}){
                            ...UserFragment
                        }
                    }
                `;
                break;
            default:
                console.error('Can\'t find action %s and params %O in UserApi', action, data);
                return;
        }

        return this.apiClient(`${query} ${userFragment}`);
    }
}