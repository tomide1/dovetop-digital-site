export interface CaseStudy {
  id: string
  title: string
  serviceIds: string[]
  shortDescription: string
  detailedDescription: string
  results: string[]
  imageUrl: string
  client: string
  industryIds: string[]
  duration: string
  technologies: string[]
}

export const caseStudies: CaseStudy[] = [
  // Cloud Solutions Case Studies
  {
    id: 'cs-cloud-ecommerce-1',
    title: 'Scalable Cloud Infrastructure for E-commerce Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Enabled a major e-commerce client to handle peak traffic and reduce costs by developing a scalable and resilient cloud infrastructure.',
    detailedDescription:
      'Developed a highly scalable and resilient cloud infrastructure for a rapidly growing e-commerce client, ensuring 99.99% uptime and smooth handling of peak season traffic. The solution involved migrating legacy systems to a modern cloud architecture, implementing auto-scaling capabilities, and optimizing database performance.',
    results: [
      'Achieved 99.99% uptime during peak seasons',
      'Reduced page load times by 50% under heavy load',
      'Lowered infrastructure operational costs by 20%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Cloud+E-commerce',
    client: 'GlobalRetailX',
    industryIds: ['e-commerce'],
    duration: '5 months',
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'PostgreSQL'],
  },
  {
    id: 'cs-cloud-ecommerce-2',
    title: 'Multi-Region Cloud Deployment for Fashion Retailer',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Implemented a multi-region cloud architecture for a fashion retailer to serve global customers with low latency and high availability.',
    detailedDescription:
      'Designed and deployed a multi-region cloud architecture for a global fashion retailer, implementing CDN solutions, global load balancing, and automated disaster recovery. The solution enabled the client to serve customers worldwide with consistent performance while maintaining data sovereignty requirements.',
    results: [
      'Reduced global page load times by 60%',
      'Achieved 99.95% uptime across all regions',
      'Improved customer satisfaction scores by 25%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Global+Fashion',
    client: 'StyleHub International',
    industryIds: ['e-commerce'],
    duration: '6 months',
    technologies: ['AWS', 'CloudFront', 'Route 53', 'ECS', 'RDS'],
  },
  {
    id: 'cs-cloud-finance-1',
    title: 'Secure Banking Cloud Migration',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Migrated critical banking systems to a secure, compliant cloud infrastructure while maintaining zero downtime.',
    detailedDescription:
      'Executed a complex migration of core banking systems to a secure cloud environment, ensuring PCI DSS and SOX compliance. The project involved careful planning to maintain 24/7 operations, implementing robust security controls, and creating redundant systems for critical financial transactions.',
    results: [
      'Zero downtime during migration',
      'Achieved full PCI DSS compliance',
      'Reduced operational costs by 30%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Banking+Cloud',
    client: 'Metropolitan Bank',
    industryIds: ['finance'],
    duration: '8 months',
    technologies: ['AWS', 'VPC', 'KMS', 'CloudTrail', 'RDS'],
  },
  {
    id: 'cs-cloud-finance-2',
    title: 'Real-time Trading Platform Infrastructure',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Built ultra-low latency cloud infrastructure for high-frequency trading operations.',
    detailedDescription:
      'Designed and implemented a high-performance cloud infrastructure for real-time trading operations, focusing on ultra-low latency, high throughput, and fault tolerance. The solution included co-location strategies, optimized network routing, and real-time monitoring systems.',
    results: [
      'Achieved sub-millisecond latency for trade execution',
      'Processed over 1 million transactions per second',
      'Increased trading revenue by 15%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Trading+Platform',
    client: 'Quantum Trading LLC',
    industryIds: ['finance'],
    duration: '4 months',
    technologies: [
      'AWS',
      'EC2 Bare Metal',
      'DirectConnect',
      'ElastiCache',
      'Kinesis',
    ],
  },
  {
    id: 'cs-cloud-healthcare-1',
    title: 'HIPAA-Compliant Telehealth Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Developed a secure, scalable telehealth platform compliant with HIPAA regulations for a healthcare network.',
    detailedDescription:
      'Built a comprehensive telehealth platform enabling secure video consultations, patient data management, and integration with existing EMR systems. The solution prioritized HIPAA compliance, patient privacy, and seamless user experience for both patients and healthcare providers.',
    results: [
      'Achieved full HIPAA compliance',
      'Supported 50,000+ virtual consultations monthly',
      'Reduced patient wait times by 40%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Telehealth',
    client: 'Regional Health Network',
    industryIds: ['healthcare'],
    duration: '7 months',
    technologies: ['AWS', 'HealthLake', 'KMS', 'WebRTC', 'Lambda'],
  },
  {
    id: 'cs-cloud-healthcare-2',
    title: 'Medical IoT Data Processing System',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Implemented a real-time data processing system for medical IoT devices in a hospital network.',
    detailedDescription:
      'Created a robust cloud infrastructure to process and analyze data from thousands of medical IoT devices across multiple hospital locations. The system provides real-time monitoring, predictive analytics, and automated alerting for critical patient conditions.',
    results: [
      'Processed data from 10,000+ IoT devices',
      'Reduced critical incident response time by 35%',
      'Improved patient monitoring accuracy by 28%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Medical+IoT',
    client: 'MedTech Hospital Group',
    industryIds: ['healthcare'],
    duration: '6 months',
    technologies: ['AWS', 'IoT Core', 'Kinesis', 'Lambda', 'DynamoDB'],
  },
  {
    id: 'cs-cloud-legal-1',
    title: 'Secure Document Management for Law Firm',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Implemented a secure, cloud-based document management system ensuring attorney-client privilege protection.',
    detailedDescription:
      'Developed a comprehensive document management and collaboration platform for a large law firm, focusing on security, compliance, and efficient document workflows. The solution included advanced encryption, audit trails, and seamless integration with legal practice management systems.',
    results: [
      'Secured 100,000+ confidential documents',
      'Reduced document retrieval time by 70%',
      'Achieved 100% compliance with legal professional standards',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Legal+Docs',
    client: 'Prestigious & Associates',
    industryIds: ['legal'],
    duration: '5 months',
    technologies: ['AWS', 'S3', 'IAM', 'CloudTrail', 'Elasticsearch'],
  },
  {
    id: 'cs-cloud-legal-2',
    title: 'Multi-Jurisdiction Case Management Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Built a cloud platform for managing cases across multiple jurisdictions with compliance requirements.',
    detailedDescription:
      'Designed a sophisticated case management platform for an international law firm operating across multiple jurisdictions. The system handles complex compliance requirements, data residency laws, and seamless collaboration between global offices while maintaining strict security standards.',
    results: [
      'Streamlined operations across 15 jurisdictions',
      'Reduced case preparation time by 45%',
      'Ensured compliance with all regional data protection laws',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Global+Legal',
    client: 'International Law Partners',
    industryIds: ['legal'],
    duration: '9 months',
    technologies: [
      'AWS',
      'Multi-Region',
      'Cognito',
      'API Gateway',
      'DocumentDB',
    ],
  },
  {
    id: 'cs-cloud-agriculture-1',
    title: 'Smart Farm IoT Data Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Developed an IoT data platform for precision agriculture, enabling farmers to optimize crop yields through data-driven insights.',
    detailedDescription:
      'Created a comprehensive IoT data platform that collects and analyzes data from soil sensors, weather stations, and drone imagery. The system provides farmers with actionable insights for irrigation, fertilization, and pest management, resulting in improved crop yields and resource efficiency.',
    results: [
      'Increased crop yields by 22%',
      'Reduced water usage by 30%',
      'Optimized fertilizer application, saving 25% in costs',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Smart+Farm',
    client: 'AgriTech Innovations',
    industryIds: ['agriculture'],
    duration: '8 months',
    technologies: ['AWS', 'IoT Greengrass', 'Kinesis', 'SageMaker', 'DynamoDB'],
  },
  {
    id: 'cs-cloud-agriculture-2',
    title: 'Supply Chain Logistics for Agri-Business',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Implemented a cloud-based supply chain management system to track produce from farm to market.',
    detailedDescription:
      'Built a cloud-native supply chain logistics platform for a large agri-business, providing real-time tracking of produce from farm to distribution centers. The solution uses IoT sensors and blockchain for transparency and accountability, ensuring produce quality and reducing spoilage.',
    results: [
      'Reduced spoilage rates by 40%',
      'Improved supply chain transparency by 95%',
      'Enhanced delivery time predictions by 50%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Agri+Logistics',
    client: 'FarmFresh Logistics',
    industryIds: ['agriculture'],
    duration: '7 months',
    technologies: ['AWS', 'IoT', 'Blockchain', 'Lambda', 'API Gateway'],
  },
  {
    id: 'cs-cloud-education-1',
    title: 'Scalable E-Learning Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Developed a scalable e-learning platform to support thousands of concurrent students for a university.',
    detailedDescription:
      'Built a robust e-learning platform with interactive video lectures, collaborative assignments, and automated grading systems. The cloud-native architecture ensures high availability and scalability to handle a massive student load during peak exam periods.',
    results: [
      'Supported 100,000 concurrent students',
      'Achieved 99.9% uptime during peak exam seasons',
      'Reduced student onboarding time by 60%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=E-Learning',
    client: 'Global University Online',
    industryIds: ['education'],
    duration: '10 months',
    technologies: ['AWS', 'ECS', 'CloudFront', 'S3', 'Moodle'],
  },
  {
    id: 'cs-cloud-education-2',
    title: 'Student Information System (SIS) Migration',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Migrated a legacy Student Information System (SIS) to a modern, cloud-native platform for a school district.',
    detailedDescription:
      "Successfully migrated a large school district's legacy Student Information System to a secure, scalable, and cost-effective cloud solution. The new platform improved data accessibility for staff and parents while ensuring FERPA compliance and data privacy.",
    results: [
      'Reduced SIS operational costs by 40%',
      'Improved data accessibility and reporting by 80%',
      'Achieved 100% FERPA compliance',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=SIS+Migration',
    client: 'Unified School District',
    industryIds: ['education'],
    duration: '9 months',
    technologies: ['AWS', 'RDS', 'Lambda', 'Cognito', 'API Gateway'],
  },
  {
    id: 'cs-cloud-government-1',
    title: 'Citizen Services Portal',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Developed a unified citizen services portal for a state government, improving access to public services.',
    detailedDescription:
      'Created a secure and user-friendly portal for citizens to access a wide range of government services, from permit applications to tax payments. The solution integrated multiple legacy systems into a single, cohesive platform, improving efficiency and citizen satisfaction.',
    results: [
      'Increased online service adoption by 65%',
      'Reduced call center volume by 30%',
      'Improved citizen satisfaction scores by 40%',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Gov+Portal',
    client: 'State of Liberty',
    industryIds: ['government'],
    duration: '12 months',
    technologies: ['AWS GovCloud', 'Lambda', 'DynamoDB', 'API Gateway'],
  },
  {
    id: 'cs-cloud-government-2',
    title: 'Public Safety Data Analytics Platform',
    serviceIds: ['cloud-solutions'],
    shortDescription:
      'Built a data analytics platform for a city police department to improve crime analysis and resource allocation.',
    detailedDescription:
      'Developed a powerful data analytics platform that ingests and analyzes crime data from various sources to identify patterns and predict hotspots. The system provides law enforcement with actionable intelligence for more effective resource allocation and crime prevention.',
    results: [
      'Reduced crime rates in targeted areas by 18%',
      'Improved police resource allocation by 25%',
      'Enhanced data-driven decision-making for law enforcement',
    ],
    imageUrl: 'https://placehold.co/600x400/5D5DFF/white?text=Police+Data',
    client: 'City Police Department',
    industryIds: ['government'],
    duration: '11 months',
    technologies: ['AWS GovCloud', 'Redshift', 'SageMaker', 'QuickSight'],
  },
  // User-Centered Design Case Studies
  {
    id: 'cs-ucd-ecommerce-1',
    title: 'Intuitive Checkout Process Redesign',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Redesigned the checkout process for an e-commerce store, resulting in a significant reduction in cart abandonment.',
    detailedDescription:
      'Conducted extensive user research, usability testing, and persona development to redesign a complex checkout process. The new design simplified the user journey, reduced friction, and created a more intuitive and trustworthy experience for customers.',
    results: [
      'Reduced cart abandonment rate by 40%',
      'Increased checkout completion rate by 35%',
      'Improved user satisfaction scores by 30%',
    ],
    imageUrl:
      'https://placehold.co/600x400/E85DFF/white?text=Checkout+Redesign',
    client: 'Online Emporium',
    industryIds: ['e-commerce'],
    duration: '3 months',
    technologies: ['Figma', 'UserTesting', 'Hotjar', 'React'],
  },
  {
    id: 'cs-ucd-ecommerce-2',
    title: 'Personalized Shopping Experience',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a personalized shopping experience for a fashion retailer, increasing customer engagement and sales.',
    detailedDescription:
      'Developed a sophisticated personalization engine based on user behavior, preferences, and purchase history. The design incorporated personalized recommendations, curated content, and a dynamic user interface to create a unique and engaging shopping journey for each customer.',
    results: [
      'Increased average order value by 20%',
      'Improved customer retention by 15%',
      'Boosted user engagement by 50%',
    ],
    imageUrl:
      'https://placehold.co/600x400/E85DFF/white?text=Personalized+Shopping',
    client: 'Chic Boutique',
    industryIds: ['e-commerce'],
    duration: '5 months',
    technologies: ['Figma', 'Adobe XD', 'Algolia', 'Dynamic Yield'],
  },
  {
    id: 'cs-ucd-finance-1',
    title: 'Mobile Banking App Redesign',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Redesigned a mobile banking app for a major bank, improving usability and customer satisfaction.',
    detailedDescription:
      'Led a complete redesign of a mobile banking app, focusing on simplifying complex financial tasks, improving navigation, and enhancing security features. The process involved user interviews, prototyping, and iterative testing to ensure the final product met the needs of a diverse user base.',
    results: [
      'Increased mobile app adoption by 40%',
      'Reduced user-reported issues by 60%',
      'Achieved a 4.8-star rating on app stores',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Mobile+Banking',
    client: 'Capital Trust Bank',
    industryIds: ['finance'],
    duration: '6 months',
    technologies: ['Figma', 'Sketch', 'InVision', 'Swift', 'Kotlin'],
  },
  {
    id: 'cs-ucd-finance-2',
    title: 'Wealth Management Dashboard for Financial Advisors',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a comprehensive wealth management dashboard for financial advisors to better serve their clients.',
    detailedDescription:
      'Created an intuitive and powerful dashboard for financial advisors to manage client portfolios, track performance, and generate reports. The design focused on data visualization, workflow efficiency, and providing advisors with actionable insights at a glance.',
    results: [
      'Reduced time spent on portfolio analysis by 30%',
      'Improved client reporting efficiency by 50%',
      'Enhanced advisor productivity by 25%',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Wealth+Dashboard',
    client: 'Prosperity Wealth Management',
    industryIds: ['finance'],
    duration: '7 months',
    technologies: ['Figma', 'Tableau', 'D3.js', 'React'],
  },
  {
    id: 'cs-ucd-healthcare-1',
    title: 'Patient Portal for Hospital Network',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a user-friendly patient portal to improve patient engagement and access to medical records.',
    detailedDescription:
      'Developed a secure and intuitive patient portal that allows patients to view their medical records, schedule appointments, and communicate with their doctors. The design prioritized accessibility, ensuring that users of all ages and abilities could easily navigate the portal.',
    results: [
      'Increased patient portal adoption by 70%',
      'Reduced administrative calls by 40%',
      'Improved patient satisfaction with care by 25%',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Patient+Portal',
    client: 'Unity Health System',
    industryIds: ['healthcare'],
    duration: '8 months',
    technologies: ['Figma', 'WCAG', 'React', 'Cerner API'],
  },
  {
    id: 'cs-ucd-healthcare-2',
    title: 'Clinical Trial Recruitment Platform',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a platform to streamline clinical trial recruitment for a pharmaceutical company.',
    detailedDescription:
      'Created a user-centered platform that connects patients with relevant clinical trials, simplifying the recruitment process for both patients and researchers. The design focused on clear communication, trust-building, and making complex medical information accessible.',
    results: [
      'Reduced patient recruitment time by 50%',
      'Increased diversity of clinical trial participants by 30%',
      'Improved patient retention in trials by 20%',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Clinical+Trials',
    client: 'BioGen Pharmaceuticals',
    industryIds: ['healthcare'],
    duration: '9 months',
    technologies: ['Figma', 'Lottie', 'Webflow', 'React'],
  },
  {
    id: 'cs-ucd-legal-1',
    title: 'E-Discovery Platform for Legal Teams',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed an intuitive e-discovery platform to help legal teams efficiently review large volumes of documents.',
    detailedDescription:
      'Developed a powerful and easy-to-use e-discovery platform that simplifies the process of reviewing and managing legal documents. The design featured advanced search, data visualization, and collaborative tools to help legal teams work more effectively.',
    results: [
      'Reduced document review time by 60%',
      'Improved accuracy of relevant document identification by 40%',
      'Lowered e-discovery costs by 35%',
    ],
    imageUrl:
      'https://placehold.co/600x400/E85DFF/white?text=E-Discovery+Platform',
    client: 'LegalTech Solutions',
    industryIds: ['legal'],
    duration: '7 months',
    technologies: ['Figma', 'Elasticsearch', 'React', 'Python'],
  },
  {
    id: 'cs-ucd-legal-2',
    title: 'Client Collaboration Portal for a Law Firm',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a secure client portal to improve communication and document sharing between a law firm and its clients.',
    detailedDescription:
      'Created a secure and user-friendly portal for clients to access case information, share documents, and communicate with their legal team. The design focused on building trust, providing transparency, and enhancing the overall client experience.',
    results: [
      'Improved client satisfaction by 30%',
      'Reduced email and phone communication by 50%',
      'Enhanced document security and tracking',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Client+Portal',
    client: 'Garrison & Associates',
    industryIds: ['legal'],
    duration: '5 months',
    technologies: ['Figma', 'SharePoint', 'React', 'Microsoft Graph API'],
  },
  {
    id: 'cs-ucd-agriculture-1',
    title: 'Farm Management App for Small-Scale Farmers',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a simple and intuitive farm management app to help small-scale farmers improve their productivity.',
    detailedDescription:
      'Developed a mobile app that helps farmers track their crops, manage their finances, and access market information. The design was tailored to the needs of users with limited literacy and internet access, featuring a highly visual interface and offline functionality.',
    results: [
      'Increased crop yields by 15% for app users',
      'Improved financial management for 80% of users',
      'Enhanced access to market information, leading to better prices',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Farm+App',
    client: 'Agri-Connect',
    industryIds: ['agriculture'],
    duration: '6 months',
    technologies: ['Figma', 'React Native', 'SQLite', 'Twilio'],
  },
  {
    id: 'cs-ucd-agriculture-2',
    title: 'Drone-Based Crop Monitoring Dashboard',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed a dashboard for farmers to analyze drone imagery and monitor crop health.',
    detailedDescription:
      'Created an intuitive dashboard that visualizes data from agricultural drones, helping farmers identify issues like pests, diseases, and nutrient deficiencies. The design focused on presenting complex data in an easy-to-understand format, with actionable recommendations.',
    results: [
      'Reduced crop losses by 20%',
      'Optimized pesticide and fertilizer application by 30%',
      'Improved overall farm efficiency by 25%',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=Drone+Dashboard',
    client: 'AeroFarms',
    industryIds: ['agriculture'],
    duration: '7 months',
    technologies: ['Figma', 'Mapbox', 'D3.js', 'React'],
  },
  {
    id: 'cs-ucd-education-1',
    title: 'Interactive Learning Platform for K-12 Students',
    serviceIds: ['user-centered-design'],
    shortDescription:
      'Designed an engaging and interactive learning platform to make K-12 education more fun and effective.',
    detailedDescription:
      'Developed a gamified learning platform with interactive lessons, quizzes, and collaborative projects. The design was based on extensive research with students and teachers, focusing on creating a motivating and personalized learning experience.',
    results: [
      'Increased student engagement by 60%',
      'Improved test scores by 25%',
      'Received positive feedback from 95% of teachers',
    ],
    imageUrl: 'https://placehold.co/600x400/E85DFF/white?text=K-12+Learning',
    client: 'EduFun',
    industryIds: ['education'],
    duration: '10 months',
    technologies: ['Figma', 'Unity', 'React', 'Firebase'],
  },
  {
    id: 'cs-ucd-education-2',
    title: 'University Course Selection and Registration System',
    serviceIds: ['user-centered-design'],
    shortDescription:
      "Redesigned a university's course registration system to make it more intuitive and less stressful for students.",
    detailedDescription:
      'Overhauled a clunky and confusing course registration system, creating a streamlined and user-friendly experience. The new design included features like a visual schedule builder, course recommendations, and real-time availability updates.',
    results: [
      'Reduced student complaints about registration by 80%',
      'Decreased average time to register by 70%',
      'Improved student satisfaction with the registration process by 90%',
    ],
    imageUrl:
      'https://placehold.co/600x400/E85DFF/white?text=Course+Registration',
    client: 'State University',
    industryIds: ['education'],
    duration: '8 months',
    technologies: ['Figma', 'React', 'GraphQL', 'PostgreSQL'],
  },
]
