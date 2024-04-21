
export default function UserInput({onChange, userInput}) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div className="wrapper">
                    <label>Initial investment</label>
                    <input type="number"
                    onChange={(event) => onChange('initialInvestment', event.target.value)}
                    value={userInput.initialInvestment}
                    required />
                </div>
                <div className="wrapper">
                    <label>Annual investment</label>
                    <input type="number"
                    onChange={(event) => onChange('annualInvestment', event.target.value)}
                    value={userInput.annualInvestment}
                    required />
                </div>
            </div>
            <div className="input-group">
                <div className="wrapper">
                    <label>expected return</label>
                    <input type="number"
                    onChange={(event) => onChange('expectedReturn', event.target.value)}
                    value={userInput.expectedReturn}
                    required />
                </div>
                <div className="wrapper">
                    <label>duration</label>
                    <input type="number"
                    onChange={(event) => onChange('duration', event.target.value)}
                    value={userInput.duration}
                    required />
                </div>
            </div>
        </section>
    );
}