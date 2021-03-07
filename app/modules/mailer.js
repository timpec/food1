// Sends a post request to local backend that send the email
const method = 'POST';
const url = 'http://localhost:3000/email';
const emulator = 'http://192.168.8.105:3000/email';

const fetchPost = async (data) => {
    try {
        let post = await fetch(emulator, {
            method: method,
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        let res = await post.json();
        console.log(res)
    } catch (error) {
        console.error(error);
    }
}


const httpCall = (data) => {
    console.log(JSON.stringify(data))
    let xhr = new XMLHttpRequest();
    xhr.open(method, emulator, true);
    if (data != null) {
        console.log("pass")
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    else {
        console.log("error in httprequest")
    }
}

export default fetchPost;