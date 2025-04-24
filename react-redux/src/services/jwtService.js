export const saveToken = (token) => {
    localStorage.setItem('jwtToken', token);
};

export const getToken = () => {
    return JSON.parse(localStorage.getItem('access'));
};

export const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
}

export const removeToken = () => {
    localStorage.removeItem('access');
};

export const isTokenExpired = (token) => {
    if (!token) return true;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expirationTime = payload.exp * 1000;
        return Date.now() > expirationTime;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};

export const validateToken = () => {
    const token = getToken();
    return !!token && !isTokenExpired(token);
};