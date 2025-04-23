
'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only load the 3D scene when it's likely to be in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const container = document.getElementById('spline-container');
    if (container) {
      observer.observe(container);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="spline-container" className={`${className} relative`}>
      {isVisible ? (
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
          />
        </Suspense>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  )
}
