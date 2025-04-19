
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-accent">Bamboo Sokoni</h1>
          </div>
          
          <div className="hidden md:block flex-1 mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search bamboo products..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#marketplace" className="text-textDark hover:text-accent transition-colors">Marketplace</a>
            <a href="#learning-hub" className="text-textDark hover:text-accent transition-colors">Learning Hub</a>
            <a href="#about" className="text-textDark hover:text-accent transition-colors">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
