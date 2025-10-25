"use client";
import Counter from "../components/Counter";

export default function HomePage() {
    return (
        <main style={{textAlign: "center", padding: "2rem"}}>
            <h1>Next.js Button Counter</h1>
            <section style={{ marginTop: "2rem"}}>
                <h2>Default Counter</h2>
                <Counter />
                <h2 style={{marginTop: "2rem"}}>Custom Counter</h2>
                <Counter initialCount={5} initialStep={2} />
            </section>
        </main>
            
    );
}