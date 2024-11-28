import express from "express";
import { createTicketRouter } from "./new";
import { showTicketRouter } from "./show"
import { currentUser } from "@hkmicroservice/common";

const router = express.Router();

router.use(currentUser);
router.use(createTicketRouter);
router.use(showTicketRouter);

export { router as routes };
