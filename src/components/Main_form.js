import React, { useEffect, useState } from 'react';
import axios from 'axios';
import createChatroom from "./CreateChatroom";
import {useNavigate} from "react-router-dom";

function MainForm() {
  const [mainFormData, setMainFormData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`${BaseUrl2}mainform/`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setMainFormData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }, []);

  const createchatroom = () => {
    navigate('/createchatroom');
  }

  return (
    <div>
      <h2>Main Form</h2>
        Welcome to Maungawhau Institute of Studies!
      {/*<ul>*/}

      {/*  {mainFormData.map((item) => (*/}
      {/*    <li key={item.id}>{item.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
        <button onClick={createchatroom}>Create Chat Room</button>
    </div>
  );
}

export default MainForm;
