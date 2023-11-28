import React, { useState } from 'react';
import { Button } from 'react';

export default function RiceDepositForm() {
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
        const op =
            <tr key={"7"}>
                <td className="text-center">{"29/11/2023"}</td>
                <td className="text-center">{partner}</td>
                <td className="text-center">{riceVariety}</td>
                <td className="text-center">{"+ " + (cargoWeight - vehicleWeight) * (1 - humidity / 100) * (1 - (100 - purity) / 100) + " kg"}</td>
                <td className="text-center">{purity}</td>
                <td className="text-center">{humidity}</td>
            </tr>
        global.operationsList.unshift(op);
        window.history.back();
        console.log(global.operationsList);
    };

    const linkStyle = {
        color: '#4F200D',
    };

    return (
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                <h1>New Rice Operation</h1>
                <h2>Rice Deposit</h2>

                <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        Partner:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={partner}
                                placeholder='Manolo'
                                onChange={(e) => setPartner(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Rice Variety:
                        <label style={{ marginLeft: '10px' }}>
                            <select
                                value={riceVariety}
                                onChange={(e) => setRiceVariety(e.target.value)}
                            >
                                <option value="white">White</option>
                                <option value="brown">Brown</option>
                            </select>
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Cargo Weight (kg):
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={cargoWeight}
                                placeholder='200'
                                onChange={(e) => setCargoWeight(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Vehicle Weight (kg):
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={vehicleWeight}
                                placeholder='2000'
                                onChange={(e) => setvehicleWeight(e.target.value)}
                            />
                        </label>
                    </div>
                    {/* Renglón 6: Net Mass (Calculado automáticamente) */}
                    <div style={{ marginBottom: '5px' }}>
                        Purity (%):
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={purity}
                                placeholder='90'
                                onChange={(e) => setPurity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Humidity (%):
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={humidity}
                                placeholder='10'
                                onChange={(e) => setHumidity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ marginRight: '10px' }}>
                            Net Mass:
                        </label>
                        <span style={{ color: '#4F200D', fontWeight: 'bold' }}>{(cargoWeight - vehicleWeight) * (1 - humidity / 100) * (1 - (100 - purity) / 100)}</span>
                    </div>
                    <button type="button" onClick={handleFormSubmit}>
                        Deposit
                    </button>
                </form>
            </div>
        </div>
    );
}
