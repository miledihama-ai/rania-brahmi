import { create } from 'zustand';

/** UI store state. */
interface UIState {
    isMobileMenuOpen: boolean;
    activeModal: string | null;
    scrollY: number;
}

/** UI store actions. */
interface UIActions {
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    openModal: (id: string) => void;
    closeModal: () => void;
    setScrollY: (y: number) => void;
}

/**
 * Zustand store for global UI state.
 * Controls mobile menu, modals, and scroll position across components.
 */
export const useUIStore = create<UIState & UIActions>((set) => ({
    isMobileMenuOpen: false,
    activeModal: null,
    scrollY: 0,

    toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    openModal: (id: string) => set({ activeModal: id }),
    closeModal: () => set({ activeModal: null }),
    setScrollY: (y: number) => set({ scrollY: y }),
}));
