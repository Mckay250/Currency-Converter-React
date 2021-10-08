import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TextInput from './components/TextInput';
import Drop from './components/Drop';
import Info from './components/Info';
import Button from './components/Button';

const App = () => {
  const [infoText, setInfoText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [selectedInput, setSelectedInput] = useState({});
  const [selectedOutput, setSelectedOutput] = useState({});
  const [inputCurrencies, setInputCurrencies] = useState([]);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [outputCurrencies, setOutputCurrencies] = useState([]);
  const [conversionRequest, setConversionRequest] = useState({
    baseCurrencySymbol : "",
    outputCurrencySymbol : "",
    amount : 1
  })


  useEffect(() => {
    const getCurrencies = async () => {
      const currencies = await fetchCurrencyDate();
      setAllCurrencies(currencies);
    }

    getCurrencies();
    
  }, [])

  // if (firstTimeLoading && inputCurrencies.length > 0 && outputCurrencies.length > 0) {
  //   const request = conversionRequest;
  //   request.baseCurrencySymbol = inputCurrencies[0].currencySymbol;
  //   request.outputCurrencySymbol = outputCurrencies[0].currencySymbol;
  //   setConversionRequest(request);
  //   console.log(conversionRequest);
  //   setFirstTimeLoading(false);
  // }
  
  useEffect(() => {
    const setCurrencies = () => {
      setInputCurrencies(allCurrencies);
      setOutputCurrencies(allCurrencies.filter((currency) => currency.id !== 1));
      
    }

    setCurrencies();
    
  }, [allCurrencies])

  
  const fetchCurrencyDate = async () => {
    const res = await fetch('http://localhost:8080/api/v1/currencies')
    const data = await res.json();
    console.log("Called endpoint");
    return data.data;
  }

  const inputChange = (e) => {
    setErrorText('');
    const input = allCurrencies.filter((currency) => currency.id == e)[0];
    console.log(input.currencySymbol);
    const request = conversionRequest;
    request.baseCurrencySymbol = input.currencySymbol;
    setConversionRequest(request);
    setSelectedInput(input);
    setOutputCurrencies(allCurrencies.filter((currency) => currency.id !== e));
    
  }

  const outputChange = (e) => {
    setErrorText('');
    const output = allCurrencies.filter((currency) => currency.id == e)[0];
    console.log(output.currencySymbol);
    const request = conversionRequest;
    request.outputCurrencySymbol = output.currencySymbol;

    setConversionRequest(request);
    setSelectedOutput(output);
    setInputCurrencies(allCurrencies.filter((currency) => currency.id !== e));

  }

  const onSubmit = () => {
    if (conversionRequest.baseCurrencySymbol === "") {
      setErrorText('invalid input currency');
    } else if (conversionRequest.outputCurrencySymbol === "") {
      setErrorText('invalid ouput currency');
    } else if (conversionRequest.amount < 1) {
      setErrorText('Amount can not be less than 1');
    }
    postConversionRequest(conversionRequest);

  }

  const setInputAmount = (e) => {
    setErrorText('')
    const request = conversionRequest;
    request.amount = e;
    setConversionRequest(request);
  }

  const postConversionRequest = async (req) => {
    const res = await fetch('http://localhost:8080/api/v1/currency-converter/convert', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(req),
    })

    res.json()
    .then((res) => {
      setErrorText(res.message)
      setInfoText(res.data.outputAmount)
    }).catch((err) => setErrorText(err.message) )

  }



  return (
    <div className="wrapper">
    <Header />
    <TextInput text='Enter Amount' 
                onChange={setInputAmount}/>
    <Drop items={allCurrencies}
          inputCurrencies={inputCurrencies}
          outputCurrencies={outputCurrencies}
          inputChange={inputChange}
          outputChange={outputChange}
          selectedInputImage={`https://www.countryflags.io/${selectedInput.currencyCode}/flat/48.png`}
          selectedOutputImage={`https://www.countryflags.io/${selectedOutput.currencyCode}/flat/48.png`}
          />
    <Info text={infoText}/>
    <Info text={errorText} 
          textColor={'red'}/>
    <Button onClick={onSubmit} 
            text='Get Exchange Rate'/>
  </div>
  
  );
}

export default App;
