import express from "express";
import bodyParser from "body-parser";
import { Request, Response, ErrorRequestHandler } from "express";
import cors from "cors";
import { logger } from "./services/logger";
import { code } from "./services/user";
import { twilio } from "./routes/twilio.routes";
import { job } from "./routes/jobs.routes";

export const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/code", code);
app.use(cors()); // configure cors
app.use("/twilio", twilio);
app.use("/jobs", job);

app.get("/", (req: Request, res: Response) => {
  logger.info("Health Check");
  return res.status(200).send({
    statusCode: 200,
    response: {
      data: "health check",
    },
  });
});

app.use(((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).send({
    statusCode: 500,
    response: {
      error: err,
    },
  });
}) as ErrorRequestHandler);

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}!`);
});
