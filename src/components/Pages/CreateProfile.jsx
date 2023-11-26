import React, { useState } from "react";
import logo from "../../assets/logos/PayPro.svg";
import adduser from "../../assets/logos/AddUserMale.svg";
import { IoMdClose } from "react-icons/io";

const CreateProfile = () => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageURL(URL.createObjectURL(selectedFile));
  };
  const handleCreateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("workPhone", workPhone);
      formData.append("mobilePhone", mobilePhone);
  
      const response = await fetch("https://paypro-r94x.onrender.com/client/uploadImage", {
        method: "POST",
        body: formData,
      });
  
      console.log("Server response:", response);
  
      if (response.ok) {
        console.log("Profile created successfully");
        // Add your logic for handling success
      } else {
        console.error("Error creating profile");
        // Add your logic for handling error
      }
    } catch (error) {
      console.error("Error during profile creation:", error);
      // Add your logic for handling error
    }
  };
  return (
    <div>
      {/* Navbar section */}
      <div className="p-4 flex items-center justify-between">
        {/* Logo on the left */}
        <img src={logo} alt="PayPro Logo" className="h-8" />

        {/* Close Icon on the right */}
        <IoMdClose />
      </div>

      {/* Main section */}
      <div className="container mx-auto p-4 md:p-8">
        {/* Create Profile Heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl font-extrabold mb-4">
          Create Profile
        </h1>

        {/* Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* User Icon and Image Upload */}
          <div className="flex flex-col items-center mb-4">
            {imageURL ? (
              <img src={imageURL} alt="User Photo" className="w-32 h-32 rounded-full mb-2" />
            ) : (
              <label htmlFor="profileImage" className="mb-2">
                <img src={adduser} alt="User Icon" className="w-32 h-32 cursor-pointer" />
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept=".png, .jpg"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </label>
            )}
            <div>
              <p className="text-sm text-gray-500">Add a profile picture</p>
              <label htmlFor="profileImage" className="text-customTeal cursor-pointer">
                Upload
              </label>
            </div>
          </div>
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 mt-6 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="mt-1 p-2 h-14 w-full border "
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="mt-1 p-2 h-14 w-full border "
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="mt-1 p-2 h-14 w-full border "
            />
          </div>

          {/* Address */}
          <div className="mt-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              className="mt-1 p-2 h-14 w-full border"
            />
          </div>

          {/* Phone Numbers */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700">
                Work Phone
              </label>
              <input
                type="tel"
                id="workPhone"
                name="workPhone"
                placeholder="Enter your work phone"
                className="mt-1 p-2 h-14 w-full border "
              />
            </div>
            <div>
              <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-700">
                Mobile Phone
              </label>
              <input
                type="tel"
                id="mobilePhone"
                name="mobilePhone"
                placeholder="Enter your mobile phone"
                className="mt-1 p-2 h-14 w-full border "
              />
            </div>
          </div>
           {/* Create Profile Button */}
           <button
            className="bg-customTeal text-white px-4 py-2 mt-10 rounded-md hover:bg-customTeal w-full"
            onClick={() => {
              // Add logic for handling the create profile button click
              console.log("Create Profile button clicked");
            }}
          >
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
