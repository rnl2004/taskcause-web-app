import axios from 'axios';

const baseDomain = 'http://localhost:3000';
const baseURL = `${baseDomain}/taskcause-app-service/api/v1`;

export default axios.create({
    baseURL
});

//headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTY4OTI2MDIsImlhdCI6MTU1NjgwMjYwMiwic3ViIjoxfQ.L7m36MYq9fR50SDyHpUTrBbJAQ2dGV-Mp153YuOKLMI` }
