import React from 'react';
import getQuotes from '../utils/quotes';

function Quote() {
  const [quotes, setQuotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      const data = await getQuotes();
      setQuotes(data);
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return (
      <h4 className="placeholder-glow text-center">
        <span className="placeholder placeholder rounded w-100" />
        <span className="placeholder placeholder rounded w-75" />
        <span className="placeholder placeholder rounded w-50 mt-2" />
      </h4>
    );
  }

  return (
    <>
      <p className="text-center mx-auto">{quotes.quote}</p>
      <p className="text-center mx-auto">
        <b>{quotes.author}</b>
      </p>
    </>
  );
}

export default Quote;
