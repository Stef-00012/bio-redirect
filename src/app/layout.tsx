import Script from "next/script";

import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import { baseUrl } from "@/data/constants";

import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	authors: [
		{
			name: "Stefano Del Prete",
		},
	],
	title: "My own bio :) - Stefano Del Prete | Home Page",
	description: "Here are listed most of my socials (if not all) :)",
	openGraph: {
		title: "My own bio :) - Stefano Del Prete | Home Page",
		type: "website",
		url: "https://stefdp.com",
		description: "Here are listed most of my socials (if not all) :)",
		images: "/images/pfp.webp",
	},
	verification: {
		me: "https://mastodon.social/@Stef_DP",
	},
	keywords: ["Stef", "Stef_DP", "Stefano Del Prete", "Del Prete"],
	twitter: {
		title: "My own bio :) - Stefano Del Prete | Home Page",
		description: "Here are listed most of my socials (if not all) :)",
	},
	icons: null,
};

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#629D6D",
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="me" href="https://mastodon.social/@Stef_DP" />
				
				<script 
					defer
					src="https://umami.stefdp.com/data.js" data-website-id="b6b98e07-7281-4a22-b639-926024968a05"
				/>

				<Script async src="https://www.googletagmanager.com/gtag/__js?id=G-002L9WP8JT" />
				<Script id="google-tag-verification">
					{"window.dataLayer = window.dataLayer || [];"}{"\n"}
					{"function gtag(){dataLayer.push(arguments);}"}{"\n"}
					{"gtag('js', new Date());"}{"\n"}
					{""}{"\n"}
					{"gtag('config', 'G-002L9WP8JT');"}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
