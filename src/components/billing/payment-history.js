import React from 'react';

const PaymentHistory = ({ invoices }) => (
  <>
    <h4 className="mt-5 mb-3">Payment history</h4>
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
          ({ amountDue, amountPaid, invoicePdf, status, date, periodStart, periodEnd }) => (
            <tr>
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
  </>
);

export default PaymentHistory;
