document.getElementById("fetchImage").addEventListener("click", fetchImage);
function fetchImage() {
  fetch("https://picsum.photos/v2/list?limit=100")
    .then((response) => response.json())
    .then((images) => {
      let output = ""; // for updating the HTML later
      let randomImages = []; //to store the JSon response

      images.forEach(function (image) {
        randomImages.push(image); // pushes each image object from the response into the randomImages array
      });

      const i = Math.floor(Math.random() * (99 - 0) + 1); //generates a random number between 0 and 99 to access a random index of the randomImages array.

      //lets you access all image info via console.
      const display = randomImages[i];
      console.log(display);

      //generates the HTML needed to display the random image on the screen and adds it to the div element with the id of response.
      output += `
      <div>
        <h2>Author: ${randomImages[i].author}</h2>
        <p>Image Id: ${randomImages[i].id}</p>
        <p>Width: ${randomImages[i].width}</p>
        <p>Height: ${randomImages[i].height}</p>
        <p><a href="${randomImages[i].url}">Download Link!</a></p>
        <img src="https://picsum.photos/id/${randomImages[i].id}/${randomImages[i].width}/${randomImages[i].height}" width="${randomImages[i].width}" height="${randomImages[i].height}" id="center">

      </div>
      `;
      document.getElementById("response").innerHTML = output;
    });
}
