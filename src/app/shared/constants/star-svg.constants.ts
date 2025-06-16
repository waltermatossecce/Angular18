export const STAR_SVG = {
  FULL: `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
         stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>`,

  PARTIAL: `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
            stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="partialFillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style="stop-color:currentColor; stop-opacity:1" />
        <stop offset="50%" style="stop-color:currentColor; stop-opacity:0" />
      </linearGradient>
    </defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
          fill="url(#partialFillGradient)"></path>
  </svg>`,

  EMPTY: `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
          stroke-width="2" class="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>`,
};
