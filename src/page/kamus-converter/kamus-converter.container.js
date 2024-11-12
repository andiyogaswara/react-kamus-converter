import { connect } from 'react-redux';
import KamusConverter from './kamus-converter.presentation';
import { convertInput, setInput } from '../../redux/reducer/uiKamusConverter';

const mapStateToProps = (state) => ({
  input: state.converter.input,
  output: state.converter.output,
  step2Result: state.converter.step2Result,
  step3Result: state.converter.step3Result,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (input) => dispatch(setInput(input)),
  onConvert: () => dispatch(convertInput()),
});

export default connect(mapStateToProps, mapDispatchToProps)(KamusConverter);
