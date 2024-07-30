import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex justify-between">
            <Link href="/impressum"><p>Impressum</p></Link>
            <div className="flex">
                <p>E-mail</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>


        </div>
    );
}