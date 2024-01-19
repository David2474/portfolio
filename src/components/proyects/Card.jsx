import proyects from "./poryectList"
import LinkUi from "./LinkUi"


export default function Card() {
  return (
    <>
      {proyects.map((proyect) => (
        <div
          key={proyect.id}
          className="border-2 border-black bg-white my-4 w-9/12 h-[350px] rounded flex justify-between"
        >
          <section className="h-full ml-4 w-5/12 flex justify-center items-center">
            <img
              className="w-11/12 h-5/6 rounded-lg object-cover"
              src={proyect.imageUrl}
              alt="imagen del proyecto"
            />
          </section>
          <section className="flex flex-col w-7/12 h-full p-4">
            <div className="h-5/6 my-1">
                <p className="text-[26px] text-center">{proyect.name}</p>
                <p className="text-[18px]">Lo que me dejo el proyecto</p>
                <ol className="list-disc ml-4">
                  <li>{proyect.oneList}</li>
                  <li>{proyect.twoList}</li>
                  <li>{proyect.threeList}</li>
                </ol>
            </div>
            <div className="self-end h-1/6 px-4">
                <a className="flex justify-center items-center" href={proyect.link}>
                  {<LinkUi />}
                </a>
            </div>
          </section>
        </div>
      ))}
    </>
)}
