import express from "express";
import { Request, Response, NextFunction } from "express";
import { platform } from "../lib/openjobs";
import { logger } from "../services/logger";

const router = express.Router();

router.get(
  "/openings",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, status } = await platform.Indeed();

      if (status >= 400) {
        throw new Error(data);
      }

      logger.info("openings-send");
      return res.status(status).send(data);
    } catch (error) {
      logger.info(error.message);
      return res.status(error.status).send(error.message);
    }
  }
);

export { router as job };
