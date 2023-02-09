class Product {

    static productCount = 0;

    constructor(name, price) {
        this._name = name;
        this._price = price;
        this._idProduct = Product.productCount++;
    }
    
    get idProduct() {
        return this._idProduct;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        return `ID Prodcut: ${this._idProduct},
                Name: ${this._name},
                Price: ${this._price}`
    }
}


class Order {

    static OrderAccount = 1;

    static get MAX_PRODUCTS() {
        return 5;
    }

    constructor(product) {
        this._product = [];
        this._idOrder = Order.OrderAccount++;
        this._addProductAccount = 0;

    }

    get idOrder() {
        return this._idOrder;
    }

    addProduct(product) {
        if(this._product.length < Order.MAX_PRODUCTS){
            this._product.push(product);
        } else {
            console.log("Can't add new products");
        }
    }

    calculateTotal() {
        let total = 0;
        for(let product of this._product) {
            total += product.price;
        }
        return total;
    }

    showOrder() {
        let productOrder = '';
        for(let product of this._product) {
            productOrder += '\n{' + product.toString() + '}';
        }

        console.log(`Order: ${this._idOrder}, 
                    Total: $${this.calculateTotal()},
                    Productos: ${productOrder}`);
    }
}

let product1 = new Product("Laptop", 12500000);
let product2 = new Product("Cellphone", 750000);
let product3 = new Product("TV", 200000);
console.log(product1.toString());
console.log(product2.toString());

let order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);
order1.showOrder();

let order2 = new Order();
order2.addProduct(product3);
order2.addProduct(product1);
order2.showOrder();