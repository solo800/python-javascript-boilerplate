import { useState } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const testBackendConnection = async () => {
        try {
            const response = await fetch('/api/api-test')
            if (response.ok) {
                const result = await response.json()
                setData(result)
                setError(null)
                console.log('Backend connected successfully:', result)
            } else {
                setError(`HTTP ${response.status}: ${response.statusText}`)
                setData(null)
            }
        } catch (err) {
            setError(`Connection failed: ${err.message}`)
            setData(null)
            console.error('Backend connection failed:', err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-2xl space-y-8">
                <h1 className="text-4xl font-bold text-center text-gray-900">
                    Adam's Python/Javascript Boilerplate Project
                </h1>

                <div className="flex justify-center">
                    <button
                        onClick={testBackendConnection}
                        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Test Backend
                    </button>
                </div>

                {data && (
                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                            ✅ Success! Backend Response:
                        </h3>
                        <pre className="text-sm text-green-700 bg-green-100 p-3 rounded overflow-x-auto">
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    </div>
                )}

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">
                            ❌ Error:
                        </h3>
                        <p className="text-red-700">{error}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default App