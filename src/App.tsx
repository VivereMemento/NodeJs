import { CreateMemory } from './components/CreateMemory/CreateMemory';
import { Posts } from './components/Posts/Posts';
import Header from './components/UI/Header/Header';

function App() {
	return (
		<div>
			<Header title="My memories" />
			<CreateMemory />
			<div>
				<h2>Posts</h2>
				<Posts />
			</div>
		</div>
	);
}

export default App;
