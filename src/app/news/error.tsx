'use client'

import { Button } from "@/components/ui/button"

export default function ErrorBoundary( { error , reset} : {error: Error, reset: () => void}) {
    return (
        <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <p>Try refreshing the page</p>
        <Button onClick={reset}>Refresh</Button>
        </div>
    )
}