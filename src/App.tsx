import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Home' },
  { id: 4, name: 'Sports' },
  { id: 5, name: 'Toys' },
  { id: 6, name: 'Baby' },
  { id: 7, name: 'Grocery' },
  { id: 8, name: 'Health' },
  { id: 9, name: 'Beauty' },
  { id: 10, name: 'Pet' },
];

const ResponsiveDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-white rounded-lg shadow-md p-4 ${
              selectedCategory === category ? 'bg-blue-100' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h2 className="text-lg font-bold text-gray-900">{category.name}</h2>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Selected Category: {selectedCategory.name}
          </h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResponsiveDesign;