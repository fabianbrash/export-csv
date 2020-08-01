//import ObjectsToCsv from objects-to-csv;
const ObjectsToCsv = require('objects-to-csv')

const createCSV = async () => {

  var data = [
    {
      name: 'Test 1',
      age: 13,
      average: 8.2,
      approved: "true",
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: "true",
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: "true",
      description: "using 'Content here, content here' "
    },
  ];

const csv = new ObjectsToCsv(data)

await csv.toDisk('./data.csv')

}

createCSV()