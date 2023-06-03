
import React from 'react';
import bankData from '../bankData';
import './bankList.css';
const BankList = ({ searchTerm }) => {
  const filteredBanks = bankData.filter((bank) => {
    return bank.Bank.toLowerCase().includes((searchTerm || '').toLowerCase());
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BANK NAME</th>
            <th>IFSC</th>
            <th>BRANCH</th>
            <th>BANK-ID</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {filteredBanks.map((bank) => (
            <tr key={bank.IFSC}>
              <td>{bank.Bank}</td>
              <td>{bank.IFSC}</td>
              <td>{bank.Branch}</td>
              <td>{bank.BankId}</td>
              <td>{bank.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankList;
