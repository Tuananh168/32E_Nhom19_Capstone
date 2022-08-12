window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("productid");




    const promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + myParam,
        method: "GET",
        ResponseType: JSON,
    });



    promise.then(function (result) {
        console.log(result.data.content);

        const item = result.data.content;

        debugger
        renderTable(item, '#detail');

        setSize(item.size, '#size');

        realateProduct(item.relatedProducts, '#products');

    })

    promise.catch(function (error) {
        console.log(error)
    })



};





renderTable = (value, id) => {
    var html = '';
    let result;
    result = value.description.slice(0, 200) + '...'

    html += ` <div class="row">
                    <div class="col-left">
                         <div class="img">
                            <img src="${value.image}" alt="">
                        </div>
                    </div>
                    <div class="col-right">
                        <h1>${value.name}</h1>
                        <p>${result}

                        </p>
                        <h3>Available size</h3>
                        <div class="button-size" id="size"></div>
    
                        <h4>${value.price}$</h4>
                        <div class="button-amount">
                            <button class="button-plus">+</button>
                            <span class="count">1</span>
                            <button class="button-minus">-</button>
                        </div>
                        <div class="button-add">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>`



    document.querySelector(id).innerHTML = html;
}




setSize = (value, id) => {
    let productSize = '';
    for (i = 0; i < value.length; i++) {
        productSize += `<button>${value[i]}</button>`
    }
    document.querySelector(id).innerHTML = productSize;

}

realateProduct = (value, id) => {
    let realate = '';
    for (i = 0; i < value.length; i++) {
        realate += `<div class="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="card">
            <div class="img-top">
               <img class="img-fluid" src="${value[i].image}" alt="#">
            </div>
            <h3>${value[i].name}</h3>
            <p>${value[i].shortDescription}
            </p>
            <div class="row">
                <a class="col-6" href="../views/detail.html?productid=${value[i].id}">Buy now</a>
                <span class="col-6">${value[i].price}$</span>
            </div>
        </div>
    </div>`
    }
    document.querySelector(id).innerHTML = realate;
}





