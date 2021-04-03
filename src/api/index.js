import axios from 'axios'

export const getData = (url) =>
  axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => false)