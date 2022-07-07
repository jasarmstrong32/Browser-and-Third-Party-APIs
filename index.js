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

      for (let i = 0; i < 10; i++) {
        const j = Math.floor(Math.random() * (99 - 0) + 1); //generates a random number between 0 and 99 to access a random index of the randomImages array.

        //lets you access all image info via console.
        const display = randomImages[j];
        console.log(display);

        //generates the HTML needed to display the random image on the screen and adds it to the div element with the id of response.
        output += `
      <div>
        <h2 class="center">Author: ${display.author}</h2>
        <p class="center">Image Id: ${display.id}</p>
        <p class="center">Width: ${display.width}</p>
        <p class="center">Height: ${display.height}</p>
        <p class="center"><a href="${display.url}">Download Link!</a></p>
        <img src="https://picsum.photos/id/${display.id}/${display.width}/${
          display.height
        }" width="${display.width}" height="${
          display.height
        }" class="center" alt="img${i + 1}">
      </div>
      `;
      }
      document.getElementById("response").innerHTML = output;
    });
}
