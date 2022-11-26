import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navigation from "./components/Navigation";
import EditTransaction from "./pages/EditTransaction";
import Dashboard from "./pages/Dashboard";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import AddSavingPlan from "./pages/AddSavingPlan";
import News from "./pages/News";
import SavingPlanner from "./pages/SavingPlanner";
import UserContext from "./context/UserContext";
import LocaleContext from "./context/LocaleContext";
import { getActiveUser } from "./utils/authentication-user";
import EditSavingPlan from "./pages/EditSavingPlan";
import AddTransaction from "./pages/AddTransaction";

function App() {
  const [user, setUser] = React.useState(null);
  const [locale, setLocale] = React.useState("en");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const dataUser = await getActiveUser();
        setUser(dataUser || null);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };

    function initialLoad() {
      if (localStorage.getItem("locale") === undefined) {
        localStorage.setItem("locale", "id");
        setLocale("id");
      } else {
        setLocale(localStorage.getItem("locale"));
      }
    }

    checkUser();
    initialLoad();
  }, []);

  const userContextValue = React.useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);

  const toggleLocale = () => {
    const targetLocale = locale === "id" ? "en" : "id";
    setLocale(targetLocale);
    localStorage.setItem("locale", targetLocale);
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  if (loading) {
    return;
  }

  if (user === null) {
    return (
      <UserContext.Provider value={userContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <main>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </LocaleContext.Provider>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={userContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <header>
            <Navigation toggleLocale={toggleLocale} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add/transaction" element={<AddTransaction />} />
              <Route path="/edit/transaction/:id" element={<EditTransaction />} />
              <Route path="/news" element={<News />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/saving-planner" element={<SavingPlanner />} />
              <Route path="/add-saving-plan" element={<AddSavingPlan />} />
              <Route path="/edit-saving-plan/:id" element={<EditSavingPlan />} />
            </Routes>
          </main>
          <Footer />
        </LocaleContext.Provider>
      </UserContext.Provider>
    );
  }
}

export default App;
