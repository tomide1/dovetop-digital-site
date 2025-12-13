import { Project } from '@/types/what-we-do'

export const projects: Project[] = [
  {
    id: 'dt-trade-reporting-system',
    title: 'Trade Reporting System',
    serviceIds: ['cloud-solutions', 'data-ai', 'tech-transformation'],
    shortDescription:
      'Real-Time Regulatory Reporting Dashboards, Ad-Hoc Analytics, and Scheduled Reporting for FCA compliance.',
    detailedDescription:
      'To meet Financial Conduct Authority (FCA) regulatory obligations, the organisation required a highly accurate, real-time trade reporting capability. Following significant fines related to inaccurate submissions, we designed and implemented an end-to-end reporting platform that ingests, validates, and reconciles trade data in real time. The solution ensured continuous compliance, strengthened operational controls, and eliminated the risk of future regulatory breaches.',
    results: [
      'Eliminated regulatory penalties, saving the firm tens of millions by ensuring full accuracy and timeliness in trade submissions',
      'Increased operational efficiency through automation of reporting workflows, reducing manual effort by over 80%',
      'Enhanced data transparency and governance by providing real-time dashboards and comprehensive audit trails'
    ],
    imageUrl: 'https://placehold.co/600x400/3B82F6/white?text=Trade+Reporting',
    client: 'Financial Services Firm',
    industryIds: ['finance'],
    duration: '8 months',
    technologies: ['AWS', 'Go', 'React', 'Kubernetes', 'GitHub Actions', 'Bloomberg API', 'Reuters', 'MarkitWire API'],
  },
  {
    id: 'dt-policy-admin-system',
    title: 'Policy Admin System',
    serviceIds: ['cloud-solutions', 'tech-transformation', 'security-governance'],
    shortDescription:
      'Client Onboarding, Syndicate Onboarding, Policy Issuance & Maintenance, Market & Credit Risk Management platform.',
    detailedDescription:
      'The organisation required a modern, scalable platform to streamline the end-to-end policy administration lifecycle across multiple syndicates. We delivered a unified system that centralised client onboarding, automated policy issuance, and embedded market and credit risk controls directly into underwriting workflows. The solution improved operational accuracy, reduced processing delays, and provided a single source of truth for policy and risk data across the business.',
    results: [
      'Reduced policy issuance processing time by over 60% through automation of onboarding, issuance, and renewal workflows',
      'Improved risk oversight and compliance by integrating real-time market and credit risk assessments into underwriting decisions',
      'Enhanced data consistency and reporting with a centralised policy repository, enabling faster audit responses'
    ],
    imageUrl: 'https://placehold.co/600x400/3B82F6/white?text=Policy+Admin',
    client: 'Insurance Syndicate',
    industryIds: ['insurance'],
    duration: '10 months',
    technologies: ['AWS', '.NET Core', 'React', 'Kubernetes', 'GitHub Actions', 'PostgreSQL', 'Redis', 'Kafka'],
  },
  {
    id: 'dt-resource-management-system',
    title: 'Resource Management System',
    serviceIds: ['cloud-solutions', 'strategy', 'data-ai'],
    shortDescription:
      'End-to-End Property Management Platform Covering Onboarding, Invoicing, Billing, Complaints, and Integrated Employee & Cashbook Management.',
    detailedDescription:
      'The client required a comprehensive property management platform to consolidate fragmented operational processes across their real estate portfolio. We developed an end-to-end system that automates tenant onboarding, centralises billing and invoicing, streamlines complaints management, and integrates employee oversight with real-time cashbook visibility. The solution improved transparency, reduced administrative overhead, and enabled more accurate financial tracking across multiple property assets.',
    results: [
      'Increased operational efficiency by over 50% through automation of onboarding, billing, and complaint workflows',
      'Improved financial accuracy and control via a unified cashbook and integrated invoicing system, reducing revenue leakage',
      'Enhanced tenant satisfaction with faster issue resolution and clear visibility of billing and communication history'
    ],
    imageUrl: 'https://placehold.co/600x400/3B82F6/white?text=Property+Mgmt',
    client: 'Real Estate Portfolio Manager',
    industryIds: ['government'],
    duration: '7 months',
    technologies: ['Azure', 'C#.Net', 'React', 'Redis', 'Azure Function Apps', 'Jenkins'],
  },
  {
    id: 'dt-case-management-system',
    title: 'Case Management System',
    serviceIds: ['cloud-solutions', 'data-ai', 'tech-transformation'],
    shortDescription:
      'Legal Conveyancing Management, Client & Matter Enquiry, Client Maintenance & Billing platform.',
    detailedDescription:
      'The firm required a streamlined digital platform to manage the full lifecycle of legal conveyancing matters. We delivered a centralised case management system that supports client onboarding, matter creation, document tracking, workflow automation, and integrated billing. The platform provides a single, secure environment for managing client data, improving visibility across cases, and reducing administrative bottlenecks. This enhanced both productivity and compliance in a highly regulated legal environment.',
    results: [
      'Reduced conveyancing processing time by 40% through automated workflows and digital document management',
      'Improved compliance and accuracy with audit-ready case records, centralised client information, and controlled access to sensitive legal documents',
      'Enhanced client service delivery by enabling quicker matter updates, transparent billing, and streamlined enquiry handling'
    ],
    imageUrl: 'https://placehold.co/600x400/3B82F6/white?text=Legal+Case+Mgmt',
    client: 'Legal Conveyancing Firm',
    industryIds: ['legal'],
    duration: '6 months',
    technologies: ['AWS', '.NET Core', 'React', 'DynamoDB', 'Lambda', 'GitHub Actions', 'ElasticSearch'],
  },
  {
    id: 'dt-utility-management-system',
    title: 'Utility Management System (Solar Grid)',
    serviceIds: ['cloud-solutions', 'cyber-security', 'sustainability', 'tech-transformation', 'strategy'],
    shortDescription:
      'Solar Energy Generation, Transmission & Distribution Management, Customer Operations, Billing, Monitoring & Usage Analytics.',
    detailedDescription:
      'The organisation required an integrated platform to manage the complete lifecycle of its solar grid operations—including energy generation, transmission, and distribution. We delivered a scalable utility management system that centralises customer onboarding, automates billing, monitors real-time energy production and consumption, and provides predictive insights into grid performance. The solution supports proactive maintenance, reduces service downtime, and ensures accurate, transparent billing for both prepaid and postpaid customers across distributed solar infrastructure.',
    results: [
      'Reduced operational downtime by 35% through real-time monitoring across generation, transformation, and distribution layers',
      'Improved revenue accuracy and recovery with automated billing workflows, prepaid credit management, and real-time consumption tracking',
      'Enhanced grid reliability and customer satisfaction by providing transparent usage analytics and quicker resolution of technical issues'
    ],
    imageUrl: 'https://placehold.co/600x400/3B82F6/white?text=Solar+Grid',
    client: 'Solar Energy Provider',
    industryIds: ['energy'],
    duration: '12 months',
    technologies: ['AWS', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'IoT Integrations (MQTT)', 'Kubernetes', 'GitHub Actions'],
  },
]