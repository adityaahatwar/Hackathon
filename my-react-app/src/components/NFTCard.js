import React from 'react';
import { Link } from 'react-router-dom';

const NFTCard = ({ nft }) => {
  return (
    <div className="nft-card">
      <Link to={`/nft/${nft.id}`}>
        <img src={nft.image} alt={nft.name} />
      </Link>
      <h3>{nft.name}</h3>
      <p>{nft.description}</p>
    </div>
  );
};

export default NFTCard;
