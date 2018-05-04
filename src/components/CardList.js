import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
  return !robots.length ?
    <p className = "text">No Robofriends found.</p> :
      (
        <div>
          {
            robots.map((user, i) => {
              return (
                <Card
                  key = {i}
                  id ={robots[i].id}
                  name = {robots[i].name}
                  email = {robots[i].email}
                  username = {robots[i].username}
                />
              );
            })
          }
        </div>
      );
}

export default CardList;
