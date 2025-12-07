import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Image from "next/image";

function Hero() {
  return (
    <section className="space-y-4 sm:space-y-5 md:space-y-6">
      <h1 className="w-full text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Hi - Ball Switch Heater 
      </h1>
      <div className="w-full flex flex-col justify-center gap-4 md:gap-16 md:flex-row">
        <Image
          className="w-full max-w-[360px]"
          src="/Heater-1.jpg"
          alt="Hi-Ball Switch Heater"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col gap-2 justify-evenly pl-5 sm:text-lg text-base">
          <div>Burns 4 Days Without Refueling or Maintenance</div>
          <div>Made in the USA</div>
          <div>Recommended Fuel: KEROSENE ONLY</div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Exclusive Hi-Ball Features
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <ul className="flex flex-col gap-6 text-base leading-relaxed">
              <li className="border-l border-black pl-4">
                LARGE BURNER STACK welded to the body around wick and flame
                prevents flame blow-out and also prevents the tie from burning.
              </li>
              <li className="border-l border-black pl-4">
                Holes at base of the chimney supply air for efficient combustion
                and allow water drainage.
              </li>
              <li className="border-l border-black pl-4">
                Snug-fitting cap cannot be removed accidentally. Dirt and water
                cannot enter from fuel compartment.
              </li>
            </ul>
            <ul className="flex flex-col gap-6 text-base leading-relaxed">
              <li className="border-l border-black pl-4">
                CAN BE RE-FILLED while burning.
              </li>
              <li className="border-l border-black pl-4">
                Fill cap and stack cover are attached to burner to prevent loss.
              </li>
              <li className="border-l border-black pl-4">
                Replacement parts available.
              </li>
              <li className="border-l border-black pl-4">
                Wick tube prevents the wick from &quot;hanging up&quot; assuring
                maximum use of fuel and burning hours.
              </li>
            </ul>
          </div>
        </section>
  )
}

function SpareParts() {
  return (
    <section className="mt-16 space-y-6 border-t border-black pt-10 md:mt-20 md:pt-12 pb-4">
      <h2 className="text-2xl font-semibold sm:text-3xl">Spare Parts Available!</h2>
      <div className="grid grid-cols-1 gap-4 text-base leading-relaxed sm:text-lg sm:grid-cols-2">
        <div>
          <h3 className="px-4 py-3 text-lg font-semibold sm:text-2 xl">Fuel Cover</h3>  
          <Image className="px-6" src="/fuel-cover.jpg" alt="Fuel Cover" width={1000} height={1000} />
        </div>
        <div>
          <h3 className="px-4 py-3 text-lg font-semibold sm:text-2 xl">Wick Cover</h3>
          <Image className="px-6" src="/wick-cover.jpg" alt="Wick Cover" width={1000} height={1000} />
        </div>
      </div>
    </section>
  )
}

function Specs() {
  return (
    <section className="space-y-6 border-t border-black pt-10 text-base leading-relaxed sm:text-lg">
    <h2 className="text-2xl font-semibold sm:text-3xl">Specifications</h2>
    <p>
      RUGGED, ALL-WELDED CONSTRUCTION of HEAVY GAUGE STEEL, the HI-BALL
      gives almost unlimited service with almost no maintenance.
    </p>
    <p>
      The heater is 7 3/8&quot; height and 23 3/4&quot; long, 7 3/8&quot;
      wide with a three gallon fuel capacity. This provides 75 to 100
      hours of continuous burning permitting refill during daylight hours
      and full week-end protection.
    </p>
  </section>
  )
} 

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:max-w-6xl lg:max-w-6xl lg:px-8 lg:py-20 xl:max-w-7xl 2xl:max-w-7xl 2xl:py-24">
        <Hero />
        <Features />
        <SpareParts />
        <Specs />
      </main>
      <Footer />
    </div>
  )
}
