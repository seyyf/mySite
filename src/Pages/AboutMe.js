import Axios from "axios";
import { motion } from "framer-motion";
import FileDownload from "js-file-download";
import image from "../Assets/Groupe 3.png";
import Button from "../Components/Button";

function AboutMe() {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "Mejri-Seyf-CV.pdf");
    });
  };
  const content = {
    title: "Hi There !",
    phrase:
      "My Name is Seyf Mejri, I'm a Full-stack web Developer & Web Designer",
  };
  return (
    <motion.div
      className="flex h-[80vh] justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" flex justify-center flex-col w-[70%]">
        <h1 className="text-6xl text-mainColor">{content.title}</h1>
        <p className="mt-6 text-4xl text-color-white">{content.phrase}</p>
        <div>
          <Button
            text="Download CV"
            className="mt-8"
            onClick={(e) => download(e)}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <img src={image} alt="" className="w-[75%] object-contain" />
      </div>
    </motion.div>
  );
}

export default AboutMe;
