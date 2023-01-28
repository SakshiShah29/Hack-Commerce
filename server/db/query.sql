CREATE TABLE users(
      user_id UUID PRIMARY KEY,
      name STRING(100),
      email STRING(320),
      type STRING(50),
      created_at TIMESTAMPTZ
);

CREATE TABLE company(
      company_id UUID PRIMARY KEY,
      name STRING(100),
      user_id UUID,
      CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
      created_at TIMESTAMPTZ
);

CREATE TABLE skill(
      skill_id UUID PRIMARY KEY,
      languages STRING(100),
      location STRING[],
      frontend STRING[],
      backend STRING[],
      cloud STRING[],
      created_at TIMESTAMPTZ
);

CREATE TABLE jobs(
      job_id UUID PRIMARY KEY,
      type STRING(100),
      location STRING(300),
      link STRING(400),
      pay_range STRING(100),
  	  position STRING(200),
      description STRING(500),
      created_at TIMESTAMPTZ,
      company_id UUID,
  	  skill_id UUID,
      CONSTRAINT skill_id FOREIGN KEY (skill_id) REFERENCES skill(skill_id),
  	CONSTRAINT company_id FOREIGN KEY (company_id) REFERENCES company(company_id)
);


