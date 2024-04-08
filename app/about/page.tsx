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
				<div className="text-center max-w-prose">
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
					<h1 className="text-4xl lg:text-5xl text-white font-bold mt-8 mb-4">
						Laura Sudupe, PhD.
					</h1>
					<p className="text-zinc-400 text-lg leading-relaxed">
						Bioinformatics professional deeply engaged in exploring spatial transcriptomics and omic data to advance our understanding of critical health issues like bone marrow cancer and heart diseases.
					</p>
					<p className="text-zinc-400 text-lg leading-relaxed mt-4">
						Proficient in statistical methods and computational techniques to complex biological data to gain insights into complex diseases. Extensive academical journey enabling a broad spectrum of analytical tools, to tackle multifaceted research questions. I am particularly passionate about leveraging my interdisciplinary knowledge to uncover new insights into disease mechanisms. Committed to collaborative research, I strive to synthesize and communicate scientific findings effectively, aiming to contribute to groundbreaking discoveries in biomedical research.
					</p>
					<p className="text-zinc-400 text-lg leading-relaxed mt-4">
						With a Bachelor's degree in Chemistry, I transitioned to Bioinformatics during my Master's degree, and later pursued a PhD in Biosciences.
					</p>
					<p className="text-zinc-400 text-lg leading-relaxed mt-4">
						Keeping up with the current trends in research, I also hold a Master's degree in Artificial Intelligence, which has allowed me to develop a strong foundation in data analysis and machine learning techniques.
					</p>
					<p className="text-zinc-400 text-lg leading-relaxed mt-4">
						My current research focuses on the integration of spatial transcriptomics and single-cell RNA sequencing data to understand the cellular composition of the bone marrow niche in multiple myeloma.
					</p>
					<p className="text-zinc-400 text-lg leading-relaxed mt-4">
						If you'd like to know more, feel free to keep in touch!
					</p>
				</div>
			</div>
		</div>
	);
}
