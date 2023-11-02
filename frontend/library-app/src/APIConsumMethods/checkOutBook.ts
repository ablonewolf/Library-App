import { BaseURL } from "../models/constants/BaseURL";
import { AuthState } from "@okta/okta-auth-js/lib/types/AuthState";

export const checkOutBook = async (
  authState: AuthState | null,
  bookId: number | undefined,
  setCheckOutBook: (isCheckedOut: boolean) => void,
) => {
  if (authState && authState.isAuthenticated && bookId) {
    const apiURL = `${BaseURL}/books/secure/checkout`;
    const requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authState.accessToken?.accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId: bookId }),
    };
    const checkOutBookOperationResponse = await fetch(apiURL, requestOptions);
    if (!checkOutBookOperationResponse.ok) {
      throw new Error("Error checking out book.");
    }
    const bookResponse = await checkOutBookOperationResponse.json();
    if (bookResponse.id === bookId) {
      setCheckOutBook(true);
    }
  }
};
