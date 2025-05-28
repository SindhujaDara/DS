import React, { useState, useEffect } from 'react';
import { Coffee, Moon, Sun, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className={`h-7 w-7 ${isScrolled ? 'text-amber-700 dark:text-amber-500' : 'text-amber-800 dark:text-amber-300'}`} />
          <span className={`text-2xl font-serif font-bold ${
            isScrolled 
              ? 'text-zinc-800 dark:text-white' 
              : 'text-zinc-900 dark:text-white'
          }`}>
            Find
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/search" 
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800' 
                : 'hover:bg-white/20 dark:hover:bg-black/20'
            }`}
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
          </Link>
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-zinc-100 dark:hover:bg-zinc-800' 
                : 'hover:bg-white/20 dark:hover:bg-black/20'
            }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;