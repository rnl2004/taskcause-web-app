import Repository from './AuthRepository';

const resource = '/user';
export default {
    get() {
        return Repository.get(`${resource}`);
    },
    getStatus() {
        return Repository.get(`${resource}/status`);
    },
    login(email, password) {
        const config = {
            withCredentials: true
        };
        const data = {
            email: email,
            password: password
        };
        return Repository.post(`${resource}/signin`, data, config);
    },
    createAccess(payload) {
        return Repository.post(`${resource}`, payload);
    }
};
