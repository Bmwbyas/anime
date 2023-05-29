type ButtonType = {
    name: string
    onClick: () => void
}

export const Button: React.FC<ButtonType> = ({name, onClick}) => {
    return (
        <button
        style={{
            minWidth: '200px',
            padding: '15px',
            margin: '15px'
        }}
            onClick={onClick}>
            {name}
        </button>
    )
}
