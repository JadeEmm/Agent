seeker table

- id (primary key): int
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
- allAgents (foreign keys): [int]
- activeAgent (foreign key): int
- preferredLocation: String,
- preferredCompanySize: String,
- preferredIndustry: String,
- preferredSalary: String

agent table

- id (primary key): int
- email: String
- phoneNumer: String
- name: String,
- photos: [String],
- description: String
- allSeekers (foreign keys): [int]
- activeSeekers (foreign keys): [int]
- specializations: [String]

applications table

- id (primary key): int
- seeker id (foreign key): int
- agent id (foreign key); int
- jobTitle: String
- companyName: String
- postingLink: String
- dateSubmitted: String
- postingDate: String
- loginInfo: String
- notes: String
- resumeUsed: String. Null if not tailored.

transactions table

- id (primary key): int
- seeker id (foreign key): int
- agent id (foreign key); int
- date: String
- amount: int
