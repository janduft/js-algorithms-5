//
// Shopping Cart Example with JavaScript
// This example demonstrates various data types, loops, and conditionals within a simple shopping cart scenario:

const products = [
  { id: 1, name: "Apple", price: 0.5, quantity: 0 },
  { id: 2, name: "Banana", price: 0.75, quantity: 0 },
  { id: 3, name: "Milk", price: 2.5, quantity: 0 },
];

function displayProducts() {
  const productList = document.getElementById("products");
  productList.innerHTML = "";

  for (const product of products) {
    const productItem = document.createElement("li");
    productItem.textContent = `${product.name} (${product.price.toFixed(2)}): ${product.quantity}`;
    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", () => addToCart(product.id));
    productItem.appendChild(addButton);
    productList.appendChild(productItem);
  }
}

function addToCart(productId) {
  const product = products.find(product => product.id === productId);
  if (product) {
    product.quantity++;
    updateCartTotal();
  } else {
    alert("Product not found!");
  }
}

function updateCartTotal() {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.textContent = `Cart Total: $${total.toFixed(2)}`;
}

function removeItem(productId) {
  const product = products.find(product => product.id === productId);
  if (product && product.quantity > 0) {
    product.quantity--;
    updateCartTotal();
  } else {
    alert("Product not found or quantity is 0!");
  }
}

displayProducts();

// Example usage:
addToCart(2); // Add one banana
removeItem(1); // Remove one apple


//  JavaScript Basics: Interactive Quiz App
const questions = [
  { question: "What is the capital of France?", options: ["London", "Paris", "Berlin"], answer: 1 },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Venus"], answer: 1 },
  { question: "What year did JavaScript launch?", options: ["1995", "2000", "2005"], answer: 0 },
];

let score = 0;
let currentQuestion = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  questionElement.textContent = questions[currentQuestion].question;

  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    const optionButton = document.createElement("button");
    optionButton.textContent = questions[currentQuestion].options[i];
    optionButton.addEventListener("click", () => checkAnswer(i));
    optionsElement.appendChild(optionButton);
  }
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    alert("Correct!");
  } else {
    alert("Incorrect. The correct answer is: " + questions[currentQuestion].options[correctAnswer]);
  }

  currentQuestion++;
  if (currentQuestion === questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  const resultsElement = document.getElementById("results");
  resultsElement.textContent = `You answered ${score} out of ${questions.length} questions correctly!`;
}

showQuestion();




