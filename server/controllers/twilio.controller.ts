import twilio, { Twilio } from "twilio";
import { Request, Response, NextFunction } from "express";
import { logger } from "../services/logger";
import dotenv from "dotenv";
dotenv.config();

const { TWILIO_SERVICE_SID, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } =
  process.env;

class TwilioSDK {
  private service_sid: string;
  private twilio_account_sid: string;
  private twilio_auth_token: string;
  public twilio_client: Twilio;

  constructor() {
    this.service_sid = TWILIO_SERVICE_SID;
    this.twilio_account_sid = TWILIO_ACCOUNT_SID;
    this.twilio_auth_token = TWILIO_AUTH_TOKEN;
    this.twilio_client = twilio(
      this.twilio_account_sid,
      this.twilio_auth_token
    );
    console.log(this.twilio_auth_token);
    this.sendOtp = this.sendOtp.bind(this);
    this.verifyOtp = this.verifyOtp.bind(this);
  }

  //send OTP
  public sendOtp(req: Request, res: Response, next: NextFunction) {
    const { countryCode, phoneNumber } = req.body;
    logger.info(countryCode);
    logger.info("sendOtp execute");
    this.twilio_client.verify.v2
      .services(this.service_sid)
      .verifications.create({
        to: `+${countryCode}${phoneNumber}`,
        channel: "sms",
      })
      .then((verification) => {
        logger.info(verification.sid);
        res
          .status(200)
          .send(`OTP send successfully!: ${JSON.stringify(verification)}`);
      })
      .catch((error) => {
        res
          .status(error?.status || 400)
          .send(error || "Something went wrong!");
      });
  }
  //verifyOTP
  public verifyOtp(req: Request, res: Response, next: NextFunction) {
    const { countryCode, phoneNumber, otp } = req.body;

    try {
      this.twilio_client.verify
        .services(TWILIO_SERVICE_SID)
        .verificationChecks.create({
          to: `+${countryCode}${phoneNumber}`,
          code: otp,
        })
        .then((verifiedResponse) => {
          logger.info(verifiedResponse);

          res
            .status(208)
            .send(
              `OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`
            );
        });
    } catch (error) {
      logger.error(error);
      return res
        .status(error?.status || 408)
        .send(error?.message || "Something went wrong!");
    }
  }
}

export default new TwilioSDK();
