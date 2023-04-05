import React, { useState } from 'react';
import Formulaire from "./formulaire/formulaire";
import {SafeAreaView, ScrollView} from "react-native";


export default function App() {
  return (
      <SafeAreaView>
        <ScrollView>
          <Formulaire />
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
