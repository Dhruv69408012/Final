import React, { useState, useEffect } from "react";
import authApi from "../apis/authApi";
import { useNavigate } from "react-router-dom";

const User_Profile = () => {
  const navigate = useNavigate();
  const [udata, setUdata] = useState({
    uname: "",
    email: "",
    height: "",
    age: "",
    weight: "",
    gender: "",
    condition: "",
  });

  const details = async () => {
    try {
      const res = await authApi.disp("");
      const user = {
        uname: res?.user?.uname,
        email: res?.user?.email,
        height: res?.user?.height,
        age: res?.user?.age,
        weight: res?.user?.weight,
        condition: res?.user?.condition,
        gender: res?.user?.gender,
      };
      return user;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return {};
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = await details();
      setUdata(user);
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    navigate("/update");
  };

  return (
    <div className="home" style={{ padding: "50px" }}>
      <div className="form_container2" style={{ maxHeight: "460px" }}>
        <div className="form profile_form">
          <div className="profile_form">
            <div>
              <h4
                style={{
                  justifyContent: "center",
                  color: "black",
                }}
              >
                Profile
              </h4>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Username:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.uname}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Email:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.email}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Age:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.age}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Gender:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.gender}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Height:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.height}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Weight:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.weight}</label>
            </div>
            <div style={{ display: "flex", paddingTop: "20px" }}>
              <label>Condition:</label>
              <label style={{ paddingLeft: "20px" }}>{udata?.condition}</label>
            </div>
            <button className="pro_sub_btn" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User_Profile;