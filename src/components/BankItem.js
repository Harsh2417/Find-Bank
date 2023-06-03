
import React from 'react';

const BankItem = ({ bank }) => {
  const { Bank, Branch, Address } = bank;

  return (
    <li>
      <h4>{Bank}</h4>
      <p>Branch: {Branch}</p>
      <p>Address: {Address}</p>
    </li>
  );
};

export default BankItem;
