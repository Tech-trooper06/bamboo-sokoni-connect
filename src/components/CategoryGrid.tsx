
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    title: 'Home & Decor',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    description: 'Sustainable bamboo furniture and decorative items'
  },
  {
    title: 'Crafts & Art',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    description: 'Handcrafted bamboo products and artistic pieces'
  },
  {
    title: 'Garden & Outdoor',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    description: 'Bamboo plants and outdoor furniture'
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-textDark mb-8 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
