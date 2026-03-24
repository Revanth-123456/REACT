import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import SideEffect from "./SideEffect";
import ProductView from "./ProductView";
import Balance from "./Balance";

function Routing() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="/landing">Landing</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="" element={<Balance />} />
                    <Route path="/landing" element={<ProductView />} />
                    <Route path="/dashboard" element={<SideEffect />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Routing;