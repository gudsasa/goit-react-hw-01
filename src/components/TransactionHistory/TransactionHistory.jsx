import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  const tableRow = clsx(css.tableRow, css.isHead);

  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr className={tableRow}>
          <th className={css.tableCel}>Type</th>
          <th className={css.tableCel}>Amount</th>
          <th className={css.tableCel}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.tableRow} key={item.id}>
              <td className={css.tableCel}>{item.type}</td>
              <td className={css.tableCel}>{item.amount}</td>
              <td className={css.tableCel}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
