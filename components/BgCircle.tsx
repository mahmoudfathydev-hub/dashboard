const BgCircle = ({ className = "" }) => {
    return (
        <div className={`absolute -top-24 right-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-600/30 blur-3xl animate-float pointer-events-none ${className}`} />
    );
};
export default BgCircle;
