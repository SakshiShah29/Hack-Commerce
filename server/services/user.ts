import express from "express";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post("/translation", async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    res.status(200).send({});
  } catch (err) {
    res.status(500).send(err);
    
  }
});

export { router as code };
