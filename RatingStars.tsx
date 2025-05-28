import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 'md' }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const starSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  };
  
  const starSize = starSizes[size];
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          // Full star
          return (
            <Star 
              key={i} 
              className={`${starSize} text-amber-500`}
              fill="currentColor"
            />
          );
        } else if (i === fullStars && hasHalfStar) {
          // Half star - we'll simulate with CSS
          return (
            <div key={i} className="relative">
              <Star className={`${starSize} text-zinc-300 dark:text-zinc-600`} fill="currentColor" />
              <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
                <Star className={`${starSize} text-amber-500`} fill="currentColor" />
              </div>
            </div>
          );
        } else {
          // Empty star
          return (
            <Star 
              key={i} 
              className={`${starSize} text-zinc-300 dark:text-zinc-600`}
              fill="currentColor"
            />
          );
        }
      })}
    </div>
  );
};

export default RatingStars;