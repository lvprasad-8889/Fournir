import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      bookName: "the winter",
      authorName: "cameroon",
      bookPrice: "1000",
      bookRating: "3.5",
      category: "fiction",
      publishedBy: "marvel",
      releaseDate: "2019-02-22",
      totalPages: "270",
    },
    {
      bookName: "cool",
      authorName: "cruise",
      bookPrice: "400",
      bookRating: "4.2",
      category: "fiction",
      publishedBy: "marvel",
      releaseDate: "2016-01-02",
      totalPages: "405",
    },
    {
      bookName: "the bear",
      authorName: "jhon",
      bookPrice: "800",
      bookRating: "4",
      category: "fiction",
      publishedBy: "marvel",
      releaseDate: "2014-06-20",
      totalPages: "269",
    },
    {
      bookName: "the life",
      authorName: "henry",
      bookPrice: "850",
      bookRating: "3",
      category: "history",
      publishedBy: "amazon",
      releaseDate: "2015-01-25",
      totalPages: "289",
    },
    {
      bookName: "jungle",
      authorName: "hercules",
      bookPrice: "300",
      bookRating: "4.1",
      category: "real",
      publishedBy: "snapchat",
      releaseDate: "2014-02-12",
      totalPages: "214",
    },
    {
      bookName: "lisa",
      authorName: "ferb",
      bookPrice: "820",
      bookRating: "4.5",
      category: "love",
      publishedBy: "facebook",
      releaseDate: "2012-05-09",
      totalPages: "500",
    },
    {
      bookName: "the capital",
      authorName: "modi",
      bookPrice: "812",
      bookRating: "2",
      category: "fiction",
      publishedBy: "airtel",
      releaseDate: "2014-06-01",
      totalPages: "319",
    },
    {
      bookName: "green house",
      authorName: "rohit",
      bookPrice: "840",
      bookRating: "2",
      category: "real",
      publishedBy: "jio",
      releaseDate: "2012-01-04",
      totalPages: "269",
    },
    {
      bookName: "new state",
      authorName: "akhil",
      bookPrice: "492",
      bookRating: "4.2",
      category: "history",
      publishedBy: "you tube",
      releaseDate: "2011-11-05",
      totalPages: "928",
    },
    {
      bookName: "scam 1992",
      authorName: "ajay",
      bookPrice: "422",
      bookRating: "4.5",
      category: "history",
      publishedBy: "aha",
      releaseDate: "2031-07-05",
      totalPages: "385",
    },
  ],
};

const booksSlice = createSlice({
  name: "total books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books = [...state.books, action.payload.book];
    },
    deleteBook(state, action) {
      state.books = state.books.filter(
        (item, index) => index !== action.payload.index
      );
    },
    updateBook(state, action) {
      state.books[action.payload.index] = action.payload.book;
    },
  },
});

const store = configureStore({
  reducer: booksSlice.reducer,
});

export const bookActions = booksSlice.actions;

export default store;
