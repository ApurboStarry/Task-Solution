const fs = require("fs");

function aggregator(inputFileName) {
  let rawdata = fs.readFileSync(inputFileName);
  let parcels = JSON.parse(rawdata);

  let numberOfParcelsWithoutRiders = 0;
  const riders = [];

  for (let i = 0; i < parcels.length; i++) {
    if (!parcels[i].rider) {
      numberOfParcelsWithoutRiders++;
    } else if(parcels[i].weight <= 10) {
      riders.push({ _id: parcels[i]._id, amount: parcels[i].amount })
    }
  }

  console.log(numberOfParcelsWithoutRiders);
  console.log(riders);
}

aggregator("data.json");
