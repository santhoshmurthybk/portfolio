/**
 * Portfolio type definitions
 * @module types/portfolio
 */

export interface Profile {
  name: string;
  title: string;
  greeting: string;
  typewriterPhrases: string[];
  bio: string;
  profileImageUrl: string;
  cvUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
}

export interface Experience {
  id: string;
  startDate: string; // "Mar, 2024"
  endDate: string | null; // null means "Present"
  title: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  id: string;
  startDate: string;
  endDate: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  technologies: string[];
}

export interface Contact {
  id: string;
  type: 'phone' | 'email' | 'address';
  label: string;
  value: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
