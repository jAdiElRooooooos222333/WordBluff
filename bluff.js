// Word categories
const fruits = [
  "apple", "banana", "orange", "strawberry", "grape", "watermelon", "pineapple",
  "mango", "kiwi", "peach", "pear", "plum", "cherry", "raspberry", "blueberry",
  "blackberry", "papaya", "coconut", "lemon", "lime", "avocado", "pomegranate",
  "apricot", "fig", "guava", "melon", "nectarine", "tangerine", "cantaloupe",
  "dragonfruit", "passionfruit", "cranberry", "persimmon", "grapefruit",
  "papaya", "lychee", "kumquat", "starfruit", "clementine", "mandarin"
];

const locations = [
  "hospital", "school", "park", "airport", "library", "museum", "restaurant",
  "beach", "zoo", "stadium", "theater", "mall", "supermarket", "hotel",
  "fire station", "police station", "train station", "bus station", "bakery",
  "coffee shop", "gym", "pool", "cinema", "university", "college", "farm",
  "castle", "church", "mosque", "temple", "bank", "post office", "gas station",
  "campground", "playground", "aquarium", "arcade", "bowling alley", "bookstore",
  "barbershop", "salon", "office", "factory", "warehouse", "garage"
];

const objects = [
  "table", "chair", "lamp", "computer", "book", "pencil", "backpack", "phone",
  "clock", "mirror", "bottle", "umbrella", "keyboard", "mouse", "television",
  "camera", "guitar", "piano", "basket", "pillow", "blanket", "couch", "bed",
  "desk", "notebook", "scissors", "ruler", "eraser", "stapler", "calculator",
  "hammer", "screwdriver", "flashlight", "wallet", "watch", "sunglasses",
  "headphones", "speaker", "remote", "toothbrush", "toothpaste", "comb",
  "backpack", "suitcase", "helmet", "bicycle", "skateboard", "ball", "kite",
  "candle", "vase", "picture frame", "key", "lock", "ladder", "bucket"
];

const electronics = [
  "television", "laptop", "smartphone", "tablet", "desktop", "monitor",
  "keyboard", "mouse", "printer", "scanner", "camera", "headphones",
  "earbuds", "smartwatch", "speaker", "microphone", "router", "modem",
  "game console", "controller", "projector", "smart TV", "drone",
  "fitness tracker", "GPS", "e-reader", "VR headset", "charging cable",
  "power bank", "smart speaker", "bluetooth speaker", "webcam", "hard drive",
  "USB drive", "graphics card", "motherboard", "keyboard", "calculator",
  "digital camera", "radio", "alarm clock", "smart thermostat"
];

const categories = [fruits, locations, objects, electronics];

// Waits for the page to fully load
document.addEventListener("DOMContentLoaded", () => {

  // Div where everything is
  const container = document.getElementById("cardsContainer");

  // Reads the number of players from the window
  // values set on index.html
  const numPlayers = window.numPlayers;

  // Data val for at least 2 players
  if (!numPlayers || numPlayers < 2) {
    container.innerHTML = "<p>Not Enough Players, Find Some More Friends To Play With!</p>";
    return;
  }

  // Pick random category and word
  const pickedCategory =
    categories[Math.floor(Math.random() * categories.length)];

  const pickedWord =
    pickedCategory[Math.floor(Math.random() * pickedCategory.length)];

  // Pick random imposter
  const imposterIndex = Math.floor(Math.random() * numPlayers);

  // for loop for how many players there are and making them
  for (let i = 0; i < numPlayers; i++) {

    // making the div inside the js file
    const card = document.createElement("div");
    card.className = "flip-card";

    // text on the back of the card, can't see unless its flipped
    // $ Lets you mix Strings w/ variables
    // === (Strictly Equal)
    const backText = i === imposterIndex
      ? `<h3>IMPOSTER</h3><p>No word</p>`
      : `<h3>${pickedWord}</h3>`;

    // makes divs for front of card elements
    // Player () will be based on playerNum
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3>Player ${i + 1}</h3>
        </div>

        <div class="flip-card-back">
          ${backText}
        </div>
      </div>
    `;

    // adds the made div to the page
    container.appendChild(card);
  }
});