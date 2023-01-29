export interface Openings {
  job: Job;
  company: Company;
  skill: Skill;
}

export interface Company {
  // company_id: string | undefined;
  company_name: string;
  // job_id: string | undefined;
  startup: boolean;
}

export interface Job {
  // job_id: string | undefined;
  job_type: string;
  location: string;
  link: string;
  salary_range: string;
  role: string;
  description: string;
  experience: string | string[] | null;
  remote: boolean;
}

export interface Skill {
  // job_id: string | undefined;
  languages: string[];
  frontend: string[];
  backend: string[];
  cloud: string[];
}
