// my gallery's containers
const galery1 = document.querySelector(".galerie1");
const galery2 = document.querySelector(".galerie2");
// my button's galleries
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

// Class to create galleries
class Galery {
  // initialize the container, the button and (optional) the index of the first image of the gallery
  constructor(container, btn, url = []) {
    this.url = url;
    this.container = container;
    this.btn = btn;
  }

  // method that add an image to the array
  addImage(url) {
    this.url.push(url);
  }

  // method that show 1 image in our container
  show(i) {
    let image = document.createElement("img");
    this.container.innerHTML = "";
    image.src = this.url[i];
    this.container.appendChild(image);
  }

  // method that change image on click the button
  nextOnClick(i = 0) {
    // add the method show() to avoid some lines later
    this.show(i);
    this.btn.addEventListener("click", () => {
      // restart to the index 0 when we display all the images
      if (i == this.url.length - 1) {
        i = 0;
        this.show(i);
      } else {
        // change the index 1 by 1
        if (i < this.url.length) {
          i++;
          this.show(i);
        }
      }
    });
  }
}

// gallery's creation and initialization
let galerie1 = new Galery(galery1, btn1, [
  "https://i.tribune.com.pk/media/images/1947471-thomas-1554890232/1947471-thomas-1554890232.png",
]);
let galerie2 = new Galery(galery2, btn2);

// add images in the gallery 1
galerie1.addImage(
  "http://www.infrarouge.fr/wp-content/uploads/2014/01/tommy-3.jpg"
);
galerie1.addImage(
  "https://getmyasap.com/wp-content/uploads/2019/08/thomas-shelby-peaky-blinders-2.png"
);
galerie1.addImage(
  "https://cdn.radiofrance.fr/s3/cruiser-production/2022/06/7479f457-488c-420c-90a9-27b30d16f4f2/560x315_netflix-whisky-peaky-blinders-ff.jpg"
);
// display the gallery 1 + initialize that button to switch through images
galerie1.nextOnClick(0);

// add images in the gallery 2
galerie2.addImage(
  "https://thumb.modcdn.io/mods/a923/1020305/thumb_1020x2000/naruto-kcm-2.png"
);
galerie2.addImage(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJq33nqUoxmu-PRN2kYZNoA_jqOwTg3wTbuA&usqp=CAU"
);
galerie2.addImage("https://images-cdn.9gag.com/photo/avrepzd_700b.jpg");
// display the gallery 2 + initialize that button to switch through images
galerie2.nextOnClick(1);
