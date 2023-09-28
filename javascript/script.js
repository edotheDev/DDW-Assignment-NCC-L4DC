const reviews = [
    {
        id: 1,
        name: "Christina Villanueva",
        img:
            "img/person3.jpg",
        text:
            "I recently purchased a camping package from this retail camping company, and I couldn't be more pleased with the results. The products were delivered promptly and in perfect condition. I highly recommend this company for anyone looking for quality camping gear at an affordable price."
    },
    {
        id: 2,
        name: "Anne Johnson",
        img:
            "img/person1.jpg",
        text:
            "I recently had the pleasure of shopping with this retail camping company and I was amazed at the quality of their products and services. Their staff was extremely helpful and knowledgeable, and they were able to provide me with everything I needed to get started with my camping trip. Highly recommended!"
    },
    {
        id: 3,
        name: "Daniel Peck",
        img:
            "img/person2.jpg",
        text:
            "The products and services provided by this retail camping company are top-notch. They have a great selection of camping supplies, and the prices are very reasonable. The staffs are professional and friendly. I highly recommend this company if you are looking for quality camping gear at a great price."
    },
    {
        id: 4,
        name: "Christopher Watts",
        img:
            "img/person4.jpg",
        text:
            "I had the pleasure of shopping with this retail camping company and I was very pleased with the results. Their products are high quality and reasonably priced, and their staffs are knowledgeable and friendly. Highly recommended!"
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
let close = document.querySelector('.close-btn');
let container = document.querySelector('.chat-box-container');
let open = true;

container.style.display = "block";

function closeOut() {
    if (open === true) {
        container.style.display = "none";
        open = false;

    }
}
close.addEventListener("click", closeOut);

