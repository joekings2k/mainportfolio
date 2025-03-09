import Tooltip from "./tooltip"


const Playground = () => {
  return (
    <div className="w-full h-screen p-10">
      <div>
        <Tooltip text="its a fuckiing button twat">
          <button className="p-5 bg-blue-700 rounded-xl shadow-md shadow-white absolute top-full whitespace-nowrap">
            show more
          </button>
        </Tooltip>
      </div>
    </div>
  );
}

export default Playground