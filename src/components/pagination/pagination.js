import styles from "../../styles/Products.module.css";

const Paginationn = ({
  productsperpage,
  totalproduct,
  setCurrentpage,
  HandleLoading,
  currentpage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalproduct / productsperpage); i++) {
    pageNumbers.push(i);
  }

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav aria-label="..." className={styles.pagination}>
      <ul className="pagination position-absolute bottom-0 start-50 translate-middle ">
        {pageNumbers.map((number) => {
          return (
            <li
              className={`page-item ${number === currentpage ? "active" : ""}`}
              key={number}
            >
              <button
                className={`page-link ${
                  number === currentpage ? "text-white bg-black" : "text-black"
                }`}
                aria-current="page"
                onClick={() => {
                  setCurrentpage(number);
                  scroll();
                  HandleLoading();
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginationn;
