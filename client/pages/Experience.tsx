import Navigation from '../components/Navigation';

export default function Experience() {
  return (
    <div 
      className="min-h-screen bg-cream-bg flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F1E8 0%, #F5F1E8 50%, rgba(232, 244, 244, 0.30) 100%)'
      }}
    >
      <Navigation />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6 relative z-10 mt-20">
        <div className="flex flex-col items-center gap-8">
          <h1 
            className="text-teal-primary font-arimo font-bold leading-none tracking-tight"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              letterSpacing: '-2px',
              lineHeight: '1'
            }}
          >
            Experience
          </h1>

          <div className="text-text-gray font-arimo text-center max-w-2xl space-y-6">
            <p 
              className="text-text-gray font-arimo"
              style={{
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                lineHeight: '1.33'
              }}
            >
              This page is coming soon. Please continue prompting to help me build out this section with your specific content and requirements.
            </p>
            <p 
              className="text-text-gray/80 font-arimo"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                lineHeight: '1.4'
              }}
            >
              I'd be happy to detail your work history, roles, achievements, and career timeline here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
