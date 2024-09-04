// app/fonts.ts
import { Rubik, Poppins, Fira_Mono, Nunito } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-poppins',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-nunito',
})

const firecode = Fira_Mono({
  subsets: ['latin'],
  weight: ["500"],
  variable: '--font-firecode',
})

export const fonts = {
  rubik, poppins, firecode, nunito
}