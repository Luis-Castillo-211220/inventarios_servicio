import express  from "express";
import { createProductController,deleteProductController,getAllProductController } from "./dependencies";

export const productRouter = express.Router();

productRouter.post("/create",createProductController.run.bind(createProductController));
productRouter.get("/listAll", getAllProductController.run.bind(getAllProductController));
productRouter.delete("/delete/:id", deleteProductController.run.bind(deleteProductController));