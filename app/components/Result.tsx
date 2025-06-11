'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const ResultPage = () => {
    const searchParams = useSearchParams();
    const [result, setResult] = useState<string | null>(null);

    useEffect(() => {
        const data = searchParams.get('data');
        if(data){
            try {
                const parsed = JSON.parse(decodeURIComponent(data));
                setResult(parsed);
            } catch(error) {
                console.log(error);
            }
        }
    }, [searchParams]);

    return (
        <div className='p-10'>
            {result && (
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: result }} />
            )}
        </div>
    );
};

export default ResultPage;
