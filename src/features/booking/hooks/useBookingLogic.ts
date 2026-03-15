'use client';

import { useBookingStore, SESSION_OPTIONS } from '@/features/booking/store/useBookingStore';
import { useRouter } from 'next/navigation';

/**
 * Custom hook that encapsulates all booking engine logic.
 * The BookingEngine UI component calls this hook and renders
 * purely based on the returned values — no store coupling.
 */
export const useBookingLogic = () => {
    const { selectedType, selectSessionType, getSelectedSession, isSubmitting, setSubmitting } = useBookingStore();
    const currentSession = getSelectedSession();
    const router = useRouter();

    /** Submit the booking — navigates to the booking confirmation page. */
    const onSubmit = async () => {
        setSubmitting(true);
        try {
            // Navigate to the booking page with the selected session type
            router.push(`/booking?type=${selectedType}`);
        } finally {
            setSubmitting(false);
        }
    };

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
        /** Handler to submit the booking */
        onSubmit,
    };
};
