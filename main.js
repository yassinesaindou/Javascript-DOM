//Delete Books

const list = document.querySelector('.list');
list.addEventListener('click',(e) =>{
   if(e.target.className =='delete__button'){
        const li = e.target.parentNode;
        list.removeChild(li);
    }
    console.log(e.target);
})
// Add books
const addForm = document.forms['add__form'];
addForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = addForm.querySelector('input[type=text]').value;
   
    //Create New Elements
    const li = document.createElement('li');
    const bookName = document.createElement('p');
    const deleteButton = document.createElement('button');

    // Add classes
    bookName.classList.add('input__book');
    deleteButton.classList.add('delete__button');
    // Adding Content to bookName
    bookName.textContent = value;
    deleteButton.textContent = 'Delete';
    // appending elements to their respective parents

    li.appendChild(bookName);
    li.appendChild(deleteButton);
    list.appendChild(li);

})

// Show and Hide books

const check = document.querySelector('#check');
check.addEventListener('change',(e)=>{
    list.classList.toggle('hide__books');  
})
// Disable the button
const formHeader = document.forms['header__form'];
formHeader.addEventListener('click',(e)=>{
    e.preventDefault();
})
// Filter books

const inputBook = document.forms['header__form'].querySelector('input');
inputBook.addEventListener('keyup',(e)=>{
    
    const value = e.target.value.toLowerCase();

    const books = list.getElementsByTagName('li');

    Array.from(books).forEach(book =>{
        const text = book.querySelector('.book__title').textContent.toLowerCase();
        if(text.indexOf(value) == -1){
            book.classList.add('hide__books');
        }
        else{
            book.classList.remove('hide__books');
        }

    })

})