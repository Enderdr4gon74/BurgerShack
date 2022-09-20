// cooked will be from 1 - 5
// 1: Rare: The outside is gray-brown, and the middle of the steak is red and slightly warm.
// 2: Medium rare: The steak will have a fully red, warm center.
// 3: Medium: The middle of the steak is hot and red with pink surrounding the center. The outside is gray-brown.
// 4: Medium Well: The meat is light pink surrounding the center and above core temperature.
// 5: Well Done: The meat is gray-brown throughout and slightly charred.

export const burgers = {
  cookedEx: [
    {
      number: 1, 
      type: 'rare',
      explanation: 'The outside is gray-brown, and the middle of the steak is red and slightly warm.'
    },{
      number: 2, 
      type: 'medium-rare',
      explanation: 'The steak will have a fully red, warm center.'
    },{
      number: 3, 
      type: 'medium',
      explanation: 'The middle of the steak is hot and red with pink surrounding the center. The outside is gray-brown.'
    },{
      number: 4, 
      type: 'medium-well',
      explanation: 'The meat is light pink surrounding the center and above core temperature.'
    },{
      number: 5, 
      type: 'well-done',
      explanation: 'The meat is gray-brown throughout and slightly charred.'
    }
  ],
  burgers: [
    {
      id: 1000, 
      title: "Smokin' Cheese", 
      tastePercent: 85, 
      cookedAmount: 4
    },{
      id: 1001,
      title: "Mighty N' Cheesy",
      tastePercent: 87.5,
      cookedAmount: 2 
    },{
      id: 1002,
      title: "The Prime Cheese",
      tastePercent: 65,
      cookedAmount: 2 
    },{
      id: 1003,
      title: "Gold N' Patty",
      tastePercent: 57,
      cookedAmount: 1 
    },{
      id: 1004,
      title: "Cream N' Cheese Buns",
      tastePercent: 51,
      cookedAmount: 3 
    },{
      id: 1005,
      title: "The Cheesy Stuff",
      tastePercent: 94,
      cookedAmount: 2 
    },{
      id: 1006,
      title: "Dairy & Burger",
      tastePercent: 69,
      cookedAmount: 4 
    },{
      id: 1007,
      title: "88th Cheeseburger",
      tastePercent: 53,
      cookedAmount: 5 
    }
  ]
}