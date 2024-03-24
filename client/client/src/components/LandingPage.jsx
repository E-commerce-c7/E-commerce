import React from 'react'


function LandingPage() {
  return (
    <div style={{ backgroundImage: `url('https://i.ibb.co/b1zbnqp/Screen-Shot-2024-03-17-at-12-29-31.png')`, height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-5">Discount 20% For All Orders Over $500</h1>
        <p className="text-xl">Use coupon code DISCOUNT20</p>
      </div>
    </div>
  );
}

export default LandingPage
