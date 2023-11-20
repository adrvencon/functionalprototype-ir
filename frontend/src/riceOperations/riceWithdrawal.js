import React, { useState } from 'react';

export default function RiceWithdrawalForm() {
    const [partner, setPartner] = useState('');
    const [riceVariety, setRiceVariety] = useState('white');
    const [cargoWeight, setCargoWeight] = useState('');

    const handleFormSubmit = (e) => {

    };

    return (
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                <h1>New Rice Operation</h1>
                <h2>Rice Withdrawal</h2>

                <form onSubmit={handleFormSubmit} style={{ marginTop: '40px' }}>
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
                    Quantity (kg):
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={cargoWeight}
                                placeholder='200'
                                onChange={(e) => setCargoWeight(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Withdraw</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
