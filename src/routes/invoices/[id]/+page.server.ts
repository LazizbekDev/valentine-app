import { error } from "@sveltejs/kit";

export function load ({params}: {params: Record<string, string>}) {
    if (params.id) return { id: params.id }

    throw error(404, "Invoice not found");
}