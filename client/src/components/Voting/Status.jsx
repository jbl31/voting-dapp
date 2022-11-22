import React from 'react';
import { useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";

const Status = ({status, setStatus}) => {
    const { state: { contract, accounts, artifact, owner } } = useEth();

    useEffect(() => {
        async function checkStatus() {
            try {
                if (artifact || contract || accounts) {
                    let status = await contract.methods
                          .state()
                          .call();
                    setStatus(status);
                }
            } catch (error) {
                console.error(error);
            }
        }
    checkStatus();
    });
    

    return (
        <div>
            <div className="status-container">
                Statut de l'élection: {status}
            </div>
        </div>
    );
};

export default Status;