import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { MemoryComp11 } from '../../../components/memory-comp-11';

export default createBoard({
    name: 'MemoryComp11',
    Board: () => <MemoryComp11 />
});
