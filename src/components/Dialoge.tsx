import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import React from "react";

export default function Dialoge({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full min-h-[60dvh] max-h-[90dvh] place-items-center pr-4">
        {children}
      </DialogContent>
    </Dialog>
  );
}
