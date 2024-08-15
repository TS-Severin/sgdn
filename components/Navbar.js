'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";


export default function Navbar() {
    const pathname = usePathname()




    return (
        <div className="flex font-roboto-condensed font-bold text-lg space-between sm:text-xl">




            <Link href="/wir" className={`link ${pathname === '/wir' ? 'active' : ''} no-underline text-white px-4`}><p>WIR</p></Link>
            <Link href="/ausgaben" className={`link ${pathname === '/ausgaben' ? 'active' : ''} no-underline text-white`}><p>VERANSTALTUNGEN</p></Link>



        </div >

    );
}


