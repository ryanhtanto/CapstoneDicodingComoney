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
import NewsListPage from './pages/NewsListpage';
import SavingPlanner from './pages/SavingPlanner';
import axios from 'axios';

function App() {
  const [newses, setNewses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getNewses = async () => {
    setLoading(true)
    try {
      let response = await axios.get('https://gnews.io/api/v4/search?q=finance&token=ceed8ce1d8fd00e55ea5e3bf1280122e&lang=en');
      setNewses(response.data.articles);
      setLoading(false)
    } catch(e){
      setLoading(true)
      console.log(e.message)
    }
  }

  React.useEffect( () => {
    getNewses();
  }, [])

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
          <Route path="/news" element={<NewsListPage newses={newses} loading={loading}/>} />
          <Route path="/detail" element={<DetailPage/>} />
          <Route path="/saving-planner" element={<SavingPlanner/>} />
          <Route path="/edit-saving-plan" element={<AddEditSavingPlan />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;