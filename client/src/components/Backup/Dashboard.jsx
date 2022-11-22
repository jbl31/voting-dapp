import React from 'react';
import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

const Dashboard = () => {
    const { state: { contract, accounts } } = useEth();
    const [workflow, setWorkflow] = useState(0);
    const updateWorkflow = async() => {
        const getWorkflow = await contract.methods.workflowStatus().call({from: accounts[0]});
        setWorkflow(getWorkflow);
    }

    const startProposalsRegistering = async() => {
        await contract.methods.startProposalsRegistering().send({from: accounts[0]}).then(() => { 
            updateWorkflow();
        });
    }
    useEffect(() => {
        // updateWorkflow();
    }, [workflow]);
    return (
        <div>
            <h1>Workflow status: { workflow }</h1>
            <button onClick={startProposalsRegistering }>Start Proposal registering </button>
        </div>
    );
};

export default Dashboard;