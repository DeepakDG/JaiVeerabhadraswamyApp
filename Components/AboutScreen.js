import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";

const MyPager = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <ScrollView>
            <Text style={styles.textalign}> Page 1 </Text>
            <Text style={styles.textalign}>
              *ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕ* ದಕ್ಷಯಜ್ಞಾಪದಂಚೈವ ಸರ್ವದೇವ ಮುದಾವಹಂ | ವೀರಚೂಡಾಮಣಿಂ
              ವೀರಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।। ಭೈರವಂ ಭೈರವಾಕಾರಂ ಭದ್ರಂ ಭದ್ರೇಶ್ವರಂ ಪ್ರಭುಂ ।
              ರುದ್ರಂ ರುದ್ರಗಣಾಧೀಶಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।। ವೀರೇಶ್ವರಂ ವಿರೂಪಾಕ್ಷಂ
              ನಾರಸಿಂಹ ಮಘಾಂತಕಂ | ಅಹಿ ಭೂಷಂ ಶುಭಾಕಾರಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ।l ಸರ್ವಜ್ಞಂ
              ಜಗದಾಧಾರಂ ಶೂಲ ಹಸ್ತಂ ನಟೇಶ್ವರಂ | ಮುಕ್ತಿಪ್ರದಂ ಮಹಾದೇವಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ
              ।l ಭೂತೇಶಂ ಸರ್ವಭೂತೇಶಂ ನಾಯಕಂ ಸರ್ವನಾಯಕಂ । ದೇವದೇವಂ ಮಹಾದೇವಂ ವೀರಭದ್ರ ಮಹಂ
              ಭಜೇ || ಬ್ರಹ್ಮವಿಷ್ಣು ಸುರಾಧೀಶಂ ಸೇವ್ಯಪಾದ ಸರೊರುಹಂ । ಭದ್ರಕಾಳೀ ಪತಿಂದೇವಂ
              ವೀರಭದ್ರ ಮಹಂ ಭಜೇ |l ಖಟ್ವಾಂಗ ಧಾರಿಣಂ ಶೂರಂ ಚಂದ್ರ ಸೂರಾಗ್ನಿಲೋಚನಂ ।
              ವಿಷ್ಣುಚಕ್ರ ವಿಖಂಡಂಚ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ || ವೀರೋತ್ತಮಂ ಮಹಾವೀರಂ ವೀರಭಾಷಣ
              ತತ್ಪರಂ | ವೀರ ಸಿಂಹಾಸನಾರೂಢಂ ವೀರಭದ್ರ ಮಹಂ ಭಜೇ ||
            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="2">
          <ScrollView>
            <Text style={styles.textalign}> Page 2 </Text>
            <Text style={styles.textalign}>
              *ಯಡೂರು ವೀರಭದ್ರಾಷ್ಟಕಂ* ಶ್ರೀ ವೀರಭದ್ರಗೆ ನಮಿಸುವೆ ನಾನು ಕಾಳಿಕಾ ಮಾತೆಗೆ
              ಕರವನು ಮುಗಿದು | ಜಗವೆ ಪೂಜಿಸುವ ಶಿವರೂಪಿ ನೀನು ಭಕ್ತರ ಪಾಲಿಗೆ ವರ ಕಾಮಧೇನು
              //೧// ಶಿವನ ಜಡೆಯಲೀ ಉದಿಸಿದೆ ನೀನು ಹರನ ಕೋಪಾಗ್ನಿಯ ಜ್ವಾಲೆಯು ನೀನು ||
              ರುದ್ರಾವತಾರದಿ ಖಡೆ ಖಡೆ ಎನುತಲಿ ದಕ್ಷನ ಯಜ್ಞದ ಕಡೆಗೇ ನಡೆದೆ //೨// ಶಿವ
              ನಿಂದೆಯನು ಸಹಿಸದೆ ಸತಿಯು ಯಜ್ಞ ಕುಂಡದೀ ದಹಿಸುತ್ತಿರಲು || ತಾಯಿಯ ದಹನದ
              ದೃಶ್ಯವ ಕಂಡು ವೀರಗೆ ಹರಿದವು ಕಣ್ಣೀರ ಹೊಳೆಯು ||೩// ಶಿವನ ಆಜ್ಞೆಯನು ಪಾಲಿಸಲು
              ನೀ ದಕ್ಷನ ಸೈನ್ಯದ ದರ್ಪವ ಮುರಿದು || ದಕ್ಷ ಬ್ರಹ್ಮನಾ ಶಿರವನು ಹರಿದು ದಹಿಸದೆ
              ಅವನಾ ತಲೆಯನು ನೀನು //೪// ಭದ್ರನ ಕಾಯಕ ಭಕ್ತಿಗೆ ಮೆಚ್ಚಿ ಪರ ಶಿವ ತಾನು ವರವನು
              ನೀಡಿ || ಕೃಷ್ಣಾ ನದಿಯ ಎಡ ದಂಡೆಯ ಮೇಲೆ ನೆಲೆಸೀಗ ನೀನು ವಿರೂಪಾಕ್ಷ ನಾಗಿ
              //೫// ಶಿವನ ಆಜ್ಞೆಯಂತೆ ಯಡೂರ ಕ್ಷೇತ್ರದಿ ಲಿಂಗ ರೂಪದಿ ಕಂಗೊಳಿಸುತಲೀ ||
              ಕಾಡಸಿದ್ಧರಾ ಕರುಣೆಯ ಕಣ್ಣಿಗೆ ಕಾಣುವೆ ನೀನು ಬೂದಿಯ ಒಳಗೆ //೬// ಕಾಡ ಸಿದ್ಧರೂ
              ಯಡೂರ ಜನರು ಅಗಿದರು ಅಲ್ಲಿಯ ಬೂದಿಯ ನೆಲ್ಲವ || ಅಲ್ಲಿ ಕಾಣುವನು ವಿರೂಪಾಕ್ಷ
              ಲಿಂಗಾ ಕಂಡ ಭಕ್ತರಿಗೆ ಅತಿ ಆನಂದ //೭// ವೀರಭದ್ರಗೆ ಒಡಪನು ಹೇಳಲು ಭದ್ರಕಾಳಿಗೆ
              ಭಕ್ತಿಯಿಂದ ನಮಿಸಲು || ವಿಶಾಳಿ ಜಾತ್ರೆಗೆ ತೇರನು ಎಳಯಲು ಸಾವಿರ ಸಾವಿರ ಭಕ್ತರು
              ಬರುವರು //೮// ಲಿಂಗರೂಪದಲಿ ವೀರಭದ್ರನಾ ಮಹಾ ದರುಶಣಾಂ || ಯಡೂರ ವೀರಭದ್ರೇಶ ತವ
              ಪಾದ ಶರಣು || *ರಚನೆ*:- ಶ್ರೀಶೈಲ ಶಾಸ್ತ್ರಿಗಳು, ಯಡೂರು ಪಾಠಶಾಲೆ. *ಶ್ರೀ
              ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಚಾರ ಸಮಿತಿ*
            </Text>
          </ScrollView>
        </View>
        <View style={styles.page} key="3">
          <Text style={styles.textalign}> Page 3 </Text>
          <Text style={styles.textalign}>
            *ಶ್ರೀವೀರಭದ್ರೇಶ್ವರ ವಡಪು* ಆಹಾ ರುದ್ರಾ l ಆಹಾ ವೀರಾ l ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ
            ಮಂತ್ರದಿಂದ ಕಾಳೋರಗನ | ನಿಲ್ಲಿಸ ಬಹುದಯ್ಯಾ ಒಂದೇ ಮಂತ್ರದಿಂದ ಹಾರುವ ಪಕ್ಷಿಯ |
            ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ ಮಂತ್ರದಿಂದ ಹೆಬ್ಬುಲಿಯ | ನಿಲ್ಲಿಸಬಹುದಯ್ಯಾ ಒಂದೇ
            ಮಂತ್ರದಿಂದ ಈ ಹೆಮ್ಮಾರಿಯ ಲೋಭವೆಂಬ ಗ್ರಹಣಹಿಡಿದವರನ್ನು ಯಾತರಿಂದಲೂ ಬಿಡಿಸುಲಾಗದು
            l ಈ ಲೋಭಕ್ಕೆ ದರಿದ್ರವೇ ಔಷಧ | ಹೇಳಿದರೆ ಕೇಳರು | ತಾವೂ ತಿಳಿಯರು | ಶಾಸ್ತ್ರವ
            ಭಕ್ತಿಯ ಹಿಡಿಯರು l ಇಂಥ ಗೊಡ್ಡ ಮೂಳ ಹೊಲೆಯರಿಗೆ | ಕರ್ಮವೆಂಬ ಶರಧಿಯಲ್ಲಿ ಬಿದ್ದು
            | ಉರುಳಾಡುವುದೇ ಸತ್ಯವೇದಾಂತ ನಮ್ಮ ಅಂಬಿಗರ ಚೌಡಯ್ಯ ಕಡೆ ಕಡೆ....... *ಶ್ರೀ
            ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಚಾರ ಸಮಿತಿ*
          </Text>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#fe724c",
    padding: 15,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  textalign: {
    textAlign: "justify",
    fontSize: 20,
    color: "#ffffff",
    padding: 15,
  },
});

export default MyPager;
