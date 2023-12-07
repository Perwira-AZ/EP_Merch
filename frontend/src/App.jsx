import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { login, getUserLoggedIn, logout } from './utils/fetch';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import MyTeamPage from './pages/MyTeamPage';
import JoinRequestPage from './pages/JoinRequestPage';
import ExploreTeamPage from './pages/ExploreTeamPage';
import NotificationBar from './components/NotificationBar';
import CreateNewTeamPage from './pages/CreateNewTeamPage';
import RegisterPage from './pages/RegisterPage';
import TeamDetailPage from './pages/TeamDetailPage';

function App() {
  const [user, setUser] = React.useState(null);
  const [intialization, setInitialization] = React.useState(false);
  const [viewNotif, setViewNotif] = React.useState(false);

  React.useEffect(() => {
    getUserLoggedIn().then(({ data }) => {
      setUser(data);
      setInitialization(false);
    });
  }, []);

  async function onLogin(user) {
    const response = await login(user);
    if (response.data) {
      getUserLoggedIn().then((data) => {
        setUser(data);
      });
    } else {
      alert(response.error);
    }
  }

  function onLogout() {
    logout();
    setUser(null);
  }

  function clickNotif() {
    viewNotif === true ? setViewNotif(false) : setViewNotif(true);
  }

  return (
    <div className="app-container min-h-screen">
      <Header clickNotif={clickNotif} onLogout={onLogout} />
      {viewNotif === true ? <NotificationBar /> : null}
      <Routes>
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/myteam" element={user ? <MyTeamPage /> : <LoginPage onLogin={onLogin} />} />
        <Route path="/joinrequest" element={user ? <JoinRequestPage /> : <LoginPage onLogin={onLogin} />} />
        <Route path="/exploreteam" element={<ExploreTeamPage />} />
        <Route path="/createnewteam" element={user ? <CreateNewTeamPage /> : <LoginPage onLogin={onLogin} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/team/:id" element={<TeamDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
