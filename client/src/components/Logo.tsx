import logo from "../assets/logo.png"
export default function Logo() {
  return (
    <div className="flex items-center justify-center mt-[50px]">
      <img className="w-[50px] lg:w-[100px]" src={logo} alt="Logo" />
      <p className="text-[20px] lg:text-4xl font-black ml-5 lg:ml-10">BooksLending</p>
    </div>
  )
}
