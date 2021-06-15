'use strict'
let numberOfFilms = prompt("сколько фильмов вы смотрели?",10);

let obj = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
let a = prompt("какой последний фильм вы смотрели");
let b = prompt("на сколько оцените его?");
let c = prompt("какой последний фильм вы смотрели");
let d = prompt("на сколько оцените его?");
obj.movies[a] = b;
obj.movies[c] = d;
console.log(obj);