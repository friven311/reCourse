'use strict';
let numberOfFilms = prompt("сколько фильмов вы смотрели?",10);
if(numberOfFilms < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if(numberOfFilms > 10 && numberOfFilms < 30){
    console.log("Вы классический зритель");
} else if(numberOfFilms > 30){
    console.log("Вы киноман");
}
let obj = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("какой последний фильм вы смотрели?");
    let b = prompt("на сколько оцените его?");
    if (a != null && a !== "" && a.length < 50 && b != null && b !== ""){
        
        obj.movies[a] = b;
    }else{
        i--;
    }
    
    
}
console.log(obj);
