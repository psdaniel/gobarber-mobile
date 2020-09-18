import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" hidden={true}/>
        <View style={{ flex: 1, backgroundColor: '#321e38' }} />
    </>
);

export default App;