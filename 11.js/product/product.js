const { products } = data;

products.forEach((x) => {
  const {
    category,
    title,
    brand,
    rating,
    discountPercentage,
    price,
    stock,
    thumbnail,
  } = x;
  const item = document.createElement(`article`);
  const img = document.createElement(`img`);
  img.style.cssText = `width: 100%; height: 240px; object-fit: contain; background-color: rgba(0, 0, 0, 0.03); border-radius: 20px 20px 0 0`;
  img.src = thumbnail;
  const desc = document.createElement(`div`);
  desc.classList.add(`desc`);
  const cat = document.createElement(`div`);
  cat.style.cssText = `color: gray; font-size: 16px; font-weight: 400; margin-bottom: 5px; letter-spacing: 2px;`;
  cat.innerHTML = category.toUpperCase();
  const ti = document.createElement(`div`);
  ti.style.cssText = `font-size: 24px; font-weight: bold; margin-bottom: 5px; line-height: 1.2;`;
  ti.innerHTML = title;
  const bra = document.createElement(`div`);
  bra.style.cssText = `color: rgb(73, 73, 73); font-size: 18px; font-weight: 500; margin-bottom: 10px;`;
  bra.innerHTML = brand;
  const rat = document.createElement(`div`);
  rat.style.cssText = `color: orange; margin-bottom: 10px;`;
  rat.innerHTML = `${Array(5)
    .fill(0)
    .map((x, i) => (i < Math.round(rating) ? `★` : `☆`))
    .reduce((x, y) => x + y)} ${rating}`;
  const prices = document.createElement(`div`);
  prices.style.cssText = `margin-bottom: 15px;`;
  const dis = document.createElement(`span`);
  const disPri = ((price * (100 - discountPercentage)) / 100).toFixed(2);
  dis.innerHTML = `$` + disPri;
  dis.style.cssText = `font-size: 24px; font-weight: bold; margin-right: 10px;`;
  const pri = document.createElement(`span`);
  console.log(disPri, price);
  pri.style.cssText = `font-size: 16px; font-weight: 500; color: gray;`;
  pri.innerHTML = +disPri === price ? `` : `<s>$ ${price}</s>`;
  const sto = document.createElement(`div`);
  sto.classList.add(`stock`);
  sto.innerHTML = `재고 ${stock}개`;
  document.querySelector(`section`).appendChild(item);
  item.appendChild(img);
  item.appendChild(desc);
  desc.appendChild(cat);
  desc.appendChild(ti);
  desc.appendChild(bra);
  desc.appendChild(rat);
  desc.appendChild(prices);
  prices.appendChild(dis);
  prices.appendChild(pri);
  desc.appendChild(sto);
});
