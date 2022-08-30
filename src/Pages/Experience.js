import image from "../Assets/Groupe 9.png";

function Experience() {
  const EXPERIENCE_DATA = [
    {
      title: "Front-end Developer",
      duration: "5 Months (internship)",
      content:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      title: "Front-end Developer",
      duration: "1 Year & 7 Months",
      content: "lorem ipsum",
    },
    {
      title: "Full-stack Developer",
      duration: "5 Months (internship)",
      content: "lorem ipsum",
    },
  ];

  return (
    <div className="flex h-[80vh] justify-between items-center">
      <div className="w-[30%]">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col justify-start ">
        {EXPERIENCE_DATA.map((data, key) => {
          return (
            <div key={key} className="pb-7 pr-6 text-color-white">
              <h1 className=" text-2xl">{data.title}</h1>
              <div className="text-mainColor">{data.duration}</div>
              <div className="">{data.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
