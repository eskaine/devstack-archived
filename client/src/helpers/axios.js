import axios from "axios";

async function fetch(url, callback) {
    try {
        let res = await axios.get(url, {params: "microsfot"});
    } catch(err) {
        console.error(err);
    }
}

async function post(url, data) {
    try {
        let res = await axios.post(url, data);

    } catch(err) {
        console.error(err);
    }
}

export default {
    fetch,
    post
}