import React from 'react';
import LocaleContext from '../context/LocaleContext';

function NotFoundPage() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <div className="container not-found d-flex flex-column justify-content-center">
      <div className="not-found__title">
        <h2 className="not-found__text fw-bold d-inline me-3">404</h2>
        <span className="not-found__animation" />
      </div>
      <h2 className="medium__font fw-bold d-block">{locale === 'en' ? 'Page Not Found' : 'Halaman Tidak Ditemukan'}</h2>
    </div>
  );
}

export default NotFoundPage;
