import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect"; // ✅ Assure-toi que l'import fonctionne
import multer from "multer";
import path from "path";
import { Express } from "express"; // ✅ Pour Express.Multer.File

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const apiRoute = nextConnect(); // ✅ Vérifier que `nextConnect()` fonctionne

apiRoute.use(upload.single("flag"));

apiRoute.post((req: NextApiRequest & { file?: Express.Multer.File }, res: NextApiResponse) => {
  if (!req.file) {
    return res.status(400).json({ error: "Aucun fichier envoyé" });
  }
  return res.status(200).json({ imageUrl: `/uploads/${req.file.filename}` });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // ✅ Désactiver bodyParser pour utiliser Multer
  },
};
