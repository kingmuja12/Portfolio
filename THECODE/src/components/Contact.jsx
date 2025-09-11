import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact(){
  return (
    <div className="glass rounded-2xl p-6 border border-white/6 text-center">
      <h2 className="text-2xl font-bold mb-3">Let's Connect</h2>
      <p className="text-gray-300 mb-4">Ready to build the future together? Let's discuss how AI and technology can solve real-world problems.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="mailto:abdulmujeeba@mun.ca" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-tr from-brand1 to-brand2 text-black font-semibold"> <Mail /> abdulmujeeba@mun.ca</a>
        <a href="tel:+17096853386" className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/5"> <Phone /> (709) 685-3386</a>
      </div>
      <div className="mt-3 text-sm text-gray-400 flex items-center justify-center gap-2"><MapPin /> St. John's, Newfoundland and Labrador, Canada</div>
    </div>
  )
}
