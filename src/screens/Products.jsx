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
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isDelOpen, setIsDelOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddOpen((prev) => !prev);
  };
  const toggleEditModal = () => {
    setIsEditOpen((prev) => !prev);
  };
  const toggleDeldModal = () => {
    setIsDelOpen(!isDelOpen);
  };

  useEffect(() => {
    getProducts();
  }, []);
  function getProducts() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        // console.log(res);
        setProducts([...res.data]);
      })
      .catch(() => {});
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
                            onClick={toggleEditModal}
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
                          <Button type="button" title="View" />
                          <Button
                            type="button"
                            className=" bg-red-600"
                            title="Delete"
                            onClick={toggleDeldModal}
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

                <CustomInput req label="Product Name" />
                <CustomInput req label="Brand Name" />
                <CustomInput req label="Category Name" />
                <CustomInput req label="Price" />
                <CustomInput label="Description" multi rows="3" />
                <Button title="Add" className={"w-full"} />
              </div>
            </Modal>
          )}
          {/* Delete Modal*/}
          {isDelOpen && (
            <Modal
              title="Confirm Delete"
              btn_img
              closeImg
              cancelBtn
              toggleModal={toggleDeldModal}
            >
              <div className=" flex flex-col justify-center items-center">
                <img src={del_icon} className=" w-1/2" alt="" />
                <Button title={"Delete"} className={"w-full"} />
              </div>
            </Modal>
          )}
          {isEditOpen && (
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

                <CustomInput req label="Product Name" />
                <CustomInput req label="Brand Name" />
                <CustomInput req label="Category Name" />
                <CustomInput req label="Price" />
                <CustomInput label="Description" multi rows="3" />
                <Button title="Update" className={"w-full"} />
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
