import { TransactionHistoryItem } from "./TransactionHistoryItem"

export const TransactionHistory = ({ items }) => {
    
    return (
      <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(({type, amount, currency, id}) => (
                <TransactionHistoryItem
                    id={id}
                    type={type}
                    amount={amount}
                    currency={currency} />
            ))}
        </tbody>
</table>
    )
}