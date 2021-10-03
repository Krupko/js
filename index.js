"use strict"

const numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один из последних просмотренных Вами фильмов?', ''),
   b = prompt('На сколько его оцениваете?', ''),
   c = prompt('Один из последних просмотренных Вами фильмов?', ''),
   d = prompt('На сколько его оцениваете?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
