import { request, requestApiFoot, errHandler } from './sporty'

function loginApi(credentials) {
    return requestApiFoot
    .post('/login', {
        identifier: credentials.username,
        password: credentials.password
    })
    .then(({ data }) => {
        window.localStorage.setItem("token", "Bearer " + data.jwt);
        window.localStorage.setItem("username", data.user.username);
    })
    .catch(errHandler)
}

function login(credentials) {
    return request
    .post('/auth/local', {
        identifier: credentials.username,
        password: credentials.password
    })
    .then(({ data }) => {
        window.localStorage.setItem("token", "Bearer " + data.jwt);
        window.localStorage.setItem("user", JSON.stringify(data.user));
        window.localStorage.setItem("username", data.user.username);
    })
    .catch(errHandler)
}

function checkSession () {
    return request
      .get(`/users/me`)
      .then(({ data }) => {
        return data
      })
      .catch(errHandler)
  }

function registerUser(data) {
    //createUserFoot(data);
    let url = '/auth/local/register'
    return request.post(url, data)
      .then(({ data }) => data)
      .catch(errHandler)
  }

export { login, loginApi, checkSession, registerUser }