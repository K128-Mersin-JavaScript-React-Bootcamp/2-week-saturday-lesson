import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import AddItemButton from './components/AddItemButton';
import TextInput from './components/TextInput';
import MyText from './components/MyText';
import MyList from './components/MyList';
import { ENDPOINT_URL } from './util/constants';

const App = () => {
  const button = useRef(null);
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  useEffect(() => {
    reFetchItems();
  }, []);

  const reFetchItems = () => {
    fetch(ENDPOINT_URL)
      .then(res => res.json())
      .then(json => setItems(json));
  }
  return (
    <div>
      <TextInput name={name} setName={setName} submitButton={button} />
      <AddItemButton
        name={name}
        reFetchItems={reFetchItems}
        ref={button}
      />
      <MyText name={name} />
      <br />
      <MyList items={items} setItems={setItems} />
    </div>)
};

export default App;
