import React from 'react';

interface Props {
    children: ({ isWhite }: { isWhite: boolean }) => React.ReactNode;
}

export function BoardColumns ({ children }: Props) {
    return (
        <>
            {[...Array(8)].map((_, index) => (
                <React.Fragment key={index}>
                    {children({ isWhite: index % 2 === 0 })}
                </React.Fragment>
            ))}

            {[...Array(8)].map((_, index) => (
                <React.Fragment key={index}>
                    {children({ isWhite: index % 2 !== 0 })}
                </React.Fragment>
            ))}
        </>
    )
}
