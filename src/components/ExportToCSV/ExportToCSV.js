import React from "react";
import { useSelector } from "react-redux";
const ExportToCSV = () => {
  const totalBooks = useSelector((state) => state.books);
  const saveCSVFile = () => {
    let columns = [
      "bookName",
      "authorName",
      "bookPrice",
      "bookRating",
      "category",
      "publishedBy",
      "releaseDate",
      "totalPages",
      "Sno.",
    ];
    let columnsResult = columns.join(",");
    const tempBooks = totalBooks.map((item) => Object.assign({}, item));
    tempBooks.map((book, index) => 
      book.Sno = index + 1
    );
    tempBooks.map((book) => 
    book.releaseDate = new Date(book.releaseDate).toISOString()
    );
    let rowsResult = tempBooks
      .map((item) => Object.keys(item).map((key) => item[key]))
      .map((book) => book.join(","));
    rowsResult.unshift(columnsResult);
    rowsResult = rowsResult.join("\n");
    let CSVFile = new Blob([rowsResult], {
      type: "text/csv",
    });
    var temp_link = document.createElement("a");
    temp_link.download = "bookdetails.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
    temp_link.click();
  };
  return (
    <div className="btn btn-primary" onClick={saveCSVFile}>
      Export To CSV
    </div>
  );
};

export default ExportToCSV;
