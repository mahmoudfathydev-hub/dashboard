const BgCircle = ({ className = "" }) => {
    return (
        <div className={`absolute -top-1 right-10 -translate-x-1/2 w-72 h-72 rounded-full bg-purple-600/30 blur-3xl animate-float pointer-events-none ${className}`} />
    );
};
export default BgCircle;
