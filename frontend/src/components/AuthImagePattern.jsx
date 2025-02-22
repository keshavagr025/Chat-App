const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-12 rounded-3xl shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse opacity-20"></div>
      
      <div className="max-w-md text-center relative z-10">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl rotate-45 ${
                i % 3 === 0 ? "animate-spin-slow" : i % 2 === 0 ? "animate-bounce" : "animate-pulse"
              }`}
            />
          ))}
        </div>
        <h2 className="text-3xl font-extrabold text-primary mb-4 drop-shadow-lg">{title}</h2>
        <p className="text-base-content/70 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
};



export default AuthImagePattern;
