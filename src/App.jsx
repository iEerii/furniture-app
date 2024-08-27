import './App.css'
import { Header } from './components/Header'
import { CategorySlide } from './components/CategorySlide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

	return (
		<main className='mainContainer'>
			<Header />
			<CategorySlide />
		</main>
	)
}

export default App
