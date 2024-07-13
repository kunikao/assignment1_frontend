import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MainForm() {
  const [mainFormData, setMainFormData] = useState([]);

  useEffect(() => {
    axios.get(`${BaseUrl}mainform/`)
      .then((response) => {
        console.log(response.data);
        setMainFormData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Main Form</h2>
        Welcome to Maungawhau Institute of Studies!
      <ul>

        {mainFormData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainForm;
