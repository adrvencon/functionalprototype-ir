import { useEffect, useState } from "react";

import { Button, ButtonGroup, Table } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";


const op1 =
    <tr key={"1"}>
        <td className="text-center">{"White Rice"}</td>
        <td className="text-center">{"Basmati Rice"}</td>
        <td className="text-center">{"10"}</td>
        <td className="text-center">{"30"}</td>
        <td className="text-center">{"15"}</td>
        <td className="text-center">{"150"}</td>
        <td className="text-center">{"300"}</td>
        <td className="text-center">{"150"}</td>
    </tr>
const op2 =
    <tr key={"1"}>
        <td className="text-center">{"Cardboard Boxes"}</td>
        <td className="text-center">{"Large Boxes"}</td>
        <td className="text-center">{"20"}</td>
        <td className="text-center">{"10"}</td>
        <td className="text-center">{"5"}</td>
        <td className="text-center">{"100"}</td>
        <td className="text-center">{"200"}</td>
        <td className="text-center">{"100"}</td>
    </tr>
const op3 =
<tr key={"1"}>
        <td className="text-center">{"Olive Oil"}</td>
        <td className="text-center">{"Extra Virgin Olive"}</td>
        <td className="text-center">{"5"}</td>
        <td className="text-center">{"100"}</td>
        <td className="text-center">{"50"}</td>
        <td className="text-center">{"250"}</td>
        <td className="text-center">{"500"}</td>
        <td className="text-center">{"250"}</td>
    </tr>
const op4 =
    <tr key={"1"}>
        <td className="text-center">{"Wine"}</td>
        <td className="text-center">{"Red Wine"}</td>
        <td className="text-center">{"12"}</td>
        <td className="text-center">{"40"}</td>
        <td className="text-center">{"20"}</td>
        <td className="text-center">{"240"}</td>
        <td className="text-center">{"480"}</td>
        <td className="text-center">{"240"}</td>
    </tr>
const op5 =
<tr key={"1"}>
<td className="text-center">{"Diesel"}</td>
<td className="text-center">{"Diesel fuel"}</td>
<td className="text-center">{"10"}</td>
<td className="text-center">{"30"}</td>
<td className="text-center">{"15"}</td>
<td className="text-center">{"150"}</td>
<td className="text-center">{"300"}</td>
<td className="text-center">{"150"}</td>
</tr>
const op6 =
<tr key={"1"}>
<td className="text-center">{"Lubricants"}</td>
<td className="text-center">{"Engine Oil"}</td>
<td className="text-center">{"10"}</td>
<td className="text-center">{"30"}</td>
<td className="text-center">{"15"}</td>
<td className="text-center">{"150"}</td>
<td className="text-center">{"300"}</td>
<td className="text-center">{"150"}</td>
</tr>
const op7 =
<tr key={"1"}>
<td className="text-center">{"Fertilizers"}</td>
<td className="text-center">{"Nitrogen fertilizers"}</td>
<td className="text-center">{"10"}</td>
<td className="text-center">{"30"}</td>
<td className="text-center">{"15"}</td>
<td className="text-center">{"150"}</td>
<td className="text-center">{"300"}</td>
<td className="text-center">{"150"}</td>
</tr>

function Products() {

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


    const totalPages = Math.ceil(global.partnerList.length / itemsPerPage);


    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };



global.productList.push(op1);
global.productList.push(op2);
global.productList.push(op3);
global.productList.push(op4);


return (
    <div>
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '50px' }}>
                <h1 className="text-center">Products</h1>
                

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
                                    Product Family
                                </th>
                                <th width="20%" className="text-center">
                                    Product Name
                                </th>
                                <th width="10%" className="text-center">
                                    Quantity
                                </th>
                                <th width="10%" className="text-center">
                                    Sell price per unit
                                </th>
                                <th width="10%" className="text-center">
                                    Buy price per unit
                                </th>
                                <th width="10%" className="text-center">
                                    Cost
                                </th>
                                <th width="10%" className="text-center">
                                    Estimated Sum
                                </th>
                                <th width="10%" className="text-center">
                                    Estimated benefits
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {global.productList.map((operation, index) => (
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

export default Products;