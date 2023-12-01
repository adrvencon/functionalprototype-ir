import React, { useState } from 'react';
import { Button } from "reactstrap";

export default function SingleProduct() {
    const [name, setName] = useState('');
    const [pName, setPName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sellPriceU, setSellPriceU] = useState('');
    const [buyPriceU, setBuyPriceU] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', {
            name,
            pName,
            quantity,
            sellPriceU,
            buyPriceU,
           
        });
        // Aquí puedes manejar la lógica para enviar los datos a la API o hacer lo que sea necesario con ellos
    };

    const rowStyle = {
        display: 'flex',
        marginBottom: '10px',
    };

    const totalRowStyle = {
        fontWeight: 'bold',
        display: 'flex',
        marginBottom: '10px',
        color: '#4F200D',
    }

    const labelStyle = {
        fontWeight: 'bold',
        marginRight: '5px',
        minWidth: '80px', // Adjust the minimum width for labels
    };

    const valueBoxStyle = {
        border: '1px solid #ccc',
        padding: '5px 10px', // Adjust padding for a slimmer box
        borderRadius: '3px',
        backgroundColor: 'white',
        flex: 1, // Take remaining width
    };


    return (
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '10px', marginTop: '10px' }}>
                <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                    <div style={rowStyle}>
                        <label style={labelStyle}> Product Family:</label>
                        <div style={valueBoxStyle}>White Rice</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Product Name:</label>
                        <div style={valueBoxStyle}>Basmati Rice</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Quantity:</label>
                        <div style={valueBoxStyle}>10</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Sell Price per Unit:</label>
                        <div style={valueBoxStyle}>30</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Buy Price Per Unit:</label>
                        <div style={valueBoxStyle}>15</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Cost:</label>
                        <div style={valueBoxStyle}>150</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Estimated Sum:</label>
                        <div style={valueBoxStyle}>300</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Estimated Benefits:</label>
                        <div style={valueBoxStyle}>150</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
