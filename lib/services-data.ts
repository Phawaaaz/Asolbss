
import { 
  Banknote, 
  TrendingUp, 
  PieChart, 
  FileText, 
  GraduationCap,
  Landmark,
  Scale,
  Briefcase,
  Calculator 
} from "lucide-react";

export const services = [
  {
    slug: "micro-credit-services",
    title: "Micro-Credit Services",
    shortDescription: "Accessible financial support for entrepreneurs, traders, and small businesses.",
    fullDescription: "Our micro-credit services are designed to provide accessible financial support to entrepreneurs, market traders, and small business owners who require funding to start, sustain, or expand their businesses. We understand the unique challenges faced by small enterprises and offer tailored financial solutions to bridge the gap.",
    icon: Banknote,
    benefits: [
      "Flexible financing solutions tailored to your cash flow",
      "Quick processing and disbursement",
      "No hidden charges or complex collateral requirements",
      "Professional guidance on fund utilization"
    ],
    targetAudience: [
      "Market traders",
      "Small business owners",
      "Cooperatives",
      "Aspiring entrepreneurs"
    ]
  },
  {
    slug: "business-advisory-planning",
    title: "Business Advisory & Planning",
    shortDescription: "Strategic guidance, business planning, and proposal writing for growth.",
    fullDescription: "We provide corporate and micro-business advisory services including business planning, proposal writing, investment advisory, and strategic guidance. Our goal is to help businesses operate efficiently, identify growth opportunities, and navigate market challenges with confidence.",
    icon: TrendingUp,
    benefits: [
      "Comprehensive business plan development",
      "Strategic growth roadmaps",
      "Investment readiness assessment",
      "Market entry strategies"
    ],
    targetAudience: [
      "Startups",
      "SMEs looking to scale",
      "Corporate organizations",
      "Investors"
    ]
  },
  {
    slug: "financial-credit-analysis",
    title: "Financial & Credit Analysis",
    shortDescription: "Professional assessment, business appraisal, and credit evaluation.",
    fullDescription: "Our financial and credit analysis services include business appraisal, credit evaluation, financial investigation, and professional assessment. We help you make informed financial decisions by providing a clear, accurate, and in-depth picture of your financial health and creditworthiness.",
    icon: PieChart,
    benefits: [
      "In-depth credit risk assessment",
      "Financial health checkups",
      "Investment viability analysis",
      "Fraud detection and prevention insights"
    ],
    targetAudience: [
      "Lending institutions",
      "Businesses seeking loans",
      "Investors",
      "Financial managers"
    ]
  },
  {
    slug: "business-registration-support",
    title: "Business Registration Support",
    shortDescription: "Seamless assistance with CAC registration and compliance documentation.",
    fullDescription: "We assist clients with business name and company registration through the Corporate Affairs Commission (CAC). We handle the regulatory complexities so you can focus on building your business, ensuring you are fully compliant and legally protected from day one.",
    icon: FileText,
    benefits: [
      "Fast-tracked business name registration",
      "Limited Liability Company (LLC) incorporation",
      "NGO and Incorporated Trustee registration",
      "Post-incorporation filing and compliance"
    ],
    targetAudience: [
      "New business owners",
      "Unregistered entrepreneurs",
      "Foreign companies entering Nigeria",
      "NGOs and associations"
    ]
  },
  {
    slug: "professional-educational-services",
    title: "Professional & Educational Services",
    shortDescription: "Training, financial counseling, and workshops to build business capacity.",
    fullDescription: "We offer professional training, financial counseling, business workshops, and educational services designed to improve financial literacy and business capacity. We believe that knowledge is power, and our programs are curated to empower you with the skills needed to succeed in today's economy.",
    icon: GraduationCap,
    benefits: [
      "Financial literacy workshops",
      "SME management training",
      "Credit management seminars",
      "Personal finance counseling"
    ],
    targetAudience: [
      "Cooperative societies",
      "Staff of financial institutions",
      "Business owners",
      "Students and graduates"
    ]
  },
  {
    slug: "banking-consultancy",
    title: "Banking Consultancy",
    shortDescription: "Expert consultancy for banking institutions and financial organizations.",
    fullDescription: "We offer specialized banking consultancy services, helping financial institutions optimize their operations, manage risks, and improve service delivery. Our team brings deep industry knowledge to solve complex banking challenges.",
    icon: Landmark,
    benefits: [
      "Operational efficiency optimization",
      "Risk management strategies",
      "Regulatory compliance support",
      "Digital transformation advisory"
    ],
    targetAudience: [
      "Banks",
      "Microfinance institutions",
      "Fintech companies",
      "Financial regulators"
    ]
  },
  {
    slug: "arbitration-mediation",
    title: "Arbitration & Mediation",
    shortDescription: "Professional dispute resolution and arbitration services.",
    fullDescription: "Our arbitration and mediation services provide a constructive path for resolving business disputes. We help parties reach mutually beneficial agreements without the time and expense of litigation, preserving business relationships.",
    icon: Scale,
    benefits: [
      "Cost-effective dispute resolution",
      "Confidential proceedings",
      "Preservation of business relationships",
      "Expert neutral mediators"
    ],
    targetAudience: [
      "Corporate entities",
      "Business partners",
      "Contractors",
      "Organizations in dispute"
    ]
  },
  {
    slug: "corporate-support-solutions",
    title: "Corporate Support Solutions",
    shortDescription: "Comprehensive support solutions for corporate organizations.",
    fullDescription: "We provide end-to-end corporate support solutions, handling administrative, operational, and strategic functions so you can focus on your core business. From restructuring to process improvement, we are your partners in efficiency.",
    icon: Briefcase,
    benefits: [
      "Organizational restructuring",
      "Process optimization",
      "Administrative support",
      "Strategic HR planning"
    ],
    targetAudience: [
      "Large corporations",
      "Growing SMEs",
      "Multinational companies",
      "Public sector organizations"
    ]
  },
  {
    slug: "financial-management",
    title: "Financial Management",
    shortDescription: "Strategic financial management and planning for sustainable growth.",
    fullDescription: "Our financial management services ensure your resources are used effectively to achieve your business goals. We provide budgeting, forecasting, and financial control services to secure your organization's financial future.",
    icon: Calculator,
    benefits: [
      "Budgeting and forecasting",
      "Cash flow management",
      "Cost reduction strategies",
      "Financial reporting and control"
    ],
    targetAudience: [
      "Business owners",
      "Corporate finance departments",
      "Non-profit organizations",
      "Investment firms"
    ]
  }
];
