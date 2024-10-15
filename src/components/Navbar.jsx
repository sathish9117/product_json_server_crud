import { NavLink } from "react-router-dom";

import { useState } from "react";
import Button from "./Button";
import { navLists } from "../utils/NavLists";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const activeLink = "bg-primary text-white rounded-md";
  const normalLink = "text-black font-semibod";
  return (
    <>
      <header className="bg-white border h-16 fixed top-0 left-0 right-0">
        <div className="  mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="#">
                <img
                  src="https://edupoly.in/common/assets/edupoly-logo-light.png"
                  alt=""
                  width={150}
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-md">
                  {navLists.map((link, index) => (
                    <NavLink
                      key={index}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      to={link.path}
                    >
                      <li className=" transition hover:bg-primary hover:text-white py-1 px-3 rounded-md">
                        {" "}
                        {link.name}{" "}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </nav>

              <div className="hidden md:relative md:block">
                <Button
                  onClick={toggleModal}
                  title={"Register"}
                  type="button"
                />
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <Modal toggleModal={toggleModal} del btn_del title="Login"></Modal>
        )}
        {/* <LoginModal /> */}
      </header>
    </>
  );
}
