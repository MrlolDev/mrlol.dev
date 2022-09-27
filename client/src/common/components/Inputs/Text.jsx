export default function Text(props) {
  return (
    <input
      type="text"
      className="outline-none rounded p-1.5 placeholder:italic placeholder:text-slate-400 border-2 m-1 transition-all duration-200 border-solid border-gray-900 dark:bg-gray-600 hover:border-blue-900 focus:border-blue-400"
      {...props}
    ></input>
  );
}
