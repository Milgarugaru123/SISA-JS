const box = document.querySelector(`.box`);

box.insertAdjacentHTML(
  `afterend`,
  `
  <article class="card">
    <img id="thumb" alt="" />
    <div class="body">
      <p class="cat" id="cat"></p>
      <h2 id="title">${1}</h2>
      <p class="brand" id="brand"></p>
      <div><span class="stars" id="stars"></span><span class="rating" id="rating"></span></div>
      <div class="price"><span id="price"></span><span class="orig" id="orig"></span></div>
      <span class="stock" id="stock"></span>
    </div>
  </article>
  `,
);
