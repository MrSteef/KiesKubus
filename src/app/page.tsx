'use client'

import Link from 'next/link'
import Cube from '../components/cube'

export default function Home() {
  return (
    <>
      <div className="w-full aspect-[4/1] bg-hero-banner bg-cover flex flex-col md:flex-row items-center justify-around text-white">
        <div className="drop-shadow-2xl">
          <h1 className="text-6xl">De KiesKubus</h1>
          <h2 className="text-2xl">Omdat jouw stem niet in een hokje past</h2>
        </div>
        <article className="bg-white px-12 py-4 text-black rounded-2xl">
          <Cube />
          <div>
            <Link href="/vragenlijst">Test jouw politieke voorkeur!</Link>
          </div>
        </article>
      </div>
    </>
  );
}