import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp19 } from '../../../components/memory-comp-19';

export default createBoard({
    name: 'MemoryComp19',
    Board: () => <MemoryComp19 />
});
