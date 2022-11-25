import React from "react";
import { FiCalendar, FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import savings from "../assets/images/saving-item.png";
import DeleteSavings from "./DeleteSavings";
import EditSavingButton from "./EditSavingButton";
import LocaleContext from "../context/LocaleContext";

function SavingPlanItem({ saving, onDelete }) {
  const nowDate = new Date(saving.data.currentDate);
  const targetDate = new Date(saving.data.targetDate);
  const Difference_In_Time = targetDate.getTime() - nowDate.getTime();
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const Difference_In_Month = Difference_In_Days / 30;

  const goalsDate = new Date(saving.data.targetDate);
  const date = goalsDate.toDateString();

  const [rupias, setRupias] = React.useState([]);
  const [roundedAmount, setRoundedAmount] = React.useState([]);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(function () {
    async function formatRupias() {
      let number_string = saving.data.amount.replace(/[^,\d]/g, "").toString();
      let split = number_string.split(",");
      let sisa = split[0].length % 3;
      let rupiah = split[0].substr(0, sisa);
      let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      setRupias(rupiah);
    }
    async function spendPerMonth() {
      const spend = saving.data.amount / Difference_In_Month;
      const rounded = Math.round(spend);

      let number_string = rounded.toString();
      let split = number_string.split(",");
      let sisa = split[0].length % 3;
      let rupiah = split[0].substr(0, sisa);
      let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        let separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }
      rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
      setRoundedAmount(rupiah);
    }
    formatRupias();
    spendPerMonth();
  }, []);

  return (
    <div className="card">
      <div className="d-flex">
        <div className="my-auto">
          <img src={savings} alt="icon-saving-item" className="saving-image-item" />
        </div>
        <div className="card-body">
          <h6 className="card-title fw-bold">{saving.data.savingsName}</h6>
          <span className="savings-planning p-2">Rp {rupias}</span>
          <h6 className="mt-2">
            <FiCalendar />
            <span className="mx-2">Target: {date}</span>
          </h6>
          <h6 className="mt-2">
            <FiCheckSquare />
            <span className="mx-2">{locale === "en" ? 'Save' : 'Tabung'} Rp {roundedAmount} / {locale === 'en' ? 'month' : 'bulan'}</span>
          </h6>
          <Link to={`/edit-saving-plan/${saving.id}`}>
            <EditSavingButton />
          </Link>
          <DeleteSavings id={saving.id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default SavingPlanItem;
