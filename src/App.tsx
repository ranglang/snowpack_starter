import React from 'react';
import { UsdtPrice } from './components/Price';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FunctionComponent = () => {
    return (
        <div className="App" data-testid="appWrapper">
            <ErrorBoundary>
                <UsdtPrice />
            </ErrorBoundary>
        </div>
    );
};

export default App;
