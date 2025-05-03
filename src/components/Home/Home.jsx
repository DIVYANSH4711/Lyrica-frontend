"use client"

import { NavLink } from "react-router-dom"

export default function Home() {
   return (
      <div className="h-full flex flex-col text-black overflow-y-auto overflow-x-hidden">
         {/* Hero */}
         <div className="relative rounded">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10">
               <span className="text-4xl flex items-baseline justify-center cinzel-bold  text-black"><div className="text-8xl text-orange-700">L</div>yrica</span>

               <p className="text-lg font-serif text-zinc-500/90 flex justify-center mb-4">
                  A personalized music recommendation system that helps you discover new songs.
               </p>
            </div>

         </div>
         {/* How It Works */}
         <div className="mb-8 px-4">
            <h2 className="text-xl font-bold font-serif mb-3">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {["Browse", "Analyze", "Recommend"].map((step, i) => (
                  <div
                     key={i}
                     className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-sm border border-white/50"
                  >
                     <div className="font-serif text-lg text-orange-700 mb-2">{i + 1}. {step}</div>
                     <p className="text-gray-700 font-mono">
                        {step === "Browse"
                           ? "Explore songs and view their details."
                           : step === "Analyze"
                              ? "We analyze the song's features and metadata."
                              : "Get a list of similar songs based on what you selected."}
                     </p>
                  </div>
               ))}

            </div>
         </div>

         {/* CTA */}
         <div className="mt-auto mb-6 px-4">
            <div className="bg-[#626F47] rounded-tr-4xl rounded-bl-4xl p-6 text-white text-center">
               <h3 className="text-lg font-semibold mb-2">Ready to explore music?</h3>
               <NavLink to={'/search'} className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-white/90 transition">
                  Try Demo
               </NavLink>
            </div>
         </div>
      </div>
   )
}
