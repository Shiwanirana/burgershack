import express from "express";
import Startup from "./Startup";
import DbContext from "./db/DbConfig";
import { BurgerShackController } from "./controllers/BurgerShackController";

//create server & socketServer
const app = express();
const port = process.env.PORT || 3000;

//Establish Socket
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
DbContext.connect();

let burgers = [{name: "burger1"}, {name: "burger2"}]

app.get('/burgers',(req,res,next)=>
res.send(burgers))
app.use('/api/burger', new BurgerShackController().router);

//Start Server
app.listen(port, () => {
  console.log("Server running on port:", port);
});