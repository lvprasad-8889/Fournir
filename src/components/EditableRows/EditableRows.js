import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookActions } from "../../store";
const EditableRows = (props) => {
  const totalBooks = useSelector((state) => state.books);
  const [editDetails, seteditDetails] = useState({
    authorName: props.book.authorName,
    bookName: props.book.bookName,
    bookRating: props.book.bookRating,
    bookPrice: props.book.bookPrice,
    category: props.book.category,
    releaseDate: props.book.releaseDate,
    publishedBy: props.book.publishedBy,
    totalPages: props.book.totalPages,
  });
  const dispatch = useDispatch();

  // updates for every key stroke
  const updateBookDetails = (event) => {
    let duplicateDetails = { ...editDetails };
    duplicateDetails[event.target.name] = event.target.value;
    seteditDetails(duplicateDetails);
  };
  // user after submitting save button
  const saveBookDetails = () => {
    let duplicateDetails = { ...editDetails };
    // if user do not enter any filed automatically updates with previous existing value
    if (editDetails.authorName.trim().length === 0) {
      duplicateDetails.authorName = props.book.authorName;
    }
    if (editDetails.bookName.trim().length === 0) {
      duplicateDetails.bookName = props.book.authorName;
    }
    if (
      editDetails.bookRating.trim().length === 0 ||
      editDetails.bookRating > 5 ||
      editDetails.bookRating < 0
    ) {
      duplicateDetails.bookRating = props.book.bookRating;
    }
    if (editDetails.bookPrice.trim().length === 0) {
      duplicateDetails.bookPrice = props.book.authorName;
    }
    if (editDetails.category.trim().length === 0) {
      duplicateDetails.category = props.book.category;
    }
    if (editDetails.releaseDate.trim().length === 0) {
      duplicateDetails.releaseDate = props.book.releaseDate;
    }
    if (editDetails.publishedBy.trim().length === 0) {
      duplicateDetails.publishedBy = props.book.publishedBy;
    }
    if (editDetails.totalPages.trim().length === 0) {
      duplicateDetails.totalPages = props.book.totalPages;
    }
    const bookExists = totalBooks.find(
      (item) => editDetails.bookName === item.bookName
    );
    if (bookExists) {
      alert("Book name was already taken");
    } else {
      // updating book in the redux
      dispatch(
        bookActions.updateBook({ book: editDetails, index: props.index })
      );
      // changing Id to null
      props.changeId(null);
    }
  };
  return (
    <tr className="text-center align-middle">
      <th scope="row">{props.index + 1}</th>
      <td className="p-5">
        <input
          type="text"
          value={editDetails.bookName}
          className="form-control text-capitalize"
          id="bookName"
          name="bookName"
          onChange={updateBookDetails}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control text-capitalize"
          id="authorName"
          name="authorName"
          placeholder="Enter author name"
          value={editDetails.authorName}
          onChange={updateBookDetails}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          className="form-control"
          id="bookRating"
          name="bookRating"
          placeholder="Enter rating out of 5"
          value={editDetails.bookRating}
          onChange={updateBookDetails}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          className="form-control"
          id="bookPrice"
          name="bookPrice"
          placeholder="Enter book price in rupees"
          value={editDetails.bookPrice}
          onChange={updateBookDetails}
        />{" "}
      </td>
      <td>
        {" "}
        <input
          type="text"
          className="form-control text-capitalize"
          id="category"
          name="category"
          placeholder="fiction,history etc..."
          value={editDetails.category}
          onChange={updateBookDetails}
        />
      </td>
      <td>
        <input
          type="date"
          className="form-control"
          id="releaseDate"
          name="releaseDate"
          value={editDetails.releaseDate}
          onChange={updateBookDetails}
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control text-capitalize"
          id="publishedBy"
          name="publishedBy"
          placeholder="Traditional Publishers,Cool Publishers etc..."
          value={editDetails.publishedBy}
          onChange={updateBookDetails}
        />
      </td>
      <td className="">
        {" "}
        <input
          type="number"
          className="form-control"
          id="totalPages"
          name="totalPages"
          placeholder="Enter total pages in this book"
          value={editDetails.totalPages}
          onChange={updateBookDetails}
        />
      </td>
      <td>
        <div
          className="btn btn-primary"
          onClick={() => saveBookDetails(props.index)}
        >
          Save
        </div>
      </td>
    </tr>
  );
};

export default EditableRows;
