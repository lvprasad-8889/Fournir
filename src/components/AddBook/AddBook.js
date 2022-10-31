import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookActions } from "../../store";
import "./AddBook.css";

const AddBook = () => {
  const totalBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [close, setClose] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    authorName: "",
    bookName: "",
    bookRating: "",
    bookPrice: "",
    category: "",
    releaseDate: "",
    publishedBy: "",
    totalPages: "",
  });
  const [formFilled, setFormfilled] = useState(false);
  let navigate = useNavigate();

  // updates for every key stroke
  const changeBookDetails = (event) => {
    let duplicateDetails = { ...bookDetails };
    if (event.target.name === "releaseDate")
      duplicateDetails[event.target.name] = event.target.value;
    else duplicateDetails[event.target.name] = event.target.value;
    setBookDetails(duplicateDetails);
  };
  // validating form after submitting
  const formSubmitted = (event) => {
    event.preventDefault();
    setFormfilled(true);
    if (
      bookDetails.bookName.trim().length > 0 &&
      bookDetails.authorName.trim().length > 0 &&
      bookDetails.bookRating.trim().length > 0 &&
      bookDetails.bookRating <= 5 &&
      bookDetails.bookRating >= 0 &&
      bookDetails.category.trim().length > 0 &&
      bookDetails.releaseDate.trim().length > 0 &&
      bookDetails.publishedBy.trim().length > 0 &&
      bookDetails.totalPages.trim().length > 0
    ) {
      // book name is the primary key here, checking book name exists or not
      const bookExists = totalBooks.find(
        (item) =>
          bookDetails.bookName.toLowerCase() === item.bookName.toLowerCase()
      );
      if (bookExists) {
        alert("Book already exists");
      } else {
        // adding book in the redux
        dispatch(bookActions.addBook({ book: bookDetails }));
        alert("Book added successfully");
        // making fields empty
        setBookDetails({
          authorName: "",
          bookName: "",
          bookRating: "",
          bookPrice: "",
          category: "",
          releaseDate: "",
          publishedBy: "",
          totalPages: "",
        });
        setFormfilled(false);
      }
    }
  };
  return (
    <div className="">
      <div className="mb-3">
        <div className="">
          {totalBooks.length === 0 && close && (
            <div className="text-center">
              <p>
                Want to add books? click on Add Book Details button and enter
                book details
              </p>
              <div className="btn btn-primary" onClick={() => setClose(false)}>
                Add Book Details
              </div>
            </div>
          )}
          {totalBooks.length > 0 && close && (
            <div className="d-flex justify-content-end">
              <div className="btn btn-primary" onClick={() => setClose(false)}>
                Add Book Details
              </div>
            </div>
          )}
        </div>
        {!close && (
          <div className="card alignAddBook mb-3">
            <div className="">
              <h1 className=" text-center mb-3">Add New Book</h1>
              <form onSubmit={formSubmitted}>
                <div className="mb-3">
                  <label htmlFor="bookName" className="form-label">
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookName"
                    name="bookName"
                    placeholder="Enter book name"
                    value={bookDetails.bookName}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.bookName.trim().length === 0 && (
                    <small className="text-danger">
                      * Book name is required
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="authorName" className="form-label">
                    Author Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="authorName"
                    name="authorName"
                    placeholder="Enter author name"
                    value={bookDetails.authorName}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.authorName.trim().length === 0 && (
                    <small className="text-danger">
                      * Author name is required
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="bookRating" className="form-label">
                    Book Rating
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="bookRating"
                    name="bookRating"
                    placeholder="Enter rating out of 5"
                    value={bookDetails.bookRating}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.bookRating.trim().length === 0 && (
                    <small className="text-danger">* Rating is required</small>
                  )}
                  {formFilled && bookDetails.bookRating > 5 && (
                    <small className="text-danger">
                      * Rating should be given out of 5
                    </small>
                  )}
                  {formFilled && bookDetails.bookRating < 0 && (
                    <small className="text-danger">
                      * Rating cannot be negative
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="bookPrice" className="form-label">
                    Book Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="bookPrice"
                    name="bookPrice"
                    placeholder="Enter book price in rupees"
                    value={bookDetails.bookPrice}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.bookPrice.trim().length === 0 && (
                    <small className="text-danger">
                      * Book price is required
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    placeholder="fiction,history etc..."
                    value={bookDetails.category}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.category.trim().length === 0 && (
                    <small className="text-danger">
                      * Category is required
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="releaseDate" className="form-label">
                    Released Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="releaseDate"
                    name="releaseDate"
                    value={bookDetails.releaseDate}
                    onChange={changeBookDetails}
                  />
                  {formFilled &&
                    bookDetails.releaseDate.trim().length === 0 && (
                      <small className="text-danger">
                        * Released Date is required
                      </small>
                    )}
                </div>
                <div className="mb-3">
                  <label htmlFor="publishedBy" className="form-label">
                    Published By
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="publishedBy"
                    name="publishedBy"
                    placeholder="Traditional Publishers,Cool Publishers etc..."
                    value={bookDetails.publishedBy}
                    onChange={changeBookDetails}
                  />
                  {formFilled &&
                    bookDetails.publishedBy.trim().length === 0 && (
                      <small className="text-danger">
                        * organisation is required
                      </small>
                    )}
                </div>
                <div className="mb-3">
                  <label htmlFor="totalPages" className="form-label">
                    Total Pages
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalPages"
                    name="totalPages"
                    placeholder="Enter total pages in this book"
                    value={bookDetails.totalPages}
                    onChange={changeBookDetails}
                  />
                  {formFilled && bookDetails.totalPages.trim().length === 0 && (
                    <small className="text-danger">
                      * Total number of pages is required
                    </small>
                  )}
                </div>
                <div className="d-flex gap-4 justify-content-end mt-2">
                  <input
                    type="submit"
                    onClick={formSubmitted}
                    value="Add Book"
                    className="btn btn-primary"
                  />
                  <div
                    className="btn btn-primary"
                    onClick={() => navigate("/books")}
                  >
                    Show Books
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBook;
