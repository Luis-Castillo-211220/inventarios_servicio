import express from "express";
import cors from "cors";
import { Signale } from 'signale';
import { productRouter } from "./inventory/infraestructure/productRoute";

const app = express();
const signale = new Signale();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/inventario/producto',productRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Corriendo en el puerto ${port}`);
});