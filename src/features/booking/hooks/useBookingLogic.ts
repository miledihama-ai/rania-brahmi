'use client';

import { useBookingStore, SESSION_OPTIONS } from '@/features/booking/store/useBookingStore';

/**
 * Custom hook that encapsulates all booking engine logic.
 * The BookingEngine UI component calls this hook and renders
 * purely based on the returned values — no store coupling.
 */
export const useBookingLogic = () => {
    const { selectedType, selectSessionType, getSelectedSession, isSubmitting } = useBookingStore();
    const currentSession = getSelectedSession();

    return {
        /** All available session options to display */
        sessions: SESSION_OPTIONS,
        /** Currently selected session type key */
        selectedType,
        /** Full session object for the currently selected type */
        currentSession,
        /** Whether a booking submission is in progress */
        isSubmitting,
        /** Handler to call when user selects a session type */
        onSelectType: selectSessionType,
    };
};
