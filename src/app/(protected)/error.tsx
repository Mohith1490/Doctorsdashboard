'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
 
export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (

    <div className='flex flex-col justify-center items-center gap-8 h-screen'>
        <h1 className='font-semibold text-3xl text-red-700'>Oops! Something went wrong....</h1>
      <Button
        variant='default'
        onClick={() => window.location.reload()} // Reloads the entire page 
      >
        Try again
      </Button>
    </div>
  )
}