class Product{
    constructor(name, price, year){
        this.name=name;
        this.price=price;
        this.year=year;
    }


}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.className = 'card text-center mb-4';
        element.innerHTML = `
        
            <div class="card body">
                <strong>Product Name</strong>: ${product.name}</<strong>
                <strong>Price</strong>: ${product.price}</<strong>
                <strong>Year</strong>: ${product.year}</<strong>
                <a href="#" class="btn btn-danger" name="delete">X</a>
            </div>
        
        `;

        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('form-product').reset();
    }

    deleteProduct(element){
        //console.log();
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.parentElement.remove();
        }
      
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        //showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('app');
        container.insertBefore(div, app);
        setTimeout( function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

//Manipular el DOM


document.getElementById('form-product').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);
    
    const ui = new UI();
    if(name === ''){
        e.preventDefault();
        ui.showMessage('Debes rellenar el nombre del producto', 'danger');
       
    }else if(price === '') {
        e.preventDefault();
        ui.showMessage('Debes rellenar el precio del producto', 'danger');
    }else{
        ui.addProduct(product);
        ui.showMessage('Product added successfully', 'success');
    }

   
   
    
    ui.resetForm();

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showMessage('Product deleted successfully', 'danger');

});