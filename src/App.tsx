import React, { useState } from 'react';
import './App.css';
import { getNumbers } from './utils';
import { Pagination } from './components/Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = getNumbers(1, 42).map(n => `Item ${n}`);
// const perPage: number = 5;
const total = items.length;
const pages: number[] = [];

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(Math.ceil(total / 5));

  for (let i = 0; i < totalPages; i++) {
    pages.push(i++);
  }

  const setPages = (value: number) => {
    pages.length = 0;
    setPerPage(value);
    setTotalPages(Math.ceil(total / value));
  };

  return (
    <div className="container">
      <h1>Items with Pagination</h1>

      <p className="lead" data-cy="info">
        Page 1 (items 1 - 5 of 42)
      </p>

      <div className="form-group row">
        <div className="col-3 col-sm-2 col-xl-1">
          <select
            data-cy="perPageSelector"
            id="perPageSelector"
            className="form-control"
          >
            <option
              value="3"
              onClick={() => {
                setPages(3);
              }}
            >
              3
            </option>
            <option
              value="5"
              onClick={() => {
                setPages(5);
              }}
            >
              5
            </option>
            <option
              value="10"
              onClick={() => {
                setPages(10);
              }}
            >
              10
            </option>
            <option
              value="20"
              onClick={() => {
                setPages(20);
              }}
            >
              20
            </option>
          </select>
        </div>

        <label htmlFor="perPageSelector" className="col-form-label col">
          items per page
        </label>
      </div>

      {/* Move this markup to Pagination */}
      <Pagination
        total={total} // total number of items to paginate
        perPage={perPage} // number of items per page
        currentPage={currentPage} /* optional with 1 by default */
        pages={pages}
        onPageChange={page => {
          setCurrentPage(page);
        }}
      />
      <ul>
        <li data-cy="item">Item 1</li>
        <li data-cy="item">Item 2</li>
        <li data-cy="item">Item 3</li>
        <li data-cy="item">Item 4</li>
        <li data-cy="item">Item 5</li>
      </ul>
    </div>
  );
};

export default App;
