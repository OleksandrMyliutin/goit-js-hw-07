const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
const category = categories.forEach(category => {
    const title = category.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const elements = category.querySelectorAll('li');
    console.log(`Elements: ${elements.length}`);
});