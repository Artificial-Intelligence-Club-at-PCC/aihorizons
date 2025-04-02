"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto p-4">
      <Button 
        onClick={() => setIsOpen(prev => !prev)} 
        className="w-full flex justify-between items-center p-3 bg-blue-500 text-white rounded-lg">
        {isOpen ? "Hide" : "Show"} Text
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {isOpen && (
        <Card className="mt-4">
          <CardContent className="p-4">
            {Children}
          </CardContent>
        </Card>
      )}
    </div>
  );
}