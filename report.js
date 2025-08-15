console.log("Script started");
const newman = require("newman");
require("dotenv").config();
// console.log(process.env);

newman.run(
  {
    collection: `https://api.postman.com/collections/40120598-7b9faedb-0572-42c8-80af-c415d51cc0aa?access_key=${process.env.access_key}`,
    // collection: require("./collection/Postman_Project.postman_collection.json"),
    reporters: "htmlextra",
    iterationCount: 1,
    // insecure: true, // Bypass SSL certificate validation
    // ignoreRedirects: true, // Ignore redirects
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // Path for the report
      },
    },
  },
  function (err) {
    if (err) {
      console.error("Error during Newman run:", err);
      throw err;
    }
    console.log(
      "Collection run complete! Report generated at ./Reports/report.html"
    );
  }
);
