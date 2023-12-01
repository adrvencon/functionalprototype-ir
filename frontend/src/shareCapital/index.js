import { useEffect, useState } from "react";

import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


const op1 =
    <tr key={"1"}>
        <td className="text-center">{"Bruno Fernandes"}</td>
        <td className="text-center">{"Martin Odegaard"}</td>
        <td className="text-center">{"50"}</td>
        <td className="text-center">{"2023-01-15"}</td>
        <td className="text-center">{"50000"}</td>
        <td className="text-center">{""}</td>
        <td className="text-center">{"50000"}</td>
        <td className="text-center">{"No comment"}</td>
    </tr>
const op2 =
<tr key={"2"}>
<td className="text-center">{"Duván Zapata"}</td>
        <td className="text-center">{"James Maddison"}</td>
        <td className="text-center">{"30"}</td>
        <td className="text-center">{"2023-02-20"}</td>
        <td className="text-center">{"30000"}</td>
        <td className="text-center">{""}</td>
        <td className="text-center">{"30000"}</td>
        <td className="text-center">{"No comment"}</td>
</tr>
const op3 =
<tr key={"3"}>
<td className="text-center">{"Michail Antonio"}</td>
        <td className="text-center">{"Anthony Gordon"}</td>
        <td className="text-center">{"40"}</td>
        <td className="text-center">{"2023-03-25"}</td>
        <td className="text-center">{"40000"}</td>
        <td className="text-center">{""}</td>
        <td className="text-center">{"40000"}</td>
        <td className="text-center">{"No comment"}</td>
    </tr>
const op4 =
<tr key={"4"}>
<td className="text-center">{"Robert Sánchez"}</td>
        <td className="text-center">{"Marcos Alonso"}</td>
        <td className="text-center">{"20"}</td>
        <td className="text-center">{"2023-04-15"}</td>
        <td className="text-center">{"20000"}</td>
        <td className="text-center">{""}</td>
        <td className="text-center">{"20000"}</td>
        <td className="text-center">{"No comment"}</td>
</tr>


function ShareCapitalOperations() {

    const itemsPerPage = 6; // Cambiado a 10 elementos por página
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


    const totalPages = Math.ceil(global.shareCapitalList.length / itemsPerPage);


    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };



global.shareCapitalList.push(op1);
global.shareCapitalList.push(op2);
global.shareCapitalList.push(op3);
global.shareCapitalList.push(op4);


return (
    <div>
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '50px' }}>
                <h1 className="text-center">Share Capital Operations</h1>
                

                <div className="button-container">
                    <div className="left-buttons">
                        <div className="search-bar-container">
                            <input type="text" placeholder="Search..." className="search-input" />
                            <button className="search-button">Search</button>
                        </div>
                    </div>
                    <div className="right-buttons">
                        <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to=""> New Operation </Button>
                    </div>
                </div>

                <div>
                    <Table aria-label="games" className={"mt-4 green-border-table"}>
                        <thead>
                            <tr>
                                <th width="10%" className="text-center">
                                    Partner 1
                                </th>
                                <th width="20%" className="text-center">
                                    Partner 2
                                </th>
                                <th width="10%" className="text-center">
                                    Hectares
                                </th>
                                <th width="10%" className="text-center">
                                    Date
                                </th>
                                <th width="10%" className="text-center">
                                    Debe
                                </th>
                                <th width="10%" className="text-center">
                                    Haber
                                </th>
                                <th width="10%" className="text-center">
                                    Total
                                </th>
                                <th width="10%" className="text-center">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {global.shareCapitalList.map((operation, index) => (
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

export default ShareCapitalOperations;