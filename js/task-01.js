// В HTML есть список категорий ul#categories.
// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.
const AllLiEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${AllLiEl.length}`)

const AllLiElEl = [...AllLiEl].map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`).join(".\n");
console.log(AllLiElEl);
