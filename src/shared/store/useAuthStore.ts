import { create } from 'zustand';
import type { UserRole } from '@/types';

/** Authenticated user data. */
export interface AuthUser {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatarUrl?: string;
}

/** Auth store state. */
interface AuthState {
    user: AuthUser | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

/** Auth store actions. */
interface AuthActions {
    setUser: (user: AuthUser) => void;
    logout: () => void;
    setLoading: (val: boolean) => void;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
};

/**
 * Zustand store for authentication state.
 * Shared across navbar, auth pages, and protected routes.
 */
export const useAuthStore = create<AuthState & AuthActions>((set) => ({
    ...initialState,

    setUser: (user: AuthUser) => set({
        user,
        isAuthenticated: true,
        isLoading: false,
    }),

    logout: () => set(initialState),

    setLoading: (val: boolean) => set({ isLoading: val }),
}));
