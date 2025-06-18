(
  () => {
    var e = "gifs"; 
    function n() { 
      let t = document.createElement("img");
      let number = 3;
      t.src = `${e}/${number}.gif`,
      t.alt = "GIF of the day: 0"
      t.style.width = "100%"
      document.body.appendChild(t) 
    } 

    window.onload = n;
  }
)()
