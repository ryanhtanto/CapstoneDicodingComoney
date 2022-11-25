import React from "react";
import images from "../assets/books.png";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import SavingPlan from "../components/SavingPlan";
import SavingBarCount from "../components/SavingBarCount";
import axios from "axios";
import LocaleContext from "../context/LocaleContext";

function SavingPlanner() {
  const [quotes, setQuotes] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(function () {
    async function getQuotes() {
      let current = Math.floor(Math.random() * 1000);
      let response = await axios.get("https://type.fit/api/quotes");
      setQuotes(response.data[current]);
    }

    getQuotes();
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row bg-saving-color p-4 mt-5 mb-5 w-75 mx-auto">
          <div className="col-sm-6 px-4">
            <div className="d-flex">
              <img src={images} alt="icon-savings" className="saving-image" />
              <SavingBarCount />
            </div>
          </div>
          <div className="col-sm-6 px-4 my-auto">
            <p className="text-center mx-auto">
              {quotes.text} - <b>{quotes.author}</b>
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-5 w-75 mx-auto">
          <SavingPlan />
        </div>
        <Link to={`/add-saving-plan`}>
          <button aria-label="add savings" id="addButton" className="addButton" title={locale === "en" ? "Add Saving Plan" : "Tambah Rencana Tabungan"}>
            <FiPlus />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SavingPlanner;
