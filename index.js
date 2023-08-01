// Función para validar si es un número válido
function esNumeroValido(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
  
  // Función para validar si es un nombre válido de divisa
  function esDivisaValida(divisa) {
    const divisasValidas = ['USD', 'EUR', 'JPY', 'ARS',];
    return divisasValidas.includes(divisa.toUpperCase());
  }
  
  // Función para calcular el monto después del cambio de divisas
  function intercambiarDivisas(monto, tasaOrigen, tasaDestino) {
    const montoEnDolares = monto / tasaOrigen;
    const montoFinal = montoEnDolares * tasaDestino;
    return montoFinal;
  }
  
  let montoInicial, divisaOrigen, divisaDestino;
  
  // Capturar entradas mediante prompt() y validarlas
  do {
    montoInicial = prompt('Ingrese el monto a intercambiar:');
  } while (!esNumeroValido(montoInicial));
  
  do {
    divisaOrigen = prompt('Ingrese la divisa de origen (USD/EUR/JPY/ARS):');
  } while (!esDivisaValida(divisaOrigen));
  
  do {
    divisaDestino = prompt('Ingrese la divisa de destino (USD/EUR/JPY/ARS):');
  } while (!esDivisaValida(divisaDestino));
  
  // Tasas de cambio fijas para simplificar el ejemplo
  const tasasDeCambio = {
    USD: 1,    // Dólar Estadounidense
    EUR: 0.95, // Euro
    JPY: 150,   // Yen Japonés
    ARS: 550 // Peso Argentino

  };
  
  // Obtener las tasas de cambio según las divisas seleccionadas
  const tasaOrigen = tasasDeCambio[divisaOrigen.toUpperCase()];
  const tasaDestino = tasasDeCambio[divisaDestino.toUpperCase()];
  
  // Realizar el intercambio de divisas
  const montoFinal = intercambiarDivisas(parseFloat(montoInicial), tasaOrigen, tasaDestino);
  
  // Salida de resultado por alert()
  alert(`${montoInicial} ${divisaOrigen.toUpperCase()} equivale a ${montoFinal.toFixed(2)} ${divisaDestino.toUpperCase()}`);
  
  
  