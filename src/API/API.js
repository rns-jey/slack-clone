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

export const getRecents = ({ token, client, expiry, uid }) => {

  function removeRedundants(users) {
    let arr = [];
    let newUsers = [];
  
    for (const user of users) {
      let found = arr.find(uid => user.uid === uid)
  
      if (!found) {
        arr.push(user.uid)
        newUsers.push(user)
      }
    }
  
    return newUsers;
  }

  return axiosFetch.get(
    "/api/v1/users/recent",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => {
      return removeRedundants(result.data.data.filter(data => data.uid !== localStorage.getItem("uid")))
    })
    .catch(error => error)
}

export const getChannelDetail = ({ id, headers:{ token, client, expiry, uid } }) => {
  return axiosFetch.get(
    `/api/v1/channels/${id}`,
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
      
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

export const getUserDetail = ({ id, headers:{token, client, expiry, uid }}) => {
  return axiosFetch.get(
    "/api/v1/users",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      }
    })
    .then(response => response)
    .then(result => {
      return result.data.data.filter(data => data.id === id)
    })
    .catch(error => error)
}

export const getMessage = ({ receiverID, receiverType, headers:{ token, client, expiry, uid } }) => {
  return axiosFetch.get(
    "/api/v1/messages",
    {
      headers:{
        "access-token": token,
        "client": client,
        "expiry": expiry,
        "uid": uid,
      },
      params: {
        "receiver_class": receiverType,
        "receiver_id": receiverID
      }
    })
    .then(response => response)
    .then(result => result)
    .catch(error => error)
}

export const sendMessage = ({ receiverID, receiverType, body, headers:{ token, client, expiry, uid } }) => {
  console.log(receiverID)
  return axiosFetch.post(
    "/api/v1/messages", 
  {
    "receiver_id": parseInt(receiverID),
    "receiver_class": receiverType,
    "body": body
  },
  {
    headers:{
      "access-token": token,
      "client": client,
      "expiry": expiry,
      "uid": uid,
    }
  },
  {
    timeout: 1000
  }
  )
  .then(response => response)
  .then(result => result)
  .catch(error => error)
}