import BaseOTS from './BaseOTS';

class ProductOTS extends BaseOTS {
    constructor() {
        super();
        this.fetchProducts = "fetch_products";
        this.fetchProduct = "fetch_product";
        this.addProduct = "add_product";
        this.editProduct = "edit_product";
        this.removeProduct = "remove_product";
    }  
}

export default new ProductOTS();