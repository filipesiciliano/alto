import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { InputBase, List, ListItem, ListItemText } from '@mui/material';
import { Search } from '@mui/icons-material';
import { loadPosts } from '../../utils/storage';
import { useNavigate } from 'react-router-dom'; 

export const SearchInputWrapper = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate(); 

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    const results = getSearchResults(value);
    setSearchResults(results);
  };

  const getSearchResults = (value) => {
    const results = loadPosts('blogPosts');
    
    return results?.filter((result) =>
      result.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOpenPost = (postId) => {
    setSearchResults([]);
    setSearchValue('');
    navigate(`/post/${postId}`); 
  };

  return (
    <SearchWrapper ref={inputRef}>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <SearchInput
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
      />
      {searchValue && searchResults?.length > 0 && (
        <AutocompleteList>
          {searchResults.map((result) => (
            <ListItem key={result.id}  onClick={() => handleOpenPost(result.id)} button>
              <ListItemText primary={result.title} />
            </ListItem>
          ))}
        </AutocompleteList>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled('div')`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 2px;
  margin-left: auto;
`;

const SearchIconWrapper = styled('div')`
  padding: 4px;
  display: flex;
  color: #000000;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled(InputBase)`
  padding: 4px;
  width: 150px;
`;

const AutocompleteList = styled(List)`
  position: absolute !important;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  border-radius: 4px;
  color: #000000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  padding: 0;
  z-index: 1;
  width: auto;
  min-width: 210px;
`;

export default SearchInputWrapper;
