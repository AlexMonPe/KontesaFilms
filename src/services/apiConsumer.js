export const apiConsumer = async (method, uri, body) => {
    const options = {
        method,
    }
    if (method === 'POST') {
        options.body = JSON.stringify(body);
        options.header = {
            'Content-Type': 'application/json',
        }
    }
    try {
        const res = await fetch(uri, options)
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

/**
 * export const loginUser = async (formData) => {
    try {
        const {token} = await apiConsumer('POST', userLoginPath, formData);
        if (token) return tokenDecoder(token);
    } catch (error) {
        console.log('User Login has failed');
    }
}
 */