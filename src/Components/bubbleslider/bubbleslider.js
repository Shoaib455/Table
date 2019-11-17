import React from "react";
// import { Bubbles } from 'react-native-4-bubbles-loader';

const SpinnerPage = () => {
  return (
    <>
      <div class="spinner-grow text-primary slow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-success ml-2" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger ml-2" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning ml-2" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-info ml-2" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    
    
      {/* <View>
        <Bubbles size={10} color="['#ff0000', '#00ff00', '#0000fff', '#ff0000']" />
      </View> */}
    
    
    </>
  );
}

export default SpinnerPage;