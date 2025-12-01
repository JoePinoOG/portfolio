'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#17171B]">
      <svg
        className="w-full h-full opacity-30"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#20C997" stopOpacity="0" />
            <stop offset="50%" stopColor="#20C997" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#20C997" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M -200,400 C 150,200 450,600 800,400 C 1150,200 1400,500 1600,400"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          className="animate-wave-1"
        />

        <path
          d="M -200,200 C 200,100 600,300 1000,200 C 1300,150 1600,250 1800,200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          opacity="0.6"
          className="animate-wave-2"
        />

        <path
          d="M -200,600 C 300,650 700,500 1100,600 C 1400,680 1700,550 1900,600"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          opacity="0.5"
          className="animate-wave-3"
        />

        <path
          d="M -200,300 C 400,350 800,250 1200,300 C 1500,320 1800,280 2000,300"
          fill="none"
          stroke="#20C997"
          strokeWidth="1"
          opacity="0.3"
          className="animate-wave-4"
        />

        <path
          d="M -200,500 C 200,450 800,550 1200,500 C 1600,450 1900,520 2100,500"
          fill="none"
          stroke="#20C997"
          strokeWidth="1"
          opacity="0.3"
          className="animate-wave-5"
        />
      </svg>
    </div>
  );
}
