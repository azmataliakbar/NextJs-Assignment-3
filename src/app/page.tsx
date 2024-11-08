"use client"
/* https://www.figma.com/design/1pMEY5eP6jTGfsTy9DOwwr/Whitepace---SaaS-Landing-Page?node-id=9-101&t=1XHDJ9EbgEm41o5m-1 */

import Image from "next/image";
import "./globals.css";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Section 1 */}
        <section className="w-full md:w-[1462px] h-auto md:h-[600px] bg-[#043873] text-white py-10 md:py-20 px-0 md:px-0 text-center md:text-left">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-2xl md:text-4xl font-bold transition-transform transform hover:scale-125">Get More Done with Whitespace</h1>
              <p className="text-sm md:text-base">Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.</p>
              <button className="w-[250px] md:w-[220px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-4 py-2 rounded-md flex items-center justify-center gap-2 md:gap-2 hover:bg-gray-500 font-bold ml-8 whitespace-nowrap md:ml-0">
                Try Whitepace free
                <Image
                  src="/arr1.png"
                  alt="Arrow Image"
                  width={20}
                  height={15}
                  className="mt-[2px]"
                />
              </button>
            </div>
            <div className="w-[300px] md:w-1/2 bg-[#C4DEFD] h-[200px] md:h-[350px] mt-8 md:mt-0 transition-transform transform hover:scale-110"></div>
          </div>
        </section>

        {/* Section 2 */}
<div className="w-full md:w-[1510px] h-auto md:h-[1200px] bg-white px-4 md:px-8">
  <section className="py-10 md:py-20">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 space-y-4 text-black">
        <h2 className="text-2xl md:text-4xl font-bold transition-transform transform hover:scale-110 text-left">Project <br /> Management</h2>
        <p className="text-sm md:text-base text-left">Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
        <button className="w-[180px] md:w-[200px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-2 py-2 rounded-md mt-4 flex flex-row gap-2 md:gap-4 text-white hover:bg-gray-500 font-bold justify-center items-center ml-11 md:ml-0">
          Get Started
          <Image
            src="/arr1.png"
            alt="Arrow Image"
            width={15}
            height={10}
            className="mt-[0px]"
          />
        </button>
      </div>
      <div className="w-[300px] md:w-1/2 bg-[#C4DEFD] h-[200px] md:h-[350px] mt-8 md:mt-0 transition-transform transform hover:scale-110"></div>
    </div>
  </section>

  {/* Section 3 */}
  <section className="md:w-full py-10 md:py-20 px-4 md:px-4 flex flex-col md:flex-row items-center justify-center">
    <Image
      src="/work1.png"
      alt="Slack Image"
      width={400}
      height={400}
      className="transition-transform transform hover:scale-110 md:ml-20"
    />
    <div className="max-w-4xl mx-auto text-center md:text-left text-black text-balance mt-4 md:ml-28">
      <h2 className="text-2xl md:text-4xl font-bold transition-transform transform hover:scale-110">Work Together</h2>
      <p className="text-sm md:text-base text-balance">With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
      <button className="w-[160px] md:w-[185px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-4 py-2 rounded-md mt-4 flex flex-row gap-2 md:gap-4 text-white hover:bg-gray-500 items-center justify-center ml-9 font-bold md:ml-0">
        Try it now
        <Image
          src="/arr1.png"
          alt="Arrow Image"
          width={15}
          height={10}
          className="mt-[4px]"
        />
      </button>
    </div>
  </section>
</div>


        {/* Section 4 */}
        <section className="w-full md:w-[1462px] h-auto md:h-[520px] bg-[#043873] text-white py-10 md:py-16 px-4 md:px-8 text-center md:text-left">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold transition-transform transform hover:scale-110">Use as Extension</h2>
              <p className="text-sm md:text-base">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
              <button className="w-[150px] md:w-[170px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-4 py-2 rounded-md mt-4 flex flex-row gap-2 md:gap-4 text-white hover:bg-gray-500 font-bold items-center justify-center ml-14 md:ml-0">
              Let&#39;s Go
                <Image
                  src="/arr1.png"
                  alt="Arrow Image"
                  width={15}
                  height={10}
                  className="mt-[2px]"
                />
              </button>
            </div>
            <div className="w-[300px] md:w-1/2 bg-[#C4DEFD] h-[200px] md:h-[350px] mt-8 md:mt-0  transition-transform transform hover:scale-110"></div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="w-full md:w-[1510px] h-auto md:h-[520px] bg-white py-10 md:py-16 px-0 md:px-8">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-[300px] md:w-1/2 bg-[#C4DEFD] h-[200px] md:h-[350px] transition-transform transform hover:scale-110"></div>
            <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-0 text-black pl-2">
              <h2 className="text-2xl md:text-4xl font-bold transition-transform transform hover:scale-110 text-left">Customize it to Your Needs</h2>
              <p className="text-sm md:text-base">Customize the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
              <button className="w-[150px] md:w-[170px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-2 py-2 rounded-md md:pt-2 md:pl-6 flex flex-row gap-2 md:gap-4 text-white hover:bg-gray-500 font-bold mx-auto items-center justify-center ml-16 md:ml-0">
              Let&#39;s Go
                <Image
                  src="/arr1.png"
                  alt="Arrow Image"
                  width={15}
                  height={10}
                  className="mt-[2px]"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="w-full md:w-[1462px] h-auto md:h-[450px] bg-[#043873] text-white py-10 md:py-16 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-6xl font-bold transition-transform transform hover:scale-110 mb-4 md:mb-8">Your Work, Everywhere You Are</h2>
            <p className="text-sm md:text-base">Access your notes from your computer, phone, or tablet by synchronizing with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!</p>
            <button className="w-[150px] md:w-[170px] h-[50px] md:h-[65px] bg-[#4F9CF9] px-2 py-2 rounded-md mt-4 md:mt-8 flex items-center justify-center gap-2 md:gap-4 text-white hover:bg-gray-500 font-bold ml-14 md:ml-96">
            Try Tasky
              <Image
                src="/arr1.png"
                alt="Arrow Image"
                width={15}
                height={10}
                className="mt-[4px]"
              />
            </button>
          </div>
        </section>
        {/* Section 7 */}
<section className="w-full md:w-[1510px] h-auto md:h-[450px] bg-white py-10 md:py-20 px-4 md:px-8 text-center">
  <div className="">
    <h2 className="text-4xl md:text-7xl font-bold text-black transition-transform transform hover:scale-110 mb-8 md:mb-10">Our Sponsors</h2>
    <div className="w-full md:w-[1492px] h-auto md:h-[70px] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-4 md:mt-8">
      <Image
        src="/apple1.png"
        alt="Apple Image"
        width={48}
        height={58}
        className="transition-transform transform hover:scale-125"
      />
      <Image
        src="/microsoft1.png"
        alt="Microsoft Image"
        width={150}
        height={50}
        className="transition-transform transform hover:scale-110"
      />
      <Image
        src="/slack1.png"
        alt="Slack Image"
        width={140}
        height={55}
        className="transition-transform transform hover:scale-110"
      />
      <Image
        src="/google1.png"
        alt="Google Image"
        width={120}
        height={55}
        className="transition-transform transform hover:scale-110"
      />
    </div>
  </div>
</section>


      </main>
    </div>
  );
}







