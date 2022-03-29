import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp07 } from '../../../components/memory-comp-7';

export default createBoard({
    name: 'MemoryComp07',
    Board: () => <MemoryComp07 />
});
