import '../styles/global.css'
import Link from 'next/link'

function App({ Component, pageProps }) {
    return (
        <div>
            <nav className="border-b p-6">
                <p className="text-4xl font-bold">MetaMask Marketplace</p>
                <div className="flex mt-4">
                    <Link href="/">
                        <a href="/" className="mr-4 text-pink-500">Home</a>
                    </Link>
                    <Link href="/create-item">
                        <a href="/create-item" className="mr-4 text-pink-500">Create Asset</a>
                    </Link>
                    <Link href="/my-assets">
                        <a href="/my-assets" className="mr-4 text-pink-500">My Asset</a>
                    </Link>
                    <Link href="/dashboard">
                        <a href="/dashboard" className="mr-4 text-pink-500">Dashboard</a>
                    </Link>
                </div>    
            </nav>
            <Component {...pageProps}/>
        </div>
    );
}

export default App;