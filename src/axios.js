import  axios from 'axios';

//This is the base URL ;

const instance = axios.create({

  baseURL : "https://api.themoviedb.org/3",
  headers : {
        Authorization: 'Bearer 47fc7199081ff28ff73d91147c5ca8f6'
    }
});

export default instance;
