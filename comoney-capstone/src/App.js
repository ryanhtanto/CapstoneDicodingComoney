import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import AddIncomeExpense from './pages/AddIncomExpense';
import EditIncomeExpense from './pages/EditIncomeExpense';
import Dashboard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';
import AddEditSavingPlan from './pages/AddEditSavingPlan';
import NewsDetail from './pages/NewsDetail';
import NewsListPage from './pages/NewsListpage';
import SavingPlanner from './pages/SavingPlanner';
import AboutUsPage from './pages/AboutUsPage';
import AboutCoMoneyPage from './pages/AboutCoMoneyPage';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-income" element={<AddIncomeExpense/>} />
          <Route path="/edit-income" element={<EditIncomeExpense/>} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/detail" element={<NewsDetail />} />
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/saving-planner" element={<SavingPlanner/>} />
          <Route path="/edit-saving-plan" element={<AddEditSavingPlan />} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/about-comoney" element={<AboutCoMoneyPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;