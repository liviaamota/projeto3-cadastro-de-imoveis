let option = ''
const home = []
const realEstate = {}

do {
    option = prompt(`cadastro de imoveis
    Quantidade de imóveis cadastrados: ${home.length}
    1 - salvar um novo imovel
    2 -  listar os imóveis 
    3 - sair 
    `)
    
    switch (option){
        case '1':
            realEstate.name = prompt('Digite o nome do proprietário')
            realEstate.rooms = prompt('Digite a quantidade de quartos')
            realEstate.bathroom = prompt('Digite a quantidade de banheiros')
            realEstate.garage = prompt('Seu imóvel possui garagem?')

            const saveEstate = confirm('Deseja salvar o imóvel?')

            if (saveEstate == true) {
                home.push(realEstate)
            }
            break
        case '2':
            let list = ''
            for (let i = 0; i < home.length; i++) {
                list += `Imóvel${i}\n`
            }
            alert(list)
            break
        case '3':
            alert('Encerrando programa')
            break
    }
 } while (option !== '3')

