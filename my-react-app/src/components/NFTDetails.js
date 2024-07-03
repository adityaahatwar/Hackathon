import React from 'react';
import { useParams } from 'react-router-dom';

const mockNFTs = [
  {
    id: 1,
    name: "AI MidJourney, Ching-Kai Yen 顏靖凱 #1",
    image: "https://tse3.mm.bing.net/th?id=OIP.rMnzZjS0huHq9fwejSfregHaHa&pid=Api&P=0&h=180",
    description: "CryptoPunk #1 is one of the 10,000 unique collectible characters.",
    price: "10 ETH",
  },
  {
    id: 2,
    name: "OVAB Digital Art #2",
    image: "https://tse4.mm.bing.net/th?id=OIP.-S7MtT8E0d4axyFHIkpLWwHaHa&pid=Api&P=0&h=180",
    description: "Bored Ape #2 is a unique collectible character from the Bored Ape Yacht Club.",
    price: "15 ETH",
  },
  {
    id: 3,
    name: "Meebit #3",
    image: "https://tse2.mm.bing.net/th?id=OIP.JDQ01opM0E5N1Up-aybDcwHaHa&pid=Api&P=0&h=180",
    description: "Meebit #3 is a voxel character collectible from Larva Labs.",
    price: "7 ETH",
  },
  // Add more mock NFTs as needed
];

const NFTDetails = () => {
  const { id } = useParams();
  const nft = mockNFTs.find(nft => nft.id === parseInt(id));

  if (!nft) {
    return <div>NFT not found</div>;
  }

  const handleBuyClick = () => {
    alert(`You have bought ${nft.name} for ${nft.price}!`);
  };

  return (
    <div className="nft-details">
      <h2>{nft.name}</h2>
      <img src={nft.image} alt={nft.name} />
      <p>{nft.description}</p>
      <p className="price">Price: {nft.price}</p>
      <button onClick={handleBuyClick} className="buy-button">Buy</button>
    </div>
  );
};

export default NFTDetails;
