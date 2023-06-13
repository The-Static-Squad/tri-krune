const showcase = document.getElementById('showcase');
let showcaseProds = [];
const prodsURL = 'http://localhost:3000/products'

window.addEventListener('load', function () {
	getProducts();

});

function fillShowcase() {
	const fragment = document.createDocumentFragment();
	showcaseProds.forEach(function (product) {
		const productFrame = document.createElement('div');
		productFrame.classList.add('product');

		const productImage = document.createElement('img');
		productImage.src = product.image;
		productImage.alt = productImage + 'photo';
		productImage.classList.add('image');
		productFrame.appendChild(productImage);

		const productData = document.createElement('div');
		productData.classList.add('data');

		const productTitle = document.createElement('h3');
		productTitle.innerText = product.title;
		productTitle.classList.add('title');
		productData.appendChild(productTitle);

		const priceFrame = document.createElement('div');
		priceFrame.classList.add('price');
		productData.appendChild(priceFrame);

		const productPrice = document.createElement('h4');
		productPrice.innerText = product.price.toLocaleString("sr-Latn-RS", {style: "currency", currency: "RSD", minimumFractionDigits: 2});
		productPrice.classList.add('actual-price');
		priceFrame.appendChild(productPrice);

		const addButton = document.createElement('button');
		addButton.type = 'button';
		addButton.innerText = 'DODAJ U KORPU';
		productData.appendChild(addButton);

		productFrame.appendChild(productData);

		const discountLabel = document.createElement('div');

		if (product.price !== product.discount_price) {
			const productDiscount = document.createElement('h4');
			productDiscount.innerText = product.discount_price.toLocaleString("sr-Latn-RS", {style: "currency", currency: "RSD", minimumFractionDigits: 2});
			productDiscount.classList.add('actual-price');
			productPrice.classList.add('previous-price');
			priceFrame.appendChild(productDiscount);

			discountLabel.innerText = 'AKCIJA!';
			discountLabel.classList.add('label');
		}
		productFrame.appendChild(discountLabel);

		fragment.append(productFrame);
	});
	showcase.appendChild(fragment);
}

function getProducts() {

	fetch(prodsURL)
		.then(function (response) {
			return response.json()
		})
		.then(function (products) {
			while (showcaseProds.length < 8) {
				const a = Math.floor(Math.random() * (products.length));
				showcaseProds.push(products.splice(a, 1)[0]);
			}
		})
		.then(function () {
			fillShowcase();
		});
}
