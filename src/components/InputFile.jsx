import { useRef } from "react";

export default function InputFile({ multiple = false, name }) {
  const inputRef = useRef(null);
  const clickHandler = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
    console.log("open");
  };

  const closeHandler = () => {
    console.log(inputRef?.current?.files);
  };

  const dropHanlder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Object.keys(e.dataTransfer.files).forEach((item) => {
      const file = e.dataTransfer.files[item];
      if (file.type === "image/jpeg" || file.type === "image/png") {
        console.log("-");
      }
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className="select-none rounded-lg border-neutral-600 p-6 border-[1px] border-dashed flex justify-center items-center gap-4"
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={dropHanlder}
    >
      <div
        className="bg-highlight w-fit p-4 rounded-lg px-10 cursor-pointer hover:contrast-[95%] duration-200 active:scale-95"
        onClick={clickHandler}
      >
        Subir archivo
      </div>
      <p>ó suelta aquí el archivo.</p>
      <input
        name={name}
        ref={inputRef}
        className="hidden"
        type="file"
        multiple={multiple}
        onChange={closeHandler}
        accept="image/png, image/jpeg"
      />
    </div>
  );
}
