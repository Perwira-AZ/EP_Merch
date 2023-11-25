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

async function logout() {
  setToken('');
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

async function searchTeam() {
  const response = await fetchWithtoken(`${BASE_URL}/teams`);
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

async function addNotif({ user, notifType, notifMessage }) {
  const response = await fetchWithtoken(`${BASE_URL}/notif/newNotif`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, notifType, notifMessage }),
  });

  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true, data: responseJson.error };
  }
  return { error: false, data: responseJson };
}

async function getNotif() {
  const response = await fetchWithtoken(`${BASE_URL}/notif/myNotif`);
  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.notif };
}

async function createTeam({ teamName, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember }) {
  const response = await fetchWithtoken(`${BASE_URL}/teams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ teamName, teamLocation, teamStart, teamEnd, teamCompetition, teamDescription, teamMember }),
  });
  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true, data: responseJson.error };
  }
  return { error: false, data: responseJson };
}

export { getToken, searchTeam, login, logout, getUserLoggedIn, getMyTeam, viewRequests, acceptMember, rejectMember, addNotif, getNotif, createTeam };
