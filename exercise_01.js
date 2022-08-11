const fruit = {
  name: "Orange",
  color: "orange",
  weight: 200,
};

const propPrinter = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} - ${obj[key]}`);
    }
  }
};

propPrinter(fruit);
