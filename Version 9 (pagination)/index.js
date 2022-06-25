function load_books(index){
    const book = document.createElement("div")
    book.classList.add("book_container","col-sm-4")
    book_data = index
    rating = Math.floor(Math.random() * 200 + 1)
    price = Math.floor(Math.random() * 7000 + 3000)

    book.innerHTML =
    `
                <img src="${book_data["imageLink"]}" alt="">
                <p  class="book_name"><a href="${book_data["link"]}" target="_blank"> ${book_data["title"]}</br> By ${book_data["author"]}</p></a></p>
                <div class="align-left">
                    <p class=" price green">Rs.${price}</p>
                    <p class="stock in_stock " data-stock="in stock"><i class="fa fa-check" aria-hidden="true"></i> In stock</p>
                    <div><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star not_filled"></span></div>
                    <p class="review green" data-rating="${rating}">${rating} Reviews</p>
                    <button>Add to cart</button>
                </div>
    `
    container = document.getElementById("container")
    container.appendChild(book)
}

//getting id of the element that fired that event
//behtreen logic 


function load_books_by_page(e)
{
    console.log(e);
    console.log(e.target.id);
    Id_fired = e.target.id;
    var index_1;
    var index_2;
    next_button = document.getElementById("page_next")
    if(Id_fired == "page_1")
    {
        index_1 = 0;
        index_2 = 15;
    }
    if(Id_fired == "page_2")
    {
        index_1 = 15;
        index_2 = 30;
    }
    if(Id_fired == "page_3")
    {
        index_1 = 30;
        index_2 = 45;
    }
    if(Id_fired == "page_4")
    {
        index_1 = 45;
        index_2 = 60;
    }
    if(Id_fired == "page_5")
    {
        index_1 = 60;
        index_2 = 75;
    }
    if(Id_fired == "page_6")
    {
        index_1 = 75;
        index_2 = 90;
    }
    if(Id_fired == "page_7")
    {
        index_1 = 90;
        index_2 = 103;
    }
    if(Id_fired == "page_next")
    {
        index_1 = 75;
        index_2 = 90;
    }     
    container = document.getElementById("container")
    container.innerHTML = ""   
    fetch("books.json")
            .then((res) => {
                return res.json();
            })
            .then(data =>   {
                for(let i=index_1;i<index_2;i++)
                {
                    load_books(data[i])
                }
})
}

for(let i=1;i<=7;i++)
{
    var e = "page_" + i;
    var elem = document.getElementById(e)
    index_1 = 0
    elem.addEventListener('click',load_books_by_page)
    
}
page_1 = document.getElementById("page_1")
page_1.click()