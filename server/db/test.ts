import { CockroachClient } from "./cockroach";
import { logger } from "../services/logger";

CockroachClient.query("SELECT NOW() as now", (err, res) => {
  if (err) {
    logger.error(err.stack);
  } else {
    logger.info(res.rows[0]);
  }
});
