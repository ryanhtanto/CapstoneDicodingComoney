/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Route, Routes, Navigate, useLocation,
} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import EditTransactionPage from './pages/EditTransactionPage';
import DashboardPage from './pages/DashboardPage';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';
import AddSavingPlanPage from './pages/AddSavingPlanPage';
import NewsPage from './pages/NewsPage';
import SavingPlannerPage from './pages/SavingPlannerPage';
import UserContext from './context/UserContext';
import LocaleContext from './context/LocaleContext';
import { getActiveUser } from './utils/authentication-user';
import EditSavingPlanPage from './pages/EditSavingPlanPage';
import AddTransactionPage from './pages/AddTransactionPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutCoMoneyPage from './pages/AboutComoneyPage';

function App() {
  const [user, setUser] = React.useState(null);
  const [locale, setLocale] = React.useState('en');
  const [loading, setLoading] = React.useState(true);
  const path = useLocation().pathname;

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
      if (localStorage.getItem('locale') === undefined) {
        localStorage.setItem('locale', 'id');
        setLocale('id');
      } else {
        setLocale(localStorage.getItem('locale'));
      }
    }

    checkUser();
    initialLoad();
  }, []);

  const userContextValue = React.useMemo(() => ({
    user,
    setUser,
  }), [user]);

  const toggleLocale = () => {
    const targetLocale = locale === 'id' ? 'en' : 'id';
    setLocale(targetLocale);
    localStorage.setItem('locale', targetLocale);
  };

  const localeContextValue = React.useMemo(() => ({
    locale,
    toggleLocale,
  }), [locale]);

  if (loading) {
    return (
      <div className="loading__container d-flex justify-content-center flex-column align-items-center">
        <span className="loading__animation mb-4" />
        <p className="fw-bold medium__font">Loading</p>
      </div>
    );
  }

  if (user === null) {
    return (
      <UserContext.Provider value={userContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <header>
            {
              path !== '/login' && path !== '/register' ? <Navigation toggleLocale={toggleLocale} /> : ''
            }
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about/comoney" element={<AboutCoMoneyPage />} />
              <Route path="/about/teams" element={<AboutUsPage />} />
            </Routes>
          </main>
          <Footer />
        </LocaleContext.Provider>
      </UserContext.Provider>
    );
  }
  return (
    <UserContext.Provider value={userContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <header>
          <Navigation toggleLocale={toggleLocale} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/add/:type" element={<AddTransactionPage />} />
            <Route path="/edit/transaction/:id" element={<EditTransactionPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/saving-planner" element={<SavingPlannerPage />} />
            <Route path="/add-saving-plan" element={<AddSavingPlanPage />} />
            <Route path="/edit-saving-plan/:id" element={<EditSavingPlanPage />} />
            <Route path="/about/comoney" element={<AboutCoMoneyPage />} />
            <Route path="/about/teams" element={<AboutUsPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </LocaleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
