import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { login, getUserLoggedIn, logout } from './utils/fetch';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import MyProfilePage from './pages/MyProfilePage';
import MyTeamPage from './pages/MyTeamPage';
import JoinRequestPage from './pages/JoinRequestPage';
import ExploreTeamPage from './pages/ExploreTeamPage';
import NotificationBar from './components/NotificationBar';
import CreateNewTeamPage from './pages/CreateNewTeamPage';
import RegisterPage from './pages/RegisterPage';
import TeamDetailPage from './pages/TeamDetailPage';
import NotFoundPage from './pages/404';
import LandingPage from './pages/LandingPage';
import Loading from './components/Loading';

function App() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [viewNotif, setViewNotif] = React.useState(false);

  React.useEffect(() => {
    getUserLoggedIn().then(({ data }) => {
      setUser(data);
      setIsLoading(false);
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
    navigator('/login');
  }

  function clickNotif() {
    viewNotif === true ? setViewNotif(false) : setViewNotif(true);
  }

  return (
    <div className="app-container min-h-screen">
      <Header clickNotif={clickNotif} onLogout={onLogout} />
      {viewNotif === true ? <NotificationBar /> : null}
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/profile/:id" element={user ? <ProfilePage /> : <LoginPage onLogin={onLogin} />} />
          <Route path="/myprofile" element={user ? <MyProfilePage user={user} /> : <LoginPage onLogin={onLogin} />} />
          <Route path="/myteam" element={user ? <MyTeamPage /> : <LoginPage onLogin={onLogin} />} />
          <Route path="/joinrequest" element={user ? <JoinRequestPage /> : <LoginPage onLogin={onLogin} />} />
          <Route path="/exploreteam" element={<ExploreTeamPage />} />
          <Route path="/createnewteam" element={user ? <CreateNewTeamPage /> : <LoginPage onLogin={onLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/team/:id" element={user ? <TeamDetailPage userID={user._id} /> : <LoginPage onLogin={onLogin} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
