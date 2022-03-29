import * as React from 'react';

/** This should generate about 50mb of memory */
export const data = new Array(700_000).fill(undefined).map(() => ({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
}));

export const MemoryComp05 = () => <div>Memory {data.length}</div>;
