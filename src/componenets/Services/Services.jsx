import food1 from "../../assets/biryani2.png";
import food2 from "../../assets/biryani5.png";

function Services() {
  return (
    <div className="py-10  dark:bg-gray-900">
      <div className="container">
        <div
          className="text-center max-w-[400px] mx-auto"
          style={{ height: 150 }}
        >
          <p className="text-primary text-sm">Our services</p>
          <h1 className="text-3xl font-bold mb-1 dark:text-white">Services</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-14 md:gap-5">
            <div className=" max-w-[300px] dark:bg-gray-800 group min-h-[150px] mx-auto block shadow-xl dark:hover:bg-primary rounded-xl hover:bg-primary hover:text-white">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl dark:text-white">Biryani</h1>
                <p className="text-sm  text-gray-500 group-hover:text-white">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className=" max-w-[300px] dark:bg-gray-800 group min-h-[150px] mx-auto block shadow-xl dark:hover:bg-primary rounded-xl hover:bg-primary hover:text-white">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl dark:text-white">Biryani</h1>
                <p className="text-sm  text-gray-500 group-hover:text-white">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className=" max-w-[300px] dark:bg-gray-800 group min-h-[150px] mx-auto block shadow-xl dark:hover:bg-primary rounded-xl hover:bg-primary hover:text-white">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl dark:text-white">Biryani</h1>
                <p className="text-sm  text-gray-500 group-hover:text-white">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <img className="max-w-[450px] w-full mx-auto" src={food2} />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-black dark:text-white font-bold text-4xl">
                Lorem ipsum dolor
              </h1>
              <p className="text-sm  text-gray-500 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
              <p className="text-sm  text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                ab sed, exercitationem minima aliquid eligendi distinctio? Fugit
                repudiandae numquam hic quo recusandae. Excepturi totam ad nam
                velit quasi quidem aspernatur.
              </p>
              <button className="bg-gradient-to-r  from-primary to-secondary w-32 px-4 py-2 rounded-full text-white ">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
