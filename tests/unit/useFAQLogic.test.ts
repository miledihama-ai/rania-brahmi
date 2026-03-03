import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFAQLogic } from '@/features/marketing/hooks/useFAQLogic';

describe('useFAQLogic', () => {
    it('returns all FAQ items', () => {
        const { result } = renderHook(() => useFAQLogic());
        expect(result.current.faqs.length).toBeGreaterThan(0);
        expect(result.current.faqs[0]).toHaveProperty('q');
        expect(result.current.faqs[0]).toHaveProperty('a');
    });

    it('starts with no open item', () => {
        const { result } = renderHook(() => useFAQLogic());
        expect(result.current.openIndex).toBeNull();
    });

    it('opens an item when toggle is called', () => {
        const { result } = renderHook(() => useFAQLogic());
        act(() => {
            result.current.toggle(2);
        });
        expect(result.current.openIndex).toBe(2);
    });

    it('closes an already-open item when toggled again', () => {
        const { result } = renderHook(() => useFAQLogic());
        act(() => {
            result.current.toggle(1);
        });
        act(() => {
            result.current.toggle(1);
        });
        expect(result.current.openIndex).toBeNull();
    });

    it('switches from one open item to another', () => {
        const { result } = renderHook(() => useFAQLogic());
        act(() => {
            result.current.toggle(0);
        });
        act(() => {
            result.current.toggle(3);
        });
        expect(result.current.openIndex).toBe(3);
    });
});
