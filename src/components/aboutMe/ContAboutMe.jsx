import Description from "./Description"
import Button from "./Button"
import Img from "./Img"

export default function ContAboutMe() {
  return (
    <>
        <div className="flex flex-col justify-center sm:w-3/5 w-12/12 h-[440px] px-5 sm:px-8">
          <h1 className="text-[26px] mb-4 text-[#7E00DE]">Sobre mi</h1>
          <Description />
          <div className="sm:self-end self-start sm:mx-5">
            <Button />
          </div>
        </div>
        <div className="hidden sm:flex w-2/5 h-[400px] items-center justify-center text-black">
            <Img/>
        </div>
    </>
  )
}
