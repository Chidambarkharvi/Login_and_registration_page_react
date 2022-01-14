import React, { useState } from "react";
import Login from "./Login";

function Register(props) {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const [gender, setGender] = useState("");
  const [date, setdate] = useState("");
  const [validdate, setvaliddate] = useState(false);

  const [nameerror, setnameerror] = useState(false);
  const [lnameerror, setlnameerror] = useState(false);

  const [genderError, setGenderError] = useState(false);
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });
  const [emailError, setemailError] = useState(false);
  const [emailErrorEmpty, setemailErrorEmpty] = useState(false);

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false);
  const [confirmPass, setconfirmPass] = useState("");
  const [number, setnumber] = useState("");
  const [numerror, setnumerror] = useState(false);

  const onClick = (event) => {
    event.preventDefault();

    // if(date===""){
    //   setvaliddate(true)
    // }

    if (fname === "") {
      setnameerror(true);
    }
    if (number === "") {
      setnumerror(true);
    }

    if (date === "") {
      setvaliddate(true);
    } else setvaliddate(false);

    if (lname === "") {
      setlnameerror(true);
    }

    if (gender === "") {
      setGenderError(true);
    } else setGenderError(false);
    if (userDetails.password === "") {
      setPasswordErrorEmpty(true);
    }
    if (userDetails.email === "") {
      setemailErrorEmpty(true);
    }
    let mail = event.target.value;
    let pass = event.target.value;

    let filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

    let validPassReg =
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

    if (
      userDetails.email &&
      userDetails.password &&
      filter.test(mail) &&
      validPassReg.test(pass)
    ) {
      //programatically navigate
      console.log("props", props);
      props.history.push("/home");
    } else {
      console.log("not valis");
    }
  };

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.name);
    const userDetailsCopy = { ...userDetails };
    console.log(userDetailsCopy, "userDetailsCopy");

    userDetailsCopy[event.target.name] = event.target.value;
    setuserDetails(userDetailsCopy);
  };

  // const confirmPassword = (event) => {
  //   console.log(event);
  //   console.log(event.target.name);

  //   const confirmPassCopy = { ...confirmPass };
  //   console.log(confirmPassCopy);
  //   confirmPassCopy[event.target.name] = event.target.value;
  //   setconfirmPass(confirmPassCopy);
  //   console.log(setconfirmPass);
  // };

  //const handleEmailChange = (event) => {
  //     console.log(event);
  //     console.log("name", event.target.name);
  //     console.log("value", event.target.value);
  //     //take a copy of the state
  //     const userDetailsCopy = { ...userDetails };
  //     userDetailsCopy.email = event.target.value;
  //     setuserDetails(userDetailsCopy);
  //   };

  return (
    <div>
      <div>
        <input
          placeholder="Firtsname"
          type="text"
          onChange={(event) => {
            // confirmPassword();
            setfname(event.target.value);
            const expr = /^[a-zA-Z_]{3,15}$/;
            if (!expr.test(fname)) {
              setnameerror(true);
            } else {
              setnameerror(false);
            }
          }}
        />
        {nameerror ? (
          <p
            style={{
              color: "red",
              fontSize: 12,
              padding: 0,
              margin: 0,
            }}
          >
            Name is not valid
          </p>
        ) : null}
      </div>
      <div>
        <input
          placeholder="Lastsname"
          type="text"
          onChange={(event) => {
            // confirmPassword();
            setlname(event.target.value);
            const expr = /^[a-zA-Z_]{3,15}$/;
            if (!expr.test(lname)) {
              setlnameerror(true);
            } else {
              setlnameerror(false);
            }
          }}
        />
        {lnameerror ? (
          <p
            style={{
              color: "red",
              fontSize: 12,
              padding: 0,
              margin: 0,
            }}
          >
            Name is not valid
          </p>
        ) : null}
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <label htmlFor=""> Gender : </label>
        <div className="form-check form-check-inline">
          <input
            // style="outline: 1px solid #ab1a23"
            className="form-check-input"
            type="radio"
            value="male"
            name="inlineRadioOptions"
            id="inlineRadio1"
            onChange={(event) => {
              setGender(event.target.value);
              setGenderError(false);
            }}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            // style="outline: 1px solid #ab1a23"
            className="form-check-input"
            type="radio"
            value="Female"
            name="inlineRadioOptions"
            id="inlineRadio2"
            onChange={(event) => {
              setGender(event.target.value);
              setGenderError(false);
            }}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            // style="outline: 1px solid #ab1a23"
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="Other"
            onChange={(event) => {
              setGender(event.target.value);
              setGenderError(false);
            }}
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            other
          </label>
        </div>
      </div>

      {genderError ? (
        <p style={{ color: "red", fontSize: 12, padding: 0, margin: 0 }}>
          Select gender
        </p>
      ) : (
        ""
      )}

      <div>
        <label> DOB : </label>{" "}
        <input
          type="date"
          onChange={(event) => {
            setdate(event.target.value);
            setvaliddate(false);
          }}
        />
        {validdate ? (
          <p style={{ color: "red", fontSize: 12, padding: 0, margin: 0 }}>
            Enter DOB
          </p>
        ) : (
          ""
        )}
      </div>
      {/* <div>
        <input
          type="text"
          onChange={(event) => {
            setnumber(event.target.value);
            var pattern = new RegExp("([^\d])\d{10}([^\d])");
            if (!pattern.test(number)) {
              setnumerror(true);
            } else {
              setnumerror(false);
            }
          }}
        />
        {numerror ? (
          <p style={{ color: "red", fontSize: 12, padding: 0, margin: 0 }}>
           cannot be empty and should contain 10 digits
          </p>
        ) : (
          ""
        )}
      </div> */}

      <div>
        <input
          value={userDetails.email}
          type="password"
          name="email"
          onChange={(event) => {
            handleChange(event);
            let mail = event.target.value;

            const filter =
              /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,25})$/;

            if (filter.test(mail)) {
              setemailError(false);
            } else {
              setemailError(true);
            }
          }}
          placeholder="Enter mail"
        />{" "}
        {emailError && userDetails.email ? (
          <p
            style={{
              color: "red",
              fontSize: 12,
              padding: 0,
              margin: 0,
            }}
          >
            mail is incorrect
          </p>
        ) : (
          emailErrorEmpty  ?  (
            <p
              style={{
                color: "red",
                fontSize: 12,
                padding: 0,
                margin: 0,
              }}
            >
              mail can't be empty
            </p>
          ) : (null)
        )}
      </div>
      <div style={{}}>
        <input
          value={userDetails.password}
          name="password"
          type="password"
          onChange={(event) => {
            let pass = event.target.value;
            handleChange(event);
            let validPassReg =
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,16}/;

            if (!validPassReg.test(pass)) {
              setPasswordError(true);
            } else {
              setPasswordError(false);
            }
          }}
          placeholder="password"
          style={{
            marginTop: 20,
            minWidth: 300,
            maxWidth: 450,
            height: 30,
            borderRadius: 4,
            outline: "none",
            border: "0.5px solid grey",
            paddingLeft: 10,
          }}
        />
        {passwordError && userDetails.password ? (
          <p
            style={{
              color: "red",
              fontSize: 12,
              padding: 0,
              margin: 0,
            }}
          >
            password is incorrect
          </p>
        ) : (
          passwordErrorEmpty && (
            <p
              style={{
                color: "red",
                fontSize: 12,
                padding: 0,
                margin: 0,
              }}
            >
              password can't be empty
            </p>
          )
        )}
      </div>
      <div>
        {/* <input
          value={userDetails.password}
          name="password"
          type="password"
          onChange={(event) => {
            let pass = event.target.value;
            handleChange(event);
             validPassReg =
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;

            if (!validPassReg.test(pass)) {
              setPasswordError(true);
            } else {
              setPasswordError(false);
            }
          }}
          placeholder="password"
          style={{
            marginTop: 20,
            minWidth: 300,
            maxWidth: 450,
            height: 30,
            borderRadius: 4,
            outline: "none",
            border: "0.5px solid grey",
            paddingLeft: 10,
          }}
        /> */}

        <input
          placeholder="confirm password"
          name="confpass"
          type="password"
          onChange={(event) => {
            // confirmPassword();
            setconfirmPass(event.target.value);
          }}
        />
      </div>

      {confirmPass && confirmPass !== userDetails.password ? (
        <p
          style={{
            color: "red",
            fontSize: 12,
            padding: 0,
            margin: 0,
          }}
        >
          password is not matching
        </p>
      ) : null}

      <button
        style={{
          marginTop: 20,
        }}
        onClick={onClick}
      >
        Submit
      </button>
    </div>
  );
}

export default Register;
