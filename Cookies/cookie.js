function setCookie(key, value, days, path = "/") {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${key}=${value}${expires};path=${path}`;
  console.log(document.cookie);
}

function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].split("=");

    if (key === name) {
      console.log(value);
      // return value;
    }
  }
  return null;
}

function deleteCookie(name, path = "/") {
  document.cookie = `${name}=; expires=Ths, 01 Jan 1979 00:00:00 UTC; path=${path}`;
}
