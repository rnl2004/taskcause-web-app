import Repository from './SystemRepository';

const resource = '/user';

export default {
    getUser(id, config) {
        return Repository.get(`${resource}/${id}`, config);
    }
};
