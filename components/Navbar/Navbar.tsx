import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { redirect } from 'next/dist/server/api-utils'


interface Link {
  href: string
  label: string
}


const Navbar: FC = () => (
  <div style={{}} className={s.testy}>
    Testy
  </div>
)

export default Navbar