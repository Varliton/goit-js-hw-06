const categoriesRef = document.querySelectorAll('.item')
console.log('Number of categories:', categoriesRef.length)
categoriesRef.forEach((item) => {
    console.log('Categories:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length);
})