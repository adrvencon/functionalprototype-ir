import { useEffect, useState } from "react";
//import getErrorModal from "../../util/getErrorModal";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Partners() {

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



    const op1 =
        <tr key={"1"}>
            <td className="text-center">{"John Doe"}</td>
            <td className="text-center">{"12345678A"}</td>
            <td className="text-center">{"625343519"}</td>
            <td className="text-center">{"Doe@gmail.com"}</td>
            <td className="text-center">{"1465 0100 72 2030876293"}</td>
            <td className="text-center">{"7500"}</td>
            <td className="text-center">{"Active"}</td>
        </tr>
    const op2 =
        <tr key={"2"}>
            <td className="text-center">{"Jane Smith"}</td>
            <td className="text-center">{"12345678B"}</td>
            <td className="text-center">{"625343537"}</td>
            <td className="text-center">{"Smith@gmail.com"}</td>
            <td className="text-center">{" 1465 0100 72 2030876294"}</td>
            <td className="text-center">{"5000"}</td>
            <td className="text-center">{"Active"}</td>
        </tr>
    const op3 =
        <tr key={"3"}>
            <td className="text-center">{"Michael Johnson"}</td>
            <td className="text-center">{"12345678C"}</td>
            <td className="text-center">{"625343350"}</td>
            <td className="text-center">{"Mike@gmail.com"}</td>
            <td className="text-center">{ "1465 0100 72 2030876295"}</td>
            <td className="text-center">{ "4000"}</td>
            <td className="text-center">{"Inactive"}</td>
        </tr>
    const op4 =
        <tr key={"4"}>
            <td className="text-center">{"Emily Davis"}</td>
            <td className="text-center">{"12345678D"}</td>
            <td className="text-center">{"625347246"}</td>
            <td className="text-center">{"Davis@gmail.com"}</td>
            <td className="text-center">{"1465 0100 72 20308762936"}</td>
            <td className="text-center">{"8400"}</td>
            <td className="text-center">{"Active"}</td>
        </tr>
    const op5 =
        <tr key={"5"}>
            <td className="text-center">{"David Wilson"}</td>
            <td className="text-center">{"12345678E"}</td>
            <td className="text-center">{"625374892"}</td>
            <td className="text-center">{"Wilson@gmail.com"}</td>
            <td className="text-center">{ "1465 0100 72 2030876297"}</td>
            <td className="text-center">{ "4600"}</td>
            <td className="text-center">{"Active"}</td>
        </tr>
    const op6 =
        <tr key={"6"}>
            <td className="text-center">{"Susan Brown"}</td>
            <td className="text-center">{"12345678F"}</td>
            <td className="text-center">{"625343511"}</td>
            <td className="text-center">{"Brown@gmail.com"}</td>
            <td className="text-center">{"1465 0100 72 2030876298"}</td>
            <td className="text-center">{"2345"}</td>
            <td className="text-center">{"Inactive"}</td>
        </tr>


    const operationsList = [op1, op2, op3, op4, op5, op6];

    const totalPages = Math.ceil(operationsList.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    //const modal = getErrorModal(setVisible, visible, message);

    return (
        <div>
            <div className="home-page-container">
                <div className="hero-div" style={{ padding: '20px', marginTop: '30px', width: '60%' }}>
                    <h1 className="text-center">Partners</h1>
                    

                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons">
                        <Button color="success" className="button-with-plus newDeposit" tag={Link} to="/meeting"> See Meeting </Button>
                            <Button color="success" className="button-with-plus newDeposit" tag={Link} to="/createPartner"> New Partner </Button>
                        </div>
                    </div>

                    <div>
                        <Table aria-label="games" className={"mt-4 green-border-table"}>
                            <thead>
                                <tr>
                                    <th width="10%" className="text-center">
                                        Name
                                    </th>
                                    <th width="10%" className="text-center">
                                        ID/NIF
                                    </th>
                                    <th width="10%" className="text-center">
                                        Phone
                                    </th>
                                    <th width="10%" className="text-center">
                                        Email
                                    </th>
                                    <th width="10%" className="text-center">
                                        IBAN1
                                    </th>
                                    <th width="10%" className="text-center">
                                        Social Capital
                                    </th>
                                    <th width="10%" className="text-center">
                                        Council
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

