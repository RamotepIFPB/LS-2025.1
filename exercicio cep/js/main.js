const cep = document.querySelector('#cep')
const cepErro = document.querySelector('#cepError')
const rua = document.querySelector('#street')
const numero = document.querySelector('#number')
const bairro = document.querySelector('#neighborhood')
const estado = document.querySelector('#state')
const cidade = document.querySelector('#city')

cep.addEventListener('blur', async () => {
    const cepLimpo = cep.value.replace(/\D/g, '')
  
    if (!/^\d{8}$/.test(cepLimpo)) {
      mostrarErroCep()
      limparEndereco()
      return
    }
  
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dados = await resposta.json()
  
      if (dados.erro) {
        mostrarErroCep()
        limparEndereco()
      } else {
        preencherEndereco(dados)
        esconderErroCep()
        numero.focus()
      }
    } catch (erro) {
      console.error('Erro ao buscar o CEP:', erro)
      mostrarErroCep()
      limparEndereco()
    }
  })
  
  function preencherEndereco(dados) {
    rua.value = dados.logradouro || ''
    bairro.value = dados.bairro || ''
    cidade.value = dados.localidade || ''
    estado.value = dados.uf || ''
  }
  
  function limparEndereco() {
    rua.value = ''
    numero.value = ''
    bairro.value = ''
    cidade.value = ''
    estado.value = ''
  }
  
  function mostrarErroCep() {
    cepErro.classList.remove('hidden')
    cep.classList.add('input-cep-error')
  }
  
  function esconderErroCep() {
    cepErro.classList.add('hidden')
    cep.classList.remove('input-cep-error')
  }