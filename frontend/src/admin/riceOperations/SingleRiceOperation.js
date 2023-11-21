import React, { useState } from 'react';

export default function SingleRiceOperation() {
    const [partner, setPartner] = useState('');
    const [riceVariety, setRiceVariety] = useState('white');
    const [cargoWeight, setCargoWeight] = useState('');
    const [purity, setPurity] = useState('');
    const [humidity, setHumidity] = useState('');
    const [netMass, setNetMass] = useState('');
    const [vehicleWeight, setvehicleWeight] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', {
            partner,
            riceVariety,
            cargoWeight,
            purity,
            humidity,
            vehicleWeight,
            netMass,
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
        borderRadius: '4px',
        backgroundColor: 'white',
        flex: 1, // Take remaining width
    };


    return (
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                <h1>Rice Operation</h1>
                <h3>Details of operation with ID "1"</h3>

                <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Partner:</label>
                        <div style={valueBoxStyle}>John Doe</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Date:</label>
                        <div style={valueBoxStyle}> 03/03/2023</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Type:</label>
                        <div style={valueBoxStyle}>Deposit</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Variety:</label>
                        <div style={valueBoxStyle}>Brown</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Quantity:</label>
                        <div style={valueBoxStyle}>+ 500 kg</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Purity:</label>
                        <div style={valueBoxStyle}>90 %</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Humidity:</label>
                        <div style={valueBoxStyle}>5 %</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Variety:</label>
                        <div style={valueBoxStyle}>Brown</div>
                    </div>
                    <div style={totalRowStyle}>
                        <label style={labelStyle}>TOTAL:</label>
                        <div style={valueBoxStyle}> {(500) * (1 - 5 / 100) * (1 - (100 - 90) / 100)} kg </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
