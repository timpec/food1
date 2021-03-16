// Sends a post request to local backend that send the email
const method = 'GET';
const url = 'http://192.168.8.105:3000/info';

const getInfo = () => {
    return fetch(url, {
        method: method,
        mode: 'cors',
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch(err => console.error(err))
}


export default getInfo;