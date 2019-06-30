import axios from "axios";

const baseUrlNews = process.env.DOMAIN;
const baseUrlFoot = process.env.FOOT;

const request = axios.create({
  baseURL: baseUrlNews,
  headers: {
    "Content-Type": "application/json",
  }
});

const requestApiFoot = axios.create({
  baseURL: baseUrlFoot,
  headers: {
    "Content-Type": "application/json",
  }
});

// FIXME : handle error properly
function errHandler(err) {
  console.error("[error]", err.response.data);
  if (
    err.response.data == "unauthorized" ||
    err.response.data.message.name == "TokenExpiredError"
  )
  
  logout();
  throw err.response.data;
}

function logout(){
    window.localStorage.setItem('token', '')
    window.localStorage.setItem('username', '')
}

export { request, requestApiFoot, errHandler, baseUrlNews, baseUrlFoot };
