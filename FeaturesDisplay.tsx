import React from 'react';
import { Coffee, Wifi, UtensilsCrossed, Music, Building, BookOpen, Armchair, Clock } from 'lucide-react';

interface FeaturesDisplayProps {
  features: string[];
}

const FeaturesDisplay: React.FC<FeaturesDisplayProps> = ({ features }) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'historic':
        return <Building className="h-5 w-5" />;
      case 'free wifi':
      case 'wifi':
        return <Wifi className="h-5 w-5" />;
      case 'live music':
      case 'piano music':
      case 'music':
        return <Music className="h-5 w-5" />;
      case 'full menu':
      case 'brunch menu':
      case 'vegetarian options':
        return <UtensilsCrossed className="h-5 w-5" />;
      case 'literary heritage':
      case 'literary':
        return <BookOpen className="h-5 w-5" />;
      case 'outdoor seating':
      case 'communal tables':
        return <Armchair className="h-5 w-5" />;
      case '24/7 service':
      case 'late hours':
        return <Clock className="h-5 w-5" />;
      default:
        return <Coffee className="h-5 w-5" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex items-center bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-lg"
        >
          <div className="mr-2 text-amber-600 dark:text-amber-400">
            {getFeatureIcon(feature)}
          </div>
          <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDisplay;