import Image from 'next/image';
import { Navigation } from "../components/nav";
import Particles from "@/app/components/particles";
import React from "react";

export default function About() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<div className="flex flex-col items-center justify-center min-h-screen px-4">
				<div className="text-center">

					<div
						className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
						<div className="inline-block rounded-full overflow-hidden">
							<Image
								src="/laura.png"
								alt="Laura Sudupe"
								width={500}
								height={500}
								layout="intrinsic"
								unoptimized={true}
								className="rounded-full"
							/>

						</div>
						<div className="mt-8">
							<h1 className="text-4xl lg:text-5xl text-white font-bold mb-4">
								Laura Sudupe, PhD.
							</h1>
						</div>
					</div>
					<p className="text-zinc-400 mx-auto text-lg leading-relaxed max-w-prose">
						Laura Sudupe is a bioinformatics professional with solid experience in genomics data
						analysis, machine learning, and scientific research. She is dedicated to advancing the
						field of bioinformatics and empowering others with the tools and knowledge to explore
						the vast data in biology.
					</p>
				</div>
			</div>
		</div>
	);
}
