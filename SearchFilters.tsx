import React, { useState } from 'react';
import { Search, X, Star, DollarSign } from 'lucide-react';
import { FilterOptions } from '../types';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  availableCountries: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onFilterChange, availableCountries }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    minRating: 0,
    priceLevel: [1, 2, 3, 4],
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFilters(prev => {
      const newFilters = { ...prev, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters(prev => {
      const newFilters = { ...prev, minRating: rating };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handlePriceLevelToggle = (level: number) => {
    setFilters(prev => {
      let newPriceLevels: number[];
      
      if (prev.priceLevel.includes(level)) {
        // Remove if already selected
        newPriceLevels = prev.priceLevel.filter(pl => pl !== level);
      } else {
        // Add if not selected
        newPriceLevels = [...prev.priceLevel, level];
      }
      
      // Ensure at least one price level is selected
      if (newPriceLevels.length === 0) {
        newPriceLevels = [level];
      }
      
      const newFilters = { ...prev, priceLevel: newPriceLevels };
      onFilterChange(newFilters);
      return newFilters;
    });
  };
  
  const clearSearch = () => {
    setFilters(prev => {
      const newFilters = { ...prev, search: '' };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const resetFilters = () => {
    const defaultFilters: FilterOptions = {
      search: '',
      minRating: 0,
      priceLevel: [1, 2, 3, 4],
      country: ''
    };
    
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-5 mb-8">
      <h2 className="text-xl font-medium mb-5 text-zinc-800 dark:text-white">Find Your Ideal Café</h2>
      
      <div className="space-y-5">
        {/* Search input */}
        <div className="relative">
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleInputChange}
            placeholder="Search cafés by name..."
            className="w-full px-4 py-2 pl-10 pr-10 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          
          {filters.search && (
            <button 
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="h-4 w-4 text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors" />
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Country filter */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Country</label>
            <select
              name="country"
              value={filters.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 dark:focus:ring-amber-400"
            >
              <option value="">All Countries</option>
              {availableCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          
          {/* Minimum Rating filter */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Minimum Rating</label>
            <div className="flex items-center space-x-2">
              {[0, 3, 3.5, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRatingChange(rating)}
                  className={`flex items-center px-3 py-1.5 rounded-lg border transition-colors ${
                    filters.minRating === rating
                      ? 'bg-amber-500 border-amber-600 text-white'
                      : 'bg-white dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  {rating === 0 ? (
                    'Any'
                  ) : (
                    <>
                      <span>{rating}</span>
                      <Star className="h-3.5 w-3.5 ml-1" fill="currentColor" />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Price Level filter */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Price Level</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((level) => (
              <button
                key={level}
                onClick={() => handlePriceLevelToggle(level)}
                className={`flex items-center px-3 py-1.5 rounded-lg border transition-colors ${
                  filters.priceLevel.includes(level)
                    ? 'bg-amber-500 border-amber-600 text-white'
                    : 'bg-white dark:bg-zinc-700 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {Array(level)
                  .fill(0)
                  .map((_, i) => (
                    <DollarSign key={i} className="h-3.5 w-3.5" />
                  ))}
              </button>
            ))}
          </div>
        </div>
        
        {/* Reset Filters button */}
        <div className="flex justify-end">
          <button
            onClick={resetFilters}
            className="text-sm text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;