import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import BankList from './components/BankList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <BankList searchTerm={searchTerm} />
    </div>
  );
};

export default App;

