// import express
import express from "express";
  
// import function from controller
import { showProducts, showProductById, createProduct } from "../controllers/products.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', showProductById);
  
// Create New Product
router.post('/products', createProduct);

  
// export default router
export default router;