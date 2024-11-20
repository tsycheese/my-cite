import axios from 'axios';
import { showMessage } from '../utils';

const request = axios.create({
  timeout: 50000,
});

request.interceptors.response.use((resp) => {
  if (resp.data.code === 0) {
    return resp.data.data;
  }
  showMessage({
    content: resp.data.msg,
    type: 'error',
    duration: 1500,
  });
});

export default request;
