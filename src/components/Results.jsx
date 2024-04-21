import {calculateInvestmentResults, formatter} from "../util/investment.js"

export default function Results({userInput}) {
    let data = calculateInvestmentResults(userInput);
    let initialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {data.map((item) => {
                    let totalInterest = item.valueEndOfYear -
                    item.annualInvestment * item.year - initialInvestment;

                    let capital = item.valueEndOfYear - totalInterest;
                    return (
                    <tr>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.annualInvestment)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(capital)}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
}