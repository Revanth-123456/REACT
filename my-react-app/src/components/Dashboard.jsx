import React from "react";

function Dashboard({ data }) {

    // filtering
    const success = data.filter(item => item.status === "SUCCESS");
    const failure = data.filter(item => item.status === "FAILURE");

    // calculations
    const total = data.reduce((sum, item) => sum + item.amount, 0);
    const successTotal = success.reduce((sum, item) => sum + item.amount, 0);
    const failureTotal = failure.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Payment Dashboard</h1>

            <h2>Total: {total}</h2>
            <h3 style={{ color: "green" }}>Success: {successTotal}</h3>
            <h3 style={{ color: "red" }}>Failure: {failureTotal}</h3>

            <hr />

            <h2>All Transactions</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.id} - {item.amount} - 
                        <span style={{ color: item.status === "SUCCESS" ? "green" : "red" }}>
                            {item.status}
                        </span>
                    </li>
                ))}
            </ul>

            <h2>Success Transactions</h2>
            <ul>
                {success.map(item => (
                    <li key={item.id}>{item.id} - {item.amount}</li>
                ))}
            </ul>

            <h2>Failure Transactions</h2>
            <ul>
                {failure.map(item => (
                    <li key={item.id}>{item.id} - {item.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;