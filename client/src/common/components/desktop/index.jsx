export default function Desktop() {
  return (
    <ul className="list-none absolute top-10 left-2/4 w-10/12 translate-x-[-50%] grid grid-rows-4 gap-1">
      <li
        className="cursor-pointer select-none flex items-center flex-col w-fit p-4 
      open:bg-blue-500/[.15] open:border-[1px] open:border-solid border-blue-600"
        id="app"
        onClick={() => {
          var app = document.getElementById("app");
          var open = app.attributes.open;
          if (open) {
            app.removeAttribute("open");
          } else {
            app.setAttribute("open", "true");
          }
        }}
      >
        <img src="/gem.svg" className="w-16  h-16" draggable="false" />
        <p>app</p>
      </li>
      <li
        className="cursor-pointer select-none flex items-center flex-col w-fit p-4 
        hover:bg-blue-300/[.15] hover:border-[1px] hover:border-solid hover:border-blue-400
      open:bg-blue-500/[.15] open:border-[1px] open:border-solid open:border-blue-600"
        id="app1"
        onClick={() => {
          var app = document.getElementById("app1");
          var open = app.attributes.open;
          if (open) {
            app.removeAttribute("open");
          } else {
            app.setAttribute("open", "true");
          }
        }}
      >
        <img src="/gem.svg" className="w-16  h-16" draggable="false" />
        <p>app</p>
      </li>
    </ul>
  );
}
