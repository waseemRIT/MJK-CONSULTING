import { ServiceItem, NavItem } from './types';
import { 
  BookOpen, 
  Calculator, 
  FileText, 
  TrendingUp, 
  Search, 
  PieChart, 
  Monitor, 
  Users, 
  ShieldCheck 
} from 'lucide-react';

export const COMPANY_NAME = "MJK";
export const TAGLINE = "Your Financial Partner for a Secure Future";
export const EMAIL = "info@mjk.com";
export const PHONES = ["+971 50 000 0000", "+971 55 000 0000"];
export const SOCIAL_LINKS = {
  tiktok: "https://tiktok.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Bookkeeping and Accounting",
    points: [
      "Accurate record-keeping and financial reporting",
      "General ledger maintenance and reconciliation",
      "Financial statement preparation and analysis"
    ],
    iconName: "BookOpen"
  },
  {
    title: "Tax Services",
    points: [
      "Strategic tax planning to minimize liabilities",
      "Representation in tax audits and disputes",
      "Corporate tax registration"
    ],
    iconName: "Calculator"
  },
  {
    title: "VAT Registration and Filing",
    points: [
      "Assistance with VAT registration and compliance",
      "Preparation and filing of VAT returns",
      "VAT advisory services"
    ],
    iconName: "FileText"
  },
  {
    title: "Advisory Services",
    points: [
      "Strategic business planning and development",
      "Market analysis and feasibility studies",
      "Risk management and mitigation strategies"
    ],
    iconName: "TrendingUp"
  },
  {
    title: "Feasibility Study",
    points: [
      "Comprehensive assessment of business opportunities",
      "Market research and demand analysis",
      "Financial viability evaluation"
    ],
    iconName: "Search"
  },
  {
    title: "Financial Consulting",
    points: [
      "Financial analysis and forecasting",
      "Budgeting and cash flow management",
      "Investment analysis and portfolio management"
    ],
    iconName: "PieChart"
  },
  {
    title: "Technology and Software Solutions",
    points: [
      "Implementation of accounting and ERP software",
      "Technology assessment and optimization",
      "IT infrastructure planning and cybersecurity"
    ],
    iconName: "Monitor"
  },
  {
    title: "Management Consulting",
    points: [
      "Organizational restructuring and change management",
      "Leadership development and training",
      "Performance improvement strategies"
    ],
    iconName: "Users"
  },
  {
    title: "Audit and Assurance",
    points: [
      "Independent financial audits and reviews",
      "Internal control assessments and compliance audits",
      "Assurance services to enhance transparency and credibility"
    ],
    iconName: "ShieldCheck"
  }
];

export const ICON_MAP: Record<string, any> = {
  BookOpen,
  Calculator,
  FileText,
  TrendingUp,
  Search,
  PieChart,
  Monitor,
  Users,
  ShieldCheck
};