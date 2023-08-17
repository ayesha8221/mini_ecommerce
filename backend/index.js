// import express
import express from "express";
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";
 
// import routes
import router from "./routes/routes.js";
   
// init express
const app = express();
const port = +process.env.PORT || 3010
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(router);
// app.get('/admin', (req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
// })
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
