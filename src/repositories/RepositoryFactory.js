import AccessRepository from './AccessRepository';
import UserRepository from './UserRepository';
import OrganizationRepository from './OrganizationRepository';

const repositories = {
    access: AccessRepository,
    user: UserRepository,
    organization: OrganizationRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
