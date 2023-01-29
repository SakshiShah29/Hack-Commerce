import express from "express";
import { Request, Response, NextFunction } from "express";
import Twilio from "../controllers/twilio.controller";

const router = express.Router();

router.post("/send-otp", Twilio.sendOtp);
router.post("/verify-otp", Twilio.verifyOtp);

export { router as twilio };
