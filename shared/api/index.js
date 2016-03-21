import graphQLApi from './graphQLApi';
import UserApi from './UserApi';
import LoginApi from './LoginApi';

export default {
    users: new UserApi({ apiClient: graphQLApi }),
    login: new LoginApi({ apiClient: graphQLApi })
}
