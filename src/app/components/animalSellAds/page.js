function Animal_sell_ads_component() {
  return (
    <div className="mt-5 p-2 border rounded-xl max-h-40 shadow-md my-4">
      <div className="flex items-center justify-center bg-teal-700 rounded-xl p-1 w-full h-full overflow-hidden">
        <div className="grid  grid-cols-2 items-center">
          <div className="col-span-1 text-left ">
            <h1 className="font-extrabold text-xl text-white">
              जल्दी से अपना पशु बेचे
            </h1>
            <button className="mt-5 text-xl flex items-center gap-2 bg-teal-500 p-2 rounded-lg text-white border border-white font-extrabold">
              <img src="/message-icon.png" alt="" />
              पशु बेचे
            </button>
          </div>
          <div className="col-span-1 max-h-full ">
            <img
              className="max-h-40 rounded-lg"
              src="https://www.shutterstock.com/shutterstock/photos/1887231193/display_1500/stock-photo-mature-cow-black-and-white-curious-gentle-surprised-look-in-a-green-field-blue-sky-1887231193.jpg"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animal_sell_ads_component;
