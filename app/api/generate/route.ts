// app/api/generate/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Ubah di sini: Ambil properti 'prompt' (atau nama lain yang sesuai)
    const { prompt } = await req.json();

    // Validasi jika prompt tidak ada
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt tidak boleh kosong." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 2. Gunakan variabel 'prompt' yang sudah benar isinya
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();

    return NextResponse.json({ output });
  } catch (error: any) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      { error: "Gagal membuat cerita. Silakan coba lagi." },
      { status: 500 }
    );
  }
}