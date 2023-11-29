import React, { useState } from 'react';
import { Button } from "reactstrap";

export default function SinglePartner() {
    const [name, setName] = useState('');
    const [nif, setNif] = useState('');
    const [date, setDate] = useState('');
    const [street, setStreet] = useState('');
    const [streetNum, setStreetNum] = useState('');
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState('');
    const [iban1, setIban1] = useState('');
    const [iban2, setIban2] = useState('');
    const [admision, setAdmision] = useState('');
    const [departure, setDeparture] = useState('');
    const [hectares, setHectares] = useState('');
    const [socialCap, setSocialCap] = useState('');
    const [council, setCouncil] = useState(true);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', {
            name,
            nif,
            date,
            street,
            streetNum,
            phone,
            email,
            iban1,
            iban2,
            admision,
            departure,
            hectares,
            socialCap,
            council
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
                <h3>John Doe</h3>


                <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Name:</label>
                        <div style={valueBoxStyle}>John Doe</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>ID/NIF:</label>
                        <div style={valueBoxStyle}>12345678A</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Birth Date:</label>
                        <div style={valueBoxStyle}>03-04-01</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Street:</label>
                        <div style={valueBoxStyle}>Avd Isadora Duncan</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Street Number:</label>
                        <div style={valueBoxStyle}>1º 1-1</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Phone:</label>
                        <div style={valueBoxStyle}>625 34 35 19</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Email:</label>
                        <div style={valueBoxStyle}>Doe@gmail.com</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>IBAN 1:</label>
                        <div style={valueBoxStyle}>1465 0100 72 2030876293</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>IBAN 2:</label>
                        <div style={valueBoxStyle}> </div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Admision Date:</label>
                        <div style={valueBoxStyle}>12-05-20</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Departure Date:</label>
                        <div style={valueBoxStyle}> </div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Hectares:</label>
                        <div style={valueBoxStyle}>35</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Social Captital:</label>
                        <div style={valueBoxStyle}>7500</div>
                    </div>
                    <div style={rowStyle}>
                        <label style={labelStyle}>Council State:</label>
                        <div style={valueBoxStyle}>Active</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
