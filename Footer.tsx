import React from 'react';
import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-serif font-bold text-white">Find</span>
            </Link>
            <p className="text-zinc-400 mb-4">
              Discover the world's most extraordinary cafés and coffee experiences, one cup at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zinc-400 hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/search" className="text-zinc-400 hover:text-amber-500 transition-colors">Search</Link></li>
              <li><Link to="/map" className="text-zinc-400 hover:text-amber-500 transition-colors">Map View</Link></li>
              <li><Link to="/bookmarks" className="text-zinc-400 hover:text-amber-500 transition-colors">Bookmarks</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Top Cities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Paris, France</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Vienna, Austria</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">London, UK</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Tokyo, Japan</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">New York, USA</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-zinc-400 mb-4">Subscribe to receive updates on new cafés and coffee trends.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-zinc-500 text-center">
            © {new Date().getFullYear()} Find. All rights reserved. 
            <span className="mx-2">|</span> 
            <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;