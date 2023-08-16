import { NextResponse} from "next/server";

import {Flight} from "../../../services";

export async function POST(request) {
    const { query } = await request.json();

    const flightService = new Flight();

    const searchSuggestions = await flightService.querySearch(query);

    if (!searchSuggestions) {
        return new Response('Bad request');
    }

    return NextResponse.json(searchSuggestions);
}
