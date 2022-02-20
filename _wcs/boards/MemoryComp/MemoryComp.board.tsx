import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp } from '../../../src/components/memory-comp';

export default createBoard({
    name: 'MemoryComp',
    Board: () => <MemoryComp />
});
