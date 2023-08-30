import {BaseURL} from "../models/constants/BaseURL";
import {BookModel} from "../models/entities/BookModel";

export const fetchBooks = async (setBooks: (books: BookModel[]) => void,
                                 setIsLoading: (isLoading: boolean) => void,
                                 size: number,
                                 page = 0,
                                 setTotalAmountOfBooks?: (totalBooks: number) => void,
                                 setTotalPages?: (totalPages: number) => void,
                                 searchUrl?: string) => {
    let apiURL: string = ``;
    if (searchUrl) {
        if (searchUrl !== '') {
            let searchWithPage = searchUrl.replace('<pageNumber>', `${page}`)
            apiURL = `${BaseURL}${searchWithPage}`;
        }
    } else {
        apiURL = `${BaseURL}?page=${page}&size=${size}`;
    }
    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(`Something went wrong`);
    }
    const responseJson = await response.json();
    const responseData = responseJson._embedded.books;
    if (setTotalAmountOfBooks) {
        setTotalAmountOfBooks(responseJson.page.totalElements ?? 0);
    }
    if (setTotalPages) {
        setTotalPages(responseJson.page.totalPages ?? 0);
    }
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