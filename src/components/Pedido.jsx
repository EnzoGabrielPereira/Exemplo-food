import React, { useState } from 'react'

// Array de Objetos contendo o estado inincial do cardapio
const cardapio =[
    { id: 1, nome: "Combo-01", preco: 25.00, disponivel: true, quantidade:0 },
    { id: 2, nome: "Combo-02", preco: 30.00, disponivel: false, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 35.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 40.00, disponivel: true, quantidade: 0 },
]

const Pedido = () => {


    // HOOK- useState- Manipula o estado da variavel
    // Estados para gerernciar a lista de items do cardápio
    const [items,setItems] = useState(cardapio);
    const [status, seStatus] = useState("");
    const [items, setEnviar] = useState(false);

    // VALOR FIXO ADICIONADO AO TOTAL QUANDO TIVER NO CARRINHO 
    const taxaEntrega = 5.00;

    // FUNÇÃO QU ALTERA A QAUNTIDADE DO PEDIDO
    const AlterarQuantidade =(id,valor)=> {
        setItems(alt =>
            // MAP: CRIA UM NOVO ARRAY E PERCORRE OS ITEMS SEM MODIFICAR O ORIGINAL (IMUTABILIDADE)
            // TERNARIO VERIFICA SE O ITEM DA ITERACAO DEVE SER ALTERADO
            // SPREAD: (...item) - mantem os valores antigos e adiciona os novos 
            // MATH.max - Objetivo que garante que a qualidade nuinca será maior que o 0 
            alt.map(item =>
                item.id === id ? {...item, quantidade:Math.max(0,item.qunatidade + valor)} : item
            )
        )
    }

    // FILTER: selecina apenas os produtos disponiveis no carrinho
    const produtosDisponiveis = items.filter(item => item.disponivel);
    const carrinho = item.filter(item => item.quantidade > 0);

    // REDUCE - calcula a soma dos items (preco + quantidade)
    // e adiciona a taxa de entrega 

    const subTotal = carrinho .reduce((ac, item)=>ac + item.preco * item.qunatidade, 0);
    const total = subtotal > 0 ? subtotal + taxaEntrga : 0;

    // SIMULACAO DO CICLO DE VIDA DA ENTRGA USANDO TEMPORIZADOR ASSINCRONO

    const ConfirmaPedido=()=>{
        setEnviar(true)
        setStatus("Restaurente confirmou pagamento, Preparando o seu Pedidio!")
        setTimeout(()=>{
            setStatus("Seu Pedido saiu para Entrega!")
            setEnviar(false)
        }, 5000) // 10 segundos 
        setTimeout(()=>{
            setStatus("Seu Pedido foi entregue com sucesso!")
            setEnviar(false)            
        }, 10000);
    }



  return (
  


    <div>
      
    </div>
  )
}



export default Pedido
