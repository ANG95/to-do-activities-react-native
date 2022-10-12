import { KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context';
import { IS_IOS } from '../../utils/constants';

interface headerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: headerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        // enabled={withInput}
        style={styles.container}
        behavior={IS_IOS ? 'padding' : undefined}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}