/* eslint-disable react/prop-types */

function SelectRange({ min, max, value, setValue, id }) {
  return (
    <>
      <div className=" rounded-custom bg-white py-2 px-2">
        <input
          value={Number(value)}
          type="range"
          id={id}
          step={0.1}
          onChange={setValue}
          className=" my-2 transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-surface-dark"
          min={min}
          max={max}
        />
      </div>
      <div className=" flex justify-between">
        <span>min: {min}</span>
        <span>max: {max}</span>
      </div>
    </>
  );
}


export default SelectRange;
