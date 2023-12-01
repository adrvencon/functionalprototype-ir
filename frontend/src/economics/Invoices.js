import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const op1 =
    <tr key={"1"}>
        <td className="text-center">{"1"}</td>
        <td className="text-center">{"03/03/2023"}</td>
        <td className="text-center">{"José Almanza"}</td>
        <td className="text-center">{"M1234687Z"}</td>
        <td className="text-center">{"18015"}</td>
        <td className="text-center">{"J156226Z"}</td>
        <td className="text-center">{"10000"}</td>
        <td className="text-center">{"185 €"}</td>
        <td className="text-center">{"15 %"}</td>
        <td className="text-center">{"212.5 €"}</td>
        <td className="text-center">{"Whte Rice"}</td>
    </tr>
const op2 =
    <tr key={"2"}>
        <td className="text-center">{"2"}</td>
        <td className="text-center">{"05/03/2023"}</td>
        <td className="text-center">{"Vicente Cebolla"}</td>
        <td className="text-center">{"P4951513M"}</td>
        <td className="text-center">{"18001"}</td>
        <td className="text-center">{"J156226Z"}</td>
        <td className="text-center">{"10000"}</td>
        <td className="text-center">{"310 €"}</td>
        <td className="text-center">{"15 %"}</td>
        <td className="text-center">{"356.6 €"}</td>
        <td className="text-center">{"Cotton"}</td>
    </tr>
const op3 =
    <tr key={"3"}>
        <td className="text-center">{"3"}</td>
        <td className="text-center">{"08/03/2023"}</td>
        <td className="text-center">{"ABG"}</td>
        <td className="text-center">{"J156226Z"}</td>
        <td className="text-center">{"10000"}</td>
        <td className="text-center">{"M1234687Z"}</td>
        <td className="text-center">{"18015"}</td>
        <td className="text-center">{"1300 €"}</td>
        <td className="text-center">{"15 %"}</td>
        <td className="text-center">{"14495 €"}</td>
        <td className="text-center">{"Olive oil"}</td>
    </tr>
const op4 =
    <tr key={"4"}>
        <td className="text-center">{"4"}</td>
        <td className="text-center">{"08/03/2023"}</td>
        <td className="text-center">{"ALSAZA"}</td>
        <td className="text-center">{"N9448133L"}</td>
        <td className="text-center">{"21909"}</td>
        <td className="text-center">{"J156226Z"}</td>
        <td className="text-center">{"10000"}</td>
        <td className="text-center">{"5080 €"}</td>
        <td className="text-center">{"20 %"}</td>
        <td className="text-center">{"6096 €"}</td>
        <td className="text-center">{"Phitosanitary"}</td>
    </tr>

const operationsList = [op1, op2, op3, op4];


export default function Invoices() {

    const itemsPerPage = 10; // Cambiado a 10 elementos por página
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

    const totalPages = Math.ceil(operationsList.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div>
            <div className="home-page-container">
                <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                    <h1 className="text-center">Invoices</h1>

                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons2">
                            <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to="/riceWithdrawal">
                                Create New Invoice
                            </Button>
                        </div>
                    </div>


                    <div>
                        <Table aria-label="games" className={"mt-4 green-border-table"}>
                            <thead>
                                <tr>
                                    <th width="5%" className="text-center">
                                        ID
                                    </th>
                                    <th width="5%" className="text-center">
                                        Date
                                    </th>
                                    <th width="5%" className="text-center">
                                        Generator
                                    </th>
                                    <th width="5%" className="text-center">
                                        Generator NIF
                                    </th>
                                    <th width="5%" className="text-center">
                                        Generator acc.
                                    </th>
                                    <th width="5%" className="text-center">
                                        Recipient NIF
                                    </th>
                                    <th width="5%" className="text-center">
                                        Recipient acc.
                                    </th>
                                    <th width="10%" className="text-center">
                                        Base
                                    </th>
                                    <th width="5%" className="text-center">
                                        VAT
                                    </th>
                                    <th width="10%" className="text-center">
                                        Total
                                    </th>
                                    <th width="5%" className="text-center">
                                        Written Concept
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {operationsList.map((operation, index) => (
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

