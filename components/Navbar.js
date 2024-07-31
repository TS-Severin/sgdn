'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link";


export default function Navbar() {
    const pathname = usePathname()


    return (
        <div className="flex font-roboto text-sm space-between sm:text-lg">




            <Link href="/wir" className="text-white no-underline {`link ${pathname === '/wir' ? '!text-green' : ''}`}"><p className="px-4">WIR</p></Link>
            <Link href="/ausgaben" className="text-white no-underline"><p>VERANSTALTUNGEN</p></Link>



        </div>

    );
}


