# Formulário_de_Cadastro
Fomúlario de Cadastro da atividade de Programação Web. 
Ensino Médio Téc. Colégio Marista Ir. Acácio.
![Capa](doc/FormCad.jpg)

## Sobre o Projeto
Nesta versão do projeto foi adicionado o campo de ```Confirmação de Email``` e funcionalidade de verificação de email, preenchimento dos campos do CEP e removido a verificação do CPF para a implementação de tal futuramente.

Foi pesquisado sites de e-commerces para a comparação de campos e funcionalidades, assim podendo identificar possíveis diferenças, os sites observados foram: 

 1-[Terabyteshop](https://www.terabyteshop.com.br/Cadastro.obj)  
 2-[Americanas](https://cliente.americanas.com.br/minha-conta/cadastro?next=https://www.americanas.com.br/)  
 3-[AliExpress](https://login.aliexpress.com/?return_url=http%3A%2F%2Freport.aliexpress.com%2F)

## 🛠️Funcionalidades
O Formulário contém algumas funcionalidades de verificação e confirmação.

1 - Verificação de CEP e consumo da API

        //  Verifica se CEP é válido
            const eNumero = (numero) => /^[0-9]+$/.test(numero) 
            const cepValido = (cep) => cep.length == 8 && eNumero(cep);

        //  Função para consumo de API da VIACEP
            const pesquisarCEP = async() => {
                const url = `https://viacep.com.br/ws/${cep.value}/json/`;
            
                if(cepValido(cep.value)){
                    const dados = await fetch(url); 
                    const address = await dados.json(); 
            
                    if(address.hasOwnProperty('erro')){ 
                        alert("CEP não Encontrado");
                    }else{
                        preencherFormulario(address);
                    }
                }else{
                    alert("CEP Incorreto");
                }
            }
Caso o Cep não seja válido, ele apresentará um ```alert``` de "CEP não Encontrado/Incorreto"

2 - Preenchimento dos Campos ligados ao CEP

        const preencherFormulario = (endereco) => {
                document.getElementById('rua').value = endereco.logradouro;
                document.getElementById('bairro').value = endereco.bairro;
                document.getElementById('cidade').value = endereco.localidade;
                document.getElementById('estado').value = endereco.uf;
            }
Se o CEP for válido, ocorrerá o preenchimento automatico dos campos ligados ao CEP.  

3 - Verificação dos Campos e validação de senha/email

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


            if (!nome || !email || !c_email || !celular || !dataNascimento || !cpf || !cep || !rua || !numero || !bairro || !cidade || !estado || !senha || !confirmarSenha) {
            alert("Preencha todos os campos corretamente!")
            //} else if (!validaCPF(cpf)) {
            //  alert("CPF inválido.")
            //  return false
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

Aqui é feito a verificação dos campos e confirmação do email e da senha. Caso, haja alguma diferença nos dois campos de senha e email, o JS irá retornar um ```alert("As senhas não são iguais.")```. Também, se faltar algo a ser preenchido, aparecerá ```alert("Preencha todos os campos corretamente!")```. Se tudo estiver nos conformes, o usuário será redirecionado para a página de ```sucesso.html```.  

### Cadastro
É necessário Preencher todas as informações.
- :heavy_check_mark: Contém: 
- Vereficador de campos; é necessário preencher todos os campos corretamente;
- Verificador de CPF; Caso não queira usar seu CPF use o site [www.geradordecpf.org](https://www.geradordecpf.org/) para gerar um CPF válido. 
- Campos de Confirmação de senhas e email: Nesses campos é necessário que a senha e email estejam iguais.

### Sucesso
Após realizado o cadastro, você irá parar na página de Sucesso!
![sucessodocadastro](https://github.com/Caioestevao1000/Formulario_de_Cadastro/assets/108750017/a581a44b-4a10-4aa8-82b9-79a6173bf65c)


## 🖥Tecnologias Utilizadas
| **HTML**        |
| **CSS**         |
| **JavaScript**  |
| **GIT**         |

## Autores
- Caio Estevão
- [github.com](https://github.com/Caioestevao1000)
