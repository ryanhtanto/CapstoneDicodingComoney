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
          <Route path="/addIncome" element={<AddIncomeExpense/>} />
          <Route path="/editIncome" element={<EditIncomeExpense/>} />
          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/detail" element={<NewsDetail />} />
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/savingplanner" element={<SavingPlanner/>} />
          <Route path="/editSavingPlan" element={<AddEditSavingPlan />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;