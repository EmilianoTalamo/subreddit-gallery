import Header from "./components/Header";
import Gallery from "./components/Gallery";


/* Global stylesheets */
import './styles/style.scss';

function App() {

	return (
		<div id="subreddit-gallery">
			<Header />
			<main>
				<Gallery />
			</main>
		</div>
	);

}

export default App;
