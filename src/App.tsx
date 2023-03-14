import { CreateMemory } from './components/CreateMemory/CreateMemory';
import { Posts } from './components/Posts/Posts';

function App() {
	return (
		<div>
			<CreateMemory />
			<div>
				<h2>Posts</h2>
				<Posts />
			</div>
		</div>
	);
}

export default App;
