import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const op1 =
    <tr key={"3"}>
        <td className="text-center">{"01/03/2023"}</td>
        <td className="text-center">{"Islas Caimán"}</td>
        <td className="text-center">{"8"}</td>
        <td className="text-center">{"30 min"}</td>
        <td className="text-center">{"Tax evasion"}</td>
    </tr>
const op2 =
<tr key={"3"}>
    <td className="text-center">{"02/03/2023"}</td>
    <td className="text-center">{"Andorra"}</td>
    <td className="text-center">{"5"}</td>
    <td className="text-center">{"2h"}</td>
    <td className="text-center">{"Money Laundering"}</td>
</tr>
const op3 =
    <tr key={"3"}>
        <td className="text-center">{"07/03/2023"}</td>
        <td className="text-center">{"Seville"}</td>
        <td className="text-center">{"10"}</td>
        <td className="text-center">{"1h"}</td>
        <td className="text-center">{"Dry season"}</td>
    </tr>
const meetingsList = [op1,op2,op3];
export default function Meetings() {

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

    const totalPages = Math.ceil(meetingsList.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <div className="home-page-container">
                <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                    <h1 className="text-center">Meetings</h1>

                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons">
                            <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to="/"> Start Meeting </Button>
                            <Button color="success" className="button-with-plus newDeposit" tag={Link} to="/"> Register Meeting </Button>
                        </div>
                    </div>

                    <div>
                        <Table aria-label="games" className={"mt-4 green-border-table"}>
                            <thead>
                                <tr>
                                    <th width="10%" className="text-center">
                                        Date
                                    </th>
                                    <th width="50%" className="text-center">
                                        Location
                                    </th>
                                    <th width="10%" className="text-center">
                                        Participants
                                    </th>
                                    <th width="10%" className="text-center">
                                        Duration
                                    </th>
                                    <th width="10%" className="text-center">
                                        Agenda
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {meetingsList.map((operation, index) => (
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

