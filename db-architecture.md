seeker collection

- \_id (primary key): String
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
- orders (foreign keys): [string]

agent collection

- \_id (primary key): String
- email: String
- phoneNumer: String
- name: String,
- photos: [String],
- description: String
- allSeekers (foorders collection
- \_id (primary key): int
- reign keys): [String]
- activeSeekers (foreign keys): [String]
- specializations: [String]
- orders (foreign keys): [string]

applications collection

- \_id (primary key): String
- seeker id (foreign key): String
- agent id (foreign key); String
- jobTitle: String
- companyName: String
- postingLink: String
- dateSubmitted: Stringorders collection
- \_id (primary key): int
-
- postingDate: String
- jobLocation: String
- loginInfo: String
- notes: String
- resumeUsed: String. Null if not tailored.

transactions collection

- \_id (primary key): int
- seeker id (foreign key): String
- agent id (foreign key); String
- date: String
- amount: int

orders collection

- \_id (primary key): int
- seekerId?: string,
- agentId?: string,
- tier: enum("one", "two"),
- numApps: Number,
- numAppsCompleted: Number,
- status: enum("pending", "in-progress", "complete"),
