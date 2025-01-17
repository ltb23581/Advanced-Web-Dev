// Object with details for each flower
let flowerInfo = {
    Rose: {
      image: 'images/rose.jpg',
      description: 'A symbol of love and beauty, roses bloom in a variety of colors.',
      bloomDate: 'June to September',
    },
    Tulip: {
      image: 'images/tullip.jpg',
      description: 'Tulips are known for their vibrant colors and bloom in the spring.',
      bloomDate: 'March to May',
    },
    Daisy: {
      image: 'images/daisy.jpeg',
      description: 'Daisies are cheerful flowers that symbolize innocence and purity.',
      bloomDate: 'April to June',
    },
    Sunflower: {
      image: 'images/sunflower.jpeg',
      description: 'Sunflowers follow the sun, symbolizing loyalty and longevity.',
      bloomDate: 'July to October',
    },
    Lily: {
      image: 'images/lily.jpeg',
      description: 'Lilies are fragrant flowers often associated with purity and refined beauty.',
      bloomDate: 'June to August',
    },
  };
  
  // Function to display details for the selected flower
  function displayValue(flower) {
    const flowerData = flowerInfo[flower]; // Access the details for the selected flower
  
    if (flowerData) {
      document.getElementById('flowerImage').src = flowerData.image;
      document.getElementById('flowerDescription').innerText = 'Description: ' + flowerData.description;
      document.getElementById('flowerBloomDate').innerText = 'Bloom Period: ' + flowerData.bloomDate;
    }
  }
  