/*const peso = 65;
const altura = 1.90
const resultado = peso / (altura**2);
console.log(resultado)*/

function meuEscopo(){
    //* Capturar evento de submit do formulário*/
    const form = document.querySelector('.form');/*link o form*/
    
    function receberDados(evento){
        evento.preventDefault(); /*pega as inf do form*/
        
        const inputPeso = document.querySelector('#peso');
        const inputAltura = document.querySelector('#altura');
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso){
            setResultado('Peso inválido', false);
            return;
        }
        if (!altura){
            setResultado('Altura inválida', false);
            return;
        }
        const imc = getIMC(peso,altura);
        const nivelIMC = getNivelImc(imc);
        const msg = `Seu IMC é ${imc}  (${nivelIMC}).`;
        setResultado(msg, true);

        console.log(imc, nivelIMC)

        function getNivelImc(imc){

            const nivelIMC = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
            
            if (imc >= 39.9) return nivelIMC[5];
            if (imc >= 34.9) return nivelIMC[4];
            if (imc >= 29.9) return nivelIMC[3];
            if (imc >= 24.9) return nivelIMC[2];
            if (imc >= 18.5) return nivelIMC[1];
            if (imc < 18.5) return nivelIMC[0];
            setResultado(msg, true)
        }
        function getIMC(peso, altura){
            const imc = peso / (altura**2);
            return imc.toFixed(2);//retorna com 2 casas decimais//
        }

    }
    // Qual evento desejo escutar/assistir(submit) //
    form.addEventListener('submit', receberDados);
    
    function criaP(){
        const p = document.createElement('p');
        p.classList.add('paragrafo-resultado')
        return p;

    }
    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultados');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('paragrafo-resultado');
        } else{
            p.classList.add('valor-invalido')
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

}
meuEscopo();