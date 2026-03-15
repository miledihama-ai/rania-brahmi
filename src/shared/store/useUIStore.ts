import { create } from 'zustand';

/** UI store state. */
interface UIState {
    isMobileMenuOpen: boolean;
    activeModal: string | null;
}

/** UI store actions. */
interface UIActions {
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
    openModal: (id: string) => void;
    closeModal: () => void;
}

/**
 * Zustand store for global UI state.
 * Controls mobile menu and modals across components.
 */
export const useUIStore = create<UIState & UIActions>((set) => ({
    isMobileMenuOpen: false,
    activeModal: null,

    toggleMobileMenu: () => set((s) => ({ isMobileMenuOpen: !s.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false }),
    openModal: (id: string) => set({ activeModal: id }),
    closeModal: () => set({ activeModal: null }),
}));
