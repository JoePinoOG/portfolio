'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#17171B]">
      <svg
        className="w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#20C997" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#20C997" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <path
          d="M 0,400 Q 150,300 300,400 T 600,400 T 900,400 T 1200,400"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-wave-1"
        />
        <path
          d="M 0,200 Q 200,100 400,200 T 800,200 T 1200,200"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-wave-2"
        />
        <path
          d="M 0,600 Q 250,500 500,600 T 1000,600 T 1200,600"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-wave-3"
        />
        <path
          d="M 0,100 Q 180,50 360,100 T 720,100 T 1200,100"
          fill="none"
          stroke="#20C997"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-wave-4"
        />
        <path
          d="M 0,700 Q 220,650 440,700 T 880,700 T 1200,700"
          fill="none"
          stroke="#20C997"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-wave-5"
        />
        <path
          d="M 0,300 Q 170,200 340,300 T 680,300 T 1200,300"
          fill="none"
          stroke="#20C997"
          strokeWidth="2"
          opacity="0.4"
          className="animate-wave-6"
        />
        <path
          d="M 0,500 Q 240,400 480,500 T 960,500 T 1200,500"
          fill="none"
          stroke="#20C997"
          strokeWidth="2"
          opacity="0.4"
          className="animate-wave-7"
        />
        
        <path
          d="M 0,150 Q 160,80 320,150 T 640,150 T 1200,150"
          fill="none"
          stroke="#20C997"
          strokeWidth="1"
          opacity="0.3"
          className="animate-wave-8"
        />
        <path
          d="M 0,550 Q 210,480 420,550 T 840,550 T 1200,550"
          fill="none"
          stroke="#20C997"
          strokeWidth="1"
          opacity="0.3"
          className="animate-wave-9"
        />
        <path
          d="M 0,350 Q 190,280 380,350 T 760,350 T 1200,350"
          fill="none"
          stroke="#20C997"
          strokeWidth="1.5"
          opacity="0.5"
          className="animate-wave-10"
        />
      </svg>
    </div>
  );
}