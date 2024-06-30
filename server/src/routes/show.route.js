import express from "express";
import { retrieveInfo, showDetails } from "../controllers/show.controller.js";

const router = express.Router();

router.get("/:type", retrieveInfo);             // movies shows routes in bunch
router.get("/details/:id", showDetails);  // details of a show

export default router;