import React, { useState, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertConext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertConext = useContext(AlertContext);

  const { searchUsers, users, clearUsers } = githubContext;
  const { setAlert } = alertConext;

  const [text, setText] = useState("");

  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />{" "}
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
