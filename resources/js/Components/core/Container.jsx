export default function Container({ children, className = '',  ...rest }) {
    return (
        <div className={className.concat(" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8")} {...rest}>{children}</div>
    );
}