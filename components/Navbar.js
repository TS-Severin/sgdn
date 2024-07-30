import Link from "next/link";

export default function Navbar() {


    return (
        <div className="flex font-roboto text-sm space-between">
            <Link href="/wir" className="text-white no-underline"><p className="px-4">WIR</p></Link>
            <Link href="/ausgaben" className="text-white no-underline"><p>VERANSTALTUNGEN</p></Link>
        </div>

    );
}