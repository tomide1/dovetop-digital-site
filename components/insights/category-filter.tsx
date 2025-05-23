interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onFilterChange: (category: string) => void
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onFilterChange,
}: CategoryFilterProps) => {
  return (
    <div className='mb-8'>
      <h3 className='mb-4 text-lg font-medium text-gray-800'>
        Filter by category
      </h3>
      <div className='flex flex-wrap gap-2'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
