import React from 'react';
import {LiveEditor, LivePreview, LiveError, LiveProvider} from 'react-live';

const code = `
 class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}`;

const AppLive = () => (
    <LiveProvider code={code} >
        <LiveEditor />
        <LivePreview />
        <LiveError />
    </LiveProvider>
);

export default AppLive;