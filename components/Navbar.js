import Link from "next/link";

export default function Navbar() {


    return (
        <div className="flex space-between">
            <Link href="/wir">Wir</Link>
            <Link href="/ausgaben">Veranstaltungen</Link>
        </div>

    );
}