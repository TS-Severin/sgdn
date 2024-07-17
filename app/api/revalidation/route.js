import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request) {
    const requestHeaders = new Headers(request.headers);
    const secret = requestHeaders.get('x-vercel-reval-key');


    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidateTag('knowledgeArticle');
    revalidateTag('landingPage');

    return NextResponse.json({ revalidated: true, now: Date.now() });
}

export async function GET() {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}