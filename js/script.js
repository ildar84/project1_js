"use strict";


// let numberOfFilms;




let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        }  else {
            personalMovieDB.privat = false;
        }
    },
    
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");   
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            
            if (answer === '' || answer === null) {
                i--;
                console.log('error');
            } else {
                personalMovieDB.genres[i] = answer;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i}  - это ${item}`);
        });
    },
    rememberMyFilms: function() {
        for (let i = 1; i < 3; i++) {
            let a = prompt("Один из последних просмотренных фильмов ?", ""),
                b = prompt("На сколько оцените его ?", "");
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("ok");
            } else {
                i--;
                console.log("error");
            }    
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    }
}


personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();


console.log(personalMovieDB);



