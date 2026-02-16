import poo from '../assets/poo.png'

export default function Jacob() {
    return (
        <section className="pt-12 pb-12 relative mt-8">
            <div className="max-w-4xl mx-auto px-6 space-y-6">
                <h2 className="text-2xl font-extrabold">JACOB'S STUFF</h2>
                <article
                    className="relative min-h-[500px] md:min-h-[400px] border-2 border-orange-600 rounded-2xl p-4 shadow-xl transition bg-amber-100"
                >
                    <div>
                        <img
                                                        src={poo}
                                                        alt="poo"
                                                        className=""
                                                    />
                    </div>
                </article>
            </div>
        </section>
    )
}