import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp06 } from '../../../components/memory-comp-6';

export default createBoard({
    name: 'MemoryComp06',
    Board: () => <MemoryComp06 />
});
