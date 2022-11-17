import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import AddIncomeExpense from './pages/AddIncomExpense';
import EditIncomeExpense from './pages/EditIncomeExpense';
import DetailPage from './pages/DetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/addIncome" element={<AddIncomeExpense/>} />
          <Route path="/editIncome" element={<EditIncomeExpense/>} />
          <Route path="/detail" element={<DetailPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;