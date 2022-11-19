import React from "react";

const CategoryList = ({ data }) => {

// ini aku rencana pas user tekan category yg dia mau, nanti di class itu ketambah "active", di bootstrap itu fungsinya supaya pas org itu ngecek di dropdown dia tau yg mana yg dia tekan / pilih (karena di add Income Page dia tulisan category gabisa diubah)

// cuman aku daritadi mikir gimana ya caranya? add event listener gituka kalau di click? berarti harus ambil dari ID si category yg diclick kan ya? terus kita taru onCLick gitu ya? di anchor dalam Li ini?

// setelah itu baru rendernya di className pakai ternary? supaya yang clicked aja yang dikasi active yang ga di click gausa dikasi active wkwkwk cmfiw ya gaess

// nahh setelah active ditambahin dia tuh sekalian kirimin pilihan user ke state untuk di pakai buat ditampilin nanti di dashboard (nama ketegori yg dipilih), berarti aku bikin state baru di addIncomeForm.jsx kasi nama userCategoryChoise kali ya??? wkwkwk

  return (
    <li>
      <a className="dropdown-item" href="#">
        {data}
      </a>
    </li>
  );
};

export default CategoryList;
