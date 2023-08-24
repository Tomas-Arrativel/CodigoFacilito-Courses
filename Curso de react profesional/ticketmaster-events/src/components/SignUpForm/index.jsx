import { useState } from 'react';
import React from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');

  const handleClearClick = () => {
    setName('');
    setAge('');
    setAddress('');
    setZipcode('');
    setPhone('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submit: ', {
      name,
      age,
      address,
      zipcode,
      phone,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Age
        <input
          type='text'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        Zipcode
        <input
          type='text'
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
      </label>
      <label>
        Phone
        <input
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <div>
        <button type='button' onClick={handleClearClick}>
          Clear
        </button>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SignUpForm;
