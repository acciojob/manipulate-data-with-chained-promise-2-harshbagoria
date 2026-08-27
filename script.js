//your JS code here. If required.
const array = [1, 2, 3, 4];
const output = document.getElementById("output");
const initialPromise = new Promise((resolve , reject) => {
  setTimeout(() => {
    resolve(array);
  }, 3000);
});
initialPromise.then((arr) =>{
	const filteredArray = arr.filter((item) => item % 2 === 0);
	 return new Promise((resolve , reject) => {
      setTimeout(() => {
        output.textContent = filteredArray.join(",");
        resolve(filteredArray);
      }, 1000);
    });
  })
.then((filteredArray) =>{
	 const multipliedArray = filteredArray.map((item) => item * 2);

    return new Promise((resolve) => {
      setTimeout(() => {
        output.textContent = multipliedArray.join(",");
        resolve(multipliedArray);
      }, 2000);
    });
  })
.catch((error) => {
    console.error("Error:", error);
  });
	
