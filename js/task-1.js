const categoriesElem = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesElem.length}`);

categoriesElem.forEach((category) => {
  const titleElem = category.querySelector('h2').textContent;
  const countElem = category.querySelectorAll('ul li').length;

  console.log(`Category: ${titleElem}`);
  console.log(`Elements: ${countElem}`);
});