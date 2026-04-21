# Data Model: Modern Portfolio Application

**Feature**: 002-portfolio-app  
**Date**: 2026-04-21

## Overview

All portfolio data is static and externalized to JSON files for easy content management. TypeScript interfaces provide type safety for data imports.

## Type Definitions

### Profile

```typescript
// src/types/portfolio.ts

export interface Profile {
  name: string;
  title: string;
  greeting: string;
  typewriterPhrases: string[];
  bio: string;
  profileImageUrl: string;
  cvUrl: string;
}
```

**Example Data** (`src/data/profile.json`):
```json
{
  "name": "Santhosh",
  "title": "Full Stack Developer",
  "greeting": "Hello",
  "typewriterPhrases": [
    "I am Santhosh.",
    "I ❤ to design.",
    "I ❤ to develop.",
    "I ❤ to code."
  ],
  "bio": "Innovative optimised solution seeker, excited to be at the development phase of my career as a Full stack developer with 8+ years of extensive experience in participating in all phases of software development. Possess a strong attention to detail, well-developed time management skills, and ability to complete all projects within schedule and in a timely manner.",
  "profileImageUrl": "/assets/images/profile.png",
  "cvUrl": "/assets/resume/Santhosh.pdf"
}
```

---

### Skill

```typescript
export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
}
```

**Example Data** (`src/data/skills.json`):
```json
[
  { "id": "node", "name": "Node", "proficiency": 90 },
  { "id": "aws", "name": "AWS", "proficiency": 75 },
  { "id": "html-css", "name": "HTML/CSS", "proficiency": 85 },
  { "id": "react", "name": "React", "proficiency": 80 },
  { "id": "graphql", "name": "GraphQL API", "proficiency": 80 },
  { "id": "rest", "name": "Restful API", "proficiency": 70 },
  { "id": "sql", "name": "SQL", "proficiency": 80 },
  { "id": "mongodb", "name": "MongoDB", "proficiency": 80 },
  { "id": "jenkins", "name": "Jenkins", "proficiency": 60 },
  { "id": "docker", "name": "Docker", "proficiency": 50 }
]
```

---

### Experience

```typescript
export interface Experience {
  id: string;
  startDate: string;      // "Mar, 2024"
  endDate: string | null; // null means "Present"
  title: string;
  company: string;
  location: string;
  description: string;
}
```

**Example Data** (`src/data/experience.json`):
```json
[
  {
    "id": "nagarro",
    "startDate": "Mar, 2024",
    "endDate": null,
    "title": "Senior Staff Engineer, Tech Lead",
    "company": "Nagarro Software",
    "location": "India",
    "description": "Developing microservices and front-end web components in the following technologies: React, Node, AWS, MongoDB"
  },
  {
    "id": "oracle-cerner",
    "startDate": "Apr, 2022",
    "endDate": "Mar, 2024",
    "title": "Software Engineer III",
    "company": "Oracle Cerner",
    "location": "India",
    "description": "Developing microservices and front-end web components in the following technologies: React, Angular, Node"
  },
  {
    "id": "fluke",
    "startDate": "Jun, 2021",
    "endDate": "Apr, 2022",
    "title": "Software Design Engineer",
    "company": "Fluke Corporation",
    "location": "India",
    "description": "Developing microservices and front-end web components in the following technologies: React, Redux, AWS S3, RDS, API Gateway, SignalR"
  },
  {
    "id": "cerner-senior",
    "startDate": "Nov, 2019",
    "endDate": "Jun, 2021",
    "title": "Associate Senior Software Engineer",
    "company": "Cerner Corporation",
    "location": "India",
    "description": "Developed web services and front-end web components in the following technologies: JavaScript, React, GraphQL, Node.js, Express"
  },
  {
    "id": "cerner",
    "startDate": "Aug, 2018",
    "endDate": "Nov, 2019",
    "title": "Software Engineer",
    "company": "Cerner Corporation",
    "location": "India",
    "description": "Worked as part of the application development team, contributing to team projects and developing applications and services"
  },
  {
    "id": "ntt-senior",
    "startDate": "Dec, 2016",
    "endDate": "Aug, 2018",
    "title": "Software Development Senior Associate",
    "company": "NTT Data Services",
    "location": "India",
    "description": "Developed custom modules & interfaces in C# .NET technologies"
  },
  {
    "id": "ntt-intern",
    "startDate": "Aug, 2016",
    "endDate": "Dec, 2016",
    "title": "Software Intern",
    "company": "NTT Data Services",
    "location": "India",
    "description": "Trained in C#, ASP.NET, NodeJS and ReactJS"
  }
]
```

---

### Education

```typescript
export interface Education {
  id: string;
  startYear: number;
  endYear: number;
  degree: string;
  field: string;
  institution: string;
}
```

