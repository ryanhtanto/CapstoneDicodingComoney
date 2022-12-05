import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AddSavingForm from '../components/AddSavingsForm';
import LocaleContext from '../context/LocaleContext';

function AddSavingPlan() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <section>
      <div className="container">
        <div className="my-4">
          <h4>
            <Link to="/saving-planner" className="text-black text-decoration-none pedingBack medium__font">
              <FiArrowLeft className="warna fs-2" />
              {locale === 'en' ? 'Back to Savings Planner' : 'Kembali ke Perencana Tabungan'}
            </Link>
          </h4>
        </div>

        <div className="content">
          <h4 className="fw-bold medium__font">{locale === 'en' ? 'Savings money for better future' : 'Menabung untuk masa depan yang lebih baik'}</h4>
          <p className="small__font">{locale === 'en' ? 'Get your target by fill the information below' : 'Capai target Anda dengan mengisi informasi di bawah ini'}</p>
          <AddSavingForm />
        </div>
      </div>
    </section>
  );
}

export default AddSavingPlan;
