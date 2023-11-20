import { useEffect, useState } from "react";
import tokenService from "../../services/token.service";
import getErrorModal from "../../util/getErrorModal";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link } from "react-router-dom";

export default function RiceOperations() {

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
            <td className="text-center">{"03/03/2023"}</td>
            <td className="text-center">{"John Doe"}</td>
            <td className="text-center">{"Brown"}</td>
            <td className="text-center">{"+ 500 kg"}</td>
            <td className="text-center">{"100 %"}</td>
            <td className="text-center">{"5 %"}</td>
        </tr>
    const op2 =
        <tr key={"2"}>
            <td className="text-center">{"06/03/2023"}</td>
            <td className="text-center">{"Jane Smith"}</td>
            <td className="text-center">{"White"}</td>
            <td className="text-center">{"+ 800 kg"}</td>
            <td className="text-center">{"90 %"}</td>
            <td className="text-center">{"25 %"}</td>
        </tr>
    const op3 =
        <tr key={"3"}>
            <td className="text-center">{"07/03/2023"}</td>
            <td className="text-center">{"Michael Johnson"}</td>
            <td className="text-center">{"Thin"}</td>
            <td className="text-center">{"- 200 kg"}</td>
            <td className="text-center">{ }</td>
            <td className="text-center">{ }</td>
        </tr>
    const op4 =
        <tr key={"4"}>
            <td className="text-center">{"07/03/2023"}</td>
            <td className="text-center">{"Emily Davis"}</td>
            <td className="text-center">{"White"}</td>
            <td className="text-center">{"+ 500 kg"}</td>
            <td className="text-center">{"100 %"}</td>
            <td className="text-center">{"15 %"}</td>
        </tr>
    const op5 =
        <tr key={"5"}>
            <td className="text-center">{"07/03/2023"}</td>
            <td className="text-center">{"David Wilson"}</td>
            <td className="text-center">{"White"}</td>
            <td className="text-center">{"- 300 kg"}</td>
            <td className="text-center">{ }</td>
            <td className="text-center">{ }</td>
        </tr>
    const op6 =
        <tr key={"6"}>
            <td className="text-center">{"07/03/2023"}</td>
            <td className="text-center">{"Susan Brown"}</td>
            <td className="text-center">{"Thin"}</td>
            <td className="text-center">{"+ 500 kg"}</td>
            <td className="text-center">{"100 %"}</td>
            <td className="text-center">{"15 %"}</td>
        </tr>
    const op7 =
        <tr key={"7"}>
            <td className="text-center">{"07/03/2023"}</td>
            <td className="text-center">{"Kevin Lee"}</td>
            <td className="text-center">{"Fat"}</td>
            <td className="text-center">{"+ 600 kg"}</td>
            <td className="text-center">{"100 %"}</td>
            <td className="text-center">{"10 %"}</td>
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
            <div className="auth-page-background-container">
                <div className="auth-page-container">
                    <h1 className="text-center">Rice Operations</h1>
                    {modal}

                    {/*<div style={opButtons}>
                        <Button color="success" className="button-with-plus newWithdrawal"> New Withdrawal </Button>
                        <Button color="success" className="button-with-plus newDeposit"> New Deposit </Button>
                    </div>

                    <div class="search-bar-container">
                        <input type="text" placeholder="Search..." class="search-input" />
                        <button class="search-button">Search</button>
                    </div>*/}
                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons">
                            <Button color="success" className="newWithdrawal">New Withdrawal</Button>
                            <Button color="success" className="newDeposit">New Deposit</Button>
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
                                        Partner
                                    </th>
                                    <th width="10%" className="text-center">
                                        Variety
                                    </th>
                                    <th width="10%" className="text-center">
                                        Quantity
                                    </th>
                                    <th width="10%" className="text-center">
                                        Purity
                                    </th>
                                    <th width="10%" className="text-center">
                                        Humidity
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

