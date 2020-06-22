import { StyleSheet } from 'react-native';
import { scenePadding } from 'app/screens/Feed/constants';

export const styles = StyleSheet.create({
  postStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scenePadding / 2,
    marginTop: scenePadding,
  },
});
