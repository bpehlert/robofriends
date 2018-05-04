import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (robots.length > 0) {
    return (
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
    return (
      <div>
        <p>No Robofriends found.</p>
      </div>
    );
}

export default CardList;
