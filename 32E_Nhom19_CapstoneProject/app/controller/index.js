// GET : Lấy dữ liệu từ server về //

console.log(axios);

function layDanhSachSanPhamAPI() {

    const promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        ResponseType: JSON,
    });


    // Xử lý thành công
    promise.then(function (result) {
        console.log(result.data.content);
        renderTable(result.data.content);
    });

    promise.catch(function (error) {
        console.log(error);
    });
}

// Gọi hàm dữ liệu khi trang web vừa load xong

window.onload = function () {
    layDanhSachSanPhamAPI();

};

function renderTable(arrProduct) {

    let html = "";
    let item = [];
    for (let i in arrProduct) {
        item = arrProduct[i];

        html += `
        <div class="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <div class="img-top">
                           <img class="img-fluid" src="${item.image}" alt="#">
                        </div>
                        <h3>${item.name}</h3>
                        <p>${item.shortDescription}
                        </p>
                        <div class="row">
                            <a class="col-6" href="./app/views/detail.html?productid=${item.id}">Buy now</a>
                            <span class="col-6">${item.price}$</span>
                        </div>
                    </div>
                </div>`;
        document.querySelector("#products").innerHTML = html;
    }
}