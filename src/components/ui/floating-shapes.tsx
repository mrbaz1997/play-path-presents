export const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      <div 
        className="floating-circle w-64 h-64 top-10 left-10"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="floating-circle w-32 h-32 top-1/3 right-20"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="floating-circle w-48 h-48 bottom-20 left-1/4"
        style={{ animationDelay: '4s' }}
      />
      <div 
        className="floating-circle w-40 h-40 bottom-10 right-10"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};