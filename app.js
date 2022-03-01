// DOM

const verse = document.getElementById('verse');
const newQuoteButton = document.getElementById('newQuoteButton');
const bookName = document.getElementById('bookName')
const chapterNumber = document.getElementById('chapterNumber')
const verseNumber = document.getElementById('verseNumber')
const loader = document.getElementById('loader')
const whatsapp = document.querySelector('.whatsapp')
const twitter = document.querySelector('.twitter')


// New Verse Button Event Listener
newQuoteButton.addEventListener('click', getQuote);


// Verse Loader on "display: none ", so it doesnt continually on start
loader.style.display="none"



// function
async function getQuote() {


    // Verse loader on "display: block" right before api call
    loader.style.display="block"
    const res = await fetch('http://quotes.rest/bible/verse.json');

    const data = await res.json();

    //DOM Manipulation
    verse.innerHTML = data.contents.verse;
    bookk = data.contents.book;
    chapterr = data.contents.chapter;
    verseNumber.innerHTML = data.contents.number;

    // Add hyphen(-) before chapter
    bookName.innerHTML = `- ${bookk}`

    // Add semi-colon(:) after Chapter
    chapterNumber.innerHTML = `${chapterr} :`


    // Stop Verse Loader after result
    loader.style.display="none"

    // social icons linking
    whatsapp.href = `https://wa.me/?text=${data.contents.verse} + - ${data.contents.book} ${data.contents.chapter} : ${data.contents.number}`
    twitter.href = `https://twitter.com/intent/tweet?text==${data.contents.verse} + - ${data.contents.book} ${data.contents.chapter} : ${data.contents.number}`
    
    
}

// Get new verse on page load/reload
window.onload = getQuote()