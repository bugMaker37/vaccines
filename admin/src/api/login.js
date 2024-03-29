import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'userservice/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: 'userservice/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'eduservice/user/logout',
    method: 'post'
  })
}
