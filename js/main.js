
// dark and light mode
function changeMode(){
    var navbar = document.getElementById("navbar");
    var mode = document.getElementById("mode");
    var contents = document.getElementById("contents");
    var movieTxt = document.querySelectorAll("movieTxt");


    if(mode.className === "fas fa-sun"){
        mode.classList.remove("fa-sun");
        mode.classList.add("fa-moon");
        navbar.style.backgroundColor = "#E5E7E9";
        contents.style.backgroundColor = "#E5E7E9";
        mode.style.color = "black";
        movieTxt.style.color = "black";
        changeSectionTextColorBlack();
    }else{
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");
        navbar.style.backgroundColor = "#40454B";
        contents.style.backgroundColor = "black";
        mode.style.color = "#011120";
        mode.style.color = "white";
        changeSectionTextColorWhite();
    }
}

function changeSectionTextColorBlack(){
        for(var i = 1; i<=3;i++){
            var sec_txt = document.getElementById("sec_txt"+i);
            sec_txt.style.color = "black";
        }
    }
function changeSectionTextColorWhite(){
    for(var i = 1; i<=3;i++){
        var sec_txt = document.getElementById("sec_txt"+i);
        sec_txt.style.color = "white";
    }
}




// api method

var API_KEY = 'api_key=47f396ff680be77abd81a4c40e321876';
var BASE_URL = 'https://api.themoviedb.org/3';
var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
var IMG_URL = 'https://image.tmdb.org/t/p/w500';
//var bookImage_URL = 'https://itbook.store/img/books';
var searchURL = BASE_URL + '/search/movie?' + API_KEY;


var moviesDiv = document.getElementById("moviesDiv");
var bookDiv = document.getElementById("bookDiv");
var search = document.getElementById("search");
var form = document.getElementById("form");


var Book_API = 'https://api.itbook.store/1.0/books/9781617294136';



function getMovie(url){
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data.results);
        showMovie(data.results);
    })
}

function showMovie(movies){
    moviesDiv.innerHTML = '';
    movies.forEach(movie => {
        const {poster_path, title, overview } = movie;
        const movieEl = document.createElement("DIV");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="dd">
        <div >
        <img src="${IMG_URL + poster_path}" width = "300px" height="400px"/>
        <h1 id="movieTxt">${title}</h1>

        </div>
        <div>
        </div>
        </div>
        `;
        moviesDiv.appendChild(movieEl);
    });
}

getMovie(API_URL);


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        getMovie(searchURL + '&query=' + searchTerm);
    }else{
        getMovie(API_URL);
    }
});










/* books api method
function getBook(url){
    fetch(url)
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        showBook(data);
    })
}

function showBook(books){
    bookDiv.innerHTML = '';
    books.forEach(book => {
        const {authors, title, image } = movie;
        const bookEl = document.createElement("DIV");
        bookEl.classList.add("movie");
        bookEl.innerHTML = `
        <div class="dd">
        <div >
        <img src="${bookImage_URL}" width = "300px" height="400px"/>
        <h1>${title}</h1>
        <h1>${authors}</h1>
        </div>
        <div>
        </div>
        </div>
        `;
        bookDiv.appendChild(bookEl);
    });
}


getBook(Book_API);
*/


// objext tests

var person = {
    name: 'abbas',
    age:40,
    country: 'Iraq',
    job: function(){
        return this.name + ' from ' + this.country;
    },
    color: {
        car:'gold',
        phone: 'black',
        T_shirt: 'red',
        }
}

var car = new Object();

console.log(person);
console.log(person.name);
console.log(person.job());

console.log(person['color']['car']);

var text = '';
for (var x in person){
    text +=person[x]; 
}

console.log(text);
















