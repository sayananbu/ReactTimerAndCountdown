import { SApp, SHeader } from './assets/styles/app.styles';
import Countdown from './components/Countdown/Countdown';
import Timer from './components/Timer/Timer';

function App() {
    return (
        <SApp>
            <SHeader style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Timer title='Timer #1'/>
				<Countdown title='Countdown #1'/>
            </SHeader>
        </SApp>
    );
}

export default App;
