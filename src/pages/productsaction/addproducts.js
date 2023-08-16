import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../../styles/Addproducts.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Link from "next/link";
import ProtectRoute from "@/components/protectroute/ProtectRoute";

function AddProducts() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [loading, setloading] = useState(false);

  const [validation, setValidation] = useState(false);

  let validationcondition = validation ? "was-validated" : "novalidate";

  const router = useRouter();

  const onSubmitForm = (e) => {
    setloading(true);

    fetch("https://json-serverr.glitch.me/products", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data));
    router.push("/productsaction");
  };

  return (
    <ProtectRoute>
      <section className={styles.section}>
        <div className={styles.backgroundimage}>
          <h1>
            AddNew<span>w</span>Products
          </h1>
          <Link
            href={"/productsaction"}
            className="position-absolute top-100 start-50 translate-middle"
          >
            Back
          </Link>
        </div>
        <div className="container">
          {/* <div className={styles.addproducttitle}>
          <h1>Add-New-Products</h1>
        </div> */}
          {/* {loading ? (
          <div className={styles.overlay}>
            <MoonLoader color="black" loading={loading} size={50} />
          </div>
        ) : (
          <Form className={styles.form} onSubmit={onSubmitForm}>
            <Form.Group
              className={`mb-3 ${styles.formgroup}`}
              controlId="formBasicEmail"
            >
              <Form.Label>Product-Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className={`mb-3 ${styles.formgroup}`}
              controlId="formBasicEmail"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group
              className={`mb-5 ${styles.formgroup}`}
              controlId="formBasicPassword"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="ُEnter Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )} */}
          {loading ? (
            <div className={styles.overlay}>
              <MoonLoader color="black" loading={loading} size={50} />
            </div>
          ) : (
            <>
              <form
                class={`row g-3 needs-validation ${validationcondition} ${styles.form}`}
                onSubmit={onSubmitForm}
              >
                <div class={styles.title}>
                  <label for="validationCustom01" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="Title"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    required
                    placeholder="Description"
                  />
                  <div className="invalid-feedback">
                    {" "}
                    Description is required.
                  </div>
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
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                      placeholder="Price"
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
                    Add New Product
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </ProtectRoute>
  );
}

export default AddProducts;
