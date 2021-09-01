document.getElementById('search-button').addEventListener('click', function(){
    const inputText = document.getElementById('search-input');
    const inputValue = inputText.value;
    inputText.value = '';
    const url = `http://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => gettingData(data.docs))
});
const gettingData = data => {
    console.log(data)
    if(data.length === 0){
        alert("We do not find your Result!");
    }
    else{
    //Total result function
    const totalElement = data.length;
    const t = document.getElementById('total-result');
    t.innerHTML = '';
    const h = document.createElement('h1');
    h.classList.add('text-center');
    h.innerText = `Total Result found:${totalElement}`
    t.appendChild(h);
    // Book demonstrate function
    const addBook = document.getElementById('add-element');
    addBook.innerHTML = '';
    data.slice(0,9).forEach(element => {
    const bookName = element.title;
    const authorName = element.author_name;
    const firstPublished = element.first_publish_year;
    const bookCover = element.cover_i;
    const bookPublisher = element.publisher.slice(0,3);
    const div2 = document.createElement('div');
    div2.classList.add('col');
    div2.innerHTML = `
    <div class="card h-100">
      <img class="img-fluid image"  src="https://covers.openlibrary.org/b/id/${bookCover}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body mb-5">
        <h2 class="card-title">1.Book Name: ${bookName}</h2>
        <h3 class="card-text my-3">2.Author Name: ${authorName}</h3>
        <h4 class="card-title">3.First Published: ${firstPublished}</h4>
        <h4 class="card-title mt-3">4.Publisher: ${bookPublisher}</h4>
      </div>
    </div>
    `
    addBook.appendChild(div2);
    });
    };
};
