import React from "react";
import radioButton from "../../assets/interest/radio_button.svg";
import radioButttonClicked from "../../assets/interest/radio_button_clicked.svg";
import Student from "../../components/Interest/Forms/Student";
import Professional from "../../components/Interest/Forms/Professional";
import CommunityLeader from "../../components/Interest/Forms/CommunityLeader";

import InterestPageLayout from "../../components/Interest/InterestPageLayout";

const AddExpertise = () => {
  const [selected, setSelected] = React.useState(undefined);

  const [select, setSelect] = React.useState([
    {
      id: "student",
      name: "Student",
    },
    {
      id: "professional",
      name: "Professional",
    },
    {
      id: "communityLeader",
      name: "Community Leader",
    },
  ]);

  return (
    <>
      <InterestPageLayout
        btnText="Sign in"
        btnPath="/sign-in"
        className="relative h-[calc(100vh-73px)] flex justify-center items-center"
        cardClassName="flex flex-col shadow-lg rounded-3xl border max-h-[90%] h-fit  w-[90%] sm:w-4/5 lg:w-3/6 bg-white z-10  py-5"
        title="Add Expertise"
        subTitle="Your feed will be personalised based on your skills. Don’t worry
                you can change it later."
        linkTo="/select-interest"
      >
        {/* card body  */}
        <div className="  px-2 sm:px-10 lg:px-20 mb-5">
          <p className="text-lg font-normal mb-2">Are you a</p>
          <div className="flex flex-wrap sm:flex-nowrap gap-1 justify-evenly sm:justify-between items-center ">
            {select.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`py-2 px-2 sm:px-5  text-[10px] sm:text-sm  focus:outline-none bg-[#F9FAFB]  rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-1 focus:ring-red-500  flex items-center gap-1 sm:gap-3 ${
                  item.id === selected && "text-red-500"
                }`}
                onClick={() => setSelected(item.id)}
              >
                <img
                  src={item.id === selected ? radioButttonClicked : radioButton}
                  alt="select expertise"
                />
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {/* form  */}

        {selected === "student" && <Student />}
        {selected === "professional" && <Professional />}
        {selected === "communityLeader" && <CommunityLeader />}

        {!selected && <div className="py-20"></div>}
      </InterestPageLayout>
    </>
  );
};

export default AddExpertise;
