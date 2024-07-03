import React, { useState } from 'react';
import NFTCard from './NFTCard';

const mockNFTs = [
  {
    id: 1,
    name: "AI MidJourney, Ching-Kai Yen 顏靖凱 #1",
    image: "https://tse3.mm.bing.net/th?id=OIP.rMnzZjS0huHq9fwejSfregHaHa&pid=Api&P=0&h=180",
    description: "CryptoPunk #1 is one of the 10,000 unique collectible characters.",
  },
  {
    id: 2,
    name: "OVAB Digital Art #2",
    image: "https://tse4.mm.bing.net/th?id=OIP.-S7MtT8E0d4axyFHIkpLWwHaHa&pid=Api&P=0&h=180",
    description: "Bored Ape #2 is a unique collectible character from the Bored Ape Yacht Club.",
  },
  {
    id: 3,
    name: "Meebit #3",
    image: "https://tse2.mm.bing.net/th?id=OIP.JDQ01opM0E5N1Up-aybDcwHaHa&pid=Api&P=0&h=180",
    description: "Meebit #3 is a voxel character collectible from Larva Labs.",
  },
  // Add more mock NFTs as needed
];

const NFTGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNFTs = mockNFTs.filter(nft =>
    nft.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search NFTs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="nft-gallery">
        {filteredNFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
