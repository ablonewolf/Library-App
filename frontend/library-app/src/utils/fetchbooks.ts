import {BookURL} from "../models/constants/BookURL";
import {BookModel} from "../models/entities/BookModel";

export const fetchBooks = async (setBooks: (books: BookModel[]) => void, setIsLoading: (isLoading: boolean) => void, size: number, page = 0) => {
    const apiURL: string = `${BookURL}?page=${page}&size=${size}`;
    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(`Something went wrong`);
    }
    const responseJson = await response.json();
    const responseData = responseJson._embedded.books;
    const loadedBooks: BookModel[] = [];

    for (const key in responseData) {
        loadedBooks.push({
            id: responseData[key].id,
            title: responseData[key].title,
            author: responseData[key].author,
            description: responseData[key].description,
            copies: responseData[key].copies,
            copiesAvailable: responseData[key].copiesAvailable,
            category: responseData[key].category,
            img: responseData[key].img
        })
    }
    setBooks(loadedBooks);
    setIsLoading(false);
}