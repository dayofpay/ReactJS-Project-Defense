const buildOptions = (data, isAdmin = false) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        };
    }

    if (isAdmin) {
        options.headers = {
            ...options.headers,
            'X-Admin': 'true',
        };
    }

    return options;
};

const request = async (method, url, data, isAdmin = false) => {
    const response = await fetch(url, {
        ...buildOptions(data, isAdmin),
        method,
    });

    if (response.status === 204) {
        return {};
    }
    const result = await response.json();
    if (!response.ok) {
        throw result;
    }
    return result;
};

export const get = (url, isAdmin = false) => request('GET', url, null, isAdmin);
export const post = (url, data, isAdmin = false) => request('POST', url, data, isAdmin);
export const put = (url, data, isAdmin = false) => request('PUT', url, data, isAdmin);
export const remove = (url, isAdmin = false) => request('DELETE', url, null, isAdmin);
export const patch = (url, data, isAdmin = false) => request('PATCH', url, data, isAdmin);
