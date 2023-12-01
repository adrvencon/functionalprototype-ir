import { useEffect, useState } from "react";

import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


const op1 =
    <tr key={"1"}>
        <td className="text-center">{"3/3/2023"}</td>
        <td className="text-center">{"John Doe"}</td>
        <td className="text-center">{"Gasoline"}</td>
        <td className="text-center">{"50 L"}</td>
        <td className="text-center">{"100 €"}</td>
    </tr>
const op2 =
<tr key={"2"}>
<td className="text-center">{"6/3/2023"}</td>
<td className="text-center">{"Jane Smith"}</td>
<td className="text-center">{"Gasoil"}</td>
<td className="text-center">{"80 L"}</td>
<td className="text-center">{"160 €"}</td>
</tr>
const op3 =
<tr key={"3"}>
        <td className="text-center">{"7/3/2003"}</td>
        <td className="text-center">{"Alphonse Davies"}</td>
        <td className="text-center">{"Gasoline"}</td>
        <td className="text-center">{"20 L"}</td>
        <td className="text-center">{"40 €"}</td>
    </tr>
const op4 =
<tr key={"4"}>
<td className="text-center">{"8/3/2003"}</td>
<td className="text-center">{"Harry Maguire"}</td>
<td className="text-center">{"Gasoil"}</td>
<td className="text-center">{"50 L"}</td>
<td className="text-center">{"100 €"}</td>
</tr>


function FuelOperations() {

    const itemsPerPage = 4; 
    const [currentPage, setCurrentPage] = useState(1);
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const [selectedRow, setSelectedRow] = useState(null);

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

    const handleRowClick = (rowId) => {
        navigate("" + rowId)    // Usar `` en vez de '' para que no se acumule la URL
        setSelectedRow(rowId);
    };


    const totalPages = Math.ceil(global.partnerList.length / itemsPerPage);


    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };



global.fuelOperationList.push(op1);
global.fuelOperationList.push(op2);
global.fuelOperationList.push(op3);
global.fuelOperationList.push(op4);


return (
    <div>
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '50px' }}>
                <h1 className="text-center">Fuel Operations</h1>
                

                <div className="button-container">
                    <div className="left-buttons">
                        <div className="search-bar-container">
                            <input type="text" placeholder="Search..." className="search-input" />
                            <button className="search-button">Search</button>
                        </div>
                    </div>
                    <div className="right-buttons">
                        <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to="/createProduct"> New Product </Button>
                    </div>
                </div>

                <div>
                    <Table aria-label="games" className={"mt-4 green-border-table"}>
                        <thead>
                            <tr>
                                <th width="10%" className="text-center">
                                    Date
                                </th>
                                <th width="20%" className="text-center">
                                    Partner
                                </th>
                                <th width="10%" className="text-center">
                                    Fuel Type
                                </th>
                                <th width="10%" className="text-center">
                                    Quantity
                                </th>
                                <th width="10%" className="text-center">
                                    Total Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {global.fuelOperationList.map((operation, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(index + 1)}
                                    style={{ backgroundColor: selectedRow === index + 1 ? '#e0e0e0' : 'transparent', cursor: 'pointer' }}
                                >
                                    {operation.props.children}
                                </tr>
                            ))}
                        </tbody>
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

export default FuelOperations;