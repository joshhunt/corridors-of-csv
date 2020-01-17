import { NowRequest, NowResponse } from "@now/node";

var gsjson = require("google-spreadsheet-to-json");

// https://docs.google.com/spreadsheets/d/1T4h8B3LF7jCNKccMAUjRDPJYetA7WJlFeit6Fon6xoA/edit#gid=0
// https://spreadsheets.google.com/feeds/cells/1h6hoBoudoR0H5OoKHEqhMKxFxLnL4jagY0aqCs7LiRE/1/public/full?alt=json
export default (req, httpres) => {
  console.log("request at", new Date());
  httpres.setHeader("Access-Control-Allow-Origin", "*");

  gsjson({
    spreadsheetId: "1h6hoBoudoR0H5OoKHEqhMKxFxLnL4jagY0aqCs7LiRE"
  })
    .then(function(result) {
      httpres.json(result);
    })
    .catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
      httpsres.status(500);
      httpres.json({ error: true });
    });
};
