import { getArticle, getLandingpage } from "@/lib/api";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const slug = searchParams.get("slug");
    const type = searchParams.get("type");

    if (!secret || !slug || !type) {
        return new Response("Missing parameters", { status: 400 });
    }

    if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
        return new Response("Invalid token", { status: 401 });
    }

    let content;
    if (type === "article") {
        content = await getArticle(slug);
    } else if (type === "landingpage") {
        content = await getLandingpage(slug);
    } else {
        return new Response("Invalid content type", { status: 400 });
    }

    if (!content) {
        return new Response(`${type} not found`, { status: 404 });
    }

    draftMode().enable();
    redirect(`/${type}s/${content.slug}`);
}