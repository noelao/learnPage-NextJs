export const Card = ({children} : {children: React.ReactNode}) => {
    const cardStyle = {
        flex: "1",
        padding: "12px",
        display: "flex",
        border: "solid black 2px",
        minHeight: "12rem",
        borderRadius: "12px"
    };

    return <div style={cardStyle}>{children}</div>
}