import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import getErrorModal from "../../util/getErrorModal";

function Vehicles() {

    const itemsPerPage = 10; // Cambiado a 10 elementos por página

        const [currentPage, setCurrentPage] = useState(1);
        const [message, setMessage] = useState(null);
        const [visible, setVisible] = useState(false);
        const navigate = useNavigate();
        const [selectedRow, setSelectedRow] = useState(null);

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


    const op1 =
        <tr key={"1"}>
            <td className="text-center">{"3/3/2023"}</td>
            <td className="text-center">{"John Doe"}</td>
            <td className="text-center">{"ABCD 123"}</td>
            <td className="text-center">{"2000 KG"}</td>
        </tr>
    const op2 =
        <tr key={"2"}>
            <td className="text-center">{"6/3/2023"}</td>
            <td className="text-center">{"Jane Smith"}</td>
            <td className="text-center">{"ACDF 345"}</td>
            <td className="text-center">{"1800 KG"}</td>
        </tr>
    const op3 =
        <tr key={"3"}>
            <td className="text-center">{"7/3/2023"}</td>
            <td className="text-center">{"Michael Johnson"}</td>
            <td className="text-center">{"TGDF 564"}</td>
            <td className="text-center">{"1200 KG"}</td>
        </tr>
    const op4 =
        <tr key={"4"}>
            <td className="text-center">{"8/3/2023"}</td>
            <td className="text-center">{"Emily Davis"}</td>
            <td className="text-center">{"CVGH 756"}</td>
            <td className="text-center">{"1500 KG"}</td>
        </tr>
    const op5 =
        <tr key={"5"}>
            <td className="text-center">{"17/3/2023"}</td>
            <td className="text-center">{"David Wilson"}</td>
            <td className="text-center">{"UTDN 583"}</td>
            <td className="text-center">{"1300 KG"}</td>
        </tr>
    const op6 =
        <tr key={"6"}>
            <td className="text-center">{"23/3/2023"}</td>
            <td className="text-center">{"Susan Brown"}</td>
            <td className="text-center">{"OIT 628"}</td>
            <td className="text-center">{"1100 KG"}</td>
        </tr>
    const op7 =
        <tr key={"7"}>
            <td className="text-center">{"3/4/2023"}</td>
            <td className="text-center">{"Kevin Lee"}</td>
            <td className="text-center">{"NSC 444"}</td>
            <td className="text-center">{"1600 KG"}</td>
        </tr>

    const operationsList = [op1, op2, op3, op4, op5, op6, op7];

        const totalPages = Math.ceil(operationsList.length / itemsPerPage);

        const nextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
        };


    return (
        <div>
            <div className="home-page-container">
                <div className="hero-div" style={{ padding: '40px', marginTop: '50px' }}>
                    <h1 className="text-center">Vehicles</h1>

                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons">
                            <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to="/dashboardMock"> New Vehicle </Button>
                        </div>
                    </div>

                    <div>
                        <Table aria-label="games" className={"mt-4 green-border-table"}>
                            <thead>
                                <tr>
                                    <th width="10%" className="text-center">
                                        Last Revision
                                    </th>
                                    <th width="20%" className="text-center">
                                        Owner
                                    </th>
                                    <th width="10%" className="text-center">
                                        License Plate
                                    </th>
                                    <th width="10%" className="text-center">
                                        Weight
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {operationsList.map((operation, index) => (
                                    <tr
                                        key={index}
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

export default Vehicles;