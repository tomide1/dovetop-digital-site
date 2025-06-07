# Case Studies Components

This directory contains reusable components for displaying case studies throughout the application.

## Components

### CaseStudyCard

A flexible, reusable component for displaying case study information in various contexts.

#### Props

| Prop               | Type                                   | Default     | Description                              |
| ------------------ | -------------------------------------- | ----------- | ---------------------------------------- |
| `caseStudy`        | `CaseStudy`                            | -           | **Required.** The case study data object |
| `variant`          | `'default' \| 'compact' \| 'featured'` | `'default'` | Visual variant of the card               |
| `showImage`        | `boolean`                              | `false`     | Whether to display the hero image        |
| `showClient`       | `boolean`                              | `false`     | Whether to display the client name       |
| `showIndustry`     | `boolean`                              | `false`     | Whether to display industry tags         |
| `showTechnologies` | `boolean`                              | `false`     | Whether to display technology stack      |
| `showDuration`     | `boolean`                              | `false`     | Whether to display project duration      |
| `maxResults`       | `number`                               | `2`         | Maximum number of result badges to show  |
| `className`        | `string`                               | `''`        | Additional CSS classes                   |
| `onClick`          | `(e: React.MouseEvent) => void`        | -           | Optional click handler                   |
| `data-testid`      | `string`                               | -           | Test identifier                          |

#### Variants

- **`default`**: Standard card with normal padding and text sizes
- **`compact`**: Smaller card with reduced padding, ideal for sidebars or grids
- **`featured`**: Larger card with enhanced styling for hero sections

#### Usage Examples

```tsx
// Basic usage
<CaseStudyCard caseStudy={caseStudy} />

// Full-featured card for case studies page
<CaseStudyCard
  caseStudy={caseStudy}
  variant="featured"
  showImage={true}
  showClient={true}
  showIndustry={true}
  showTechnologies={true}
  maxResults={3}
/>

// Compact card for industry details
<CaseStudyCard
  caseStudy={caseStudy}
  variant="compact"
  maxResults={2}
  onClick={(e) => e.stopPropagation()}
/>
```

#### Features

- **Responsive design** with mobile-first approach
- **Accessibility** compliant with ARIA standards
- **Service type badges** with color coding
- **Technology stack display** with overflow handling
- **Result highlights** with customizable limits
- **Hover animations** and smooth transitions
- **SEO-friendly** semantic markup

#### Testing

The component includes comprehensive test coverage:

```bash
npm test -- --testPathPattern=case-study-card
```

Tests cover:

- Basic rendering and content display
- Conditional rendering based on props
- All variant styles
- User interactions
- Accessibility features
- Edge cases and error handling

## Integration

The CaseStudyCard is currently used in:

- **IndustryCard component** - For displaying featured case studies in industry details
- **Case Studies page** - For the main case study grid (planned)

## Type Definitions

The component uses the `CaseStudy` type from `@/data/case-studies` which includes:

- Basic information (title, description, client)
- Results and metrics
- Technical details (technologies, duration)
- Categorization (service types, industries)
- Media (images, URLs)
