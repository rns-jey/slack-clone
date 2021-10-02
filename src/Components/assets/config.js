
export default function configAPI(){
    const userExpiry = localStorage.getItem('expiry');
    const userUID = localStorage.getItem('uid');
    const userAt = localStorage.getItem('at');
    const userClient = localStorage.getItem('client');
    const config = {
        headers : {
          "access-token": userAt,
          client: userClient,
          expiry: userExpiry,
          uid: userUID
        }
      }
    return(config);
}