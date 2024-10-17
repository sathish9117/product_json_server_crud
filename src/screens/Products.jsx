import { useEffect, useState } from "react";
import { oContainer } from "../utils/utilities";
import axios from "axios";
import Modal from "../components/Modal";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import { FaRegEdit } from "react-icons/fa";
import del_icon from "../assets/del_icon.webp";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    desc: "",
    createdAt: "",
  });
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleAddModal = () => {
    setIsAddOpen((prev) => !prev);
  };
  const toggleEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditOpen((prev) => !prev);
  };
  const toggleViewModal = (product) => {
    setSelectedProduct(product);
    setIsViewOpen((prev) => !prev);
  };
  const toggleDeldModal = (product) => {
    setSelectedProduct(product);
    setIsDelOpen(!isDelOpen);
  };

  useEffect(() => {
    getProducts();
  }, []);
  // Create Data
  function addProduct() {
    axios.post("http://localhost:3000/products", newProduct).then((res) => {
      console.log("After Adding", res);
      getProducts();
    });
    // alert(JSON.stringify(newProduct));
    setIsAddOpen(false);
  }
  // Read Data
  function getProducts() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        // console.log(res);
        setProducts([...res.data]);
      })
      .catch(() => {});
  }
  // Update Data
  function updateProduct() {
    axios
      .put(
        `http://localhost:3000/products/${selectedProduct.id}`,
        selectedProduct
      )
      .then((res) => {
        getProducts();
        setIsEditOpen(false);
        console.log(res);
      });
  }
  // Delete Data
  function deleteProduct(id) {
    axios.delete(`http://localhost:3000/products/${id}`).then((res) => {
      getProducts();
      setIsDelOpen(false);
      console.log(res);
    });
  }
  return (
    <div className={`${oContainer} mt-[64px]`}>
      <div className="">
        <h1 className=" text-3xl font-bold text-center mb-3">Products</h1>
        <div className=" flex justify-between gap-3 mr-24 ml-24">
          <Button type="button" className="" title="sorting" />
          <Button
            type="button"
            className=""
            title="add"
            onClick={toggleAddModal}
          />
        </div>
        <div>
          <ul className=" flex flex-wrap justify-center overflow-hidden">
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <li key={product.id}>
                    <article className=" w-[250px] h-[200px] hover:animate-background m-2 border border-black rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                      <div className="rounded-[10px] h-full  bg-white p-4 sm:p-6">
                        <div className=" flex justify-between items-center">
                          <h3 className="mt-0.5 text-lg font-bold text-gray-900 truncate">
                            {product.name}
                          </h3>
                          <FaRegEdit
                            className=" cursor-pointer text-xl"
                            onClick={() => toggleEditModal(product)}
                          />
                        </div>
                        <div className="mt-2">
                          <table className=" w-full">
                            <tbody>
                              <tr>
                                <td>
                                  <span className=" font-medium capitalize">
                                    brand:{" "}
                                  </span>
                                </td>
                                <td>
                                  <p> {product.brand}</p>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className=" font-medium capitalize">
                                    {" "}
                                    category:{" "}
                                  </span>
                                </td>
                                <td>
                                  <p> {product.category}</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className=" mt-3 flex justify-between">
                          <Button
                            type="button"
                            title="View"
                            onClick={() => toggleViewModal(product)}
                          />
                          <Button
                            type="button"
                            className=" bg-red-600"
                            title="Delete"
                            onClick={() => toggleDeldModal(product)}
                          />
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
          </ul>
          {/* Add Modal */}
          {isAddOpen && (
            <Modal
              title="Add Product"
              cancelBtn
              btn_img
              closeImg
              toggleModal={toggleAddModal}
            >
              <div className=" space-y-4 text-center">
                {/* 
                
                // Pending Field
                "createdAt": "2023-01-05"
                
                */}

                <CustomInput
                  req
                  label="Product Name"
                  onChange={(event) => {
                    setNewProduct({ ...newProduct, name: event.target.value });
                  }}
                />
                <CustomInput
                  req
                  label="Brand Name"
                  onChange={(event) => {
                    setNewProduct({ ...newProduct, brand: event.target.value });
                  }}
                />
                <CustomInput
                  req
                  label="Category Name"
                  onChange={(event) => {
                    setNewProduct({
                      ...newProduct,
                      category: event.target.value,
                    });
                  }}
                />

                <CustomInput
                  req
                  label="Price"
                  onChange={(event) => {
                    setNewProduct({ ...newProduct, price: event.target.value });
                  }}
                />

                <CustomInput
                  label="Description"
                  multi
                  rows="3"
                  onChange={(event) => {
                    setNewProduct({ ...newProduct, desc: event.target.value });
                  }}
                />

                <Button
                  title="Add"
                  className={"w-full"}
                  onClick={() => {
                    addProduct();
                  }}
                />
              </div>
            </Modal>
          )}
          {/* Update Modal */}
          {isEditOpen && selectedProduct && (
            <Modal
              title="Edit Product"
              cancelBtn
              btn_img
              closeImg
              toggleModal={toggleEditModal}
            >
              <div className=" space-y-4 text-center">
                {/* 
                
                // Pending Field
                "createdAt": "2023-01-05"
                
                */}

                <CustomInput
                  req
                  label="Product Name"
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <CustomInput
                  req
                  label="Brand Name"
                  value={selectedProduct.brand}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      brand: e.target.value,
                    })
                  }
                />
                <CustomInput
                  req
                  label="Category Name"
                  value={selectedProduct.category}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      category: e.target.value,
                    })
                  }
                />
                <CustomInput
                  req
                  label="Price"
                  value={selectedProduct.price}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <CustomInput
                  label="Description"
                  multi
                  rows="3"
                  value={selectedProduct.desc}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      desc: e.target.value,
                    })
                  }
                />
                <Button
                  title="Update"
                  className={"w-full"}
                  onClick={updateProduct}
                />
              </div>
            </Modal>
          )}
          {/* Delete Modal*/}
          {isDelOpen && selectedProduct && (
            <Modal
              title="Confirm Delete"
              btn_img
              closeImg
              cancelBtn
              toggleModal={() => toggleDeldModal(null)}
            >
              <div className=" flex flex-col justify-center items-center">
                <img src={del_icon} className=" w-1/2" alt="" />
                <Button
                  title={"Delete"}
                  className={"w-full"}
                  onClick={() => {
                    deleteProduct(selectedProduct.id);
                  }}
                />
              </div>
            </Modal>
          )}
          {/* View Modal */}
          {isViewOpen && selectedProduct && (
            <Modal
              title="Product Details"
              className=""
              btn_img
              closeImg
              toggleModal={toggleViewModal}
            >
              <div className="boder border-emerald-500">
                <table className="">
                  <tbody>
                    <tr>
                      <td className="w-[40%">
                        <h1>Name: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.name}</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>Brand: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.brand}</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>Category: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.category}</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>Price: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.price}</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>Description: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.desc}</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1>createdAt: </h1>
                      </td>
                      <td>
                        <h1>{selectedProduct.createdAt}</h1>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
