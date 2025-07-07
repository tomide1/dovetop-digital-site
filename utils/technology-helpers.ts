import { technologies, technologyCategories } from '@/data/technologies'
import type {
  TechnologyId,
  TechnologyCategoryId,
  Technology,
  TechnologyCategory,
} from '@/types/what-we-do'

export function getTechnology(id: TechnologyId): Technology | undefined {
  return technologies.find((t) => t.id === id)
}

export function getTechnologyCategory(
  id: TechnologyCategoryId
): TechnologyCategory | undefined {
  return technologyCategories.find((c) => c.id === id)
}

export function getTechnologyDisplayName(id: TechnologyId): string {
  return getTechnology(id)?.name ?? id
}
