const SearchInput = () => {
  return (
    <div className="rounded-full lg:mr-6 xl:ml-8 lg:bg-[#ECECEC] lg:w-[217px] 2xl:w-[350px] max-w-[350px] mx-3 lg:space-x-0 lg:pl-[18px] py-1.5 flex items-center ">
      <span className="material-symbols-outlined">search</span>
      <input type="text" placeholder="Search Dzneer" className=" bg-[#ECECEC] focus:outline-none w-[80%] hidden lg:block" />
    </div>
  );
};

export default SearchInput;
