import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import savingCard from '../assets/images/graph-monitor.png';
import SavingPlan from '../components/SavingPlan';
import SavingBarCount from '../components/SavingBarCount';
import LocaleContext from '../context/LocaleContext';
import { getAllSavings } from '../utils/savings';
import UserContext from '../context/UserContext';
import QuoteItem from '../components/QuoteItem';

function SavingPlanner() {
  const [savings, setSavings] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const { locale } = React.useContext(LocaleContext);
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    const getData = async () => {
      const valueFromDb = await getAllSavings(user.uid);
      setSavings(valueFromDb);
      setLoading(false);
    };

    getData();
  }, [refresh]);

  const refreshCallback = () => {
    setRefresh(refresh + 1);
  };

  return (
    <section>
      <div className="container">
        <div className="row bg-saving-color my-5 mx-2">
          <div className="col-lg-6 col-sm-12 p-4 my-auto">
            <div className="row">
              <div className="saving-image__wrapper my-auto mx-auto col-lg-4 col-md-5 col-sm-12">
                <img src={savingCard} alt="icon-savings" className="saving-image" />
              </div>
              <div className="col-lg-8 col-md-7 col-sm-12 my-auto">
                <SavingBarCount savings={savings} loading={loading} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-4 my-auto">
            <QuoteItem />
          </div>
        </div>

        <div className="row mt-5 mb-5 mx-auto">
          <SavingPlan
            savings={savings}
            refresh={refreshCallback}
            loading={loading}
          />
        </div>
        <Link to="/add-saving-plan">
          <button type="button" aria-label="add savings" id="addButton" className="addButton button-animate" title={locale === 'en' ? 'Add Saving Plan' : 'Tambah Rencana Tabungan'}>
            <FiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SavingPlanner;
