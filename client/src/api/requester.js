async function request(method, url, data) {
    const options = {};

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers = {
            "content-type": "application/json",
        };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if(!response.ok) {
        console.log(response);
        throw result;
    }

    return result;
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
