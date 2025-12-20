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
        }
      ]
    }
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Comprehensive solutions for energy companies to optimize operations, enhance sustainability, and drive digital transformation across renewable and traditional energy sectors.',
    summary: 'Global economic growth, technological breakthroughs, and the urgent need for sustainable solutions are reshaping how energy is generated, distributed, and consumed. Europe, Africa, and America are experiencing this transformation in distinct ways, influenced by their unique economic structures, resource availability, and policy frameworks. As the push for cleaner, more efficient energy accelerates, the sector continues to drive industrial development, foster innovation, and attract significant investment. Covering oil and gas production, power generation, renewable energy systems, energy storage, and digital energy services, it remains a cornerstone of global economic activity. Digitalization, innovation, and sustainability are transforming traditional energy models into more intelligent, resilient, and diversified systems. Advanced technologies are creating new revenue streams, improving efficiency, and enabling nations and organizations to adopt cleaner energy solutions. These changes position the sector as a central driver of technological progress and long-term economic growth.',
    stats: [
      {
        value: '2050',
        description: 'is the target for when the European Union\'s climate policy goal of achieving climate neutrality through fast-tracking renewable energy investments'
      },
      {
        value: '40%+',
        description: 'of electricity generation in the EU is renewable with wind and solar leading growth'
      },
      {
        value: '> 30%',
        description: 'reductions in Europe\'s CO₂ emissions, with many countries reporting a decline of over 30% compared to 1990 levels'
      },
      {
        value: '~ 600M',
        description: 'people in Africa still lack access to electricity. North Africa has nearly universal access, while Sub-Saharan Africa lags behind'
      }
    ],
    revenue: {
      sectionTitle: 'Projected Revenue Of The Global Energy Sector 2024 onwards',
      cards: [
        {
          title: 'Global Energy Market Overview',
          description: 'The energy sector encompasses several interconnected components that collectively determine global revenue levels. Solar and wind technologies continue to dominate global energy expansion. Many countries are increasing renewable capacity to meet climate targets, leading to higher investments and greater market value.'
        },
        {
          title: '2025 Market Projections',
          description: 'According to Cognitive Market Research, the global energy market is projected to reach approximately USD 1.99 trillion in 2025. This estimate reflects combined activity across traditional energy, clean energy, electricity generation, and related services.'
        },
        {
          title: 'Power Generation Market',
          description: 'Research Nester projects that the global power-generation market will reach USD 1.47 trillion in 2025. Growth is driven by rising electricity consumption, urbanization, digital infrastructure expansion, and new renewable installations.'
        },
        {
          title: 'Renewable Energy Market',
          description: 'Grand View Research estimates that the global renewable-energy market will generate about USD 1.6 trillion in 2025. This reflects increasing investments in solar farms, wind power, storage technologies, and clean-energy financing frameworks.'
        },
        {
          title: 'Growth Drivers',
          description: 'Climate-action policies, tax incentives for renewable installations, and national electrification programs in Europe, Asia, and Africa are boosting investments and increasing sector revenues.'
        },
        {
          title: '2026 Outlook',
          description: 'Energy forecasts for 2026 suggest continued expansion, driven by increased clean-energy adoption and growth in electricity-generation technologies. Forecasts indicate that the renewable-energy segment will continue to grow beyond the USD 1.6 trillion mark recorded in 2025.'
        },
        {
          title: 'Future Expansion Areas',
          description: 'Expansion is expected in large-scale solar installations, offshore wind projects, battery storage systems, and green-hydrogen technology. As renewable energy grows, global demand for advanced battery storage increases, enabling grid stability and round-the-clock clean-energy supply.'
        }
      ]
    },
    opportunities: {
      sectionTitle: 'Key Opportunities',
      items: [
        {
          title: 'Renewable Energy Technologies',
          description: 'Renewable energy technologies remain one of the most powerful growth drivers in the sector. Solar photovoltaic (PV) systems, wind turbines, hydroelectric facilities, and geothermal plants have gained global traction due to reduced installation costs and improved efficiency.',
          details: [
            'Advancements in materials science, such as high-efficiency solar cells and taller, more aerodynamic wind turbines, have significantly increased power output.',
            'Large-scale renewable farms are now supported by advanced tracking systems and remote monitoring tools that optimize performance.',
            'These innovations allow energy companies to diversify their portfolios, reduce carbon emissions, and meet global climate commitments.'
          ],
          example: 'With international pressure for decarbonization rising, renewable energy represents not just an environmental necessity but a long-term economic opportunity.'
        },
        {
          title: 'Energy Storage and Battery Innovation',
          description: 'Energy storage systems (ESS) are critical to stabilizing modern power grids. Innovations in lithium-ion, solid-state, and flow batteries have enabled longer-duration storage, faster charging, and enhanced safety.',
          details: [
            'Advanced ESS technologies help balance supply and demand by storing excess electricity during low-usage periods and releasing it when consumption increases.',
            'Grid-scale battery installations also reduce reliance on fossil-fuel backup generators and enhance grid reliability.',
            'New storage solutions unlock opportunities for electric mobility, microgrids, and decentralized power systems, expanding the overall revenue potential of the energy market.'
          ],
          example: 'Without effective storage, renewable generation cannot fully meet rising demand due to its intermittency, especially for solar and wind.'
        },
        {
          title: 'Smart Grids and Grid Digitization',
          description: 'Smart grids are modernized electrical networks enhanced by digital communication technologies, sensors, and automated control systems. Unlike traditional grids, which operate with limited visibility, smart grids provide real-time insight into electricity flow, demand patterns, and system performance.',
          details: [
            'Digitized grids incorporate technologies such as smart meters, IoT-enabled transformers, automated switches, and advanced distribution management systems.',
            'These solutions support real-time data analytics, fault detection, self-correction, and load optimization.',
            'The result is a more stable grid with fewer outages, reduced losses, enhanced energy efficiency, and improved customer engagement.'
          ],
          example: 'Smart grids also enable the large-scale integration of renewable energy sources, electric vehicles, and distributed generation systems.'
        },
        {
          title: 'Artificial Intelligence and Predictive Analytics',
          description: 'Artificial Intelligence (AI) is transforming energy operations through automation, predictive insights, and intelligent decision-making. Machine learning algorithms analyze large volumes of data to forecast equipment failures, optimize energy distribution, predict demand fluctuations, and support dynamic pricing models.',
          details: [
            'In power plants and industrial facilities, AI reduces downtime by identifying performance anomalies early.',
            'In renewable farms, AI predicts wind and solar output, allowing operators to manage grid fluctuations more effectively.',
            'Predictive analytics also enhance fuel efficiency, improve workforce planning, and support risk mitigation.'
          ],
          example: 'By embedding AI across operational workflows, energy companies achieve greater efficiency, lower operating costs, and higher output reliability.'
        },
        {
          title: 'Internet of Things (IoT) for Asset Monitoring',
          description: 'IoT technology involves installing smart sensors and connected devices on energy infrastructure such as pipelines, power stations, turbines, and offshore platforms. These devices capture real-time data on temperature, pressure, vibration, corrosion, environmental changes, and overall equipment health.',
          details: [
            'Continuous monitoring increases situational awareness and enables automated responses to irregularities.',
            'IoT reduces manual inspections, enhances worker safety, and minimizes operational disruptions due to unexpected breakdowns.',
            'The insights gathered support asset lifespan optimization and improved regulatory compliance.'
          ],
          example: 'This technology is particularly beneficial in high-risk environments such as oil and gas exploration.'
        },
        {
          title: 'Carbon Capture, Utilization, and Storage (CCUS)',
          description: 'Carbon Capture, Utilization, and Storage is an emerging technology aimed at reducing industrial carbon emissions. CCUS systems capture carbon dioxide from power plants, factories, and natural gas processing facilities before it reaches the atmosphere.',
          details: [
            'Once captured, the CO₂ can be transported and stored deep underground or repurposed for industrial applications such as enhanced oil recovery, manufacturing carbon-based products, or developing synthetic fuels.',
            'Governments worldwide are incentivizing CCUS as part of climate mitigation strategies.',
            'Companies adopting CCUS can generate revenue through carbon credit markets, regulatory compliance benefits, and innovation-driven partnerships.'
          ],
          example: 'CCUS technology is becoming essential for industries that cannot easily eliminate emissions through other means.'
        },
        {
          title: 'Hydrogen Technologies',
          description: 'Hydrogen, especially green hydrogen produced from renewable electricity—is becoming a major frontier for clean energy. It can be used to power vehicles, support industrial heating, generate electricity, and enable long-term energy storage.',
          details: [
            'Green hydrogen is gaining importance because it emits no carbon when used, making it suitable for industries that cannot easily decarbonize through electricity alone.',
            'Global investments in electrolyzers, hydrogen pipelines, fuel cells, and hydrogen fueling stations are increasing rapidly.',
            'As production cost declines, hydrogen will play a vital role in shaping future energy markets and supporting net-zero commitments.'
          ],
          example: 'Hydrogen technology represents a key pathway for achieving deep decarbonization across multiple sectors.'
        },
        {
          title: 'Digital Twins',
          description: 'A digital twin is a virtual model of physical energy assets such as wind turbines, power plants, refineries, or transmission lines. It simulates real-world performance using real-time data, allowing engineers to test scenarios, optimize operations, and predict failures without interrupting live operations.',
          details: [
            'Digital twins minimize operational risks, improve planning accuracy, reduce maintenance costs, and support safer decision-making.',
            'They also accelerate innovation because organizations can evaluate new designs or workflows in a virtual environment before implementing them physically.',
            'This technology is particularly valuable for complex or high-cost infrastructure.'
          ],
          example: 'Energy companies use digital twins to optimize turbine performance and predict maintenance needs before equipment failure occurs.'
        },
        {
          title: 'Blockchain for Energy Trading',
          description: 'Blockchain enables secure, transparent, and decentralized energy transactions. It allows producers, consumers, and power grid operators to perform real-time energy trades without intermediaries.',
          details: [
            'In electricity markets, blockchain supports peer-to-peer energy trading where households with rooftop solar panels can sell excess power directly to neighbors.',
            'It enhances traceability in renewable energy certificate (REC) systems, prevents fraud, and supports trustworthy carbon accounting.',
            'Utility companies are adopting blockchain to streamline billing, reduce administrative overhead, and create new digital revenue models.'
          ],
          example: 'Blockchain technology is enabling new business models in distributed energy systems and renewable energy trading.'
        },
        {
          title: 'Robotics and Automation',
          description: 'Robotics and automation technologies are redefining operational workflows across the energy sector. Drones inspect power lines, pipelines, wind turbines, and offshore structures, reducing human exposure to hazardous environments.',
          details: [
            'Automated drilling systems increase accuracy and efficiency in oil and gas operations.',
            'Robotics assist with maintenance, cleaning, installation, and facility surveillance.',
            'These technologies reduce labor-related risks, improve precision, and lower operational costs.',
            'Automation also supports 24/7 monitoring and optimizes workforce deployment, allowing energy companies to focus on high-value tasks.'
          ],
          example: 'Robotic systems are increasingly used for dangerous tasks like offshore platform maintenance and nuclear facility operations.'
        },
        {
          title: 'Waste-to-Energy and Bioenergy Innovation',
          description: 'Waste-to-energy (WTE) technologies convert organic waste such as agricultural residues, municipal solid waste, and industrial by-products into electricity, heat, or biofuels. This creates a circular energy model where waste becomes a valuable input rather than a disposal problem.',
          details: [
            'Emerging bioenergy systems use advanced enzymatic processes, anaerobic digestion, and thermal gasification to produce cleaner and more efficient biofuels.',
            'These technologies support rural electrification, reduce environmental pollution, and create new revenue streams for municipalities and private companies.',
            'WTE solutions help address both energy needs and waste management challenges simultaneously.'
          ],
          example: 'Bioenergy innovations are creating sustainable energy solutions while solving waste management problems in urban and rural areas.'
        }
      ]
    },
    icon: '🛡️',
    isActive: true
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Transforming financial services with secure, scalable, and compliant technology solutions.',
    summary: 'The global finance industry is undergoing a profound transformation, driven by a convergence of economic volatility, technological breakthroughs, regulatory shifts, and evolving consumer expectations. In Europe, modernization of financial regulations and the reallocation of capital are redefining market dynamics, while Africa\'s financial landscape is rapidly advancing through mobile money platforms that are evolving into comprehensive financial ecosystems. Across the Americas, established markets are embracing high-volume investments alongside a swift transition to real-time payments infrastructure. This sector which encompasses banking, insurance, investment services, capital markets, and fintech, remains a cornerstone of the global economy, with performance closely tied to macroeconomic trends, policy adjustments, and innovation adoption. Amid intensifying competition and rising customer expectations, financial institutions are increasingly prioritizing digital transformation as a strategic necessity rather than a choice. Leveraging emerging technologies offers opportunities to enhance operational efficiency, enrich customer experiences, and unlock new revenue streams. As regulatory frameworks tighten and market demands evolve, the sector is projected to generate significant growth in both 2025 and 2026, underscoring the critical role of innovation and technological integration in sustaining long-term competitiveness and market influence.',
    stats: [
      {
        value: '34%',
        description: 'of global private capital was captured by Europe in 2025, representing more than $300 billion in capital raised across private markets — the region\'s highest share on record'
      },
      {
        value: '~ 35%',
        description: 'YoY is the estimated increase in Open banking API calls, showing accelerating adoption across consumer and business financial products'
      },
      {
        value: '2 Billion',
        description: 'mark was crossed by global mobile money accounts with Sub-Saharan Africa contributing over 50% of all active accounts'
      },
      {
        value: '> 20%',
        description: 'is Africa\'s mobile money transaction volume increase YoY, showing continued adoption even in saturated markets like Kenya and Ghana'
      },
      {
        value: '25 – 30%',
        description: 'of African VC funding in 2024–2025 flowed to fintech — the continent\'s most funded sector'
      }
    ],
    revenue: {
      sectionTitle: 'Projected Revenue Of The Global Finance Sector 2024 onwards',
      cards: [
        {
          title: 'Global Financial Services Market',
          description: 'The global financial services sector encompasses banking, insurance, investment services, capital markets, and fintech solutions, representing one of the largest economic sectors worldwide.'
        },
        {
          title: 'Digital Banking Growth',
          description: 'The digital banking sector is projected to grow at a CAGR of 13% globally, driven by increasing adoption of mobile banking, neo-banks, and embedded financial services.'
        },
        {
          title: 'Fintech Market Expansion',
          description: 'Global fintech investments continue to surge, with particular growth in payment processing, digital lending, and blockchain-based financial services across emerging markets.'
        },
        {
          title: 'Open Banking Revolution',
          description: 'Open banking API adoption is accelerating globally, with an estimated 35% year-over-year increase in API calls, enabling new financial products and services.'
        },
        {
          title: 'Mobile Money Dominance',
          description: 'Mobile money accounts have crossed the 2 billion mark globally, with Sub-Saharan Africa contributing over 50% of all active accounts, driving financial inclusion.'
        },
        {
          title: 'RegTech and Compliance',
          description: 'Regulatory technology adoption is reducing compliance costs by up to 40% while improving risk management and regulatory reporting across financial institutions.'
        }
      ]
    },
    opportunities: {
      sectionTitle: 'Key Opportunities',
      items: [
        {
          title: 'Artificial Intelligence (AI) and Machine Learning (ML)',
          description: 'Artificial intelligence and machine learning are revolutionizing financial services. AI-driven solutions allow institutions to analyze vast datasets, automate complex processes, and deliver personalized services.',
          details: [
            'Fraud Detection: AI models detect anomalies in transactions in real-time, reducing financial losses due to fraud.',
            'Credit Scoring & Risk Management: ML algorithms predict default probabilities with higher accuracy than traditional methods, helping lenders minimize risk.',
            'Robo-Advisory Services: Automated investment platforms offer personalized portfolio management based on customer preferences and market trends.'
          ],
          example: 'Financial institutions leveraging AI report operational cost reductions of up to 30% and increased customer satisfaction through tailored services.'
        },
        {
          title: 'Blockchain and Distributed Ledger Technology',
          description: 'Blockchain provides a secure, transparent, and decentralized platform for recording transactions, offering tremendous growth opportunities in finance.',
          details: [
            'Cross-Border Payments: Blockchain reduces transaction time from days to minutes and significantly lowers costs.',
            'Smart Contracts: Automated contracts ensure compliance and execution without intermediaries, reducing legal and administrative costs.',
            'Regulatory Reporting: Immutable ledgers streamline audits and ensure transparency, enhancing regulatory compliance.'
          ],
          example: 'Blockchain adoption can reduce transaction processing costs by 40–50%, while improving trust and efficiency in banking networks.'
        },
        {
          title: 'Digital Banking and Fintech Integration',
          description: 'Digital-first banking solutions and fintech partnerships enable institutions to reach underserved markets while optimizing operations.',
          details: [
            'Mobile Banking & Neo-Banks: Fully digital platforms offer 24/7 access to banking services, attracting tech-savvy and remote users.',
            'Embedded Finance: Integration of financial services into non-financial apps (e.g., e-commerce platforms offering credit or insurance).',
            'Digital Wallets & Contactless Payments: Increasing adoption drives transaction volume and customer loyalty.'
          ],
          example: 'The digital banking sector is projected to grow at a CAGR of 13% globally, providing significant revenue opportunities.'
        },
        {
          title: 'Cloud Computing',
          description: 'Cloud infrastructure empowers financial institutions to be agile, scalable, and cost-efficient.',
          details: [
            'Data Storage & Analytics: Cloud platforms allow real-time processing of large datasets for actionable insights.',
            'Scalable Operations: Institutions can expand services without heavy investment in physical infrastructure.',
            'API Integration: Cloud facilitates collaboration with fintech startups, enabling innovative services and faster go-to-market strategies.'
          ],
          example: 'Cloud adoption reduces IT costs by 20–30% and accelerates innovation cycles.'
        },
        {
          title: 'Cybersecurity & Data Protection',
          description: 'With increasing digitalization, cybersecurity is crucial for trust and compliance in finance.',
          details: [
            'Advanced Threat Detection: AI-driven security tools prevent cyberattacks and fraud.',
            'Regulatory Compliance: Ensures adherence to GDPR, PSD2, and other global financial regulations.',
            'Biometric Authentication: Enhances security for customer accounts and transactions.'
          ],
          example: 'Strengthened security reduces financial and reputational risks, safeguarding long-term growth.'
        },
        {
          title: 'Big Data and Analytics',
          description: 'The explosion of data presents an opportunity for financial institutions to drive growth through informed decision-making.',
          details: [
            'Customer Insights: Predictive analytics enables cross-selling and personalized offerings.',
            'Market Intelligence: Real-time data analysis helps identify trends, investment opportunities, and risks.',
            'Operational Efficiency: Data-driven automation optimizes internal processes.'
          ],
          example: 'Banks leveraging big data analytics can increase revenue by up to 15% through improved customer targeting and operational efficiency.'
        },
        {
          title: 'Robotic Process Automation (RPA)',
          description: 'RPA automates repetitive back-office tasks, freeing employees to focus on strategic activities.',
          details: [
            'Loan Processing: Automates approval workflows and reduces turnaround time.',
            'Compliance Reporting: Generates reports automatically, reducing manual errors.',
            'Claims Management: Insurance firms process claims faster with RPA solutions.'
          ],
          example: 'Institutions using RPA achieve 50–70% faster processing times and reduce operational costs significantly.'
        },
        {
          title: 'Regulatory Technology (RegTech)',
          description: 'RegTech helps financial institutions comply with regulatory requirements efficiently.',
          details: [
            'Automated Monitoring: Tracks regulatory changes in real-time and ensures ongoing compliance.',
            'AML & Fraud Detection: Detects suspicious activities and prevents money laundering.',
            'Reporting Efficiency: Generates regulatory reports accurately and on time.'
          ],
          example: 'RegTech adoption reduces compliance costs by up to 40%, while minimizing regulatory risks.'
        },
        {
          title: 'Internet of Things (IoT) and Wearables',
          description: 'IoT devices create new opportunities for personalized financial products and risk management.',
          details: [
            'Insurance Risk Assessment: Devices track driving behavior, health metrics, or property conditions for tailored insurance policies.',
            'Real-Time Data Collection: Provides actionable insights for loan approvals and investment decisions.'
          ],
          example: 'Personalized products increase customer satisfaction and retention, driving incremental revenue.'
        },
        {
          title: 'Augmented Reality (AR) and Virtual Reality (VR)',
          description: 'AR/VR technologies are transforming customer engagement and staff training in finance.',
          details: [
            'Immersive Banking Experiences: Virtual branches and interactive dashboards enhance user experience.',
            'Training Simulations: VR prepares employees for complex scenarios, improving efficiency and decision-making.'
          ],
          example: 'AR/VR adoption strengthens brand engagement and operational effectiveness.'
        }
      ]
    },
    icon: '💰',
    isActive: true
  },
  {
    id: 'legal',
    name: 'Legal',
    description: 'Empowering law firms and legal departments with technology for e-discovery, case management, and compliance.',
    summary: 'The global legal industry is undergoing a dynamic transformation, driven by globalization, complex regulatory environments, and increasing corporate activity. Traditional law‑firm models are being disrupted by innovative technology solutions, redefining how legal services are structured, priced, and delivered. Legal‑tech startups, alternative service providers, and cloud-based platforms are emerging alongside conventional firms, raising client expectations for faster, more efficient, and cost-effective solutions. Rising demand for cross-border transactions, regulatory compliance including ESG, data protection, and international trade and Corporate advisory services are creating new growth opportunities. With annual revenues reaching hundreds of billions of dollars, the sector remains a cornerstone of commerce, governance, and societal development. Technological innovation is reshaping the very fabric of the legal landscape. Artificial intelligence, automation, and digital tools are enabling law firms, corporate legal departments, and clients to streamline operations, improve accuracy, and enhance accessibility. This digital pivot is not only modernizing traditional practices but also redefining competition and service delivery standards. As the industry looks toward 2026, projected revenues highlight the magnitude of this transformation, revealing emerging trends, regional dynamics, and strategic prospects for stakeholders across the legal ecosystem.',
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
