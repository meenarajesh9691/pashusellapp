import Image from "next/image";
import styles from "./page.module.css";
import Animal_sell_ads_component from "./components/animalSellAds/page";
import ParentFilterDiv_component from "./components/layout/parentFilterDiv/page";
// import Swiper_component from "./components/layout/swiper/page";

export default function Home() {
  return (
    <>
      <main>
        <div className=" bg-slate-100 flex justify-between p-2">
          <img className="w-36" src="/animall-logo.png" alt="" />
          <button className="bg-orange-400 text-white rounded-full p-2 font-bold text-xl">
            पशु बेचे
          </button>
          <div>
            <img className="h-8" src="/user-profile-icon.svg" alt="" />
            <h1>हिंदी</h1>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <div className="flex items-center">
            <img className="h-7" src="/pin-icon.png" alt="" />
            <h6 className="text-gray-400 text-xs">Vijay Nagar Indore</h6>
          </div>

          <div className="border border-solid divide-red-400 px-4 py-2 w-28  rounded-full flex items-center justify-evenly shadow-md">
            <img className="h-5" src="/sort-icon.svg" alt="" />
            <h3>पशु छाटें</h3>
          </div>
        </div>
       <div className="flex gap-2 m-3 overflow-x-auto">
  <div className="scroll-container">
      <ParentFilterDiv_component  />
      <ParentFilterDiv_component  />
      <ParentFilterDiv_component  />
      <ParentFilterDiv_component  />
      <ParentFilterDiv_component  />
  </div>
</div>
        <Animal_sell_ads_component />

        {/* -------------card code--------------- */}
        <div className="bg-white shadow-md px-5 py-16 mx-3 rounded-2xl relative">
          <div className="bg-purple-200 w-48 absolute right-0 top-0 rounded-l-md  flex items-center justify-between p-2">
            <img className="h-5" src="/isNegotiablePurple.svg" alt="" />
            <h3>मोल भाव हो जायेगा</h3>
          </div>
          <h1 className="font-bold text-2xl">
            16 लीटर क्षमता, होल्सटीन (HF) क्रॉस गाय, ₹60,000
          </h1>
          <div className="flex items-center justify-start py-2 gap-2">
            <img className="h-5" src="/clock.png" alt="" />
            <h6>1 घंटे पहले |</h6>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img className="h-5" src="/location.png" alt="" />
            <h6>
              Bhadbhada Road ( लगभग
              <span className="font-extrabold">10 कि.मी.</span>)
            </h6>
          </div>
          <div className="bg-slate-400 w-full h-80 rounded-2xl my-3"></div>
          <h2 className="text-gray-500 text-lg">
            ये होल्सटीन फ्रीसिएन (HF) क्रॉस गाय 6 साल का है।ये तीसरा ब्यात में
            है और अभी 14 लीटर दूध देती है।
          </h2>
          <div className="bg-gray-300 absolute w-full left-0 bottom-0 flex items-center justify-between rounded-2xl p-1">
            <div className="flex items-center justify-evenly w-40 ">
              <img className="h-10" src="/farmer.png" alt="" />
              <h1>Rajesh जी</h1>
            </div>
            <div className="flex items-center justify-evenly w-40">
              <button className="bg-blue-500 p-3 text-white rounded-lg flex items-center justify-evenly w-28">
                <img src="/telephone.png" alt="" />
                कॉल
              </button>
              <img className="h-14" src="/whatsapp-card.png" alt="" />
            </div>
          </div>
        </div>
        <div className="bg-black w-50 h-50"></div>
      </main>
    </>
  );
}
