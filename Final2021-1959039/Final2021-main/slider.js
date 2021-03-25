$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
	});

	getData();
});

function getData() {
	let url = "https://fakestoreapi.com/products?limit=8";
	let xhr = new XMLHttpRequest();

	xhr.open("GET", url, true);
	xhr.onload = function () {
		if (this.status == 200) {
			let res = JSON.parse(this.responseText);
			console.log(res);
			outputProducts(res);
		}
	};
	xhr.send();
}

function outputProducts(productList) {
	for (let index = 0; index < productList.length; index++) {
		let url = productList[index].image;

		let data = `
		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			 <div class="card">
				<img class="product-img" width='100px' height='100px' src="${url}">
				<div class="card-body">
      	<h5 class="card-title">${productList[index].title}</h5>
				<p class="card-text">${productList[index].price}</p>
    		</div>
		</div>
		</div>
		`;

		$(".product").append(data);
	}
}
