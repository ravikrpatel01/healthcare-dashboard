import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import { MdDoubleArrow } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";

const HealthcareDashboard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const fileInputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(
      "Form Submitted: ",
      firstName,
      lastName,
      age,
      fileInputRef.current.value
    );

    alert("Form Submitted Successfully!");

    setFirstName("");
    setLastName("");
    setAge("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <Navbar />
      <div id="dashboard" className="h-[89vh] mt-[80px] flex items-center p-5 bg-[#191B1F]">
        <div id="left" className="w-1/2 border-gray-200 p-10 flex flex-col gap-2">
          <h1 className="text-[4.2rem] font-bold text-white">
            Welcome to the Dashboard!
          </h1>
          <p className="text-gray-400 text-[1.3rem] font-md">
            Manage your data effectively with our intuitive dashboard. Use the
            form on the right to update information or upload documents
            seamlessly. We ensure a user-friendly experience for all your needs.
          </p>
          <button className="mt-4 px-10 py-2 bg-emerald-700 text-white text-[1.1rem] font-semibold rounded hover:bg-emerald-500 transition-all self-start flex items-center gap-1">
            Get Started <MdDoubleArrow color="white" size={22} />
          </button>
        </div>
        <div id="right" className="w-1/2  p-10">
          <div id="right-inside" className="w-full border shadow-lg shadow-emerald-900 border-emerald-600 rounded-md p-9 flex flex-col gap-3">
            <div>
              <h2 className="text-[2rem] font-bold text-gray-300">
                Personal Information Form
              </h2>
            </div>
            <form
              onSubmit={submitHandler}
              className="flex flex-col gap-2"
              action=""
            >
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="w-full text-[1.2rem] text-gray-300 font-semibold"
                >
                  First Name:
                </label>
                <input
                  className="w-[100%] px-2 py-2 rounded border text-white bg-[#191B1F] border-emerald-300 focus:outline-none"
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  id="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-[1.2rem] font-semibold text-gray-300"
                >
                  Last Name:
                </label>
                <input
                  className="w-[100%] px-2 py-2 rounded border border-emerald-300 focus:outline-none text-white bg-[#191B1F]"
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  id="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 relative">
                <label
                  className="text-[1.2rem] font-semibold text-gray-300"
                  htmlFor="age"
                >
                  Age:
                </label>
                <select
                  required
                  id="age"
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-[100%] px-2 py-2 text-white bg-[#191B1F] rounded border border-emerald-300 focus:outline-none"
                >
                  <option value="" disabled selected>
                    Select your age
                  </option>
                  {[...Array(100)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-0">
                <label
                  className="text-[1.2rem] font-semibold text-gray-300"
                  htmlFor="file"
                >
                  File Upload: <span className="text-[1rem] text-gray-400">(Only pdf is allowed)</span>
                </label>
                <input
                  className="px-0 py-2 rounded text-white bg-[#191B1F]"
                  type="file"
                  accept=".pdf"
                  name="file"
                  id="file"
                  required
                  ref={fileInputRef}
                />
              </div>

              <div className="mt-2">
                <button className="px-10 py-1 bg-emerald-700 text-white text-[1rem] rounded hover:bg-emerald-600 transition-all border border-gray-500">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthcareDashboard;
