import Image from 'next/image';
import Link from 'next/link';
import Navbar from "../components/Navbar";


export default function Header() {
    return (
        <div
            className="flex justify-between mb-4"
        >
            <Link href="/">
                <Image
                    src="/sgdn-logo.png"
                    alt="Schreiben gegen die Normen-Logo"
                    className="h-auto rounded-lg sm:h-20 w-full transition-all duration-500 ease-in-out"
                    layoout="intrinsic"
                    width={256}
                    height={256}
                />
            </Link>


            <nav className="flex">

                <Navbar />


            </nav>



        </div>


    );
}