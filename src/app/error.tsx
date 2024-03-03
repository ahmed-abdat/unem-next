"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: any;
  reset: () => void;
}) {
  return (
    <div>
      <h1> Error Occurent </h1>
      <p> {error} </p>
      <Button onClick={reset}> Try Again </Button>
    </div>
  );
}
