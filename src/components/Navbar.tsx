function Navbar() {
  return (
    <div className="md:flex hidden px-10  py-4  w-[90%]  justify-between">
      <div>logo</div>
      <div className="flex ">
        <ul className="flex gap-4">
          {["home", "home", "home", "home"].map((item, index) => (
            <li
              key={index}
              className="border-2 border-gray-400 px-10 py-2 capitalize rounded-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
