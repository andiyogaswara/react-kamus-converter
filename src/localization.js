import LocalizedStrings from 'react-localization';

const LocalizedString = new LocalizedStrings({
  'en-US': {
    kamusConverterMenu: {
      title: 'Sentence to Number Converter',

      labelInputSentence: 'Input Sentence',
      labelConvert: 'Convert',
      labelConvertedOutput: 'Converted Output',
    },
  },
  id: {
    kamusConverterMenu: {
      title: 'Pengubah Kalimat ke Nomor',

      labelInputSentence: 'Masukkan Kalimat',
      labelConvert: 'Mengubah',
      labelConvertedOutput: 'Hasil Perubahan',
    },
  },
});

export default LocalizedString;
