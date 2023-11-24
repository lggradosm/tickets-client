import { useState } from "react";
import InputFile from "./InputFile";
import InputForm from "./InputForm";
import InputSelect from "./InputSelect";
import TextArea from "./TextArea";
export default function EmployeeModal({ visibility, onclick }) {
  const sendFormData = async (FormData) => {};
  const [category, setCategory] = useState("Seleccione una categoría");
  const [active, setActive] = useState(true);
  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  return (
    visibility && (
      <div className="absolute h-full w-full flex justify-center items-center left-0 top-0 bg-neutral-900/40">
        <section className=" page-section mt-4  mx-10 pb-10">
          <h2 className=" text-highlight text-2xl my-4 font-bold">
            Nuevo Proyecto
          </h2>
          <form className=" bg-highlight rounded-lg p-6 flex text-sm flex-col gap-6">
            <div className="flex gap-6">
              <div className="w-full gap-2 flex flex-col">
                <h4>Español</h4>
                <InputForm
                  name="titleEs"
                  text="Título"
                  placeholder="Título"
                  required
                />
                <InputForm
                  name="subtitleEs"
                  text="Subtítulo"
                  placeholder="Subtítulo"
                />
                <TextArea name="textEs" text="Texto" placeholder="Texto" />
              </div>
              <span className="w-[1px] bg-white/10 block" />
              <div className="w-full  gap-2 flex flex-col">
                <h4>Inglés</h4>
                <InputForm name="titleEn" text="Title" placeholder="Title" />
                <InputForm
                  name="subtitleEn"
                  text="Subtitle"
                  placeholder="Subtitle"
                />
                <TextArea name="textEn" text="Text" placeholder="Text" />
              </div>
            </div>
            <div className="w-full gap-6 flex ">
              <InputForm
                name="url"
                text="Enlace"
                placeholder="Enlace"
                required
              />
              <InputForm
                name="year"
                text="Año"
                placeholder="Año"
                type="number"
                required
              />
              <InputSelect
                selected={category}
                onClick={handleCategoryChange}
                options={["Arquitectura", "Interiorismo", "Construcción"]}
                placeholder="Seleccione una categoría"
                required
              />
            </div>
            <div className="flex gap-10">
              <div className="w-full">
                <h4 className="mb-2">Boceto</h4>
                <div className="bg-secondary rounded-lg w-full p-4">
                  <InputFile name="sketchImage" />
                </div>
                <small className="text-red-800 w-full block text-end">
                  *Requerido
                </small>
              </div>
              <div className="w-full">
                <h4 className="mb-2">Imágenes del proyecto</h4>
                <div className="bg-secondary rounded-lg w-full p-4">
                  <InputFile name="gallery" multiple />
                </div>
                <small className="text-red-800 w-full block text-end">
                  *Requerido
                </small>
              </div>
              <div className="w-full">
                <h4 className="mb-2">Imágen destacada</h4>
                <div className="bg-secondary rounded-lg w-full p-4">
                  <InputFile name="featuredImage" />
                </div>
                <small className="text-red-800 w-full block text-end">
                  *Requerido
                </small>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-full text-end">
                <button
                  type="submit"
                  className={`bg-primary h-fit ${
                    active
                      ? "hover:contrast-[90%]  active:scale-[98%]"
                      : " bg-neutral-600"
                  } p-4 px-14 rounded-lg`}
                >
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    )
  );
}
