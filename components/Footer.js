import Link from "next/link";

const options = {
    renderNode: {
        'hyperlink': (node, children) => {
            return (
                <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        },
    },
};

export default function Footer() {
    return (
        <div className="flex pt-4 text-lg justify-between sm:text-xl">
            <Link href="/impressum" className="no-underline font-roboto-condensed font-bold text-sm sm:text-xl"><p>IMPRESSUM</p></Link>
            <div className="flex">
                <Link href="mailto:ahoj@schreibengegendienormen.de" className="font-roboto-condensed font-bold text-sm sm:text-xl no-underline pl-4"><p>E-MAIL</p></Link>
                <Link href="https://www.instagram.com/schreibengegendienormen/" className="no-underline font-roboto-condensed font-bold text-sm sm:text-xl pl-2 sm:pl-4"><p>INSTAGRAM</p></Link>
                <Link href="https://www.facebook.com/schreibengegendienormen" className="no-underline font-roboto-condensed font-bold text-sm sm:text-xl px-4"><p>FACEBOOK</p></Link>
            </div>


        </div>
    );
}