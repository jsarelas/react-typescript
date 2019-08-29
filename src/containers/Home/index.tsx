import React from 'react';
import User from '../../interfaces/user'

const jason: User = {
  id: "99@99@99",
  firstName: "Jason",
  lastName: "Sarelas",
  email: "jsarelas@hotmail.com"
}

const Home = () => {
    return (
      <div>
        {jason.firstName} {jason.lastName} - {jason.email} - id: {jason.id}
      </div>
    );
  }
  
  export default Home;
  