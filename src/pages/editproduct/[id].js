import styles from "../../styles/Editproducts.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import MoonLoader from "react-spinners/MoonLoader";
import Link from "next/link";

function EditProductt(props) {
  const { test } = props.productid;
  const router = useRouter();
  const { id } = router.query;
  const [productupdate, setProductupdate] = useState(props.productid);
  const [validation, setValidation] = useState(false);
  const [loading, setloading] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  // here i take what the user add to update title and description and price
  const handleTitleChange = (e) => {
    setProductupdate({ ...productupdate, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setProductupdate({ ...productupdate, description: e.target.value });
  };

  const handlePriceChange = (e) => {
    setProductupdate({ ...productupdate, price: e.target.value });
  };

  //here i make request to json server to make update
  const OnSubmitFormPut = (e) => {
    e.preventDefault();
    fetch(`https://json-serverr.glitch.me/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productupdate),
    })
      .then((res) => res.json())
      .then((data) => {
        setProductupdate(data);
      });
    router.push("/productsaction");
    setloading(true);
  };

  console.log(props.productid);
  return (
    <section>
      <div className={styles.backgroundimage}>
        <h1>
          Update<span>w</span>Products
        </h1>
        <Link
          href={"/productsaction"}
          className="position-absolute top-100 start-50 translate-middle"
        >
          Back
        </Link>
      </div>
      <div className="container">
        <div className={styles.addproducttitle}>
          <h1>Update-Product:{id}</h1>
        </div>
        {loading ? (
          <div className={styles.overlay}>
            <MoonLoader color="black" loading={loading} size={50} />
          </div>
        ) : (
          <form
            class={`row g-3 needs-validation ${validationcondition} ${styles.form}`}
            onSubmit={OnSubmitFormPut}
          >
            <div class={styles.title}>
              <label for="validationCustom01" class="form-label">
                Title
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                required
                placeholder="Enter title"
                value={productupdate.title}
                onChange={handleTitleChange}
              />
              <div className="invalid-feedback"> Title is required.</div>

              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class={styles.description}>
              <label for="validationCustom02" class="form-label">
                Description
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                required
                placeholder="Enter description"
                value={productupdate.description}
                onChange={handleDescriptionChange}
              />
              <div className="invalid-feedback"> Description is required.</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class={styles.price}>
              <label for="validationCustomUsername" class="form-label">
                Price
              </label>
              <div class="input-group has-validation">
                <input
                  type="number"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                  placeholder="ُEnter Price"
                  value={productupdate.price}
                  onChange={handlePriceChange}
                />
                <div class="invalid-feedback">price is required.</div>
              </div>
            </div>
            <div class="col-12 mt-5">
              <button
                class="btn btn-outline-dark"
                type="submit"
                onClick={() => {
                  setValidation(true);
                }}
              >
                Submit form
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
export default EditProductt;

export async function getStaticPaths() {
  const res = await fetch(`https://json-serverr.glitch.me/products`);
  const data = await res.json();

  const paths = data.map((d) => {
    return {
      params: { id: `${d.id}` },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://json-serverr.glitch.me/products/${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      productid: data,
    },
  };
}
