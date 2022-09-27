export default function Password(props) {
  return (
    <input
      type="password"
      className="outline-none rounded placeholder:italic placeholder:text-slate-400 p-1.5 border-2 m-1 transition-all duration-200 border-solid border-gray-900 dark:bg-gray-600 hover:border-blue-900 focus:border-blue-400"
      {...props}
    ></input>
  );
}
