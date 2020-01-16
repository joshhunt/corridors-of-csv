import { NowRequest, NowResponse } from "@now/node";

var axios = require("axios");

const CSV_SHEET =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEPSQuQfkgWOK30e9dPLs1x2UkZYhJfdpOeCuxrffz-jSA50ZK8QFmtaTXuSu9KmTq2sYSdy1fSvuw/pub?output=csv";

export default (req, res) => {
  res.json({ name: "John", email: "john@example.com" });

  console.log("request at", new Date());

  axios.get(CSV_SHEET).then(res => {
    res.send(res.data);
  });
};
