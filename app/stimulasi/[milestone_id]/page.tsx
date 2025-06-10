// app/stimulasi/[milestone_id]/page.tsx

// TIDAK ADA 'use client'
// TIDAK ADA 'async'
// TIDAK ADA LOGIKA LAIN, HANYA INI

export default function MinimalStimulasiPage({ params }: { params: { milestone_id: string } }) {
    return (
        <div>
            <h1>Halaman Tes Minimal</h1>
            <p>ID Milestone yang diminta adalah: {params.milestone_id}</p>
        </div>
    );
}