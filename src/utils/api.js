import axios from 'axios'
import { Message } from 'element-ui'

axios.interceptors.request.use(config => {
  if (sessionStorage.getItem('user')) {
    config.headers.Authorization = sessionStorage.getItem('user')
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(success => {
  // 业务逻辑错误
  if (success.status && success.status === 200) {
    if (success.data.flag) {
      Message.success({ message: success.data.message })
    } else if (success.data.message) {
      Message.error({ message: success.data.message })
    }
  }
  return success.data
}, error => {
  if (error.response.code === 504 || error.response.code === 404) {
    Message.error({ message: '服务器请求失败' })
  } else if (error.response.code === 403) {
    Message.error({ message: '权限不足' })
  } else {
    if (error.response.data.message) {
      Message.error({ message: error.response.message })
    } else {
      Message.error({ message: '未知错误' })
    }
  }
})

const base = ''

// 传送json格式的post请求
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params
  })
}

// 传送json格式的get请求
export const getRequest = (url, params) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    data: params
  })
}

// 传送json格式的put请求
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params
  })
}

// 传送json格式的delete请求
export const deleteRequest = (url, params) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    data: params
  })
}
