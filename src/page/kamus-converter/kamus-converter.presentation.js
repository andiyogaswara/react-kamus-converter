import React from 'react';
import LocalizedString from '../../localization';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
  },
  container: {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#555',
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  outputContainer: {
    marginTop: '20px',
  },
  outputTitle: {
    fontSize: '18px',
    color: '#333',
  },
  outputText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#007bff',
    wordWrap: 'break-word',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#777',
  },
};

const KamusConverter = ({ input, output, step2Result, step3Result, onInputChange, onConvert }) => {
  const handleInputChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>{LocalizedString.kamusConverterMenu.title}</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            {LocalizedString.kamusConverterMenu.labelInputSentence}
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a sentence here"
              style={styles.input}
            />
          </label>
        </div>
        <button onClick={onConvert} style={styles.button}>
          {LocalizedString.kamusConverterMenu.labelConvert}
        </button>
        <div style={styles.outputContainer}>
          <h3 style={styles.outputTitle}>Soal No.1</h3>
          <p style={styles.outputText}>{output}</p>

          <h3 style={styles.outputTitle}>Soal No.2</h3>
          <p style={styles.outputText}>{step2Result}</p>

          <h3 style={styles.outputTitle}>Soal No.3</h3>
          <p style={styles.outputText}>{step3Result}</p>
        </div>
      </div>
      <footer style={styles.footer}>© 2024 KamusConverter Inc.</footer>
    </div>
  );
};

export default KamusConverter;
