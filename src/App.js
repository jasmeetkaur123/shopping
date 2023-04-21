import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';

function App() {
  const [shoppingList, setShoppingList] = useState([
    { name: 'AVACADO', 
    price: 10, 
    image: 'C:\Users\dell\shopping\src\assets\avocadoes.jpg',
     quantity: 0 },
    { name: 'BREAD', 
    price: 5,
    image: 'C:\Users\dell\shopping\src\assets\bread.jpg',
     quantity: 0 },
    { name: 'ONIONS', 
    price: 20,
     image: 'C:\Users\dell\shopping\src\assets\onions.jpg',
      quantity: 0 },
    { name: 'TOMATOES',
     price: 15,
      image: 'C:\Users\dell\shopping\src\assets\tomatoes.jpg', 
      quantity: 0 },
  ]);
// for adding items to the cart 
  function handleIncrement(index) {


    setShoppingList ( prevList =>
       {
      const newList = [...prevList];
      newList[index].quantity++;
      return newList;
    });
  }
// for deleting quatity of products 
          function handleDecrement(index)
           {
            setShoppingList(prevList => 
              {
              const newList = [...prevList];
              if (newList[index].quantity > 0) {
                newList[index].quantity--;
              }
      return newList;
    });
  }

  function handleDelete(index) 
  {
    setShoppingList(prevList =>
       {
      const newList = [...prevList];
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <div>
      <p> SHOPPING LIST </p>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Price -  ${item.price}</p>
            <img src={item.image} alt={item.name} /><br></br>
            <button onClick={() => handleDecrement(index)}> - </button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(index)}> + </button><br></br>
            <button onClick={() => handleDelete(index)}> Delete Item </button>
          </li>
        ))}
      </ul>
      <h2>Your total is = $ {shoppingList.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
    </div>
  );
}


export default withAuthenticator(App);