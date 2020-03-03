const urlParams = new URLSearchParams(document.location.search);

const id = urlParams.get(`id`);

const API_URL = `http://api.tvmaze.com/shows/${id}`;


fetch(API_URL)
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderPage(json);
  })
  .catch(error => {
    console.log(error);
  });


function renderPage(tvShow) {
  let showTitle = document.querySelector(".title");
  let showDescription = document.querySelector(".subtitle");
  let schedule = document.getElementById("schedule");

  let showCoverImage = tvShow.image;

  showTitle.innerHTML = tvShow.name;
  showDescription.innerHTML = tvShow.summary;
  schedule.innerHTML = tvShow.schedule.time

  tvShow.schedule.days.forEach(value => {
    schedule.innerHTML += `<div> ${value}</div>`
  });

  getCoverPhoto(showCoverImage);
  addBackgroundImage(showCoverImage);
}

function getCoverPhoto(image) {
  let showCoverPhoto = document.querySelector(".cover-photo");
  showCoverPhoto.src = image.medium;
}

function addBackgroundImage(images) {
  let backgroundPhoto = document.querySelector(".background-photo");
  backgroundPhoto.style.backgroundImage = `url(${images.original})`;
}

// use add or remove classes here Cameron Was very lazy
document.getElementById('trigger').addEventListener('click', () => {
  let scheduleContent = document.getElementById('scheduleContent');
  if (scheduleContent.style.display === "none") {
    scheduleContent.style.display = "block";
  } else {
    scheduleContent.style.display = "none";
  }
})

const API_ep = `http://api.tvmaze.com/shows/${id}/episodes`;

fetch(API_ep)
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderEpisode(json);
  })
  .catch(error => {
    console.log(error);
  });

function renderEpisode(episodes) {
  const episodeDiv = document.querySelector(".episodes");


  episodes.forEach(episode => {
    episodeDiv.innerHTML += `<img src="${episode.image.medium}">`

  });
}

const API_SEASONS = `http://api.tvmaze.com/shows/${id}/seasons`;

fetch(API_SEASONS)
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderSeasons(json);
  })
  .catch(error => {
    console.log(error);
  });

function renderSeasons(seasons) {
  const seasonsDiv = document.querySelector(".seasons-div");

  seasons.forEach(season => {
    seasonsDiv.innerHTML += `<img src="${season.image.medium}">`;
  });
}

const API_CAST = `http://api.tvmaze.com/shows/1/cast`;

fetch(API_CAST)
  .then(response => {
    return response.json();
  })
  .then(json => {
    renderCast(json);
  })
  .catch(error => {
    console.log(error);
  });

function renderCast(casts) {
  const castDiv = document.querySelector(".cast-div");

  casts.forEach(cast => {
    castDiv.innerHTML += `<img src="${cast.person.image.medium}">`;
  });
}
