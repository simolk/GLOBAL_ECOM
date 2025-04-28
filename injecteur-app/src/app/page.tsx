import Link from "next/link";
import "./globals.css";

import { Hero } from './components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
