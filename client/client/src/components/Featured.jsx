import React from 'react'

function Featured() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <div className="card" style={{ width: '200px', margin: '1rem', border: 'none' }}>
                    <img src="https://demo.evershop.io/assets/catalog/1034/3600/plv7632-Green-list.png" alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title" style={{ fontSize: '0.9rem',  overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>Nike air zoom pegasus 35</h2>
                        <p className="card-description" style={{ fontSize: '0.7rem' }}>$240</p>                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card" style={{ width: '200px', margin: '1rem', border: 'none' }}>
                    <img src="https://demo.evershop.io/assets/catalog/5059/3470/plv4547-Grey-list.png" alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title" style={{ fontSize: '0.9rem',  overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>Mix and match chuck taylor all star</h2>
                        <p className="card-description" style={{ fontSize: '0.7rem' }}>$240</p>                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card" style={{ width: '200px', margin: '1rem', border: 'none' }}>
                    <img src="https://demo.evershop.io/assets/catalog/4056/5908/plv3360-Black-list.png" alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title" style={{ fontSize: '0.9rem',  overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>Geography class chuck taylor all star</h2>
                        <p className="card-description" style={{ fontSize: '0.7rem' }}>$240</p>                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="card" style={{ width: '200px', margin: '1rem', border: 'none' }}>
                    <img src="https://demo.evershop.io/assets/catalog/3241/9300/plv1517-Pink-list.png" alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title" style={{ fontSize: '0.9rem',  overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '0.5rem' }}>Swift run x shoes</h2>
                        <p className="card-description" style={{ fontSize: '0.7rem' }}>$240</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
