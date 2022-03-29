import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp12 } from '../../../components/memory-comp-12';

export default createBoard({
    name: 'MemoryComp12',
    Board: () => <MemoryComp12 />
});
