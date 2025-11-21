export default function Card({children, title}: {children: React.ReactNode, title: string}) {
    return (
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    )
}