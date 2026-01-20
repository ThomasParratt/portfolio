import useState from 'react'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)


    function onSubmit(e) {
        e.preventDefault()
        // For a real site: send to serverless function / form backend
        console.log('send', {email, message})
        setSent(true)
    }


    return (
        <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto px-6">
                <h2 className="text-2xl font-bold">Contact</h2>
                {sent ? (
                    <div className="mt-4 text-green-600">Thanks — I will get back to you soon.</div>
                ) : (
                    <form className="mt-4 flex flex-col gap-3" onSubmit={onSubmit}>
                        <input required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" className="px-4 py-2 border rounded" />
                        <textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" className="px-4 py-2 border rounded h-32" />
                        <button className="w-max px-4 py-2 bg-gray-900 text-white rounded">Send</button>
                    </form>
                )}
            </div>
        </section>
    )
}