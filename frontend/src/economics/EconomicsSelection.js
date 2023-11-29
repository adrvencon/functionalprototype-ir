import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RiceWarehouse from '../admin/riceWarehouse/RiceWarehouse';
import { MdPeopleAlt, MdOutlineAttachMoney, MdOutlineWarehouse } from "react-icons/md";
import { FaFileInvoice, FaMoneyCheck, FaMoneyBillWave } from "react-icons/fa";


function EconomicsSelection() {
  return (
    <div className="home-page-container">
      <div className="buttons">
        <div className="button-row">
          <Link to="/invoices" className="link-button"> <FaFileInvoice /> Invoices </Link>
          <Link to="/moneySafes" className="link-button"> <MdOutlineAttachMoney /> Money Safes </Link>
        </div>
        <div className="button-row">
          <Link to="/accounts" className="link-button"> <FaMoneyCheck /> Accounting Accounts </Link>
          <Link to="/exploitationExpenses" className="link-button"><FaMoneyBillWave /> Exploitation Expenses </Link>
        </div>
      </div>
      <Routes>
        <Route path="/riceWarehouse" element={<RiceWarehouse />} />
      </Routes>
    </div>
  );
}

export default EconomicsSelection;
