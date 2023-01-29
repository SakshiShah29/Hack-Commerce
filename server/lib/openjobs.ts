import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import { logger } from "../services/logger";
import { Company, Openings, Skill, Job } from "../types/openings.interface";

const jobs_url = process.env.JOB_URL as string;
class Platforms {
  private config;
  constructor() {}

  public async Indeed(): Promise<any> {
    try {
      const { data, status } = await axios.get(jobs_url, {
        headers: {
          Accept: "application/json",
        },
      });

      logger.info(`job-response`);
      //   let openings: Openings[];
      //   const jobs: Array<any> = data.pageProps.jobs;

      //   jobs.forEach((job) => {
      //     const company_name = job["company"] as string;
      //     const startup = job["startup"] as boolean;
      //     const company: Company = {
      //       company_name,
      //       startup,
      //     };

      //     const languages = job?.skills.Language as string[];
      //     const frontend = job?.skills["Web Frontend"] as string[];
      //     const backend = job?.skills["Web Backend"] as string[];
      //     const cloud = job?.skills["Cloud/Infrastructure"] as string[];

      //     const skill: Skill = {
      //       languages,
      //       frontend,
      //       cloud,
      //       backend,
      //     };

      //     const location = job.loc as string;
      //     const link = job.link as string;
      //     const salary_range = job.salary as string;
      //     const role = job.title as string;
      //     const experience = job.experience;
      //     const remote = job.remote as boolean;
      //     const opening: Job = {
      //       job_type: "",
      //       location,
      //       link,
      //       salary_range,
      //       role,
      //       description: "",
      //       experience,
      //       remote,
      //     };

      //     openings.push({
      //       company,
      //       skill,
      //       job: opening,
      //     });
      //   });

      //   console.log(openings);

      return { data, status };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.message;
      } else {
        return "An unexpected error occurred";
      }
    }
  }
}

export const platform = new Platforms();
