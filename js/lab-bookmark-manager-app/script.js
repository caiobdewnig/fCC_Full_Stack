const categoryDropdown = document.querySelector("#category-dropdown");
const viewCategoryBtn = document.querySelector("#view-category-button");
const addBookmarkBtn = document.querySelector("#add-bookmark-button");
const mainSection = document.querySelector("#main-section");
const formSection = document.querySelector("#form-section");
const addBookmarkBtnForm = document.querySelector("#add-bookmark-button-form");
const closeFormBtn = document.querySelector("#close-form-button");
const listSection = document.querySelector("#bookmark-list-section");
const categoryList = document.querySelector("#category-list");
const closeListBtn = document.querySelector("#close-list-button");
const deleteBookmarkBtn = document.querySelector("#delete-bookmark-button");
const nameInput = document.querySelector("#name");
const urlInput = document.querySelector("#url");

/**
 * Test 5 Fix: Handles invalid data in localStorage.
 * Attempts to parse bookmarks from localStorage. If the data is not valid JSON,
 * not an array, null, undefined, or contains invalid bookmark objects, 
 * it returns an empty array.
 */
function getBookmarks() {
  try {
    const storedData = localStorage.getItem('bookmarks');
    
    // Se não há dados armazenados, retorna array vazio
    if (storedData === null || storedData === undefined) {
      return [];
    }
    
    // Tenta fazer o parse do JSON
    const parsedData = JSON.parse(storedData);
    
    // Verifica se é um array válido
    if (!Array.isArray(parsedData)) {
      return [];
    }
    
    // Opcional: verificar se cada item do array é um objeto bookmark válido
    // (descomente se necessário para validação mais rigorosa)
    
    const isValidBookmarkArray = parsedData.every(item => 
      item && 
      typeof item === 'object' && 
      typeof item.name === 'string' && 
      typeof item.category === 'string' && 
      typeof item.url === 'string'
    );
    
    if (!isValidBookmarkArray) {
      return [];
    }
    
    
    return parsedData;
    
  } catch (error) {
    // Em caso de erro no JSON.parse ou qualquer outro erro, retorna array vazio
    console.warn('Error parsing bookmarks from localStorage:', error);
    return [];
  }
}
function displayOrCloseForm() {
  formSection.classList.toggle("hidden");
  mainSection.classList.toggle("hidden");
}

addBookmarkBtn.addEventListener("click", () => {
  displayOrCloseForm();
  // Fix: Target the correct h2 element inside the form section
  formSection.querySelector(".category-name").innerText = categoryDropdown.value.charAt(0).toUpperCase() + categoryDropdown.value.slice(1);
});

addBookmarkBtnForm.addEventListener("click", () => {
  const newBookmark = {
    name: nameInput.value,
    category: categoryDropdown.value,
    url: urlInput.value
  };

  const bookmarks = getBookmarks();
  bookmarks.push(newBookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Test 12 Fix: Reset input fields after submission.
  nameInput.value = "";
  urlInput.value = "";

  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", displayOrCloseForm);

function displayOrHideCategory() {
  mainSection.classList.toggle("hidden");
  listSection.classList.toggle("hidden");
}

/**
 * Refactor for Tests 22 & 23: Renders the bookmark list for a given category.
 * This avoids duplicating code and fixes the delete functionality.
 */
function renderBookmarks(selectedCategory) {
  const bookmarks = getBookmarks();
  const filtered = bookmarks.filter((b) => b.category === selectedCategory);

  // Clears the list to prevent duplication (Fix for Test 22)
  categoryList.innerHTML = "";

  if (filtered.length === 0) {
    categoryList.innerHTML = "<p>No Bookmarks Found</p>";
    return;
  }

  filtered.forEach((b) => {
    // Tests 18 & 19 Fix: Set radio button id and label's 'for' to the bookmark name.
    const radioHTML = `
      <div>
        <input type="radio" id="${b.name}" name="bookmark" value="${b.name}">
        <label for="${b.name}">
          <a href="${b.url}" target="_blank">${b.name}</a>
        </label>
      </div>
    `;
    categoryList.innerHTML += radioHTML;
  });
}

viewCategoryBtn.addEventListener("click", () => {
  displayOrHideCategory();
  const selectedCategory = categoryDropdown.value;
  // Fix: Target the correct h2 element inside the list section
  listSection.querySelector(".category-name").innerText =
    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);

  renderBookmarks(selectedCategory);
});

closeListBtn.addEventListener("click", displayOrHideCategory);

/**
 * Test 23 Fix: Deletes a bookmark and re-renders the list
 * without causing the screen to flash or return to the main view.
 */
deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
  if (!selectedRadio) {
    alert("Select a bookmark to delete.");
    return;
  }

  const selectedName = selectedRadio.value;
  const selectedCategory = categoryDropdown.value;

  let bookmarks = getBookmarks();

  bookmarks = bookmarks.filter(
    (b) => !(b.name === selectedName && b.category === selectedCategory)
  );

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Re-render the list for the current category to show the change
  renderBookmarks(selectedCategory);
});


/*
Versão com lógica errada para adicionar um bookmark ao array de bookmarks. Versão correta logo abaixo (erro principal: tentei dar push na função getBookmarks e )

addBookmarkBtnForm.addEventListener("click", () => {
    displayOrCloseForm ();

    getBookmarks().push( () => {
      let category = categoryDropdown.value;
      return {
        name: `${document.querySelector("#name")}`,
        category: category,
        url: `${document.querySelector("#url")}`,
      }
    })

    let usernames1 = JSON.parse(localStorage.getItem('bookmarks'))
console.log(usernames1)
})
*/

/*
Serve para deixar tudo bom e bonito:

let usernames = ['Jessica', 'Jessica2', 'Jessica3', 'Jessica4'];
localStorage.setItem('usernames', JSON.stringify(usernames));


let usernames1 = JSON.parse(localStorage.getItem('usernames'));
console.log(usernames1); // ['Jessica', 'Jessica2', 'Jessica3', 'Jessica4']
*/

/* Sinceramente, eu não tinha ideia de como fazer uma função pra remover os bookmarks.

deleteBookmarkBtn.addEventListener("click", () => {

  let bookmarkArr = JSON.parse(localStorage.getItem('bookmarks'));
  
  bookmarkArr.map((e) => {
    if (pepeu.checked.classList.contains(`#${e.name}`)) {
      pepeu.checked.remove()
      localStorage.removeItem(`${e.name}`)
    }
  })
})
*/

/* Outra das minhas funções erradas

viewCategoryBtn.addEventListener("click", () =>{

  displayOrHideCategory();

  document.querySelector(".category-name").innerText = categoryDropdown.value.charAt(0).toUpperCase() + categoryDropdown.value.slice(1);

  let bookmarkArr = JSON.parse(localStorage.getItem('bookmarks'));

  bookmarkArr.map((e) => {
    if (e.category !== "news" || e.category !== "entertainment" || e.category !== "work" || e.category !== "miscellaneous") {
      categoryList.innerHTML = "<p>No Bookmarks Found</p>"
    } else {
      categoryList.innerHTML = `
      <label for="${e.name}><a href="${e.url}">${e.name}</a></label>
      <input type="radio" id="${e.name}" value="${e.name}" name="pepeu"/>
      `
    }
  })
})
*/
/* Lógica correta, mas fCC maldito não entende:
function getBookmarks () {
  let bookmarkArr = JSON.parse(localStorage.getItem('bookmarks'));
  if (bookmarkArr) {
    return bookmarkArr;
  } else {
    return []
  }
}
*/