import "./Slider.css";
import RandomData from "../Task_2_data";
import { useState } from "react";

const Slider = () => {
  const [getIndex, setIndex] = useState(0);
  return (

    <div className="flex flex-col gap-12 justify-center align-middle">
      <div className="mt-10 flex gap-7">
        <button
          className={getIndex != 0 ? "button-active" : "button-deactive"}
          onClick={() => {
            setIndex(0);
          }}

          disabled={getIndex== 0}

        >
          Restart
        </button>

        <button
          className={getIndex != 0 ? "button-active" : "button-deactive"}
          onClick={() => {
            setIndex(getIndex - 1);
          }}
          disabled={getIndex== 0}
        >
          Prev
        </button>
        <button
          className={
            getIndex != RandomData.length - 1
              ? "button-active"
              : "button-deactive"
          }
          onClick={() => {
            setIndex(getIndex + 1);
          }}
          disabled={getIndex==(RandomData.length - 1)}
        >
          Next
        </button>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col w-1/2 p-5 mt-10 rounded-lg">
        <h1 className="font-bold text-4xl mb-3">{RandomData[getIndex].title}</h1>

        <p>{RandomData[getIndex].explanation}</p>
      </div>
    </div>
  );
};

export default Slider;
