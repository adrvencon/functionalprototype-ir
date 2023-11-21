// ScreenSelection.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import RiceOperations from '../admin/riceOperations/RiceOperations';
import { MdOutlineWarehouse } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { SiProcessingfoundation } from "react-icons/si";
import { GoPackageDependents } from "react-icons/go";
import { FaBowlRice } from "react-icons/fa6";
import { GiFertilizerBag } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
function OperationSelection() {
  return (
    <div className="home-page-container">
      <div className="buttons">
        <div className="button-row">
          <Link to="/riceOperations" className="link-button"><FaBowlRice /> Rice </Link>
          <Link to="/products" className="link-button"> <GiFertilizerBag /> Products</Link>
          <Link to="/fuel" className="link-button"><BsFillFuelPumpFill /> Fuel</Link>
          <Link to="/shareCapital" className="link-button"> <CiMoneyCheck1 /> Share Capital</Link>
        </div>
      </div>

      <Routes>
      <Route path="/riceOperations" element={<RiceOperations/>} />
      </Routes>
    </div>
  );
}

export default OperationSelection;