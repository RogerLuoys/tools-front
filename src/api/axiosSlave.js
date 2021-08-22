import axios from 'axios'
import {Message} from 'element-ui'

const apiSlave = axios.create({
  // baseURL: 'http://localhost:9011/',
  timeout: 10000,
  withCredentials: false
})

// 添加请求拦截器
apiSlave.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
apiSlave.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // 接口返回异常时，统一错误提示
  Message.error('执行异常，请检查自动化服务器')
  return Promise.reject(error)
})

export default apiSlave