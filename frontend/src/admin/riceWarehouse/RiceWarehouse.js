import { useEffect, useState } from "react";
import tokenService from "../../services/token.service";
import getErrorModal from "../../util/getErrorModal";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link } from "react-router-dom";

function RiceWarehouse() {

const itemsPerPage = 10; // Cambiado a 10 elementos por página
const [currentPage, setCurrentPage] = useState(1);
const [message, setMessage] = useState(null);
const [visible, setVisible] = useState(false);

const indexOfLastGame = currentPage * itemsPerPage;
const indexOfFirstGame = indexOfLastGame - itemsPerPage;



const prevPage = () => {
    if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
    }
};


const paginationStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
};

const paginationText = {
    marginRight: '10px',
};

const opButtons = {
    display: 'grid',
    gridTemplateColumns: '1fr', // Two columns with equal width
    gap: '10px', // Adjust the gap as needed for separation
    justifyContent: 'flex-end', // Align to the right
    marginTop: '10px',
    marginLeft: '400px'
};



const op1 =
    <tr key={"1"}>
        <td className="text-center">{"Basmati Rice"}</td>
        <td className="text-center">{"Golden Harvest Foods"}</td>
        <td className="text-center">{"1000 kg"}</td>
        <td className="text-center">{"25 euro/kg"}</td>
        <td className="text-center">{"Warehouse A"}</td>
    </tr>
const op2 =
    <tr key={"2"}>
        <td className="text-center">{"Long Grain Rice"}</td>
        <td className="text-center">{"Amber Grain Co."}</td>
        <td className="text-center">{"800 kg"}</td>
        <td className="text-center">{"20 euro/kg"}</td>
        <td className="text-center">{"Warehouse B"}</td>
    </tr>
const op3 =
    <tr key={"3"}>
        <td className="text-center">{"Jasmine Rice"}</td>
        <td className="text-center">{"Sunny Fields Inc"}</td>
        <td className="text-center">{"1200 kg"}</td>
        <td className="text-center">{"30 euro/kg"}</td>
        <td className="text-center">{"Warehouse C"}</td>
    </tr>
const op4 =
    <tr key={"4"}>
        <td className="text-center">{"Arborio Rice"}</td>
        <td className="text-center">{"Majestic Rice Imports"}</td>
        <td className="text-center">{"500 kg"}</td>
        <td className="text-center">{"40 euro/kg"}</td>
        <td className="text-center">{"Warehouse D"}</td>
    </tr>
const op5 =
    <tr key={"5"}>
        <td className="text-center">{"Brown Rice"}</td>
        <td className="text-center">{"Whole Harvest Co."}</td>
        <td className="text-center">{"900 kg"}</td>
        <td className="text-center">{"22 euro/kg"}</td>
        <td className="text-center">{"Warehouse E"}</td>
    </tr>
const op6 =
    <tr key={"6"}>
        <td className="text-center">{"Parboiled Rice"}</td>
        <td className="text-center">{"Pure Essence Foods"}</td>
        <td className="text-center">{"1100 kg"}</td>
        <td className="text-center">{"28 euro/kg"}</td>
        <td className="text-center">{"Warehouse F"}</td>
    </tr>
const op7 =
    <tr key={"7"}>
        <td className="text-center">{"Sushi Rice"}</td>
        <td className="text-center">{"Sushi Delight"}</td>
        <td className="text-center">{"600 kg"}</td>
        <td className="text-center">{"35 euro/kg"}</td>
        <td className="text-center">{"Warehouse G"}</td>
    </tr>

const operationsList = [op1, op2, op3, op4, op5, op6, op7];

const totalPages = Math.ceil(operationsList.length / itemsPerPage);

const nextPage = () => {
    if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
    }
};

const modal = getErrorModal(setVisible, visible, message);

return (
    <div>
        <div className="home-page-container">
            <div className="auth-page-container">
                <h1 className="text-center">Rice Warehouses</h1>
                {modal}
                <div className="button-container">
                    <div className="left-buttons">
                        <div className="search-bar-container">
                            <input type="text" placeholder="Search..." className="search-input" />
                            <button className="search-button">Search</button>
                        </div>
                    </div>
                    <div className="right-buttons">
                        <Button color="success" className="newWithdrawal">New Variety</Button>
                    </div>
                </div>

                <div>
                    <Table aria-label="games" className={"mt-4 green-border-table"}>
                        <thead>
                            <tr>
                                <th width="10%" className="text-center">
                                    Name
                                </th>
                                <th width="50%" className="text-center">
                                    Industry
                                </th>
                                <th width="10%" className="text-center">
                                    KG
                                </th>
                                <th width="10%" className="text-center">
                                    Price per KG
                                </th>
                                <th width="10%" className="text-center">
                                    Location
                                </th>
                            </tr>
                        </thead>
                        <tbody>{operationsList}</tbody>
                    </Table>
                    <div style={paginationStyle}>
                        <div style={paginationText}>
                            <p>Page {currentPage} of {totalPages}</p>
                        </div>
                        <div className="pagination-buttons">
                            <Button onClick={prevPage} disabled={currentPage === 1}>
                                Previous
                            </Button>
                            <Button onClick={nextPage} disabled={currentPage === totalPages}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default RiceWarehouse;