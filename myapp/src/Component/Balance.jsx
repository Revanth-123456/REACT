import React, { useState } from "react";

function Balance() {
    const [balance, setBalance] = useState(10000);
    const [amount, setAmount] = useState("");

    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    const addCash = () => {
        setBalance(balance + Number(amount));
        setAmount("");
    };

    const withdrawCash = () => {
        if (balance >= Number(amount)) {
            setBalance(balance - Number(amount));
        } else {
            alert("Insufficient balance");
        }
        setAmount("");
    };

    return (
    <div className="container">
        <div className="card">
            <h1 className="balance">My Account Balance: {balance}</h1>

            <p>Enter Amount</p>

            <input
                type="number"
                value={amount}
                onChange={handleChange}
                className="input"
            />

            <div className="btn-group">
                <button className="add-btn" onClick={addCash}>
                    Add Cash
                </button>
                <button className="withdraw-btn" onClick={withdrawCash}>
                    Withdraw Cash
                </button>
            </div>
        </div>
    </div>
);
}

export default Balance;