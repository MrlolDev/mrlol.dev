export default function TopBar(props) {
  return (
    <nav
      id={props.id}
      className="flex flex-row items-center justify-between p-1.5 px-2.5 
    shadow-[0_4px_30px_rgba(0,0,0,0.3)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.3)] dark:bg-gray-700/[.5]
     bg-white/[.4] rounded-xl backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.5)] 
     dark:border-[rgba(0,0,0,0.5)] select-none cursor-pointer w-full"
    >
      <p>{props.title}</p>
      <ul className="flex flex-row items-center gap-2">
        <i className="fa-solid fa-minus cursor-pointer text-white/[.6] transition-all duration-300 hover:text-white"></i>
        <i className="fa-regular fa-window-maximize cursor-pointer text-white/[.6] transition-all duration-300 hover:text-white"></i>
        <i className="fa-solid fa-xmark cursor-pointer text-white/[.6] transition-all duration-300 hover:text-white"></i>
      </ul>
    </nav>
  );
}
