export interface Partner {
  name: string
  logo: string
  type: 'certification' | 'strategic' | 'technology'
}

export const partners: Partner[] = [
  {
    name: 'AWS Partner',
    logo: '/images/partners/aws.svg',
    type: 'certification',
  },
  {
    name: 'Google Cloud Partner',
    logo: '/images/partners/google-cloud.svg',
    type: 'certification',
  },
  {
    name: 'Microsoft Azure Partner',
    logo: '/images/partners/azure.svg',
    type: 'certification',
  },
  {
    name: 'Salesforce Partner',
    logo: '/images/partners/salesforce.svg',
    type: 'strategic',
  },
  {
    name: 'HubSpot Partner',
    logo: '/images/partners/hubspot.svg',
    type: 'strategic',
  },
  {
    name: 'Shopify Partner',
    logo: '/images/partners/shopify.svg',
    type: 'technology',
  },
]
