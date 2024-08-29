import './App.css'
import { Header } from './components/Header'
import { CategorySlide } from './components/CategorySlide'
import { InDemand } from './components/InDemand';
import { NewArrival } from './components/NewArrival';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

	return (
		<main className='mainContainer'>
			<Header />
			<CategorySlide />
			<InDemand />
			<NewArrival />
		</main>
	)
}

export default App
