import React, { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import RegNavBar from "./RegNavBar";
import FormBox from "./FormBox";
import FirstStep from "./FirstStep";
import OtherSteps from "./OtherSteps";
import background_image from "../../assets/backgrounds/background.jpg";

function MainReg() {
  const navigation = useNavigate();

  const input_fields = [
    {
      first: false,
      title: "Your Email",
      type: "email",
      back: true,
    },
    {
      first: false,
      title: "Your Phone Number",
      type: "phone",
      back: true,
    },
    {
      first: false,
      title: "Your Discrod ID",
      type: "discord",
      back: true,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    discord: "",
  });

  function handleInput(e) {
    setFormData((f) => ({
      ...f,
      [e.name]: e.value,
    }));
  }

  const refList = input_fields.map(() => {
    return useRef(null);
  });
  refList.push(useRef(null)); // for the first form element

  function handleSubmit() {
    console.log("final form", formData);

    const googleScriptURL =
      "https://script.google.com/macros/s/AKfycbxa6KIvy3ttuv_BdzLLV4Bnu0NzIEaAkZ_mbRpkuYq52BYYqPhp1qq8JQreMp18kn8V/exec";

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);
    formDataObj.append("discord", formData.discord);

    fetch(googleScriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response from Google Sheets:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    navigation("/submission_done");
  }

  function handleNext(index) {
    // scroll
    if (index + 1 === refList.length - 1) {
      handleSubmit();
    }

    const element = refList[index + 1].current;
    element.scrollIntoView({ behavior: "smooth" });
  }

  function handleBack(index) {
    if (index - 1 == -1) {
      var element = refList[refList.length - 1].current;
    } else {
      var element = refList[index - 1].current;
    }
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden
                    bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div
        className="flex flex-col h-screen "
        ref={refList[refList.length - 1]}
      >
        <RegNavBar />
        <div className="flex flex-row grow relative ">
          <div className="absolute">
            <FirstStep num={1} />
          </div>
          <div
            className="flex  grow shrink min-w-[400px] md:pl-20  py-10
                          justify-center w-full px-11"
          >
            <FormBox
              title="Your Name"
              type="name"
              back={false}
              index={-1}
              nextButton={handleNext}
              state_var={formData}
              update_state={setFormData}
              update={handleInput}
            />
          </div>
        </div>
      </div>
      <div className="">
        {input_fields.map((item, index) => {
          return (
            <div
              className="flex flex-row grow relative h-screen bg-black
                          bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${background_image})` }}
              ref={refList[index]}
            >
              <div className="absolute">
                <OtherSteps num={index + 2} />
              </div>
              <div
                className="flex md:justify-center grow shrink md:min-w-[400px] md:pl-20 py-24
                               justify-center w-full px-11"
              >
                <FormBox
                  title={item.title}
                  type={item.type}
                  back={item.back}
                  index={index}
                  nextButton={handleNext}
                  backButton={handleBack}
                  state_var={formData}
                  update_state={setFormData}
                  update={handleInput}
                  last={index == refList.length - 2 ? true : false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainReg;
