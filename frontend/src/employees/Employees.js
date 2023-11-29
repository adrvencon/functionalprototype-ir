import { useEffect, useState } from "react";
import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Employees() {

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
            <td className="text-center">{"1"}</td>
            <td className="text-center">{"John Smith"}</td>
            <td className="text-center">{"Accountant"}</td>
            <td className="text-center">{"75000"}</td>
            <td className="text-center">{"60000"}</td>
            <td className="text-center">{"Fixed"}</td>
        </tr>
    const op2 =
        <tr key={"2"}>
            <td className="text-center">{"2"}</td>
            <td className="text-center">{"Emily Johnson"}</td>
            <td className="text-center">{"Human Resources"}</td>
            <td className="text-center">{"65000"}</td>
            <td className="text-center">{"52000"}</td>
            <td className="text-center">{"Not Fixed"}</td>
        </tr>
    const op3 =
        <tr key={"3"}>
            <td className="text-center">{"3"}</td>
            <td className="text-center">{"Marketing Specialist"}</td>
            <td className="text-center">{"TGDF 564"}</td>
            <td className="text-center">{"80000"}</td>
            <td className="text-center">{"64000"}</td>
            <td className="text-center">{"Fixed"}</td>
        </tr>
    const op4 =
        <tr key={"4"}>
            <td className="text-center">{"4"}</td>
            <td className="text-center">{"Sarah Miller"}</td>
            <td className="text-center">{"Administrative Asst"}</td>
            <td className="text-center">{"55000"}</td>
            <td className="text-center">{"44000"}</td>
            <td className="text-center">{"Not Fixed"}</td>
        </tr>
    const op5 =
        <tr key={"5"}>
            <td className="text-center">{"5"}</td>
            <td className="text-center">{"Kevin White"}</td>
            <td className="text-center">{"IT Support"}</td>
            <td className="text-center">{"70000"}</td>
            <td className="text-center">{"56000"}</td>
            <td className="text-center">{"Fixed"}</td>
        </tr>
    const op6 =
        <tr key={"6"}>
            <td className="text-center">{"6"}</td>
            <td className="text-center">{"Laura Brown"}</td>
            <td className="text-center">{"Executive Assistant"}</td>
            <td className="text-center">{"75000"}</td>
            <td className="text-center">{"60000"}</td>
            <td className="text-center">{"Fixed"}</td>
        </tr>

    const operationsList = [op1, op2, op3, op4, op5, op6];

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
                    <h1 className="text-center">Employees</h1>

                    <div className="button-container">
                        <div className="left-buttons">
                            <div className="search-bar-container">
                                <input type="text" placeholder="Search..." className="search-input" />
                                <button className="search-button">Search</button>
                            </div>
                        </div>
                        <div className="right-buttons">
                            <Button color="success" className="button-with-plus newWithdrawal" tag={Link} to="/dashboardMock"> New Employee </Button>
                        </div>
                    </div>

                    <div>
                        <Table aria-label="games" className={"mt-4 green-border-table"}>
                            <thead>
                                <tr>
                                    <th width="10%" className="text-center">
                                        Identifier
                                    </th>
                                    <th width="20%" className="text-center">
                                        Name
                                    </th>
                                    <th width="10%" className="text-center">
                                        Profession
                                    </th>
                                    <th width="10%" className="text-center">
                                        Gross Income
                                    </th>
                                    <th width="10%" className="text-center">
                                        Net Income
                                    </th>
                                    <th width="10%" className="text-center">
                                        Employment Status
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

export default Employees;