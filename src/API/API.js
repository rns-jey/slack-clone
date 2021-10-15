import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://206.189.91.54/"
})

export const getChannels = ({ token, client, expiry, uid }) => {
  return axiosFetch.get(
    "/api/v1/channels",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}