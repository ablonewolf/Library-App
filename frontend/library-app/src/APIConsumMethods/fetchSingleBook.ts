import {BookModel} from "../models/entities/BookModel";
import {BaseURL} from "../models/constants/BaseURL";

export const fetchSingleBook = async (
    setBook: (book: BookModel) => void,
    setIsLoading: (isLoading: boolean) => void,
    bookID?: number) => {
    let apiURL = ``;
    if (bookID) {
        apiURL = `${BaseURL}/books/${bookID}`;
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Something went wrong fetching info of this book.`);
        }
        const responseJson = await response.json();
        const loadedBook: BookModel = {
            id: responseJson.id,
            title: responseJson.title,
            author: responseJson.author,
            description: responseJson.description,
            copies: responseJson.copies,
            copiesAvailable: responseJson.copiesAvailable,
            category: responseJson.category,
            img: responseJson.img
        };
        setBook(loadedBook);
        setIsLoading(false)
    }
}