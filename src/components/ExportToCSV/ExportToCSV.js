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
    // adding serial number as a column 
    tempBooks.map((book, index) => 
      book.Sno = index + 1
    );
    // coverting string to date and coverting to international date format
    tempBooks.map((book) => 
    book.releaseDate = new Date(book.releaseDate).toISOString()
    );
    let rowsResult = tempBooks
      .map((item) => Object.keys(item).map((key) => item[key]))
      .map((book) => book.join(","));
    rowsResult.unshift(columnsResult);
    rowsResult = rowsResult.join("\n");
    // creating csv file
    let CSVFile = new Blob([rowsResult], {
      type: "text/csv",
    });
    // creating an anker tag and getting URL 
    var download_link = document.createElement("a");
    download_link.download = "bookdetails.csv";
    var url = window.URL.createObjectURL(CSVFile);
    download_link.href = url;
    // automatically it needs to be clicked to open URL
    download_link.click();
  };
  return (
    <div className="btn btn-primary" onClick={saveCSVFile}>
      Export To CSV
    </div>
  );
};

export default ExportToCSV;
