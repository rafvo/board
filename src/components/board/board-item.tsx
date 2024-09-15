interface Props {
    isWhite: boolean;
}

export function BoardItem ({ isWhite }: Props) {
    return (
        <div className={[
            isWhite ? 'bg-white' : 'bg-black',
        ].join(' ')}></div>
    )
}
