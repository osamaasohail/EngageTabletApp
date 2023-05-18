import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import Card from '../components/Card';

function ConsentForm({navigation}) {
  const title = 'Consent for Collection, Use and Discloure of personal Data';
  const content = [
    'By submitting this Form, you hereby agree 1 th collection use and disclosure of your personal data by BMG Engage International Pte Ltd and its Clients, for application and administration purposes (‘Purpose’), Your personal data wil be used for the Purpose, including where necessary or applicable, the disclosure of your personal data to partners to affiliates of SMU, as the case may be for the Purpose. In this regard, you confirm that the personal data you have provided is complete and accurate.',
    'BMG Engage International Pte Ltd and a Client respects the privacy of Individuals an recognizes the importance of the personal data you have entrusted with us and believe that it is our responsibility to properly manage, protect, process, use and disclose your personal data. We will collect. use, disclose and protect your personal data in accordance with the Singapore Personal Data Protection Act 2012 (PDPA, he European Unions General Data Protection Regulation (GOP or the United Kingdom Data Protection Act (DPA) as the case may be. If you aro located in Singapore, please click here to find out about your rights under the PDPA. However, f you are located in one of the counties n the European Union or European Economic Area, or in the United Kingdom, please click. here to find out about you rights under the GDPR or DPA, as the case may be.',
    'You may withdraw your consent for the collection, use and disclosure of your personal data fo the Purpose, at any point n ime, by sending your request to pdpa@kachaak.com.sg. However, please note that this may affect our administration of the Purpose to you. Your withdrawal wil be effective within 30 thirty) days of such a request.',
  ];
  return (
    <ImageBackground
      source={require('./../assets/linearBg.png')}
      style={styles.backgroundImage}>
      <ScrollView>

      <View style={styles.container}>
        <Card title={title} content={content} navigation={navigation} />
      </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    
    flex: 1,
    resizeMode: 'cover', // or 'stretch' if you want the image to stretch to fill the container
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: 'gray',
  // },
});

export default ConsentForm;
