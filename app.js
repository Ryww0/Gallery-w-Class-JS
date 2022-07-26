const galery1 = document.querySelector(".galerie1");
const galery2 = document.querySelector(".galerie2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

class Galery {
  constructor(container, btn, url = []) {
    this.url = url;
    this.container = container;
    this.btn = btn;
  }

  addImage(url) {
    this.url.push(url);
  }

  show(i) {
    let image = document.createElement("img");
    this.container.innerHTML = "";
    image.src = this.url[i];
    this.container.appendChild(image);
  }

  nextOnClick(i = 0) {
    this.show(i);
    this.btn.addEventListener("click", () => {
      if (i == this.url.length - 1) {
        i = 0;
        this.show(i);
      } else {
        if (i < this.url.length) {
          i++;
          this.show(i);
        }
      }
    });
  }
}

let galerie1 = new Galery(galery1, btn1, [
  "https://i.tribune.com.pk/media/images/1947471-thomas-1554890232/1947471-thomas-1554890232.png",
]);
let galerie2 = new Galery(galery2, btn2);
console.log(galerie1);

galerie1.addImage(
  "http://www.infrarouge.fr/wp-content/uploads/2014/01/tommy-3.jpg"
);
galerie1.addImage(
  "https://getmyasap.com/wp-content/uploads/2019/08/thomas-shelby-peaky-blinders-2.png"
);
galerie1.addImage(
  "https://cdn.radiofrance.fr/s3/cruiser-production/2022/06/7479f457-488c-420c-90a9-27b30d16f4f2/560x315_netflix-whisky-peaky-blinders-ff.jpg"
);
galerie1.nextOnClick(0);

galerie2.addImage(
  "https://thumb.modcdn.io/mods/a923/1020305/thumb_1020x2000/naruto-kcm-2.png"
);
galerie2.addImage(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJq33nqUoxmu-PRN2kYZNoA_jqOwTg3wTbuA&usqp=CAU"
);
galerie2.addImage("https://images-cdn.9gag.com/photo/avrepzd_700b.jpg");
galerie2.nextOnClick(1);
