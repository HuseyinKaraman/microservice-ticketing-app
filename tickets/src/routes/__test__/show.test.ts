import request from "supertest";
import { app } from "../../app";
import mongoose from "mongoose";

it("should return 404 if ticket not found", async () => {
//   const id = new mongoose.Types.ObjectId().toHexString();
//   const response = await request(app).get(`/api/tickets/${id}`);

//   console.log(response.status);
//   console.log("error", response.body);

//   expect(response.status).toEqual(404);
});

it("should return a ticket by id", async () => {
  const title = "test1";
  const price = 21;

  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", signin())
    .send({
      title,
      price,
    });

  const ticketResponse = await request(app).get(
    `/api/tickets/${response.body.id}`
  );
  expect(ticketResponse.status).toEqual(200);
  expect(ticketResponse.body).toHaveProperty("id", response.body.id);
  expect(ticketResponse.body).toHaveProperty("title", response.body.title);
});
