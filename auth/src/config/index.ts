import { Application } from "express";

export default async function (app: Application) {
    app.listen(3000, () => {
      console.log('listening on port 3000!');
    });    
}