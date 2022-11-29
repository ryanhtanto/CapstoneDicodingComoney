import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import axios from 'axios';
import images from '../assets/books.png';
import SavingPlan from '../components/SavingPlan';
import SavingBarCount from '../components/SavingBarCount';
import LocaleContext from '../context/LocaleContext';
import SavingPlanItemLoading from '../components/SavingPlanItemLoading';

function SavingPlanner() {
  const [quotes, setQuotes] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getQuotes() {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=money', {
        headers: {
          'X-Api-Key': '23BDtggAeCK4iKtwod18LQ==y3mSSV3gUoa0l8GJ',
        },
      });
      setQuotes(response.data[0]);
      setLoading(false);
    }
    getQuotes();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row bg-saving-color mt-5 mb-5 mx-auto">
          <div className="col-lg-6 col-sm-12 p-3">
            <div className="d-flex">
              <div className="saving-image__wrapper">
                <img src={images} alt="icon-savings" className="saving-image" />
              </div>
              <SavingBarCount />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 px-4 my-auto">
            <p className={loading ? 'placeholder rounded w-100' : 'text-center mx-auto'}>{quotes.quote}</p>
            <p className={loading ? 'placeholder rounded w-100' : 'text-center mx-auto'}>
              <b>{quotes.author}</b>
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5 mx-auto">
          {loading ? <SavingPlanItemLoading /> : <SavingPlan />}
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
