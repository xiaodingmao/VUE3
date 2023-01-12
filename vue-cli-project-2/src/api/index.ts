export const getMovies = () => {
  return fetch('https://tame-erin-pike-toga.cyclic.app/movies')
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error))
}