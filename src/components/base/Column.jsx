function Column({ className = '', onClick = () => { }, children }) {
    return (
        <div className={`flex flex-col ${className}`} {...{onClick}}>
            {children}
        </div>
    );
}

export default Column;