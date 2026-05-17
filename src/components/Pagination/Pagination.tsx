type Props = {
  total: number;
  currentPage: number;
  pages: number[];
  perPage: number;
  onPageChange: (value: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  currentPage,
  pages,
  perPage,
  onPageChange,
}) => {
  const pagesAmount = pages;

  function getPageItems() {
    const list = [];

    if (currentPage < total) {
      for (let i = currentPage; i < currentPage + perPage; i++) {
        list.push(i);
      }
    }

    return list;
  }

  const pageItems = getPageItems();

  return (
    <>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <a
            data-cy="prevLink"
            className="page-link"
            href="#prev"
            // aria-disabled="true"
            aria-disabled={currentPage === 1 && 'true'}
            onClick={() => {
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
                onClick={() => {
                  onPageChange(index + 1);
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
            aria-disabled={currentPage === pages.length && 'true'}
            onClick={() => {
              if (currentPage < pages.length) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            »
          </a>
        </li>
      </ul>
      <ul>
        {pageItems.map((item, index) => {
          const value = item;

          return (
            <li key={index} data-cy="item">
              Item {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};
