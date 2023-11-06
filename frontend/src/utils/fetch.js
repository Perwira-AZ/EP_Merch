const BASE_URL = '/api';

function getToken() {
    return localStorage.getItem('token');
}

function setToken(token) {
    return localStorage.setItem('token', token);
}

async function fetchWithtoken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getToken()}`,
        },
    });
}

//User
async function login({ userEmail, password }) {
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, password }),
    });
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    } else {
        setToken(responseJson.token);
        return { error: false, data: responseJson };
    }
}

async function getUserLoggedIn() {
    const response = await fetchWithtoken(`${BASE_URL}/user/myProfile`);
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson };
}

//Team
async function getMyTeam() {
    const response = await fetchWithtoken(`${BASE_URL}/teams/myTeams`);
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson };
}

async function viewRequests() {
    const response = await fetchWithtoken(`${BASE_URL}/teams/request`);
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson };
}

async function acceptMember(id) {
    const response = await fetchWithtoken(`${BASE_URL}/teams/accept/${id}`, {
        method: 'PATCH',
    });
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson };
}

async function rejectMember(id) {
    const response = await fetchWithtoken(`${BASE_URL}/teams/reject/${id}`, {
        method: 'PATCH',
    });
    const responseJson = await response.json();

    if (responseJson.error) {
        return { error: true, data: null };
    }
    return { error: false, data: responseJson };
}

export { getToken, login, getUserLoggedIn, getMyTeam, viewRequests, acceptMember, rejectMember };
