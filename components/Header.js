import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";


export default function Header() {
    return (
        <div
            className="flex justify-between"
        >
            <Link href="/">
                <Image
                    src="/sgdn-logo.png"
                    alt="Schreiben gegen die Normen-Logo"
                    className="h-8 rounded-lg sm:h-12 w-auto transition-all duration-500 ease-in-out"
                    width={128}
                    height={128}
                />
            </Link>


            <nav className="flex">

                <Navbar />


            </nav>



        </div>


    );
}