// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

const img =document.querySelector('#person-img');
const author =document.querySelector('.author');
const job =document.querySelector('.job');
const info =document.querySelector('.info');
const prevbtn =document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const randombtn =document.querySelector('.random-btn');



let currentValue=0;
console.log(currentValue)
// load initial item
window.addEventListener('DOMContentLoaded',()=>{
    const item = reviews[currentValue];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
})

function showPerson(person){
    console.log(person)
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent =item.text;
}
 prevbtn.addEventListener('click',()=>{
    currentValue--;
    if(currentValue < 0){
        currentValue=reviews-1;
    }
    showPerson(currentValue)
 })

 nextbtn.addEventListener('click',()=>{
    currentValue++;
    if(currentValue > reviews.length-1){
        currentValue=0;
    }
    showPerson(currentValue)
 })

randombtn.addEventListener('click',()=>{
    const currentValue = Math.floor(Math.random() * reviews.length);
    showPerson(currentValue)
})