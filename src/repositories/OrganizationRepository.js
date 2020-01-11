import Repository from './SystemRepository';

const resource = '/organizations';

export default {
    getOrganizations() {
        return Repository.get(`${resource}`);
    },
    updateOrganizations(data) {
        return Repository.put(`${resource}`, data);
    }
};
