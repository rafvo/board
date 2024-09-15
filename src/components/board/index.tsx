import React from 'react';
import { BoardItem } from './board-item';
import { BoardLines } from './board-lines';
import { BoardColumns } from './board-columns';

export function Board() {
    return (
        <div className="grid grid-cols-[repeat(8,100px)] grid-rows-[repeat(8,100px)]">
            <BoardLines>
                <BoardColumns>
                    {({ isWhite }) => (
                        <BoardItem
                            isWhite={isWhite}
                        />
                    )}
                </BoardColumns>
            </BoardLines>
        </div>
    )
}
