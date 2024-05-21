import bg from "../../assets/bg.png";
import food1 from "../../assets/biryani2.png";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
      className="min-h-[600px] duration-200 justify-center bg-gray-100 items-center dark:bg-gray-900  dark:text-white flex "
    >
      <div className="container p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center px-6  items-center   sm:items-start text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to the{" "}
              <span className="bg-gradient-to-r  from-primary to-secondary bg-clip-text text-transparent">
                Foodie
              </span>{" "}
              Zone{" "}
            </h1>
            <p className="mt-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              sint ex quod quos neque reprehenderit nihil suscipit iure vero
              deserunt.
            </p>
            <button className="bg-gradient-to-r  from-primary to-secondary px-4 py-2 rounded-full text-white mt-5">
              Order now
            </button>
          </div>
          <div className="flex flex-col justify-center items-center  order-1 sm:order-2 h-[300px] sm:h-[450px]">
            <img
              className="mx-auto w-[300px]  sm:w-[450px] animate-spin-slow"
              src={food1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
