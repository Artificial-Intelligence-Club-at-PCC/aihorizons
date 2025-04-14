"use client";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Dropdown({children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <Button 
        onClick={() => setIsOpen(prev => !prev)} 
        className="w-full flex justify-between items-center p-3 bg-[whitesmoke] text-black rounded-lg">
        {isOpen ? "Hide" : "Show"} Guest Speaker Description
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </Button>
      {isOpen && (
        <Card>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      )}
    </div>
  );
}