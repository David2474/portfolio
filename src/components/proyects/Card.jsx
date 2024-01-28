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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
                consequuntur, accusamus corporis suscipit incidunt, cumque
                commodi voluptate mollitia non sapiente quam sequi quos minus
                vitae fugit! Dolores vel perferendis totam.
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
            <p className="bg-[#7E00DE] w-32 p-1 text-center text-white rounded-sm mt-8 sm:ml-3">Github</p>
          </section>
        </div>
      ))}
    </>
  );}
