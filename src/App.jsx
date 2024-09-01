import './App.css'
import { Header } from './components/Header'
import { CategorySlide } from './components/CategorySlide'
import { InDemand } from './components/InDemand';
import { NewArrival } from './components/NewArrival';
import { CommitmentText } from './components/CommitmentText';
import { Choice } from './components/Choice';
import { SectionSubscribe } from './components/SectionSubscribe';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

	return (
		<main className='mainContainer'>
			<Header />
			<CategorySlide />
			<InDemand />
			<NewArrival />
			<CommitmentText />
			<Choice />
			<SectionSubscribe />
		</main>
	)
}

export default App
