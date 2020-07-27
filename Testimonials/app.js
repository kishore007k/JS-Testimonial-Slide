contents = [{
    image: `Customer-1`,
    author: "John",
    quote: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
  },
  {
    image: `Customer-2`,
    author: "Sandy",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"
  },
  {
    image: `Customer-3`,
    author: "Amy",
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."
  },
  {
    image: `Customer-4`,
    author: "Tyrell",
    quote: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."
  },
  {
    image: `Customer-5`,
    author: "Wanda",
    quote: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
]

// console.log(contents[0].quote);

const customerContainer = document.querySelector('.img-container');
const customerName = document.querySelector('.customer-name');
const customerQuote = document.querySelector('.customer-quote');


// This is for button
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

// Event
rightBtn.addEventListener('click', nextContent);
leftBtn.addEventListener('click', prevContent);

// function
let counter = 0;

function nextContent() {
  if (counter < contents.length - 1) {
    counter++;
    console.log(counter);
    carsoul();
    imageChange();
  }
}

function prevContent() {
  if (counter > 0) {
    counter--;
    console.log(counter);
    carsoul();
    imageChange();
  }
}

function carsoul() {
  customerName.innerText = `${contents[counter].author}`;
  customerQuote.innerText = `${contents[counter].quote}`;
};

function imageChange() {
  customerContainer.innerHTML = `<img src="/img/${contents[counter].image}.jpg" alt="${contents[counter].image}" class="customer-img">`;
};