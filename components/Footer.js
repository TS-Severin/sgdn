import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex text-lg justify-between sm:text-xl">
            <Link href="/impressum" className="no-underline font-roboto-condensed font-bold text-lg sm:text-xl"><p>IMPRESSUM</p></Link>
            <div className="flex">
                <Link href="mailto:ahoj@schreibengegendienormen.de" className="font-roboto-condensed font-bold text-lg sm:text-xl no-underline pl-4"><p>E-MAIL</p></Link>
                <Link href="https://www.instagram.com/schreibengegendienormen/" className="no-underline font-roboto-condensed font-bold text-lg sm:text-xl pl-2 sm:pl-4"><p>INSTAGRAM</p></Link>
                <Link href="https://www.facebook.com/schreibengegendienormen" className="no-underline font-roboto-condensed font-bold text-lg sm:text-xl px-4"><p>FACEBOOK</p></Link>
            </div>


        </div>
    );
}