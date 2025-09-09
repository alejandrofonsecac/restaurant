import React from 'react'
import { useLocation, useSearchParams } from "react-router-dom";

function Carrinho() {

  const [searchParams] = useSearchParams
  const title = searchParams.get('title')


  const location = useLocation();
  const { titulo, descricao, preco } = location.state || {};

  return (
    <div>
      <h2>Seu Carrinho</h2>
      {title}
    </div>
  );
}

export default Carrinho;
