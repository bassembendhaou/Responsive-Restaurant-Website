import food1 from "../../assets/biryani2.png";

function Services() {
  return (
    <div className="py-10">
      <div className="container">
        <div
          className="text-center max-w-[400px] mx-auto"
          style={{ height: 150 }}
        >
          <p className="text-primary text-sm">Our services</p>
          <h1 className="text-3xl font-bold mb-1">Services</h1>
          <p className="text-xs text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
            nesciunt explicabo a! Laborum delectus aliquam labore, earum rerum
            quam! Nulla?
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-14">
            <div className="max-w-[300px] min-h-[150px] mx-auto block shadow-xl rounded-xl">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl">Biryani</h1>
                <p className="text-sm  text-gray-500">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="max-w-[300px] mx-auto block shadow-xl rounded-xl">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl">Biryani</h1>
                <p className="text-sm  text-gray-500">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="max-w-[300px] mx-auto block shadow-xl rounded-xl">
              <div className="h-[100px]">
                <img
                  className="max-w-[200px] transform -translate-y-14 mx-auto"
                  src={food1}
                />
              </div>
              <div className="p-4 text-center">
                <h1 className="font-bold text-2xl">Biryani</h1>
                <p className="text-sm  text-gray-500">
                  Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit
                  amet ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
