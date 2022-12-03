import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import savingCard from '../assets/images/graph-monitor.png';
import SavingPlan from '../components/SavingPlan';
import SavingBarCount from '../components/SavingBarCount';
import LocaleContext from '../context/LocaleContext';
import getQuotes from '../utils/quotes';

function SavingPlanner() {
  const [quotes, setQuotes] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const data = await getQuotes();
      setQuotes(data);
      setLoading(false);
    }
    getData();
  }, []);

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
                <SavingBarCount />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-4 my-auto">
            {loading ? (
              <h4 className="placeholder-glow text-center">
                <span className="placeholder placeholder rounded w-100" />
                <span className="placeholder placeholder rounded w-75" />
                <span className="placeholder placeholder rounded w-50 mt-2" />
              </h4>
            )
              : (
                <>
                  <p className="text-center mx-auto">{quotes.quote}</p>
                  <p className="text-center mx-auto">
                    <b>{quotes.author}</b>
                  </p>
                </>
              )}
          </div>
        </div>

        <div className="row mt-5 mb-5 mx-auto">
          <SavingPlan />
        </div>
        <Link to="/add-saving-plan">
          <button type="button" aria-label="add savings" id="addButton" className="addButton" title={locale === 'en' ? 'Add Saving Plan' : 'Tambah Rencana Tabungan'}>
            <FiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SavingPlanner;
