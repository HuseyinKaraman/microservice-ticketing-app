import { Application } from "express";

export default async function (app: Application) {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }

    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI must be defined');
    }

    app.listen(3000, () => {
      console.log('listening on port 3000!');
    });    
}