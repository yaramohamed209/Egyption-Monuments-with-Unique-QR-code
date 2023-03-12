const axios = require("axios"); // to make https request

const hostUrl = "https://egyption-monuments.onrender.com/";
const wakeUpPeriod = 10; // in minutes

exports.preventSleep = () => {
  const url = hostUrl;
  setInterval(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("preventing sleep...🫡 🫡");
      })
      .catch((error) => {
        console.log(error);
      });
  }, 60000 * wakeUpPeriod);
}; 
//export default preventSleep ;