**Example Data** (`src/data/education.json`):
```json
[
  {
    "id": "vtu",
    "startYear": 2012,
    "endYear": 2016,
    "degree": "Bachelor of Engineering",
    "field": "ECE",
    "institution": "Visvesvaraya Technological University"
  }
]
```

---

### Project

```typescript
export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  githubUrl: string;
}
```

**Example Data** (`src/data/projects.json`):
```json
[
  {
    "id": "covid-tracker",
    "title": "Covid-19 Tracker",
    "imageUrl": "/assets/images/projects/covid-tracker.png",
    "githubUrl": "https://github.com/santhoshmurthybk/covid19-tracker"
  },
  {
    "id": "webdriver-io",
    "title": "Regression Suite in Webdriver IO",
    "imageUrl": "/assets/images/projects/webdriver-io.png",
    "githubUrl": "https://github.com/santhoshmurthybk/webdriver-io-regression"
  },
  {
    "id": "react-graphql",
    "title": "ReactJS, GraphQL API with AWS Amplify",
    "imageUrl": "/assets/images/projects/react-graphql.png",
    "githubUrl": "https://github.com/santhoshmurthybk/react-graphql-amplify"
  }
]
```

---

### Contact

```typescript
export type ContactType = 'phone' | 'email' | 'address';

export interface ContactInfo {
  id: string;
  type: ContactType;
  label: string;
  value: string;
  icon: string; // Icon identifier for react-icons
}
```

**Example Data** (`src/data/contact.json`):
```json
[
  {
    "id": "phone",
    "type": "phone",
    "label": "Phone",
    "value": "+91-7259481509",
    "icon": "BiSolidPhone"
  },
  {
    "id": "email",
    "type": "email",
    "label": "Email",
    "value": "santhoshmurthy9@gmail.com",
    "icon": "BiSolidEnvelope"
  },
  {
    "id": "address",
    "type": "address",
    "label": "Address",
    "value": "Bengaluru, KA, India",
    "icon": "BiSolidLocationPlus"
  }
]
```

---

### SocialLink

```typescript
export type SocialPlatform = 
  | 'github' 
  | 'linkedin' 
  | 'facebook' 
  | 'instagram' 
  | 'twitter' 
  | 'wordpress';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  icon: string; // Icon identifier for react-icons
  label: string; // Accessibility label
}
```

**Example Data** (`src/data/socialLinks.json`):
```json
[
  {
    "id": "github",
    "platform": "github",
    "url": "https://github.com/santhoshmurthybk",
    "icon": "BiLogoGithub",
    "label": "GitHub Profile"
  },
  {
    "id": "linkedin",
    "platform": "linkedin",
    "url": "https://in.linkedin.com/in/santhosh-murthy-4bb5b579",
    "icon": "BiLogoLinkedin",
    "label": "LinkedIn Profile"
  },
  {
    "id": "facebook",
    "platform": "facebook",
    "url": "https://www.facebook.com/santhosh.murthy.317",
    "icon": "BiLogoFacebook",
    "label": "Facebook Profile"
  },
  {
    "id": "instagram",
    "platform": "instagram",
    "url": "https://www.instagram.com/santhoshmurthybk",
    "icon": "BiLogoInstagram",
    "label": "Instagram Profile"
  },
  {
    "id": "twitter",
    "platform": "twitter",
    "url": "https://twitter.com/SanthoshMBK",
    "icon": "BiLogoTwitter",
    "label": "Twitter Profile"
  },
  {
    "id": "wordpress",
    "platform": "wordpress",
    "url": "https://santhoshmurthybk.wordpress.com/",
    "icon": "BiLogoWordpress",
    "label": "WordPress Blog"
  }
]
```

---

## Navigation

```typescript
export interface NavItem {
  id: string;
  label: string;
  href: string; // Section anchor e.g., "#home"
}
```

**Example Data** (inline constant):
```typescript
export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'works', label: 'Portfolio', href: '#works' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
```

---

## Theme State

```typescript
export type Theme = 'light' | 'dark';

// Not persisted as JSON - managed by useTheme hook
// localStorage key: 'portfolio-theme'
```

---

## Data Loading Pattern

```typescript
// Type-safe data imports
import profileData from '@/data/profile.json';
import skillsData from '@/data/skills.json';
import experienceData from '@/data/experience.json';

// With type assertions for safety
const profile = profileData as Profile;
const skills = skillsData as Skill[];
const experience = experienceData as Experience[];
```

## Relationships

```
Profile (1)
    │
    ├── Skills (many)
    ├── Experience (many, ordered by date desc)
    ├── Education (many)
    └── Projects (many)

Contact (many)
    │
    └── ContactInfo items

SocialLinks (many)
    │
    └── SocialLink items

NavItems (many)
    │
    └── Maps to sections by href
```
