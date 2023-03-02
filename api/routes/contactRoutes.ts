import { Request, Response } from "express";
import { ContactController } from "../controllers/contactController";

export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app: any): void {
        app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });

        app.route("/")
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });

        // get and post request
        app.route("/contacts")
            .get(this.contactController.getContacts)
            .post(this.contactController.addNewContact);

        // contact detail (getById, updateById, deleteById)
        app.route("/contacts/:contactId")
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}