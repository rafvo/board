import React from 'react';

interface Props {
    children: React.ReactNode;
}

export function BoardLines({ children }: Props) {
    return (
        <>
            {[...Array(4)].map((_, index) => (
                <React.Fragment key={index}>
                    {children}
                </React.Fragment>
            ))}
        </>
    )
}
