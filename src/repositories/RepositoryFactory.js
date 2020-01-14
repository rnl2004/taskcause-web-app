import OrganizationRepository from './OrganizationRepository';

const repositories = {
    organization: OrganizationRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};
