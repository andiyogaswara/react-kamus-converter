import { connect } from 'react-redux';
import KamusConverter from './kamus-converter.presentation';
import { convertInput, setInput } from '../../redux/reducer/uiKamusConverter';

const mapStateToProps = (state) => ({
  input: state.converter.input,
  output: state.converter.output,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (input) => dispatch(setInput(input)),
  onConvert: () => dispatch(convertInput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(KamusConverter);
