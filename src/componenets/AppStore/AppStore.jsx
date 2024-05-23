import playStore from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";
import mobileBike from "../../assets/mobile_bike.gif";

export default function AppStore() {
  return (
    <div className="p-14 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col max-w-xl gap-4">
            <h1 className="text-xl sm:text-4xl font-semibold text-gray-700 text-center sm:text-left">
              Foodly is Available for Android and IOS
            </h1>
            <div className="flex flex-wrap mt-5 justify-center sm:justify-start">
              <img
                src={appStore}
                className="max-w-[150px] sm:max-w-[110px] md:max-w-[200px]"
              />

              <img
                src={playStore}
                className="max-w-[150px] sm:max-w-[110px] md:max-w-[200px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-3">
            <img className="max-w-[300px] mx-auto" src={mobileBike} />
          </div>
        </div>
      </div>
    </div>
  );
}
