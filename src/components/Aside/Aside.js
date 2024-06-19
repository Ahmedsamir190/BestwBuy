import { useState } from "react";
import styles from "../../styles/Aside.module.css";
import {
  FcCandleSticks,
  FcMoneyTransfer,
  FcCurrencyExchange,
  FcPlus,
} from "react-icons/fc";

function Aside(props) {
  const [iconsone, setIconsone] = useState(true);
  const [iconstwo, setIconstwo] = useState(true);
  const [iconsthree, setIconsthree] = useState(true);
  const [range, SetRange] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [placeholer, setPlaceholer] = useState(true);

  const [priceRange, setPriceRange] = useState("");

  const { Getspecificcategory } = props;
  const { setProducts } = props;
  const { categories } = props;
  const { HandleLoading } = props;

  setTimeout(() => {
    setPlaceholer(false);
  }, 3000);

  /* toggle buttons */
  const Categoriesicontoggle = () => {
    setIconsone(!iconsone);
  };
  const Priceicontoggle = () => {
    setIconstwo(!iconstwo);
  };
  const Pricerangetoggle = () => {
    setIconsthree(!iconsthree);
  };
  const handlePriceRangeChange = (event) => {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);

    let minPrice, maxPrice;

    if (selectedRange === "priceone") {
      minPrice = 100;
      maxPrice = 200;
    } else if (selectedRange === "pricetwo") {
      minPrice = 300;
      maxPrice = 600;
    } else if (selectedRange === "pricethree") {
      minPrice = 700;
      maxPrice = 900;
    }

    fetch(
      `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  /*range steps */
  const Range = () => {
    fetch(
      ` https://api.escuelajs.co/api/v1/products/?price_min=1&price_max=${range}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  /* from and to range */
  const RangeFromandTo = () => {
    fetch(
      ` https://api.escuelajs.co/api/v1/products/?price_min=${from}&price_max=${to}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div>
        <form className={styles.filterinmobile}>
          <div className={styles.categoriesinput}>
            <div className={styles.filterandresetbutton}>
              <h3>Filters</h3>
              <div>
                <button type="reset" className={styles.resetbutton}>
                  Clear All Filter
                </button>
              </div>
            </div>
            {iconsone ? (
              <>
                <h3
                  className={styles.title}
                  onClick={() => {
                    Categoriesicontoggle();
                  }}
                >
                  <FcCandleSticks /> Categories
                </h3>
              </>
            ) : (
              <h3
                className={styles.title}
                onClick={() => {
                  Categoriesicontoggle();
                }}
              >
                <FcPlus /> Categories
              </h3>
            )}

            {iconsone && (
              <div className={styles.filterinputmobile}>
                {categories.map((category) => {
                  return (
                    <div key={category.id}>
                      {placeholer ? (
                        <span className="placeholder col-12 placeholder-xs"></span>
                      ) : (
                        <div
                          key={category.length}
                          className={styles.filterchoose}
                        >
                          <input
                            type={"checkbox"}
                            id={category.id}
                            name="type"
                            onClick={() => {
                              Getspecificcategory(category.id);
                              HandleLoading();
                              scroll();
                            }}
                          />
                          <label htmlFor={category.id}>{category.name} </label>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className={styles.categoriesinput}>
            {iconstwo ? (
              <h3
                className={`${styles.title} `}
                onClick={() => {
                  Priceicontoggle();
                }}
              >
                <FcMoneyTransfer /> price <span>New</span>
              </h3>
            ) : (
              <h3
                className={`${styles.title}  `}
                onClick={() => {
                  Priceicontoggle();
                }}
              >
                <FcPlus /> price <span>New</span>
              </h3>
            )}
            {iconstwo && (
              <div className={styles.price}>
                <div className={styles.filterchoose}>
                  <input
                    type="radio"
                    name="price"
                    id="priceone"
                    onChange={handlePriceRangeChange}
                    value="priceone"
                    onClick={() => {
                      HandleLoading();
                      scroll();
                    }}
                  />
                  <label htmlFor="priceone">$100 To $200</label>
                </div>
                <div className={styles.filterchoose}>
                  <input
                    type="radio"
                    name="price"
                    id="pricetwo"
                    onChange={handlePriceRangeChange}
                    value="pricetwo"
                    onClick={() => {
                      HandleLoading();
                      scroll();
                    }}
                  />
                  <label htmlFor="pricetwo">$300 To $600</label>
                </div>
                <div className={styles.filterchoose}>
                  <input
                    type="radio"
                    name="price"
                    id="pricethree"
                    onChange={handlePriceRangeChange}
                    value="pricethree"
                    onClick={() => {
                      HandleLoading();
                      scroll();
                    }}
                  />
                  <label htmlFor="pricethree">$700 To $900</label>
                </div>
              </div>
            )}
          </div>
          <div className={styles.pricerange}>
            {iconsthree ? (
              <h3
                className={`${styles.title}  `}
                onClick={() => {
                  Pricerangetoggle();
                }}
              >
                <FcCurrencyExchange /> Price-Range
              </h3>
            ) : (
              <h3
                className={`${styles.title}   `}
                onClick={() => {
                  Pricerangetoggle();
                }}
              >
                <FcPlus /> Price-Range
              </h3>
            )}
            {iconsthree && (
              <div
                className={`${styles.filterchoose} justify-content-center align-items-center`}
              >
                <input
                  id="price"
                  type={"number"}
                  min={"5"}
                  max={"1000"}
                  placeholder={"$Min"}
                  className={`border border-dark `}
                  onChange={(e) => setFrom(e.target.value)}
                />
                <input
                  id="price"
                  type={"number"}
                  min={"0"}
                  max={"1000"}
                  placeholder={"$Max"}
                  className={`border border-dark `}
                  onChange={(e) => setTo(e.target.value)}
                />
                <button
                  type={"button"}
                  className={`btn btn-outline-dark `}
                  onClick={() => {
                    RangeFromandTo();
                    HandleLoading();
                    scroll();
                  }}
                >
                  Go
                </button>
              </div>
            )}
          </div>
          {iconsthree && (
            <div className={`${styles.filterrangestep} mt-lg-4 `}>
              <label htmlFor="range">Range</label>
              <input
                id="range"
                type={"range"}
                name={"os"}
                min={"0"}
                max={"1101"}
                step={"100"}
                value={range}
                onChange={(e) => {
                  SetRange(e.target.value);
                  Range();
                }}
              />
              <span>${range}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Aside;
