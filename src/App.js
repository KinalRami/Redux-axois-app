import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './redux/action';

function List({ posts }) {
  return (
    <>
      {
        posts.length > 0
          ? posts.map((post) => {
            return (
              <div key={post.id}>
                <p key={post.email}>{post.email}</p>
                <p key={post.first_name}>{post.first_name}</p>
                <p key={post.last_name}>{post.last_name}</p>
              </div>
            )
          })
          : <div>No Data Yet</div>
      }
    </>)
}

function App(props) {

  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList)


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div className="App">
        <h1>Welcome</h1>
        <List posts={userList} />
      </div>
    </>
  )

}

export default App;
