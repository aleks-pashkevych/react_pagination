type Props = {
  total: number;
  currentPage: number;
  pages: number[];
  perPage: number;
  onPageChange: (value: number) => void;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  pages,
  onPageChange,
}) => {
  const pagesAmount = pages;
  const numberOfPages = pages.length;

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage < 2 && 'disabled'}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          // aria-disabled="true"
          aria-disabled={currentPage < 2 && 'true'}
          onClick={e => {
            e.preventDefault();
            onPageChange(currentPage - 1);
          }}
        >
          «
        </a>
      </li>
      {pagesAmount.map((page, index) => {
        return (
          <li
            key={index}
            className={`page-item ${page === currentPage && 'active'}`}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href={`#${index + 1}`}
              onClick={e => {
                e.preventDefault();
                onPageChange(index + 1);
              }}
            >
              {index + 1}
            </a>
          </li>
        );
      })}

      <li className={`page-item ${currentPage >= numberOfPages && 'disabled'}`}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          // aria-disabled="false
          aria-disabled={currentPage < numberOfPages ? 'false' : 'true'}
          onClick={() => {
            if (currentPage < numberOfPages) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
