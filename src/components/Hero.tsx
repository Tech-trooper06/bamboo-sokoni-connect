
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6">
              Sustainable Bamboo Marketplace
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connecting bamboo farmers, artisans, and conscious consumers in a sustainable ecosystem.
            </p>
            <div className="space-x-4">
              <Button className="bg-accent hover:bg-accent/90">
                Explore Products
              </Button>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Join as Vendor
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Bamboo forest"
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
