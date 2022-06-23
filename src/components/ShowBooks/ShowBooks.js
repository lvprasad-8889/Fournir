import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ShowBooks.css";
import ExportToCSV from "../ExportToCSV/ExportToCSV";
import ReadableRows from "../ReadableRows/ReadableRows";
import EditableRows from "../EditableRows/EditableRows";
const ShowBooks = () => {
  const [editBookId, seteditBookId] = useState(null);
  // getting data from the store
  const totalBooks = useSelector((state) => state.books);
  // updating bookId so that user can edit
  const changeBookId = (id) => {
    seteditBookId(id);
  };
  return (
    <div className="">
      {totalBooks.length > 0 && (
        <div className="">
          <div className="d-flex justify-content-end gap-4">
            <ExportToCSV />
          </div>
          <div className="adjustBooks">
            <table className="table adjustTable table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="col">Sno.</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author Name</th>
                  <th scope="col">Book Rating</th>
                  <th scope="col">Book Price</th>
                  <th scope="col">Category</th>
                  <th scope="col">Released Date</th>
                  <th scope="col">Published By</th>
                  <th scope="col">Total pages</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {totalBooks.map((book, index) =>
                  editBookId === index ? (
                    <EditableRows
                      book={book}
                      index={index}
                      changeId={changeBookId}
                      key={index}
                    />
                  ) : (
                    <ReadableRows
                      book={book}
                      index={index}
                      changeId={changeBookId}
                      key={index}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="20px"
                height="20px"
              >
                <path
                  fill="#232326"
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div>&nbsp;scroll right if you cannot see complete table</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBooks;
