import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://206.189.91.54/"
})

export const userLogin = ({ email, password }) => {
  return axiosFetch.post("/api/v1/auth/sign_in", {
    email,
    password
  })
  .then(response => response) //promise
  .catch(error => error)
}