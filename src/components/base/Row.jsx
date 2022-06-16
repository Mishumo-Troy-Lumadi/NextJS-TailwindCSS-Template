function Row({ className = '', onClick = () => { }, children }) {
    return (
        <div className={`flex flex-row ${className}`} {...{ onClick }}>
            {children}
        </div>
    );
}

export default Row;