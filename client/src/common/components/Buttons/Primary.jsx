export default function Primary(props) {
  return (
    <button
      className="py-1 px-4 bg-blue-500 border-[1] border-solid border-white text-white rounded transition-all delay-100 duration-200 outline-none hover:bg-blue-600 hover:delay-200 active:scale-[.95]"
      {...props}
    >
      {props.children}
    </button>
  );
}
