import { Router, Request, Response } from "express";
import { body } from "express-validator";
import {
  validateRequest,
  NotFoundError,
  requireAuth,
  NotAuthorizedError
} from "@hkmicroservice/common";
import { Ticket } from "../models/ticket.model";

const router = Router();

router.put("/:id", requireAuth,
  [
    body("title")
        .notEmpty()
        .withMessage("Title is required"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, price } = req.body;

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      throw new NotFoundError();
    }

    if (ticket.userId !== req.currentUser!.id) {
        throw new NotAuthorizedError();
    }

    ticket.set({ title, price });

    await ticket.save();

    res.send(ticket);
  }
);

export { router as updateTicketRouter };
