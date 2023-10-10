import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const Home: React.FC = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Teste v72.0 wiht NativeWind');
    }, []);

    return (
        <>
            <View className="flex-1 justify-center items-center">
                <Text className="text-2xl text-black">
                    {title}
                </Text>
            </View>
        </>
    );
}

export default Home;