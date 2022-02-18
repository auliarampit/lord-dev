import axios from 'axios';

const URL = 'https://';

const baseUrl = axios.create({ baseURL: URL })

export {baseUrl}