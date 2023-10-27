'use strict'; //Mode Strict ou Modo restrito

// API - https://viacep.com.br
    
    //  Função para limpar formulário
    //  Arrow Function
    
    //  Verifica se CEP é válido
    const eNumero = (numero) => /^[0-9]+$/.test(numero) 
    const cepValido = (cep) => cep.length == 8 && eNumero(cep);
    
    //  Responsavel pelo preenchimento do formulário
    const preencherFormulario = (endereco) => {
        document.getElementById('rua').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }

    //  Função para consumo de API da VIACEP
    const pesquisarCEP = async() => {
        const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
        if(cepValido(cep.value)){
            const dados = await fetch(url); 
            const address = await dados.json(); 
    
            if(address.hasOwnProperty('erro')){ 
                alert("CEP não encontrado");
            }else{
                preencherFormulario(address);
            }
        }else{
            alert("CEP incorreto");
        }
    }

    //  Adciona um evento DOM no input do CEP
    document.getElementById('cep').addEventListener("focusout", pesquisarCEP);


//VERIFICAÇÃO DO PREENCHIMENTO DOS CAMPOS
function Verifica(event) { 
    event.preventDefault();
  
    let nome              =        document.getElementById('nome').value
    let email             =        document.getElementById('email').value
    let c_email           =        document.getElementById('c_email').value
    let celular           =        document.getElementById('cel').value
    let dataNascimento    =        document.getElementById('data').value
    let cpf               =        document.getElementById('cpf').value
    let cep               =        document.getElementById('cep').value
    let rua               =        document.getElementById('rua').value
    let numero            =        document.getElementById('numero').value
    let complemento       =        document.getElementById('complemento').value
    let bairro            =        document.getElementById('bairro').value
    let cidade            =        document.getElementById('cidade').value
    let estado            =        document.getElementById('estado').value
    let senha             =        document.getElementById('senha').value
    let confirmarSenha    =        document.getElementById('senha2').value


    if (!nome || !email || !c_email || !celular || !dataNascimento || !cpf || !cep || !rua || !numero || !complemento || !bairro || !cidade || !estado || !senha || !confirmarSenha) {
      alert("Preencha todos os campos corretamente!")
    } else if (!validaCPF(cpf)) {
    alert("CPF inválido.")
    return false
    } else if (senha != confirmarSenha) {
      alert("As senhas não são iguais.")
    } else if (email != c_email) {
      alert("E-mails diferentes.")
    } else {
      alert("Cadastro realizado com sucesso!")
      window.location.href = "sucesso.html"
      return true
    }
} 
    /*
    VALIDAÇÃO DO CPF
      function validaCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'')
      
        if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
          return false
        }
      
        let soma = 0
        for (let i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i)
        }
        let resto = 11 - (soma % 11)
        let digitoVerificador1 = (resto === 10 || resto === 11) ? 0 : resto;
        if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
          return false
        }
      
        soma = 0
        for (let i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        let digitoVerificador2 = (resto === 10 || resto === 11) ? 0 : resto
        if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
          return false
        }
        return true
      }
*/
