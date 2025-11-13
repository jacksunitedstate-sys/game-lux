import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gta-dark flex items-center justify-center z-50">
      <div className="text-center">
        <div className="gta-loader mx-auto mb-6"></div>
        <h2 className="text-2xl font-gta text-gta-neon animate-pulse-neon">
          Loading GTA Lux...
        </h2>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gta-neon rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-gta-neon-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-gta-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
