import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items})=> {
    return <table className={css["transaction-history"]}>
    <thead>
        <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map(item => (
        <tr key={item.id}>
            <td className={css.title}>{item.type}</td>
            <td className={css.title}>{item.amount}</td>
            <td className={css.title}>{item.currency}</td>
        </tr>
        ))}
    </tbody>
</table>
}

TransactionHistory.propTypes ={
    items: PropTypes.array.isRequired
}
