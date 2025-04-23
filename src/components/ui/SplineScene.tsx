
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const container = document.getElementById('spline-container');
    if (!container) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Fallback content when there's an error loading the 3D scene
  const FallbackContent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-robot-purple/20 to-black">
      <div className="text-robot-purple text-6xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      </div>
      <p className="text-white text-center px-4">İnteraktif içerik yüklenemedi</p>
    </div>
  );

  // Error boundary pattern using try/catch and ErrorBoundary
  const SplineWithErrorHandling = () => {
    if (hasError) {
      return <FallbackContent />;
    }
    
    return (
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
          onError={() => setHasError(true)}
        />
      </Suspense>
    );
  };

  return (
    <div id="spline-container" className={`${className} relative`}>
      {isVisible ? <SplineWithErrorHandling /> : null}
    </div>
  );
}
