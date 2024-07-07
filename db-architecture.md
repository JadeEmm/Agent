seeker table

- id (primary key): String
- name: String,
- photos: [String],
- description: String,
- workHistory: String,
- fullName: String,
- address: String,
- phoneNumber: String,
- emailAddress: String,
- education: String,
- relevantLinks: String,
- workAuthorization: Boolean,
- requiresSponsorship: Boolean,
- disability: Boolean,
- veteran: Boolean,
- ethnicity: String,
- gender: String,
- resumeLink: String,
- resumes: [String]
- numApps: int
- numCredits: int
- allAgents (foreign keys): [String]
- activeAgent (foreign key): String
- preferredLocation: String,
- preferredCompanySize: String,
- preferredIndustry: String,
- preferredSalary: String

agent table

- id (primary key): String
- email: String
- phoneNumer: String
- name: String,
- photos: [String],
- description: String
- allSeekers (foreign keys): [String]
- activeSeekers (foreign keys): [String]
- specializations: [String]

applications table

- id (primary key): String
- seeker id (foreign key): String
- agent id (foreign key); String
- jobTitle: String
- companyName: String
- postingLink: String
- dateSubmitted: String
- postingDate: String
- jobLocation: String
- loginInfo: String
- notes: String
- resumeUsed: String. Null if not tailored.

transactions table

- id (primary key): int
- seeker id (foreign key): String
- agent id (foreign key); String
- date: String
- amount: int
