import React, { useState } from 'react';
import './SearchForm.scss';

const SearchForm = ({ friends }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-form1">
      <div className="input">
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {filteredFriends.length > 0 ? (
          <ul>
            {filteredFriends.map((friend) => (
              <li key={friend.id}>{friend.name}</li>
            ))}
          </ul>
        ) : (
          <p>No friends found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
