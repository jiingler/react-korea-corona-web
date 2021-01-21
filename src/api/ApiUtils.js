const cors = 'https://cors-anywhere.herokuapp.com/'

export const fetchJson = (requestUrl) => {
  return fetch(cors+requestUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  })
  .then(response => response.json())
}