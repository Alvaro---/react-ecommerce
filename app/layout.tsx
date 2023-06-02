"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import '../styles/global.css'

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es'>
			<head>
				<title>Test</title>
			</head>
			<body>
				<ChakraProvider>
					<Navbar />
					{children}
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}
