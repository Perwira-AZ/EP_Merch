import React from "react";
import { Routes, Route } from "react-router-dom";
import { login, getUserLoggedIn } from "./utils/fetch";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import MyTeamPage from "./pages/MyTeamPage";
import JoinRequestPage from "./pages/JoinRequestPage";
import ExploreTeamPage from "./pages/ExploreTeamPage";
import CreateNewTeamPage from "./pages/CreateNewTeamPage";

function App() {
  const [user, setUser] = React.useState(null);
  const [intialization, setInitialization] = React.useState(false);

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
    }
  }

  return (
    <div className="app-container min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage onLogin={onLogin} />} />
        <Route path="/myteam" element={<MyTeamPage />} />
        <Route path="/joinrequest" element={<JoinRequestPage />} />
        <Route path="/exploreteam" element={<ExploreTeamPage />} />
        <Route path="/createnewteam" element={<CreateNewTeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
