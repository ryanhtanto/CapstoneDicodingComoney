import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import AddIncomeExpense from './pages/AddIncomExpense';
import EditIncomeExpense from './pages/EditIncomeExpense';
import NewsListPage from './pages/NewsListpage';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addIncome" element={<AddIncomeExpense/>} />
          <Route path="/editIncome" element={<EditIncomeExpense/>} />
          <Route path="/news" element={<NewsListPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;