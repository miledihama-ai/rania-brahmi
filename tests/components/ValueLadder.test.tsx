import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { ValueLadder } from '../../src/features/marketing/components/ValueLadder';

test('renders ValueLadder without crashing', () => {
    try {
        render(<ValueLadder />);
    } catch (e) {
        console.error("VALUE LADDER CRASHED:", e);
        throw e;
    }
});
