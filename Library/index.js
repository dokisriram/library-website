console.log('This is ES6 version of project');


class Book {
    constructor(name, author, type) {
        this.name = name,
            this.author = author,
            this.type = type;
    }
}

class Display {
    add(book) {
        console.log('adding to UI');
        let tablebody = document.getElementById('tablebody');
        let uistring = `   <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>    
                    </tr>`;
        tablebody.innerHTML += uistring;
    }

clear() {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}
validate(book) {
    if (book.name.length < 2 || book.author.length < 2)
        return false;

    else {
        return true;
    }
}
show(type, displaymessage) {
    let message = document.getElementById('message');
    let boldtext;
    if(type==='success'){
        boldtext='success';
    }
    else{
        boldtext='Error';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldtext}</strong>${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                            </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}

}



//add submit event listener to libraryform
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookname').value
    let author = document.getElementById('author').value

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.checked;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been added successfully');
    }
    else {
        // show the error to the user
        display.show('Danger', ' Sorry you cannot add this book');
   }
    e.preventDefault();
}





