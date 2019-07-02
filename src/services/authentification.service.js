import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/handle-response';
import history from '../helpers/history';
import axios from 'axios';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    registerUser,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(identifier, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
    };

    return fetch(`${process.env.DOMAIN}auth/local`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        })
        .catch();
}

function registerUser(username, email, password) {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
    };

    var datapi = "_username="+username+"&_password="+password+"&_email="+email+"";

    let dataUser = {
        'username': username,
        'email': email,
        'password': password
    }

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    var link = process.env.FOOT + "/register";
    xhr.open("POST", link);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(datapi);

    return axios.post(`${process.env.DOMAIN}auth/local/register`, dataUser, requestOptions)
        .then(user => {
            history.push('/')
        })
        .catch();
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}