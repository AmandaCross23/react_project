"use client";
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    const handleIncrement = () => setCount(c => c + step);
    const handleDecrement = () => {
        if (count - step >= 0) setCount(c => c - step);
    };
    const handleReset = () => setCount(0);

    const handleStepChange = (e) => {
        const newStep = Number(e.target.value);
        if (!isNaN(newStep) && newStep >= 1) setStep(newStep);
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 20, maxWidth: 300, margin: "auto"}}>
            <div aria-live="polite" style={{fontSize: "2rem", marginBottom: "1rem"}}>
                Count: {count}
            </div>

            <div style={{display: "flow", gap: "0.5rem", justifyContent: "center"}}>
                <button onClick={handleIncrement}>+{step}</button>
                <button onClick={handleDecrement}>-{step}</button>
                <button onClick={handleReset}>Reset</button>               

            </div>
            <div style={{marginTop: "1rem"}}>
                <label htmlFor="step">Step: </label>
                <input
                    id="step"
                    type="number"
                    value={step}
                    min={"1"}
                    onChange={handleStepChange}
                    style={{width: "60px"}}
                    />
            </div>
        </div>
    );
}