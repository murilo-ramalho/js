var mudar = getElementByid("mudar");

function att1() {
    mudar = '<p>Olá mundo</p>';
};

function att2() {
    var v1 = getElementByid("valor1att2");
    var v2 = getElementByid("valor2att2");
    var r = v1*v2;
    mudar = `<p>o resulta é ${r}</p>`;
};

function aat3() {
    var v1 = getElementByid("valor1att3");
    var v2 = getElementByid("valor2att3");
    var v3 = getElementByid("vaalor3att3");
    var r = (v1+v2+v3)/3;
    mudar = `<p>o resultado é ${r}</p>`;
};

function att4() {
    var v1 = getElementByid("valor1att4");
    var v2 = getElementByid("valor2att4");
    var v3 = getElementByid("valor3att4");
    var r = v1-v2+v3;
    mudar = `<p> ${v1} - ${v2} = ${v3}</p>`;
};

function att5() {
    var valor = getElementByid("valoratt5");
    var A = valor--;
    var P = valor++;
    mudar = `<p>o valor ${valor}, seu prosterior será ${P} e seu antessesor é ${A}</p>`;
};

function att6() {
    var r = getElementByid("raio");
    var p = r**2 * 3.14;
    mudar = `<p>o perimetro é de ${p}`; 
};