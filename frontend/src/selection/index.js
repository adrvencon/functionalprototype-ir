// ScreenSelection.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import RiceWarehouse from '../admin/riceWarehouse/RiceWarehouse';
import { MdOutlineWarehouse } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { SiProcessingfoundation } from "react-icons/si";
import { GoPackageDependents } from "react-icons/go";

function ScreenSelection() {
  return (
    <div className="home-page-container">
      <div className="buttons">
        <div className="button-row">
          <Link to="/employees" className="link-button"> <GrUserWorker /> Employees </Link>
          <Link to="/economics" className="link-button"> <MdOutlineAttachMoney /> Economics</Link>
          <Link to="/partners" className="link-button"><MdPeopleAlt /> Partners</Link>
          <Link to="/meetings" className="link-button"> <FaPeopleGroup /> Meetings</Link>
        </div>
        <div className="button-row">
          <Link to="/riceWarehouse" className="link-button"> <MdOutlineWarehouse /> Rice Warehouse</Link>
          <Link to="/vehicles" className="link-button"><FaTruck /> Vehicles</Link>
          <Link to="/procedures" className="link-button"><SiProcessingfoundation /> Procedures</Link>
          <Link to="/products" className="link-button"><GoPackageDependents /> Products</Link>
        </div>
      </div>

      <Routes>
        <Route path="/riceWarehouse" element={<RiceWarehouse />} />
      </Routes>
    </div>
  );
}

export default ScreenSelection;
