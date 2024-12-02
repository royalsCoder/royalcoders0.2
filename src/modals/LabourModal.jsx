import { Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  fileUpload,
  GetRequest,
  PatchRequest,
  PostRequest,
} from "../helper/Helper";
import toast from "react-hot-toast";

import qr from "../assets/qr.jpg";
import logo from "../assets/ics-logo.jpg";

import {  State, City }  from 'country-state-city';

const LabourModal = ({
  modalData,
  setModalData,
  modalStatus,
  setModalStatus,
}) => {
  const handleCancel = () => {
    setModalStatus(false);
    setModalData("");
  };

  const [user, setUser] = useState({});

  // const contentToPrint = useRef(null);

  const componentRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,

  //  });

  const handlePrint = () => {
    const printContent = document.getElementById("content-to-print").innerHTML;

    // Create a new window for printing
    const printWindow = window.open("", "", "height=400,width=800");
    printWindow.document.write("<html><head><title>Print</title>");
    printWindow.document.write("</head><body>");
    printWindow.document.write(printContent);
    printWindow.document.write("</body></html>");

    printWindow.document.close(); // Close the document to render the content
    printWindow.focus(); // Focus on the new window
    printWindow.print(); // Trigger the print dialog
    // printWindow.close(); // Optionally close the window after printing
  };

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setModalStatus(false);
  };

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const [categorydata, setCategoryData] = useState([]);
  const [subcategorydata, setSubCategoryData] = useState([]);

  const [selectedState,setSelectedState] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("");

  const stateOption = state?.map((item, index) => {
    return (
      <>
        <option value={item?.isoCode}>{item?.name}</option>
      </>
    );
  });
  const cityOption = city?.map((item, index) => {
    return (
      <>
        <option value={item?.name}>{item?.name}</option>
      </>
    );
  });

  const [formData, setFormData] = useState(
    modalData
      ? { ...modalData }
      : {
          name: "",
          age: "",
          mobile: "",
          category: "",
          subCategory: "",
          currentAddress: "",
          permanentAddress: "",
          pincode: "",
          state: "UP",
          city: "",
          aadharNo: "",
          aadharFrontImage: "",
          aadharBackImage: "",
          totleExprience: "",
          profileImage: "",
          employcode:"",
            employname:"",
          ss:""
        }
  );

  const uploadaadharFront = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) {
      console.error("No file selected");
      return;
    }

    const cred = {
      image: files[0],
    };

    fileUpload({ url: `labour/uploadImage`, cred: cred })
      .then((res) => {
        console.log(res.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          aadharFrontImage: res.data?.data,
        }));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };
  const uploadaadharBack = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) {
      console.error("No file selected");
      return;
    }

    const cred = {
      image: files[0],
    };

    fileUpload({ url: `labour/uploadImage`, cred: cred })
      .then((res) => {
        console.log(res.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          aadharBackImage: res.data?.data,
        }));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };

  const uploadProfile = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) {
      console.error("No file selected");
      return;
    }

    const cred = {
      image: files[0],
    };

    fileUpload({ url: `labour/uploadImage`, cred: cred })
      .then((res) => {
        console.log(res.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          profileImage: res.data?.data,
        }));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };
  const uploadProfile1 = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) {
      console.error("No file selected");
      return;
    }

    const cred = {
      image: files[0],
    };

    fileUpload({ url: `labour/uploadImage`, cred: cred })
      .then((res) => {
        console.log(res.data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          ss: res.data?.data,
        }));
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };

  const onchangeData = (e) => {
    const { name, value } = e.target;
    if(name == "state"){
      const stateName = e.target.options[e.target.selectedIndex].text;
      setFormData({ ...formData, [name]: stateName });
      setSelectedState(value)
    }else{
      setFormData({ ...formData, [name]: value });

    }

  };

  const add = (e) => {
    e.preventDefault();
    PostRequest({
      url: `labour/addData`,
      cred: {
        ...formData,
      },
    })
      .then((res) => {
        console.log(res);
        setUser(res?.data?.data);
        toast.success("Labour Registration successfuly");
        // setModalStatus(false);
        setModalOpen(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.response?.data?.message);
      });
  };
  const update = (e) => {
    e.preventDefault();
    PatchRequest({
      url: `labour/updateData/${modalData?._id}`,
      cred: {
        ...formData,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success(res?.data?.message);
        setModalStatus(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   GetRequest(`labour/getState/IN`)
  //     .then((res) => {
  //       console.log(res?.data?.data);
  //       setState(res?.data?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   GetRequest(`labour/getcity/${formData?.state}`)
  //     .then((res) => {
  //       console.log(res?.data?.data);
  //       setCity(res?.data?.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [formData?.state]);

  const CategoryOption = categorydata?.map((state) => {
    return (
      <option key={state?._id} value={state?._id}>
        {state?.name}
      </option>
    );
  });

  const subCategoryOption = subcategorydata?.map((state) => {
    return (
      <option key={state?._id} value={state?._id}>
        {state?.name}
      </option>
    );
  });


  useEffect(() => {
    const states = State.getStatesOfCountry("IN"); 
    setState(states);
  }, []);

  useEffect(() => {
    if (formData?.state) {
      const cities = City.getCitiesOfState("IN", selectedState); 
      setCity(cities);
    }
  }, [formData?.state]);



  useEffect(() => {
    GetRequest(
      `SubCategory/getSubCategoriesByCategoryId?category=${formData?.category}`
    )
      .then((res) => {
        console.log(res?.data);
        setSubCategoryData(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData?.category]);

  useEffect(() => {
    GetRequest(`Category/getAllData`)
      .then((res) => {
        console.log(res?.data);
        setCategoryData(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Modal
        title={"Labour Registration "}
        open={modalStatus}
        style={{
          top: 20,
        }}
        width={900}
        onCancel={handleCancel}
        footer
      >
        <div>
          <form onSubmit={modalData ? update : add} className="row g-3">
            <div className="col-md-4">
              <label htmlFor="inputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.name}
                name="name"
                className="form-control"
                id="inputName"
                placeholder="Name"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAge" className="form-label">
                Age
              </label>
              <input
                type="number"
                onChange={onchangeData}
                value={formData?.age}
                name="age"
                className="form-control"
                id="inputAge"
                placeholder="Age"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputMobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.mobile}
                name="mobile"
                className="form-control"
                id="inputMobile"
                placeholder="Mobile Number"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputMobile" className="form-label">
              Employ Name
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.employname}
                placeholder="Enter Employ Name"
                name="employname"
                className="form-control"
                id="inputMobile"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputMobile" className="form-label">
              Employ Code
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.employcode}
                placeholder="Enter Employ Code"
                name="employcode"
                className="form-control"
                id="inputMobile"
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputCurrentAddress" className="form-label">
                Current Address
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.currentAddress}
                name="currentAddress"
                className="form-control"
                id="inputCurrentAddress"
                placeholder="Current Address"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPermanentAddress" className="form-label">
                Permanent Address
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.permanentAddress}
                name="permanentAddress"
                className="form-control"
                id="inputPermanentAddress"
                placeholder="Permanent Address"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={onchangeData}
                name="state"
                value={selectedState}
              >
                <option value="">Choose...</option>
                {...stateOption}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <select
                id="inputState"
                className="form-select"
                onChange={onchangeData}
                value={formData?.city}
                name="city"
              >
                <option value="">Choose...</option>
                {...cityOption}
              </select>
            </div>

            <div className="col-md-4">
              <label htmlFor="inputPincode" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.pincode}
                name="pincode"
                className="form-control"
                id="inputPincode"
                placeholder="Pincode"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputCategory" className="form-label">
                Category
              </label>

              <select
                className="form-control "
                onChange={onchangeData}
                value={formData?.category}
                name="category"
                id="cars"
              >
                <option value="">Select Category</option>
                {...CategoryOption}
              </select>
            </div>
            {
              formData?.category == "674b1f23ba46d862af52c54c" ? 
            <div className="col-md-4">
              <label htmlFor="inputCategory" className="form-label">
               Other Category
              </label>

              <input
                type="text"
                onChange={onchangeData}
                value={formData?.othercategory}
                name="othercategory"
                className="form-control"
                id="inputAadharNo"
                placeholder="Category"
              />
            </div> :""
            }
            <div className="col-md-4">
              <label htmlFor="inputSubCategory" className="form-label">
                Sub Category
              </label>

              <select
                className="form-control "
                onChange={onchangeData}
                value={formData?.subCategory}
                name="subCategory"
                id="cars"
              >
                <option value="">Select Category</option>
                {...subCategoryOption}
              </select>
            </div>
            {
              formData?.subCategory == "674b1f37ba46d862af52c553" ? 
            <div className="col-md-4">
              <label htmlFor="inputCategory" className="form-label">
               Other Sub Category
              </label>

              <input
                type="text"
                onChange={onchangeData}
                value={formData?.othersubCategory}
                name="othersubCategory"
                className="form-control"
                id="inputAadharNo"
                placeholder="Other Category"
              />
            </div> :""
            }
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
                Total Exprience
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.totleExprience}
                name="totleExprience"
                className="form-control"
                id="inputAadharNo"
                placeholder="Total Exprience"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
                Aadhar No
              </label>
              <input
                type="text"
                onChange={onchangeData}
                value={formData?.aadharNo}
                name="aadharNo"
                className="form-control"
                id="inputAadharNo"
                placeholder="Aadhar Number"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
                Aadhar Front Image
              </label>

              <div className="d-flex gap-2">
                <input
                  type="file"
                  onChange={uploadaadharFront}
                  className="form-control"
                  id="inputAadharNo"
                />
                <span>
                  <img
                    style={{ width: "50px" }}
                    className="imageform"
                    src={formData?.aadharFrontImage}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
                Aadhar Back Image
              </label>

              <div className="d-flex gap-2">
                <input
                  type="file"
                  onChange={uploadaadharBack}
                  className="form-control"
                  id="inputAadharNo"
                />
                <span>
                  <img
                    style={{ width: "50px" }}
                    className="imageform"
                    src={formData?.aadharBackImage}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
                Profile Image
              </label>
              <div className="d-flex gap-2">
                <input
                  type="file"
                  onChange={uploadProfile}
                  className="form-control"
                  id="inputAadharNo"
                />
                <span>
                  <img
                    style={{ width: "50px" }}
                    className="imageform"
                    src={formData?.profileImage}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputAadharNo" className="form-label">
              Upload Payment Screen Shot
              </label>
              <div className="d-flex gap-2">
                <input
                  type="file"
                  onChange={uploadProfile1}
                  className="form-control"
                  id="inputAadharNo"
                />
                <span>
                  <img
                    style={{ width: "50px" }}
                    className="imageform"
                    src={formData?.ss}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <img
                style={{ width: "200px" }}
                className="imageform"
                src={qr}
                alt=""
              />
            </div>
            <div className="col-md-4">
              <h4>Bank Details:</h4>
              <ul>
                <li>
                  <strong>Bank Name:-</strong>State Bank Of India
                </li>
                <li>
                  <strong>Branch:-</strong>High Court Lucknow
                </li>
                <li>
                  <strong>Name :-</strong>Izzy Click Supplier (OPC) Private
                  Limted
                </li>
                <li>
                  <strong>Account Number:-</strong>43357205440
                </li>
                <li>
                  <strong>IFSC Code:-</strong>SBIN0004219
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <button type="submit" className="button">
                {modalData ? "Submit" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Modal>

      <Modal
        title="Download"
        open={modalOpen}
        onCancel={closeModal}
        width={800}
        footer={null} // Custom footer buttons
      >
        <div ref={componentRef} id="content-to-print" className=" my-5">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className="d-flex justify-content-between align-items-center">
            <span> <img src={logo} style={{width:"90px"}} alt="" /> </span>
            <h2 className="fs-3" style={{fontWeight:"bold"}}>Izzy Click Supplier (OPC) Private Limited</h2>
          </div>
          <h3 style={{ border: "1px solid black", padding: "12px" }}>
            Personal Details
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Name:-</strong> <span>{user?.name}</span>
              </p>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Mobile:-</strong> <span>{user?.mobile}</span>
              </p>
              <p
                style={{ padding: "10px", display: "flex", gap: "1rem" }}
                className="m-0"
              >
                <strong>Age:-</strong> <span>{user?.age}</span>
              </p>
            </div>

            <div style={{ borderLeft: "1px solid black", padding: "8px" }}>
              <img style={{ width: "150px" }} src={user?.profileImage} alt="" />
            </div>
          </div>

          <h3
            style={{
              border: "1px solid black",
              padding: "12px",
              marginTop: "9px",
              marginBottom: "9px",
            }}
          >
            Additional Details
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
            }}
          >
            <div style={{ width: "100%" }}>
{
  user?.category?.name == "Other" ?
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                
                <strong>Category:-</strong> <span>{user?.othercategory}</span>
              </p>
            :  <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                
                <strong>Category:-</strong> <span>{user?.category?.name}</span>
              </p>
}


{
   user?.subCategory?.name == "Other" ?
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Sub Category:-</strong> <span>{user?.othersubCategory}</span>
              </p>
            :  <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Sub Category:-</strong> <span>{user?.subCategory?.name}</span>
              </p>
}

              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>totleExprience:-</strong>{" "}
                <span>{user?.totleExprience}</span>
              </p>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Permanent Address:-</strong>{" "}
                <span>{user?.permanentAddress} {user?.state} {user?.city} {user?.pincode}</span>
              </p>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Employ Name:-</strong> <span>{user?.employname}</span>
              </p>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Employ Code:-</strong> <span>{user?.employcode}</span>
              </p>
             
              <p
                style={{ padding: "10px", display: "flex", gap: "1rem" }}
                className="m-0"
              >
                <strong>Current Address:-</strong>{" "}
                <span>{user?.currentAddress}</span>
              </p>
            </div>
          </div>

          <h3
            style={{
              border: "1px solid black",
              padding: "12px",
              marginTop: "9px",
              marginBottom: "9px",
            }}
          >
            Document
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
            }}
          >
            <div style={{ width: "100%" }}>
              <p
                style={{
                  padding: "10px",
                  borderBottom: "1px solid black",
                  display: "flex",
                  gap: "1rem",
                }}
                className="m-0"
              >
                <strong>Aadhar Number:-</strong> <span>{user?.aadharNo}</span>
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "12px",
                  alignItems: "center",
                  padding: "9px",
                }}
                className=""
              >
                <div className="">
                  <img
                    style={{ width: "200px" }}
                    src={user?.aadharFrontImage}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    style={{ width: "200px" }}
                    src={user?.aadharBackImage}
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    style={{ width: "200px" }}
                    src={user?.ss}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}></div>
        </div>
        <button type="primary" className="button" onClick={closeModal}>
          Cancel
        </button>
        <button
          style={{ marginLeft: "10px" }}
          className="button"
          onClick={handlePrint}
        >
          Print
        </button>
      </Modal>
    </div>
  );
};

export default LabourModal;
