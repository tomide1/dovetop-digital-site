import { industries } from '@/data/industries'
import { services } from '@/data/services'
import { caseStudies } from '@/data/case-studies'
import type {
  Industry,
  IndustryId,
  IndustryDetailsData,
  ServiceApplicationWithService,
  Service,
  ServiceId,
} from '@/types/what-we-do'
import { projects } from '@/data/projects'

export function getIndustryIcon(industryId: IndustryId): string {
  const industry = industries.find((i) => i.id === industryId)
  return industry?.icon || '🏢'
}

export function getIndustryDetails(
  industryId: IndustryId
): IndustryDetailsData | null {
  const industry = industries.find((i) => i.id === industryId)
  if (!industry) {
    return null
  }

  const industryProjects = projects.filter((cs) =>
    cs.industryIds.includes(industryId)
  )

  const industryCaseStudies = caseStudies.filter((cs) =>
    cs.industryIds.includes(industryId)
  )

  const relatedServiceIds = new Set(
    industryCaseStudies.flatMap((cs) => cs.serviceIds)
  )

  const applications: ServiceApplicationWithService[] = Array.from(
    relatedServiceIds
  )
    .map((serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return {
        serviceId: serviceId,
        service: service,
        applicationText: `Tailored ${service?.title} solutions for the ${industry.name} sector.`,
      }
    })
    .filter(
      (app): app is ServiceApplicationWithService & { service: Service } =>
        !!app.service
    )

  return {
    industry,
    applications,
    caseStudies: industryCaseStudies,
    projects: industryProjects,
  }
}

export function getServiceIndustries(serviceId: ServiceId) {
  const serviceCaseStudies = caseStudies.filter((cs) =>
    cs.serviceIds.includes(serviceId)
  )
  const industryIds = new Set(
    serviceCaseStudies.flatMap((cs) => cs.industryIds)
  )

  const serviceIndustries = Array.from(industryIds)
    .map((industryId) => {
      const industry = industries.find((i) => i.id === industryId)
      return {
        industry,
        application: `Applying our ${services.find((s) => s.id === serviceId)?.title} expertise to the ${industry?.name} industry.`,
      }
    })
    .filter(
      (item): item is { industry: Industry; application: string } =>
        !!item.industry
    )

  return serviceIndustries
}

export function getServiceCaseStudies(serviceId: ServiceId, limit?: number) {
  const serviceCaseStudies = caseStudies.filter((cs) =>
    cs.serviceIds.includes(serviceId)
  )
  if (limit) {
    return serviceCaseStudies.slice(0, limit)
  }
  return serviceCaseStudies
}

export function getServiceInfoIndustries(serviceId: ServiceId) {
  const industryIds = new Set(
    industries.flatMap((cs) => cs.id)
  )

  const serviceIndustries = Array.from(industryIds)
    .map((industryId) => {
      const industry = industries.find((i) => i.id === industryId && i.isActive)
      return {
        industry,
        application: `Applying our ${services.find((s) => s.id === serviceId)?.title} expertise to the ${industry?.name} industry.`,
      }
    })
    .filter(
      (item): item is { industry: Industry; application: string } =>
        !!item.industry
    )

  return serviceIndustries
}