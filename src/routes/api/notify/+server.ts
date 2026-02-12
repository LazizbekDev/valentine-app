import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const { message } = await request.json();
    
    const BOT_TOKEN = '7966131648:AAFJiXaTmgsdgQfjN82VHhlKkAENeo3xIjM';
    const CHAT_ID = '1622899126';
    const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
        await fetch(TELEGRAM_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        return json({ success: true });
    } catch (err) {
        return json({ success: false }, { status: 500 });
    }
}