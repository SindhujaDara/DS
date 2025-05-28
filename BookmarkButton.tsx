import React, { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  cafeId: number;
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ cafeId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  useEffect(() => {
    // Check if this cafe is bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedCafes') || '[]');
    setIsBookmarked(bookmarks.includes(cafeId));
  }, [cafeId]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedCafes') || '[]');
    
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter((id: number) => id !== cafeId);
      localStorage.setItem('bookmarkedCafes', JSON.stringify(updatedBookmarks));
    } else {
      // Add to bookmarks
      bookmarks.push(cafeId);
      localStorage.setItem('bookmarkedCafes', JSON.stringify(bookmarks));
    }
    
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={toggleBookmark}
      className={`p-2 rounded-full transition-all ${
        isBookmarked 
          ? 'bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400' 
          : 'bg-white dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-600'
      }`}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark className="h-5 w-5" fill={isBookmarked ? 'currentColor' : 'none'} />
    </button>
  );
};

export default BookmarkButton;