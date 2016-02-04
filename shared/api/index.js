import graphQLApi from './graphQLApi';
import UserApi from './UserApi';

export default {
    users: new UserApi({ apiClient: graphQLApi })
}
