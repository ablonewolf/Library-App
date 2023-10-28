import {BaseURL} from "../models/constants/BaseURL";
import {AuthState} from "@okta/okta-auth-js/lib/types/AuthState"

export const fetchUserCurrentCheckoutBookCount = async (
    authState: AuthState | null,
    setCurrentCheckoutBookCount: (count: number) => void,
    setIsLoadingCurrentBookCheckoutCount: (isLoading: boolean) => void) => {
    if (authState && authState.isAuthenticated) {
        const apiURL = `${BaseURL}/books/secure/currentCheckouts/count`;
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${authState.accessToken?.accessToken}`,
                'Content-Type': 'application/json'
            }
        };
        const currentBooksCheckoutCountResponse = await fetch(apiURL, requestOptions);
        if (!currentBooksCheckoutCountResponse.ok) {
            throw new Error("Something went wrong fetching currentBooks checkout count for this user.");
        }
        const currentBooksCheckoutCountJson = await currentBooksCheckoutCountResponse.json();
        setCurrentCheckoutBookCount(currentBooksCheckoutCountJson);
    }
    setIsLoadingCurrentBookCheckoutCount(false);
}