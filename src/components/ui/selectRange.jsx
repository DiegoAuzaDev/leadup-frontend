/* eslint-disable react/prop-types */

function SelectRange({ min, max, value, setValue }) {
  return (
    <>
      <div className=" rounded-custom bg-white py-2 px-2">
        <input
          value={Number(value)}
          type="range"
          id="length"
          step={0.1}
          onChange={setValue}
          className=" my-2 transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-surface-dark"
          min={min}
          max={max}
        />
      </div>
      <div className=" flex justify-between">
        <span>{min}</span>
        <span className="py-2 text-primary font-bold">
          {`  Selected Value : ${value}`}
        </span>
        <span>{max}</span>
      </div>
    </>
  );
}


export default SelectRange;
