import React from 'react';

const CardList = ({ activeSlideIndex }) => {
  const cardLists = [
    ['Card 1', 'Card 2', 'Card 3'],
    ['Card 4', 'Card 5', 'Card 6'],
    ['Card 7', 'Card 8', 'Card 9'],
    ['Card 10', 'Card 11', 'Card 12'],
    ['Card 13', 'Card 14', 'Card 15'],
    ['Card 16', 'Card 17', 'Card 18'],
  ];

  const activeCards = cardLists[activeSlideIndex] || [];

  return (
    <ul className="card-list">
      {activeCards.map((card, index) => (
        <li key={index}>{card}</li>
      ))}
    </ul>
  );
};

export default CardList;
