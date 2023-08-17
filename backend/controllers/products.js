// Import function from Product Model
import { getProducts, getProductById, insertProduct} from "../models/productModels.js";
  
// Get All Products
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  
// Get Single Product 
export const showProductById = (req, res) => {
    getProductById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// // POST - adds a book authors details
// app.get('/products', (req, res) => {
//     const newProduct = {
//         name : 'sdfghj',
//         category : 'sdfghj',
//         price : 2,
//         img: ""
//     }

//     const sql = 'INSERT INTO products SET ?';
//     con.query(sql, newProduct, (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             res.status(500).json('Database error');
//         } else {
//             console.log('Products details added successfully');
//         }
//     });
// });
  
// Create New Product
export const createProduct = (req, res) => {
    const data = req.body;
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
  