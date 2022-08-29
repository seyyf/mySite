import image from "../Assets/Groupe 9.png";

function Experience() {
  const EXPERIENCE_DATA = [
    {
      title: "Front-end Developer",
      duration: "5 Months (internship)",
      content: "lorem ipsum",
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
      <div>
        {EXPERIENCE_DATA.map((data, key) => {
          return (
            <>
              <div key={key}>{data.title}</div>
              <div key={key}>{data.duration}</div>
              <div key={key}>{data.content}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
