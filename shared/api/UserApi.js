import Base from './Base';

export default class UserApi extends Base{

    request(action, params){
        let query = '';

        switch(action){
            case('getAll'):
                query =`query RootQuery {
                            users {
                                username
                                name
                            }
                        }`;
                break;
            default:
                console.error('Can\'t find action %s and params %O in UserApi', action, params);
                return;
        }

        return this.apiClient(query);
    }
}