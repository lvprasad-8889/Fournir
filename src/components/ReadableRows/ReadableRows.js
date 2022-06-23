import React from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../../store";
const ReadableRows = (props) => {
  const dispatch = useDispatch();
  // deleting book in the store based on index
  const deleteBook = (index) => {
    dispatch(bookActions.deleteBook({ index }));
  };
  return (
    <tr className="text-center align-middle">
      <th scope="row">{props.index + 1}</th>
      <td className="text-capitalize">{props.book.bookName}</td>
      <td className="text-capitalize">{props.book.authorName}</td>
      <td>{props.book.bookRating}</td>
      <td>{props.book.bookPrice}</td>
      <td className="text-capitalize">{props.book.category}</td>
      <td>{props.book.releaseDate}</td>
      <td className="text-capitalize">{props.book.publishedBy}</td>
      <td>{props.book.totalPages}</td>
      <td className="d-flex flex-column gap-2">
        <div
          className="btn btn-primary"
          onClick={() => props.changeId(props.index)}
        >
          Edit
        </div>
        <div className="btn btn-danger" onClick={() => deleteBook(props.index)}>
          Delete
        </div>
      </td>
    </tr>
  );
};

export default ReadableRows;
