
var Quotes = [
    {
        'quote': `"So many books, so little time."`,
        'author': '― Frank Zappa'
    },
    {
        'quote': `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” `,
        'author': '― Albert Einstein'
    },
    {
        'quote': `“You only live once, but if you do it right, once is enough.”`,
        'author': '― Mae West'
    },
    {
        'quote': `“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”`,
        'author': '― Jane Austen'
    },
    {
        'quote': `"Resentment is like drinking poison and waiting for your enemies to die."`,
        'author': '― Groucho Marx'
    },
    {
        'quote': `"I love deadlines. I love the whooshing noise they make as they go by."`,
        'author': '― Douglas Adam'
    },
];

var lastRandom = null;

function Quote() {
    var random;
    do {
        random = Math.floor(Math.random() * Quotes.length);
    } while (random === lastRandom);
    lastRandom = random;
    document.getElementById("cartona").innerHTML = `<h3 class="mt-5 mb-3">${Quotes[random].quote}</h3>`;
    document.getElementById("cartona").innerHTML += `<h3>${Quotes[random].author}</h3>`;
}