import React from 'react';
import useEth from "../contexts/EthContext/useEth";
import logo from "./../assets/logo1.jpg";
import { FaEthereum } from 'react-icons/fa';

const Header = () => {
    const { state: { accounts } } = useEth();

    let connectedAccount = ""; 
    let connectedAccountShortened = "";

    // Formatage de l'adresse ethereum
    if (accounts) {
        connectedAccount = accounts[0]; 
        const formatETHAddress = function(s, size = 4) {;
            var first = s.slice(0, size + 1);
            var last = s.slice(-size);
            return first + "..." + last;
        }
        connectedAccountShortened = formatETHAddress(connectedAccount)
    }

    return (
        <div className="header">
            <div className="row logo-container">
                <div className="company-logo">
                <img src={logo} alt="Logo ministère" /> 
                </div>
                <div className="subtitle">Startup Nation</div>
            </div>
            <h1> MON VOTE .</h1>
            <div className="account-container">
            <button className='account-button-container'>
            
                <div className="account">
                    <h4> <FaEthereum /> COMPTE CONNECTE:  <span className="currentaccount">{connectedAccountShortened} </span>  </h4>
                </div>
            </button>
            </div>
        </div>
    );
};

export default Header;