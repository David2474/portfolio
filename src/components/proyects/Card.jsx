import proyects from "./poryectList"
// import LinkUi from "./LinkUi"


export default function Card() {
  return (
    <>
      {proyects.map((proyect) => (
        <div
          key={proyect.id}
          className="p-4 mb-20 w-12/12 sm:w-9/12 rounded flex flex-col"
        >
          <section className="flex sm:p-4 mb-6 sm:mb-0 w-full">
            <div className="h-5/6 my-1">
              <p className="text-[22px] mb-3 text-[#7E00DE]">
                {proyect.name}
              </p>
              <p className="text-[16px] text-white ">
                {proyect.description}
              </p>
            </div>
          </section>

          <section className="h-full  w-full flex justify-center items-center">
            <img
              className="w-[100%] sm:w-11/12 h-[250px] sm:h-[420px] rounded-lg bg-contain"
              src={proyect.imageUrl}
              alt="imagen del proyecto"
            />
          </section>

          <section className="">
            <p className="bg-[#7E00DE] hover:bg-[#6200AD] w-32 p-2 text-center text-white rounded-sm mt-6 sm:ml-3">
              <a 
                href={proyect.link}
                >
                  Github
                </a>
            </p>
          </section>
        </div>
      ))}
    </>
  );}
