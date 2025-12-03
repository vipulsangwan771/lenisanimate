const GradientText = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#FFFFFF] via-[#3BFEFF] via-[#50A9FF] to-[#6757FF] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
