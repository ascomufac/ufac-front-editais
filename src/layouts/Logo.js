/* import { ReactComponent as LogoDark } from "../assets/images/logos/materialpro.svg"; */
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';
import "./Header.css"

const Logo = (props) => {

const [data_logo, setData_logo] = useState(null);

useEffect(() => {
   const carregarLogo = async () => {
    try {
      const result = await fetchData('');
      setData_logo(result);
    } catch (error) {
      // Tratar erros, se necessário
    }
  };

  carregarLogo();

}, []);

  return (
    <Link to="/">
      <h2>{data_logo ? data_logo['title'] : 'Titulo'}</h2>
    </Link>
  );
};

export default Logo;
