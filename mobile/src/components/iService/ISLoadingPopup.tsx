import React, { useState, useContext, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

export const ISLoadingPopup = () => {
    const [isLiked, serIsLiked] = useState<any>(null)

    const animation = React.useRef<any>(true);
    const isFirstRun = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRun.current) {
            animation.current.play(66, 66);
          if (isLiked) {
          } else {
            animation.current.play(19, 19);
          }
          isFirstRun.current = false;
        } else if (isLiked) {
          animation.current.play(19, 50);
        } else {
          animation.current.play(0, 19);
        }
    }, []);

    return (
        <LottieView
            ref={animation}
            autoPlay={true}
            style={{
                position: 'absolute',
                zIndex: 1,
                width: 80,
                height: 80,
                backgroundColor: '#f8f6f6',
            }}
            source={require('../../../assets/loading.json')}
        
        />
    );
};

const styles = StyleSheet.create({
    base: {
        width: '80%',
        height: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
   },
});