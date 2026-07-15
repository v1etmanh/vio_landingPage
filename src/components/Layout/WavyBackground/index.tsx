import React from 'react'

const WavyBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent">
      <svg 
        className="w-full h-full opacity-100 mix-blend-screen" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glow1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
            <stop offset="20%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="80%" stopColor="#FFD700" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glow2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF5B8" stopOpacity="0" />
            <stop offset="30%" stopColor="#FFF5B8" stopOpacity="1" />
            <stop offset="70%" stopColor="#FFF5B8" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF5B8" stopOpacity="0" />
          </linearGradient>
          
          <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Path 1: Subtle wide wave */}
        <path 
          d="M 15 -10 C 35 25, 5 60, 25 110" 
          fill="none" 
          stroke="url(#glow1)" 
          strokeWidth="0.15" 
          filter="url(#blurGlow)"
        />
        <path 
          d="M 15 -10 C 35 25, 5 60, 25 110" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.04" 
          strokeOpacity="1"
        />

        {/* Path 2: Center irregular wave */}
        <path 
          d="M 45 -10 C 25 30, 75 70, 55 110" 
          fill="none" 
          stroke="url(#glow2)" 
          strokeWidth="0.12" 
          filter="url(#blurGlow)"
        />
        <path 
          d="M 45 -10 C 25 30, 75 70, 55 110" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.03" 
          strokeOpacity="1"
        />

        {/* Path 3: Right side fast wave */}
        <path 
          d="M 85 -10 C 95 20, 65 40, 85 70 S 65 90, 90 110" 
          fill="none" 
          stroke="url(#glow1)" 
          strokeWidth="0.14" 
          filter="url(#blurGlow)"
        />
        <path 
          d="M 85 -10 C 95 20, 65 40, 85 70 S 65 90, 90 110" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.035" 
          strokeOpacity="1"
        />
        
        {/* Path 4 (NEW): Diagonal crossing wave */}
        <path 
          d="M 65 -10 C 45 40, 80 80, 5 110" 
          fill="none" 
          stroke="url(#glow2)" 
          strokeWidth="0.18" 
          filter="url(#blurGlow)"
        />
        <path 
          d="M 65 -10 C 45 40, 80 80, 5 110" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.045" 
          strokeOpacity="1"
        />
        
        {/* Background sweeping wave */}
        <path 
          d="M -10 -10 C 50 40, 30 70, 110 110" 
          fill="none" 
          stroke="#C5A059" 
          strokeWidth="0.4" 
          strokeOpacity="0.2" 
          filter="url(#blurGlow)"
        />

      </svg>
    </div>
  )
}

export default WavyBackground
