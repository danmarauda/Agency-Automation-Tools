import Image from 'next/image';
import Navbar from '@/components/global/navbar';
import { BentoGridSecondDemo } from '@/components/global/bentoGrid';

import Button from '@/components/global/ui/button';
import { CardHoverEffectDemo } from '@/components/global/cardGrid';
import { InfiniteMovingCards } from '@/components/global/infiniteMovingCards';
import { clients } from '@/lib/constants';

export default function Home() {
	return (
		<main>
			<Navbar />
			<section className="relative p-2 md:p-10 mt-24">
				<h1 className="text-center text-3xl md:text-5xl lg:text-9xl font-bold mt-24 dark:text-neutral-50">
					ZENCY-AGENCY MANAGEMENT
				</h1>
				<p className="text-center text-neutral-600 m-2 md:text-xl md:m-6 lg:mb-24 dark:text-neutral-400">
					Manage all your agency work in one place. With absolute Automation
				</p>
				<Button text={"GET STARTED"} />
				<BentoGridSecondDemo />
			</section>

	

			<section className="flex justify-center">
				<InfiniteMovingCards className="md:mt-[15rem] mt-[4rem]"
					items={clients}
					direction="right"
					speed="slow" />
			</section>


			<section>

			<h1 className="text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 bg-opacity-50 mt-44 mb-12">
				AUTOMATION  <br/> &quot;Trend&quot;
			</h1>
				<CardHoverEffectDemo />
				<Button text={"EXPLORE"} />
			</section>


		</main>
	);
}
