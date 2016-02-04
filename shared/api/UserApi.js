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
        }

        return this.apiClient(query);
    }
}