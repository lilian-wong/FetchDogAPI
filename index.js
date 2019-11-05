/*js file for Assignment 1 & 2. lets users choose to display between 1 and 50 random dog images, then prints the results to the console*/

'use strict';

let dftNumber=3;
const dogPic = [];


function getRandomDogImage() {
    fetch(`https://dog.ceo/api/breeds/image/random/${dftNumber}`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson){
    $('.results-img').replaceWith(
        addPictures(responseJson.message)
    )
    $('.results').removeClass('hidden');
}

function addPictures(pics){
    let dogPics = '';
    let count = 0;
    pics.forEach(pic => {
        console.log(pics[count]);
        count++;
        dogPics = dogPics + `<img src="${pic}" class="results-img">`;
    });
    return(dogPics);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    updateNumber($('#numOfPic').val());
    getRandomDogImage();
    
  });
}

function updateNumber(num){
  dftNumber=num;
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

