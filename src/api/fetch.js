const URL = process.env.REACT_APP_API_BASE_URL; //process.env. will give you access to the object 
// Shows

// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" }; // Overwrite the default GET method
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}

// ******************************************************

// Movies


// Create
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyMovie(id) {
  const options = { method: "DELETE" }; // Overwrite the default GET method
  return fetch(`${URL}/movies/${id}`, options);
}

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((response) => {
    return response.json();
  });
}