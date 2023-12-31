import * as React from 'react';

import { SafeAreaView } from 'react-native';
import Player from 'react-native-swipe-player';

export default function App() {
  return (
    <SafeAreaView>
      <Player
        data={[
          {
            videoUrl:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          },
          {
            videoUrl:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
            extraData: { play: true },
          },
        ]}
      />
    </SafeAreaView>
  );
}
