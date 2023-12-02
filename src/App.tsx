import { useEffect, useState } from "react";
import rasen from "./assets/rasen.png";
import koala from "./assets/koala.png";

type GameField = {
	id: number;
	img: string;
};

const gameSize = 9;
const initialGames: GameField[] = [];

for (let i = 0; i < gameSize; i++) {
	initialGames.push({
		id: i,
		img: rasen,
	});
}

const getRandomPosition = (max: number, last?: number) => {
	let randomValue = Math.floor(Math.random() * max);

	while (last === randomValue) {
		randomValue = Math.floor(Math.random() * max);
	}

	return randomValue;
};

function App() {
	// Spielfeld aus 9 Bildern
	// Spielfeld unterteilt sich in leere Bilder
	// und Bilder mit einem Koala

	// Funktionalität:
	// Es gibt ein Bild mit einem Koala
	// Koala sucht sich ein zufälliges Feld von 1-9
	// Wir zeigen den Koala durch Austauschen des Bildes
	// ABER nicht das gleiche Feld, wo er vorher war
	// // = Kein Feld doppelt

	// Zeitabstände sind regelmäßig, es gibt keine Pausen
	// Zeitabstand: 800 ms

	// Wir haben einen Score
	// Wenn das Bild des Koalas aktiv ist und man klickt
	// // = bekommt man Punkte
	// Egal wie oft man clickt, man bekommt nur einen SCORE

	// Bleibt es über Zeit unverändert
	// Erhalten wir es statisch oder durch parent bzw Props?
	// Können wir es anhand von exsitierenden State berechnen? (noch haben wir kein State)

	// Welchem State(s) brauchen wir:
	// Die Postition des Koalas
	// Den Score

	const [score, setScore] = useState(0);
	const [koalaPosition, setKoalaPosition] = useState(
		getRandomPosition(gameSize)
	);

	useEffect(() => {
		// console.log("Effekt ausgeführt");
		// Mein setInterval übernimmt einen Callback, etwas, was ausgeführt wird
		const timer = setInterval(() => {
			setKoalaPosition(getRandomPosition(gameSize, koalaPosition));
		}, 1000);
		// CLEAN UP!
		return () => {
			clearInterval(timer);
			// console.log("clean up");
		};
	}, []); // [koalaPosition] is my Abhängigkeitsarray // why was it taken away?

	return (
		<>
			<div className='mx-40 flex items-center gap-5 flex-col '>
				<h1 className='font-semibold'>Maulwurfsspiel</h1>
				<h2>Score: {score}</h2>

				<div className='flex flex-wrap w-[600px]'>
					{initialGames.map((game, index) => {
						return (
							// Implement mit State onClick score function
							// onClick erhöhen wir den Score
							<img
								className='flex w-[200px]'
								key={game.id}
								// Bedingung ? TRUE : ELSE
								src={index === koalaPosition ? koala : game.img}
								// src={game.img}
								alt='rasen/koala'
								onClick={() => {
									setScore(score + 1);
								}}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
