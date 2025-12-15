import { Industry } from '@/types/what-we-do'

export const industries: Industry[] = [
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Digital transformation solutions for insurance companies to improve customer experience, streamline claims processing, and enhance risk management.',
    summary: 'The insurance industry remains a key pillar of the global financial system, providing risk protection, stability, and investment that fuels economic growth. Despite steady worldwide expansion, many insurers still rely on outdated technology that slows policy administration, underwriting, and claims processing, and limits digital innovation. As automation, big data, AI, climate risks, shifting customer expectations, and new regulations reshape global finance, the industry is undergoing a significant transformation. This shift varies across regions, with Europe, Africa, and the Americas showing distinct patterns driven by market maturity, socio-economic conditions, and technological adoption. Although historically conservative, the sector is rapidly modernizing as technology becomes central to competitiveness. Understanding these regional trends and revenue projections is vital for policymakers, investors, and industry leaders navigating opportunities in the evolving global insurance landscape.',
    stats: [
      {
        value: '22.6%',
        description: 'share of world insurance premiums is the combined "Advanced EMEA" region (which includes much of Europe)'
      },
      {
        value: '$137B',
        description: 'the global insured losses from natural catastrophes in 2024 highlighting increasing climate risk worldwide'
      },
      {
        value: '57%',
        description: 'of total economic losses from disasters in 2024 were uninsured which is a global "protection gap" of about USD 181 billion'
      },
      {
        value: '3.5%',
        description: 'is the overall African insurance penetration, significantly below the global average of ~6.8%'
      }
    ],
    revenue: {
      sectionTitle: 'Projected Revenue Of The Global Insurance Sector 2024 onwards',
      cards: [
        {
          title: 'Global Insurance Market Overview',
          description: 'The global insurance market is typically divided into life insurance (including pensions, health, and long-term savings) and non-life insurance (property, casualty, commercial, liability, and specialty lines).'
        },
        {
          title: '2024 Market Estimation',
          description: 'In 2024, the global insurance market was estimated at approximately US$ 7.4–7.5 trillion in gross written premiums (GWP). Global Premium Growth: Swiss Re Institute projects global insurance premiums to grow at around 2.6% in 2025.'
        },
        {
          title: 'Life Insurance Growth',
          description: 'Expected to grow at approximately 3.0%, fueled by demographic trends, rising interest rates, and expanding financial literacy in emerging markets.'
        },
        {
          title: 'Non-Life Insurance Projection',
          description: 'Projected growth of around 2.3%, reflecting moderate economic expansion and cautious underwriting.'
        },
        {
          title: '2025 Total Premium Volume',
          description: 'Based on these growth rates and earlier projections, global insurance premiums are expected to reach roughly US$ 7.5 trillion by the end of 2025. Already generated (2025 YTD): ~ US$ 6.0 trillion (which is 80% of 7.5 trillion)'
        },
        {
          title: 'Remaining 2025 Forecast',
          description: 'Assuming the 80%‑written share, the remaining ≈ 20% (i.e. ~ US$ 1.5 trillion) would need to be written before December 31, 2025 to reach the full‑year forecast of ~ US$ 7.5 trillion. Of course, if premium flows are uneven (e.g. many new policies written near year end, renewals concentrated), the "remaining" amount could deviate.'
        },
        {
          title: '2026 Total Premium Volume',
          description: 'With the 2025 base of US$ 7.5 trillion, the global insurance market is projected to reach US$ 7.7–7.8 trillion in 2026, assuming stable global conditions.'
        }
      ]
    },
    opportunities: {
      sectionTitle: 'Key Opportunities',
      items: [
        {
          title: 'Digital Transformation and Automation',
          description: 'Digital transformation in insurance is the process of integrating digital technologies to improve operational efficiency, enhance customer experience, and reduce costs.',
          details: [
            'Claims Processing Automation: AI and robotic process automation (RPA) can streamline claims handling, reducing the turnaround time from days to hours. Automated document analysis, image recognition for damage assessment, and AI-powered decision-making are driving faster, more accurate claim resolutions.',
            'Policy Management Digitization: Online platforms for policy issuance, renewals, and updates improve efficiency while reducing administrative overhead.',
            'Paperless Workflows: Implementing e-signatures and digital document management reduces operational bottlenecks and enhances regulatory compliance.'
          ],
          example: 'Some leading insurers now use AI algorithms to automatically validate accident photos and repair estimates, enabling instant claim approvals for simple cases.'
        },
        {
          title: 'Data Analytics And Predictive Modeling',
          description: 'Data is the lifeblood of modern insurance. Analytics and machine learning enable insurers to make smarter, evidence-based decisions.',
          details: [
            'Risk Assessment and Pricing: Predictive analytics allows insurers to create more accurate pricing models based on customer behavior, environmental factors, and historical claim data.',
            'Fraud Detection: Machine learning can identify unusual patterns in claims, reducing fraudulent payouts.',
            'Customer Insights: Behavioral analytics supports personalized product recommendations and marketing strategies.'
          ],
          example: 'Health insurers use wearable data to offer lower premiums to clients who maintain healthy lifestyles, creating a win-win scenario.'
        },
        {
          title: 'Insurtech Integration',
          description: 'The rise of Insurtech, technology-driven insurance solutions has opened new revenue streams and improved customer accessibility.',
          details: [
            'Embedded Insurance: Offering insurance products at the point of sale via e-commerce platforms or fintech apps increases uptake and convenience.',
            'On-Demand Insurance: Policies that can be activated instantly for short-term needs, such as travel or gadget insurance, appeal to the modern digital consumer.',
            'Blockchain and Smart Contracts: Blockchain technology ensures transparent, secure, and tamper-proof contracts, reducing disputes and operational inefficiencies.'
          ],
          example: 'Microinsurance products in emerging markets allow low-income households to protect assets like bicycles or mobile devices at affordable rates.'
        },
        {
          title: 'Customer Experience And Engagement',
          description: 'Improving customer experience is crucial for retention and growth. Technology enables insurers to provide faster, more personalized services.',
          details: [
            'Chatbots and Virtual Assistants: AI-powered virtual assistants provide 24/7 support for claims, policy queries, and guidance, reducing human resource costs.',
            'Mobile-First Platforms: Mobile applications facilitate easy access to policy information, instant claims submission, and real-time notifications.',
            'Personalization Engines: AI-driven personalization enables insurers to offer products that match individual needs, increasing loyalty and sales.'
          ],
          example: 'Some insurers use mobile apps to notify clients about upcoming renewals or suggest policy upgrades based on life events, enhancing engagement.'
        },
        {
          title: 'Emerging Technologies',
          description: 'Emerging technologies are creating entirely new ways to assess risk, interact with customers, and streamline operations.',
          details: [
            'Internet of Things (IoT): Connected devices like telematics in vehicles, smart home sensors, and wearable health trackers provide real-time data for accurate risk evaluation.',
            'AI and Machine Learning: Beyond fraud detection, AI can assist in underwriting, claims triaging, and predictive maintenance.',
            'Augmented Reality (AR) and Virtual Reality (VR): These technologies can be used for virtual property inspections, disaster simulations, and employee training programs.'
          ],
          example: 'Car insurers using telematics monitor driving behavior to offer personalized premiums and encourage safer driving habits.'
        },
        {
          title: 'RegTech and Compliance Technologies',
          description: 'The insurance industry is heavily regulated, and compliance costs are significant. Regulatory technology (RegTech) helps insurers manage these challenges efficiently.',
          details: [
            'Automated Compliance Monitoring: AI systems track regulatory changes, ensuring adherence to local and international laws.',
            'Secure Data Management: Cloud-based platforms with encryption and access control simplify compliance with GDPR, CCPA, and other data protection regulations.'
          ],
          example: 'Some insurers deploy AI-driven dashboards that automatically flag non-compliant transactions, reducing regulatory risk.'
        },
        {
          title: 'Sustainability And Climate Risk Solutions',
          description: 'Environmental and climate risks are increasingly affecting insurance profitability. Technology can help insurers navigate these challenges while offering innovative products.',
          details: [
            'Climate Analytics Platforms: AI models assess the likelihood of extreme weather events and guide product pricing.',
            'Green Insurance Products: Policies supporting sustainable practices, such as EV insurance or renewable energy coverage, address growing consumer demand for environmentally responsible solutions.'
          ],
          example: 'Property insurers use satellite imagery and predictive analytics to estimate flood risks and offer targeted coverage for vulnerable regions.'
        }
      ]
    },
    icon: '🛡️',
    isActive: true
  },
   {
    id: 'energy',
    name: 'Energy',
    description: 'Technology solutions for the energy sector including smart grid systems, renewable energy management, and operational efficiency optimization.',
    icon: '⚡',
    isActive: true
  },
    {
    id: 'finance',
    name: 'Finance',
    description:
      'Transforming financial services with secure, scalable, and compliant technology solutions.',
    icon: '💰',
    isActive: true
  },
  {
    id: 'legal',
    name: 'Legal',
    description:
      'Empowering law firms and legal departments with technology for e-discovery, case management, and compliance.',
    icon: '⚖️',
    isActive: true
  },
   {
    id: 'public-service',
    name: 'Public Service',
    description: 'Modernizing public services with secure, transparent, and efficient digital solutions for government agencies and public organizations.',
    icon: '🏛️',
    isActive: true
  },
  {
    id: 'software-platforms',
    name: 'Software and Platforms',
    description: 'Building robust software platforms, SaaS solutions, and enterprise applications that scale with your business needs.',
    icon: '💻',
    isActive: true
  },
  {
    id: 'e-commerce',
    name: 'E-commerce',
    description:
      'Building robust e-commerce platforms that drive sales and provide seamless customer experiences.',
    icon: '🛒',
    isActive: true
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Delivering innovative digital solutions to improve patient outcomes and streamline healthcare operations.',
    icon: '⚕️',
    isActive: false
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description:
      'Advancing agriculture with data-driven insights, IoT, and automation for sustainable farming.',
    icon: '🌾',
    isActive: false
  },
  {
    id: 'education',
    name: 'Education',
    description:
      'Enhancing learning experiences and institutional efficiency with modern educational technology.',
    icon: '🎓',
    isActive: false
  },
  {
    id: 'government',
    name: 'Government',
    description:
      'Modernizing public services with secure, transparent, and efficient digital government solutions.',
    icon: '🏛️',
    isActive: false
  }
]
