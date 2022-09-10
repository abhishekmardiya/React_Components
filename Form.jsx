import React, { useState } from "react"; 

function Form() {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //The Final Form Data
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter Your Username"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          id="age"
          placeholder="Enter Your Age"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <br />
        <hr />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
