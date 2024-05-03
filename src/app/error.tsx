"use client"
import Image from 'next/image'
// import styles from 'app/sass/error.module.sass'

export default function Error({reset}: ErrorPageProps){
    return(
        <main >
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg mb-6">Algo salio mal</p>
        <button
          onClick={() => window.history.back()}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Go Back
        </button>
      </div>
    </div>
        </main>
    )
}