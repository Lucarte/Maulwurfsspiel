import rasen from "./assets/rasen.png";

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

function App() {
	// Spielfeld aus 9 Bildern
	// Spielfeld unterteilt sich in leere Bilder
	// Bilder mit einem Koala
	// Funktionalität
	// Es gibt ein Bild mit einem Koala
	// Koala sucht sich ein zufälliges Feld von 1-9
	// Wir zeigen den Koala durch Austauschen des Bildes
	// ABER nicht das gleiche
	// Kein Feld doppelt

	// Zeitabstände sind regelmäßig, es gibt keine Pausen

	// Wir haben einen Score
	console.log(initialGames);
	return (
		<>
			<div className='mx-40 flex items-center gap-5 flex-col '>
				<h1 className='font-semibold'>Maulwurfsspiel</h1>
				<h2>Score: 0</h2>
				<div className='flex flex-wrap w-[600px]'>
					{initialGames.map((game) => {
						return (
							<img
								className='flex w-[200px]'
								key={game.id}
								src={game.img}
								alt='rasen'
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
