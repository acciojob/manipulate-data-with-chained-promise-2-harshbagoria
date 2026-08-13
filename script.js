//your JS code here. If required.
const array = [1, 2, 4, 6, 3];

const filterArray = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = arr.filter((item) => item % 2 === 0);
      resolve(filteredArray);
    }, 4000);
  }).then((filteredArray) => {
    console.log(filteredArray);

    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = filteredArray.map((item) => item * 2);
        resolve(multipliedArray);
      }, 3000);
    });
  });
};

filterArray(array)
  .then((result) => {
    const data = document.createElement("h1");
    data.textContent = "Multiplied array: " + result.join(", ");
    document.body.appendChild(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
