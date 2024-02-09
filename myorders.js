import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ email: ''});

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('http://localhost:5000/api/myodata' , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: localStorage.getItem("E-mail")
      })
    })
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = e => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.qty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;