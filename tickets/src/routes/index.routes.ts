import express from "express";
import { createTicketRouter } from "./new";
import { showTicketRouter } from "./show"
import { indexTicketRouter } from "./index"
import { updateTicketRouter } from "./update"
import { currentUser } from "@hkmicroservice/common";

const router = express.Router();

router.use(currentUser);
router.use(createTicketRouter);
router.use(indexTicketRouter);
router.use(showTicketRouter);
router.use(updateTicketRouter);

export { router as routes };
