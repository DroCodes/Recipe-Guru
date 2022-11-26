import fs from "fs";

class RecipeImageController {
    public uploadImage(req: any, res: any) {
        // let fileType = req.file.mimetype.split("/")[1];
        let fileType = ".jpg";
        let newFileName = req.body.RecipeName + fileType;
        console.log(req.body);

        fs.rename(
            `./uploads/${req.file.filename}`,
            `./uploads/${newFileName}`,
            () => {
                res.send("200");
            }
        );
    }
}

export { RecipeImageController };
