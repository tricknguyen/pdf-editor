'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TextIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Page() {
    function ArrowLeftIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
            </svg>
        )
    }


    function HighlighterIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m9 11-6 6v3h9l3-3" />
                <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
            </svg>
        )
    }


    function NavigationIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
        )
    }


    function ShapesIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <circle cx="17.5" cy="17.5" r="3.5" />
            </svg>
        )
    }


    function TextIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M17 6.1H3" />
                <path d="M21 12.1H3" />
                <path d="M15.1 18H3" />
            </svg>
        )
    }


    function UnderlineIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                <line x1="4" x2="20" y1="20" y2="20" />
            </svg>
        )
    }


    function ZoomInIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                <line x1="11" x2="11" y1="8" y2="14" />
                <line x1="8" x2="14" y1="11" y2="11" />
            </svg>
        )
    }


    function ZoomOutIcon(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
                <line x1="8" x2="14" y1="11" y2="11" />
            </svg>
        )
    }


    return (
        <div className="flex flex-col h-screen bg-gray-100">
            <div className="flex justify-start items-center p-4 border-b border-gray-200 bg-white">
                <h1 className="text-2xl font-semibold">PDF Editor</h1>
            </div>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-grow flex flex-col items-center justify-center p-4">
                    <Card className="w-full h-full overflow-auto">
                        <CardContent>
                            <Image alt="PDF document" className="w-full h-full object-contain" height="800" src="/placeholder.svg" width="600" style={{aspectRatio: "600/800", objectFit: "cover",}}/>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col flex-shrink-0 w-1/4 justify-between p-4 border-l border-gray-200 bg-white">
                    <div className="flex flex-col gap-4">
                        <Button size="lg" variant="outline">
                            <TextIcon className="w-4 h-4" />
                            Add text
                        </Button>
                        <Button size="lg" variant="outline">
                            <HighlighterIcon className="w-4 h-4" />
                            Highlight
                        </Button>
                        <Button size="lg" variant="outline">
                            <UnderlineIcon className="w-4 h-4" />
                            Underline
                        </Button>
                        <Button size="lg" variant="outline">
                            <ShapesIcon className="w-4 h-4" />
                            Draw shapes
                        </Button>
                        <Button size="lg" variant="outline">
                            <ZoomInIcon className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            <ZoomOutIcon className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            <ArrowLeftIcon className="w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            <NavigationIcon className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}