import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex text-[0.7rem] justify-between sm:text-lg">
            <Link href="/impressum" className=" no-underline"><p>IMPRESSUM</p></Link>
            <div className="flex">
                <Link href="mailto:ahoj@schreibengegendienormen.de" className="no-underline pl-4"><p>E-MAIL</p></Link>
                <Link href="https://www.instagram.com/schreibengegendienormen/" className="no-underline pl-2 sm:pl-4"><p>INSTAGRAM</p></Link>
                <Link href="https://www.facebook.com/schreibengegendienormen" className="no-underline  px-4"><p>FACEBOOK</p></Link>
            </div>


        </div>
    );
}