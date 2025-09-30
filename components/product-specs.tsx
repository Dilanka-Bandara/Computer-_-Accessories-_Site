interface ProductSpecsProps {
  specifications: Record<string, Record<string, string>>
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="space-y-8">
      {Object.entries(specifications).map(([category, specs]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                >
                  <span className="font-medium text-gray-700">{key}:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
