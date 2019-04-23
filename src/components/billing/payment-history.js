import React from 'react';
import PropTypes from 'prop-types';

const PaymentHistory = ({ invoices }) => (
  <table className="table table-sm">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Period</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Invoice</th>
      </tr>
    </thead>
    <tbody>
      {invoices.map(
        ({ amountDue, amountPaid, invoicePdf, status, date, periodStart, periodEnd }, idx) => (
          <tr key={idx}>
            <td>{date}</td>
            <td>
              {periodStart} to {periodEnd}
            </td>
            <td>${amountPaid}.00</td>
            <td>{status}</td>
            <td>
              <a href={invoicePdf}>PDF</a>
            </td>
          </tr>
        )
      )}
    </tbody>
  </table>
);

export default PaymentHistory;

PaymentHistory.propType = {
  invoices: PropTypes.array.isRequired
};

PaymentHistory.defaultProps = {
  invoices: []
};
