const search_input = document.getElementById("search_input");
const products = document.querySelectorAll(".Product_item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document.getElementById("search_price").querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};
const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};
const searchPriceHandler = event =>{
    const serachPrice = +event.target.parentElement.children[0].value

    products.forEach(product => {
        const productPrice = product.children[2].innerText
        const final_price = +productPrice.split(" ")[1];
        if (serachPrice == 0) {
            product.style.display="block"
        } else{
            serachPrice === final_price
              ? (product.style.display = "block")
              : (product.style.display = "none");  
        }
    })
}
const start = () => {
        buttons.forEach((button) => {
          button.addEventListener("click", filterHandler);
        });
        search_input.addEventListener("keyup", searchHandler);
        priceButton.addEventListener("click", searchPriceHandler);
}
window.addEventListener("load" , start)

