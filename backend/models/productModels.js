// import connection
import db from "../config/db.js";
  
// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM products", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE productsID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO products SET ?;", [data], (err, results) => {             
        if(err) {
            console.log('Database error');
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Update an existing product
 export const updateProductByID = (id, data, result) => {
    db.query('UPDATE Products SET productName = ?, image = ?, description = ?, price = ?, category = ? WHERE productID = ?', [products.name, products.img, products.category, products.price, products.productID], (err, results) => {
        if (err) {
            console.log(err);
            result({ error: "Failed to update product." }, null);
        } else {
            result(null, results);
        }
        
    });
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

// Delete a product
 export const deleteProductByID = (id, result) => {
    db.query('DELETE FROM Products WHERE productID = ?', [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
};
