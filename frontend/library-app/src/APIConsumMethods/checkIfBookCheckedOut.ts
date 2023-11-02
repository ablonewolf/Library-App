import { BaseURL } from "../models/constants/BaseURL";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";

export const checkIfBookCheckedOut = async (
  authState: AuthState | null,
  setIsBookCheckedOut: (isCheckedOut: boolean) => void,
  setIsLoadingBookCheckedOut: (isLoading: boolean) => void,
  bookId: number,
) => {
  if (authState && authState.isAuthenticated) {
    const apiURL = `${BaseURL}/books/secure/isCheckoutByUser?bookId=${bookId}`;
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authState.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
    };
    const checkIfBookCheckedOutResponse = await fetch(apiURL, requestOptions);
    if (!checkIfBookCheckedOutResponse.ok) {
      throw new Error("Something went wrong checking if book checked out.");
    }
    const checkIfBookCheckedOutJson =
      await checkIfBookCheckedOutResponse.json();
    setIsBookCheckedOut(checkIfBookCheckedOutJson);
  }
  setIsLoadingBookCheckedOut(false);
};
