const BgSquare = ({ className = "" }) => {
    return (
        <div className={`fixed bottom-30 right-10 w-40 h-40 sm:w-48 sm:h-48 square-spin pointer-events-none ${className}`} />
    );
};
export default BgSquare;
