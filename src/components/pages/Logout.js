import React from "react";
// import "./Logout.css";

const Logout = () =>
    <div className="logout-page">
        <a method='POST' href='/auth/logout'>Logout of CryptoAquarium</a>
    </div>

export default Logout;