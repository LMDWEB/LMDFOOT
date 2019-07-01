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

    var datapi = "_username="+data.username+"&_password="+data.password+"&_email="+data.email+"";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", process.env.DOMAIN);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

    xhr.send(datapi);

    //createUserFoot(data);
    let url = '/auth/local/register'
    return request.post(url, data)
      .then(({ data }) => data)
      .catch(errHandler)
  }

export { login, loginApi, checkSession, registerUser }