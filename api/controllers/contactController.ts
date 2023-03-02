//   /src/controllers/fileController.ts
import * as mongoose from "mongoose";
import { ContactSchema } from "../models/contactModel";
import { Request, Response } from "express";

const Contact: any = mongoose.model("Contact", ContactSchema);

export class ContactController {
    public addNewContact(req: Request, res: Response): void {
        let newContact: any = new Contact(req.body);
        newContact.save((err, contact) => {
            if(err) {
                res.send(err);
            }
            res.json(newContact);
        });
    }

    public getContacts (req: Request, res: Response): void {
        Contact.find({}, (err, file) => {
            if(err) {
                res.send(err);
            }
            res.json(file);
        });
    }

    public getContactWithID (req: Request, res: Response): void {
        Contact.findById(req.params.fileId, (err, file) => {
            if(err) {
                res.send(err);
            }
            res.json(file);
        });
    }

    public updateContact (req: Request, res: Response): void {
        Contact.findOneAndUpdate({ _id: req.params.fileId }, req.body, { new: true }, (err, file) => {
            if(err) {
                res.send(err);
            }
            res.json(file);
        });
    }

    public deleteContact (req: Request, res: Response): void {
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted contact!"});
        });
    }

}