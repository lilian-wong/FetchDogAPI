/*js file for Assignment 3. This app loads a single random image for a specific breed, based on a user input*/

'use strict';

let breed = '';

function getDogImageByBreed() {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson){
    console.log(responseJson);
    if (isFound(responseJson.status)===true){
      $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
      );
      $('.results').removeClass('hidden');
    }
    else{
        alert(`Unable to retrieve image(s). Error code:${responseJson.code}-${responseJson.message}`)
    }
  }
function updateBreed(selectedBreed){
    breed=selectedBreed;
}

function isFound(status){
  if(status==='success'){
    return true;
  }
  else{
    return false;
  }
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    updateBreed($('#breedPic').val());
    getDogImageByBreed();
    
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

