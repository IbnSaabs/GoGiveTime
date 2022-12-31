export const SubmitButton = ({
    handleClick,
    className,
    text,
    type
}) => {
    return (
        <button 
            type={type}
            onClick={handleClick} 
            className={className}>{text}</button>
    )
}