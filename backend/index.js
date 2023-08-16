// import express
import express from "express";
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";
 
// import routes
import router from "./routes/routes.js";
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(router);
  
app.listen(8080, () => console.log('Server running at http://localhost:8080'));
