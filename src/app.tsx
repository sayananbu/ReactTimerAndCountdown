import Countdown from './components/Countdown/Countdown';
import Timer from './components/Timer/Timer';
import { SApp, SHeader } from './styledComponents/app.styles';

function App() {
    return (
        <SApp>
            <SHeader>
                <Timer title='Timer #1'/>
				<Countdown title='Countdown #1'/>
            </SHeader>
        </SApp>
    );
}

export default App;
