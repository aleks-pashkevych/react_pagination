type Props = {
  total: number;
  perPage: number;
  currentPage: number;
  pages: number[];
  onPageChange: (value: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  // perPage,
  currentPage,
  pages,
  onPageChange,
}) => {
  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          // aria-disabled="true"
        >
          «
        </a>
      </li>
      {pages.map((page, index) => {
        return (
          <li
            key={index}
            className={`page-item ${page === currentPage && 'active'}`}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${index + 1}`}
              onClick={() => {
                onPageChange(index);
              }}
            >
              {index + 1}
            </a>
          </li>
        );
      })}

      <li className={`page-item ${currentPage === total && 'disabled'}`}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          // aria-disabled="false"
        >
          »
        </a>
      </li>
    </ul>
  );
};
