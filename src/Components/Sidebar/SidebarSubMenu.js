import React from "react";
import Sidebar from "./Sidebar";

export const getUsersChannel = () => {
    const baseURL = "http://206.189.91.54//api/v1/channels";
    const config = {
        headers : {"access-token": "haXWCLr264GN4T2F5qSSug",
        client: "_690jUPp79Ik24mMmKlQJA",
        expiry: "haXWCLr264GN4T2F5qSSug",
        uid: "user1@example.com"
    }
}
    axios
    .get(baseURL, config)
    .then((response) => {
    console.log(response)
})
    .catch((err) => {
    console.log(err)
});
}