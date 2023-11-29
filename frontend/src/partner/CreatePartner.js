import React, { useState } from 'react';

export default function CreatePartner() {
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
        const op =
        <tr key={"1"}>
            <td className="text-center">{name}</td>
            <td className="text-center">{nif}</td>
            <td className="text-center">{phone}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{iban1}</td>
            <td className="text-center">{socialCap}</td>
            <td className="text-center">{council}</td>
        </tr>
        global.partnerList.unshift(op);
        window.history.back();
    };

    const linkStyle = {
        color: '#4F200D',
    };

    return (
        <div className="home-page-container">
            <div className="hero-div" style={{ padding: '40px', marginTop: '40px' }}>
                <h1>New Partner</h1>
                <h2>Partner Data</h2>

                <form onSubmit={handleFormSubmit} style={{ marginTop: '30px' }}>
                    <div style={{ marginBottom: '5px' }}>
                        Name:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={name}
                                placeholder='Manolo'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        ID/NIF:
                        <label style={{ marginLeft: '10px' }}>
                        <input
                                type="text"
                                value={nif}
                                placeholder='ID/NIF'
                                onChange={(e) => setNif(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Date of birth:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={date}
                                placeholder='Date'
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Street:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={street}
                                placeholder='Avd Borbolla'
                                onChange={(e) => setStreet(e.target.value)}
                            />
                        </label>
                    </div>
                    {/* Renglón 6: Net Mass (Calculado automáticamente) */}
                    <div style={{ marginBottom: '5px' }}>
                        StreetNum:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={streetNum}
                                placeholder='1º 1-3'
                                onChange={(e) => setStreetNum(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Phone:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={phone}
                                placeholder='632440044'
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Email:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={email}
                                placeholder='example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        IBAN1:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={iban1}
                                placeholder='IBAN'
                                onChange={(e) => setIban1(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        IBAN2:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={iban2}
                                placeholder='IBAN2 (optional)'
                                onChange={(e) => setIban2(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Admision Date:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={admision}
                                placeholder='dd-mm-yy'
                                onChange={(e) => setAdmision(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Departure Date:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="text"
                                value={departure}
                                placeholder='dd-mm-yy'
                                onChange={(e) => setDeparture(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Hectares:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={hectares}
                                placeholder='30'
                                onChange={(e) => setHectares(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Social Capital:
                        <label style={{ marginLeft: '10px' }}>
                            <input
                                type="number"
                                value={socialCap}
                                placeholder='5000'
                                onChange={(e) => setSocialCap(e.target.value)}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        Council State:
                        <label style={{ marginLeft: '10px' }}>
                            <select
                                value={council}
                                onChange={(e) => setCouncil(e.target.value)}
                            >
                                <option value='true'>Active</option>
                                <option value="false">Inactive</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
