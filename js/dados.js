// "Base onde e feito a consulta"
let dados = [
    {
        nome: "Ahri",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55e7e901b1f69d72804665cfbeb1f4f59c8fa877-496x560.jpg?auto=format&fit=fill&q=80&w=253",
        descricao: "Uma sensual raposa que encanta seus inimigos antes de devorá-los.",
        rota: " Mid",
        classe: " Mago",
        tag: "mage flex enchantress, Faker"
    },
    {
        nome: "Garen",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um guerreiro de Demacia, símbolo de justiça e honra.",
        rota: " Top",
        classe: " Lutador",
        tag: "fighter top demacia, espada"
    },
    {
        nome: "Vayne",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5312fde4581bdcab2353b9bed68b6fc3ce919501-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Caçadora Noturna, Vayne, é uma atiradora especializada em derrubar alvos únicos. Com sua agilidade e letalidade, ela se destaca em perseguir e eliminar inimigos fracos. Sua habilidade de aumentar seu dano crítico e furtividade a tornam uma ameaça formidável em lutas prolongadas.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Caçadora Letal agil Furtiva"
    },
    {
        nome: "Aatrox",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um antigo guerreiro Ascendido de Shurima, agora corrompido por uma espada Darkin. Aatrox é um lutador poderoso, com habilidades de cura e grande capacidade de sobrevivência.Rota: Top Lane (principalmente), mas pode ser flexionado para a Selva.Classe: Lutador Fighter",
        rota: " Lutador",
        classe: " Top Lane",
        tag: " Imortal, Sangrento, Implacável"
    },
    {
        nome: "Akali",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Kunoichi da Névoa, Akali, é uma assassina veloz e letal, mestre em combate corpo a corpo. Ela utiliza neblina para se tornar invisível e eliminar seus inimigos com precisão cirúrgica.",
        rota: " Mid Lane (Meio)",
        classe: " Assassino (Assassin)",
        tag: "Ágil, Letal, Furtiva"
    },
    {
        nome: "Akshan",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e5ea58123ac5a699700eec49f8412af11e563a0-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Sentinela Rebelde, Akshan, é um atirador único que combina alta mobilidade com a capacidade de reviver aliados caídos. Sua arma em formato de gancho lhe permite se deslocar pelo mapa e marcar inimigos, os quais, ao eliminarem aliados, são automaticamente revividos por Akshan.",
        rota: " Meio",
        classe: " Atirador (ADC) com elementos de Assassino",
        tag: "Ágil, Vingativo, Reivindicador, mid"
    },
    {
        nome: "Alistar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da8cefee5b85bca51360ccc1635ef5b0f6967767-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Minotauro, Alistar, é um tanque resistente e agressivo, capaz de iniciar lutas em equipe e proteger seus aliados. Seus chifres e força bruta o tornam uma força a ser considerada no campo de batalha.",
        rota: " Suporte",
        classe: " Tanque (Tank)",
        tag: " Resistente, Iniciação, Protetor"
    },
    {
        nome: "Amumu",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/092febba8905cff35940d036fd20b7e3ad4f428f-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Múmia Chorona é um tanque solitário que busca amizades. Apesar de sua aparência assustadora, ele é um aliado leal e forte. Suas habilidades causam dano em área e o permitem controlar o campo de batalha.",
        rota: " Selva",
        classe: " Tanque",
        tag: "Solitário, Chorão, Controle de multidão"
    },
    {
        nome: "Anivia",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b9081057a6282c7c7f074dc9cec094b8d51df9bf-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Cisne de Gelo é uma maga que controla o gelo e a neve. Ela é conhecida por sua habilidade de criar paredes de gelo para dividir o campo de batalha e causar dano em área.",
        rota: " Meio",
        classe: " Maga",
        tag: " Gelo, Controle de mapa, Artilheira, Maga"
    },
    {
        nome:"Annie",
        imagem:"https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/220684b035ca0a0dc0d93c17ee058872d7c2a4e9-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao:"Perigosa, mas adoravelmente precoce, Annie é uma pequena maga com imenso poder piromaníaco. Mesmo isolada nas sombras das montanhas ao norte de Noxus, ela causa estranhamento com sua magia. Sua afinidade natural com o fogo já era evidente desde a...",
        rota:" Meio/Suporte",
        classe:" Mago",
        tag:"criança, fogo, uso,",
    },
    {
        nome: "Aphelios",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
        descricao: " O Atendente da Lua é um atirador único que utiliza cinco armas lunares diferentes, cada uma com suas próprias características. Sua mecânica de jogo é complexa e exige habilidade para dominar.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Lunar, Versátil, Complexo"
    },
    {
        nome: "Ashe",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6311d8de67f55496be4886a353372c8da713dade-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Arqueira de Cristal é uma atiradora de longo alcance que pode desacelerar e prender seus inimigos. Sua flecha suprema é capaz de revelar todos os campeões inimigos no mapa.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Arqueira, Gelo, Utilitária"
    },
    {
        nome: "Aurelion Sol",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b665be2e2ae732b20295424957c5e1dccdf07098-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Ascendido das Estrelas é um mago cósmico que manipula as estrelas para atacar seus inimigos. Seu estilo de jogo é único, com grande alcance e capacidade de controlar o campo de batalha.",
        rota: " Meio",
        classe: " Mago",
        tag: "Cósmico, Estrelas, Controle de mapa"
    },
    {
        nome: "Aurora",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2984fc54c2eccfed432ac8a78e90757b574178c4-418x473.jpg?auto=format&fit=fill&q=80&w=418",
        descricao: "Desde que nasceu, Aurora vive com uma habilidade inigualável de viajar entre os reinos dos mortais e dos espíritos. Determinada a aprender mais sobre os habitantes do reino espiritual, ela deixou seu lar para trás com o objetivo de conduzir mais",
        rota: " Top",
        classe: " Mago/Assassino",
        tag: "Atirador, mago, coelho"
    },
    {
        nome: "Azir",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1636aeb5f8d604f7d3336428918146cac62c28e7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Imperador das Areias é um mago que comanda exércitos de soldados de areia. Ele é um líder nato, capaz de manipular o terreno e criar estruturas para defender seus aliados.",
        rota: " Meio",
        classe: " Mago",
        tag: "Imperador, Areia, Controle de mapa, egito"
    },
    {
        nome: "Bardo",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9679cce427dbc633348fc330806543a3ff2509a9-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Vagante Cósmico é um suporte único que explora o mapa em busca de chimes cósmicos. Ele oferece utilidade à sua equipe com suas habilidades de cura, lentidão e deslocamento.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Cósmico, Explorador, Utilitário"
    },
    {
        nome: "Bel'Veth",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/63cbd4e3da7484ffde0130784bcc879b50652f53-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Rainha Vazia é uma assassina monstruosa que emerge das profundezas para devorar tudo em seu caminho. Ela é extremamente ágil e possui um kit de habilidades focado em perseguição e assassinato.",
        rota: " Selva",
        classe: " Assassina",
        tag: "Monstruosa, Vazio, Caçadora"
    },
    {
        nome: "Blitzcrank",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c6db939c90bf8e10b1b9baf77bc99c9bcd2d6981-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Grande Golem de Vapor é um suporte tanque com um gancho icônico que permite puxar os inimigos para perto. Ele é conhecido por sua capacidade de iniciar lutas e proteger seus aliados.",
        rota: " Suporte",
        classe: " Tanque",
        tag: "Gancho, Mecânico, Iniciação"
    },
    {
        nome: "Brand",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6dd885169af0eeb3d662923df8a87973ee13844f-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Piromante é um mago de longo alcance que inflige dano mágico em área e aplica efeitos de queimadura. Seus feitiços são perfeitos para controlar o campo de batalha e eliminar múltiplos inimigos.",
        rota: " Meio",
        classe: " Mago",
        tag: "Fogo, Queimadura, Área de efeito"
    },
    {
        nome: "Braum",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e0a1f3e48f9b6c7356e5efe17b23383ace41f76-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Guardião de Freljord é um suporte tanque que protege seus aliados com um escudo gigante. Ele é conhecido por sua capacidade de absorver dano e impedir que os inimigos se aproximem de seus companheiros de equipe.",
        rota: " Suporte",
        classe: " Tanque",
        tag: "Escudo, Freljord, Protetor"
    },
    {
        nome: "Briar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8828f92a1ed9c410b5be0a5424f95b3a8f641e5a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Criatura da Névoa é uma jungler assassina que emerge das sombras para caçar seus inimigos. Ela é rápida, ágil e possui um kit de habilidades focado em dano em área e perseguição.",
        rota: " Selva",
        classe: " Assassina",
        tag: "Névoa, Caça, Ágil morta de fome"
    },
    {
        nome: "Caitlyn",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/33eb2887813cb07d3b708800b93097a02182e98b-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Xerife de Piltover é uma atiradora de longo alcance com alta precisão e dano. Ela é conhecida por suas armadilhas e sua capacidade de eliminar inimigos a distância.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Xerife, Precisão, Armadilhas"
    },
    {
        nome: "Camille",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/78114603ab0495a965c63da0b1d8d9b1cdced67c-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Acero da Piltover é uma lutadora ágil e letal, especializada em combate corpo a corpo. Suas habilidades permitem que ela se agarre a paredes, pule sobre inimigos e cause grandes quantidades de dano em pouco tempo.",
        rota: " Topo",
        classe: " Lutadora",
        tag: "Ágil, Letal, Mobilidade"
    },
    {
        nome: "Cassiopeia",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e6193f3ac760c4cf27a99c4adc0c116339c12c5a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Serpente da Névoa é uma maga que controla veneno e petrificação. Seus ataques envenenam os inimigos, causando dano ao longo do tempo e os deixando vulneráveis.",
        rota: " Meio",
        classe: " Maga",
        tag: "Veneno, Petrificação, Controle de multidão"
    },
    {
        nome: "Cho'Gath",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6b0fe9a40e625b72d4b97ee108a221abc7aa24fb-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Vazio Voraz é um monstro colossal que cresce ao devorar seus inimigos. Ele é um tanque resistente com habilidades de área de efeito devastadoras.",
        rota: " Topo",
        classe: " Tanque",
        tag: "Monstro, Vazio, Crescimento"
    },
    {
        nome: "Corki",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a01abe18e557c86721e8725ac36337a8839ac926-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Yordle Pilota é um atirador versátil que combina ataques à distância com explosões poderosas. Sua arma principal é um canhão que dispara mísseis e bombas.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Yordle, Explosivo, Versátil"
    },
    {
        nome: "Darius",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f606418621ccec569ab1ec87e1084dfd8e45e5f1-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Hance de Noxus é um guerreiro brutal e poderoso, especializado em combate corpo a corpo. Suas habilidades permitem que ele agarre os inimigos, os arraste para perto e cause grandes quantidades de dano.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Noxus, Brutal, Força"
    },
    {
        nome: "Diana",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f7ad13d4cc98803ddfcf53c008a1a102b8e0f1a7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Caçadora da Lua é uma lutadora ágil que luta com uma foice lunar. Seus ataques são poderosos e ela pode se teletransportar para a lua para escapar do perigo.",
        rota: "Selva",
        classe: "Lutadora",
        tag: "Lua, Ágil, Teletransporte"
    },
    {
        nome: "Draven",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/374ea4cb505b1288172fd93d92064af5b7cbc298-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " O Glorioso é um atirador arrogante e extrovertido que adora o espetáculo. Seus eixos voadores retornam para ele, permitindo que ele cause dano extra e mantenha o ritmo da luta.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Arrogante, Eixos, Showman"
    },
    {
        nome: "Dr. Mundo",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3da8fcf480e236197eefa038f6f91a8e6ea6a451-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Madman of Zaun é um lutador tanque que se regenera rapidamente e é resistente a dano. Suas habilidades permitem que ele se cure, cause dano em área e persiga seus inimigos.",
        rota: " Topo, Selva",
        classe: " Lutador, Tanque",
        tag: " Zaun, Regeneração, Louco"
    },
    {
        nome: "Ekko",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f46b8d63d3ed969469ab6c3d3e5827a70a6e826a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Menino do Tempo é um assassino ágil que pode manipular o tempo. Suas habilidades permitem que ele viaje no tempo, atordoar inimigos e causar grandes quantidades de dano em pouco tempo.",
        rota: " eio, Selva",
        classe: " Assassino",
        tag: "Tempo, Ágil, Manipulador"
    },
    {
        nome: "Elise",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9d7c852f03f09bd32aab843a98f3a4c371afa3ba-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Rainha Aranha é uma jungler versátil que pode se transformar em uma aranha gigante. Ela é ágil, pode escalar paredes e causar grandes quantidades de dano em área.",
        rota: " Selva",
        classe: " Assassina",
        tag: "Aranha, Versátil, Escalada"
    },
    {
        nome: "Evelynn",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e5cf98936e8b47a7909248518d7737dd610a137b-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Demônio da Luxúria é uma assassina que se esconde nas sombras, pronta para atacar seus inimigos desprevenidos. Suas habilidades permitem que ela se torne invisível, aplique veneno e cause grandes quantidades de dano em alvos isolados.",
        rota: " Selva",
        classe: " Assassina",
        tag: " Sombras, Veneno, Emboscada"
    },
    {
        nome: "Ezreal",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ecec8b919f053c1dd99602a06abe9b709ce14d5a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Explorador Pródigo é um atirador versátil que combina alta mobilidade com dano mágico. Seu kit de habilidades permite que ele se movimente pelo campo de batalha com facilidade e cause dano a vários inimigos ao mesmo tempo.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Explorador, Mobilidade, Dano mágico, manopla"
    },
    {
        nome: "Fiddlesticks",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/46fdbfc759955ab91ca8afb10b843c9d3593bb7b-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Espantalho é um mago aterrorizante que se esconde nas sombras e assusta seus inimigos. Suas habilidades permitem que ele invoque corvos, cause dano em área e aplique efeitos de medo.",
        rota: " Selva",
        classe: " Mago",
        tag: " Medo, Sombras, Invocação"
    },
    {
        nome: "Fiora",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e76d371dc28d1bc79a3eb66df8597c12354cc69e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Grande Duelista é uma lutadora elegante e mortal, especializada em combate corpo a corpo. Suas habilidades permitem que ela desvie de ataques, encontrar os pontos vitais de seus inimigos e causar grandes quantidades de dano.",
        rota: " Topo",
        classe: " Lutadora",
        tag: "Duelista, Elegância, Esquiva"
    },
    {
        nome: "Fizz",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Pescador das Ruas é um assassino ágil e imprevisível, que se move pela água com facilidade. Suas habilidades permitem que ele pule sobre seus inimigos, cause dano elétrico e escape do perigo.",
        rota: " Meio, Selva",
        classe: " Assassino",
        tag: " Ágil, Elétrico, Aquático, peixe"
    },
    {
        nome: "Galio",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28f2a8ca2e4422674275c5e2d077d6cb4f143d0c-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Colosso de Stone é um tanque resistente e poderoso, capaz de proteger seus aliados e causar dano em área. Suas habilidades permitem que ele se transforme em uma estátua e absorva dano, além de lançar seus inimigos para o ar.",
        rota: " Topo, Suporte",
        classe: " Tanque",
        tag: "Colosso, Pedra, Proteção"
    },
    {
        nome: "Gangplank",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9cb7c305070bc7ae1885483695d5272f85ee0c59-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Rei dos Piratas é um atirador brutal e implacável, que comanda um exército de piratas. Suas habilidades permitem que ele marque seus inimigos, explodir barris de pólvora e causar grandes quantidades de dano.",
        rota: " Topo",
        classe: " Atirador",
        tag: " Pirata, Pólvora, Brutal, laranja"
    },
    {
        nome: "Gnar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5c0a5cedf2e21d887e83674d1c09099633e3cb4e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Mini-Mundo é um lutador único que pode alternar entre duas formas: uma pequena e ágil e outra grande e poderosa. Suas habilidades permitem que ele pule sobre seus inimigos, cause dano em área e transforme o campo de batalha.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Transformação, Ágil, Poderoso"
    },
    {
        nome: "Gragas",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/804047489514e31ac95e7d74878a167327021f99-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " O Barril Explosivo é um lutador tanque que adora uma boa bebida. Suas habilidades permitem que ele role sobre seus inimigos, cause dano em área e aplique efeitos de lentidão.",
        rota: " Selva, Topo",
        classe: " Tanque",
        tag: "Barril, Bebida, Área de efeito"
    },
    {
        nome: "Graves",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b82361d8b1b9a7788dce0c4604cad844bb68a095-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Pistoleiro de Harma é um atirador versátil que combina ataques à distância com explosões poderosas. Sua arma principal é uma shotgun que causa dano em área e ele possui alta mobilidade.",
        rota: " Selva, Bot",
        classe: " Atirador",
        tag: "Pistoleiro, Explosivo, Mobilidade"
    },
    {
        nome: "Gwen",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dde9ede0cd3013a28dc29b98d25caf3e4b79348f-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Criatura de Encosto é uma lutadora que usa tesouras gigantes para cortar seus inimigos. Ela é frágil, mas possui alta mobilidade e pode causar grandes quantidades de dano em pouco tempo.",
        rota: " Topo, Meio",
        classe: " Lutadora",
        tag: "Tesouras, Frágil, Mobilidade"
    },
    {
        nome: "Hecarim",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1be0f0e944bc9be2c15ebc782a3f69ea9e754499-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Espectro da Guerra é um cavaleiro espectral que carrega seus inimigos e causa dano em área. Ele é um tanque resistente com alta mobilidade e pode iniciar lutas em equipe.",
        rota: " Selva",
        classe: " Lutador, Tanque",
        tag: "Espectro, Cavaleiro, Carga"
    },
    {
        nome: "Heimerdinger",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8201aebd324836be730d1be4dd9d5d2e7aa4004c-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Grande Inventor é um mago que protege seus aliados com torres e armadilhas. Ele é um mestre em controle de mapa e pode causar grandes quantidades de dano a longo alcance.",
        rota: " Meio, Suporte",
        classe: " Mago",
        tag: " Inventor, Torres, Armadilhas"
    },
    {
        nome: "Hwei",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/305ea48a1b1818c660b7e195ff47b097733031c7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Hwei é um pintor melancólico que cria obras de arte geniais para combater os criminosos de Ionia e trazer conforto às vítimas deles. Por trás de sua melancolia, esconde-se uma mente emocionalmente dilacerada, assombrada pelas visões vibrantes de sua.",
        rota: " Meio",
        classe: " Mago",
        tag: "pintor, jhin, dificil, dano"
    },
    {
        nome: "Illaoi",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da1325eb336bcf34ab3f83d554d34e76997eea06-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Oráculo de Nautilus é uma lutadora que invoca tentáculos gigantes para atacar seus inimigos. Ela é uma força a ser considerada em lutas individuais e pode causar grandes quantidades de dano físico.",
        rota: " Topo",
        classe: " Lutadora",
        tag: "Tentáculos, Oráculo, Força"
    },
    {
        nome: "Irelia",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/baa25073a0560dbfffa5fafa9eeebe3bd27c4206-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Dançarina das Lâminas é uma lutadora ágil e elegante que dança entre seus inimigos, causando grandes quantidades de dano. Suas habilidades permitem que ela se mova rapidamente pelo campo de batalha e evite os ataques inimigos.",
        rota: " Topo, Meio",
        classe: " Lutadora",
        tag: "Dançarina, Lâminas, Ágil"
    },
    {
        nome: "Ivern",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b4190dfb25a1248a60ae7ce362edfdf25638a497-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Amigo da Floresta é um suporte único que promove o crescimento da selva e protege seus aliados. Ele não causa muito dano, mas pode curar e proteger seus companheiros de equipe.",
        rota: " Suporte/Jungle",
        classe: " Mago",
        tag: "Floresta, Crescimento, Protetor"
    },
    {
        nome: "Janna",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/51ae290a3a5b3ef613d1fbc52cb3d155c0491603-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Tempestade Abençoada é um suporte que controla o vento e protege seus aliados. Ela pode criar ventos fortes para empurrar os inimigos para longe e criar escudos para proteger seus companheiros de equipe.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Vento, Escudo, Proteção"
    },
    {
        nome: "Jarvan IV",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b0b935f8a12343ac6e0c9c9c0eb206b187a59122-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Príncipe de Demacia é um lutador tanque que pode iniciar lutas em equipe e proteger seus aliados. Suas habilidades permitem que ele crie uma prisão de ouro, lançar seus inimigos para o ar e causar grandes quantidades de dano.",
        rota: " Selva, Topo",
        classe: " Lutador, Tanque",
        tag: "Príncipe, Prisão, Iniciação"
    },
    {
        nome: "Jax",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/241bbf174163f115aff498875f1aeb1ea1a65dcc-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Mestre de Armas é um lutador ágil e versátil que utiliza uma lâmina letal. Suas habilidades permitem que ele desvie de ataques, contra-atacar e causar grandes quantidades de dano em um curto período de tempo.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Ágil, Versátil, Contra-ataque"
    },
    {
        nome: " Jayce",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5c281ddba910f68b6b3271262eb60ec5adce09e9-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Forjador de Luz é um lutador híbrido que pode alternar entre duas formas: uma de longo alcance, com um martelo, e outra de curto alcance, com uma pistola. Sua versatilidade o torna um campeão muito poderoso.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Versátil, Híbrido, Martelo e Pistola"
    },
    {
        nome: "Jhin",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c7bcc3ab59371041a1035c0447fba1b4d3253d9e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Virtuoso é um atirador psicopata que adora a arte da morte. Seus ataques são precisos e ele possui um kit de habilidades único, que permite que ele marque seus inimigos e execute-os de forma teatral.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Psicopata, Artista, Precisão"
    },
    {
        nome: "Jinx",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e106881ea1263e6d13188d5d399c5b1f72849a3d-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde",
        rota: " bot",
        classe: " Atirador",
        tag: "louca, lunatica, missel"
    },
    {
        nome: "Kai'Sa",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/516bc1d22979ed9a290321b3474363875a3c7b10-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Filha do Vazio é uma atiradora que evolui ao longo da partida, adaptando-se ao estilo de jogo de seus adversários. Suas habilidades permitem que ela se camuflar, causar dano em área e perseguir seus inimigos.",
        rota: " Bot",
        classe: " Atirador",
        tag: " Vazio, Evolução, Adaptação"
    },
    {
        nome: "Kalista",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2dc0f005113d17259f5a252f673b48195175c6ab-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Espada Celestial é uma atiradora que se liga a um aliado para aumentar seu poder de ataque. Ela é especializada em combate em equipe e pode causar grandes quantidades de dano aos inimigos.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Espada, Ligação, Equipe"
    },
    {
        nome: "Karma",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6070fe3be64810d5109a53c9812e1937202e45d8-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Mestra Iluminada é um suporte versátil que pode alternar entre duas formas: uma de longo alcance, com habilidades de dano mágico, e outra de curto alcance, com habilidades de cura e proteção.",
        rota: " Suporte",
        classe: " Suporte",
        tag: " Versátil, Cura, Proteção"
    },
    {
        nome: "Karthus",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7c98b1b12c4473d305c793622b03c53e31dc93eb-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Regente da Morte é um mago de longo alcance que pode lançar feitiços de qualquer lugar do mapa. Ele é especializado em causar dano em área e pode acabar com lutas em equipe com suas habilidades poderosas.",
        rota: " Meio",
        classe: " Mago",
        tag: "Morte, Longo alcance, Área de efeito, global"
    },
    {
        nome: "Kassadin",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8c1342c1dc213137f25d3553a04861c17ad63cca-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Filho das Estrelas é um assassino que se especializa em perseguir inimigos e eliminá-los rapidamente. Suas habilidades permitem que ele se teletransportar através das paredes e aumentar sua resistência mágica.",
        rota: " Meio",
        classe: " Assassino",
        tag: "Estrelas, Teletransporte, Perseguir"
    },
    {
        nome: "Katarina",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3a55002a6776651265ec7b8e6e9276cee39204f1-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Dama da Lâmina é uma assassina ágil e letal, que dança entre seus inimigos e os elimina com seus shurikens. Ela é especializada em combate em área e pode causar grandes quantidades de dano em pouco tempo.",
        rota: " Meio",
        classe: " Assassina",
        tag: "Ágil, Shurikens, Combate em área"
    },
    {
        nome: "Kayle",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/71365704a7f4d83252b10fe4affb020225100ce3-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Justiciera é uma campeã híbrida que começa como um mago e evolui para uma lutadora, ganhando força e velocidade ao longo da partida.",
        rota: " Topo",
        classe: " Híbrida (Mago/Lutadora)",
        tag: "Justiciera, Evolução, Híbrida, juiza"
    },
    {
        nome: "Kayn",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a926bba66a7fe3b1c207b790fd97075939ce58ee-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Sombra que Anda é um assassino que se transforma em uma das duas formas: o Assassino das Sombras ou o Rei das Sombras. Sua forma final depende de como ele mata os campeões inimigos.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Sombra, Transformação, Assassino"
    },
    {
        nome: "Kennen",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afcd9c81e4f3a9a86bc43bd9e6fb457dac1f5fe8-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " A Trovão Andante é um assassino que lança shurikens e eletrifica seus inimigos. Ele é conhecido por sua alta mobilidade e capacidade de causar dano em área.",
        rota: " Meio, Topo",
        classe: " Assassino",
        tag: "Trovão, Shuriken, Mobilidade"
    },
    {
        nome: "Kha'Zix",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/be64a88691695dc3b5d81f4bbbe32a617957930c-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Vazio Voraz é um assassino que evolui adaptando-se ao seu estilo de jogo. Ele pode escolher evoluir diferentes aspectos de suas habilidades, tornando-o um caçador ainda mais letal.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Vazio, Evolução, Caçador"
    },
    {
        nome: "Kindred",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/81ea60b4f073843586452253d30d1c3826759c21-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Alma da Caça é uma dupla de campeões: Wolf, o caçador, e Lamb, a guia. Juntos, eles caçam os campeões inimigos e marcam os alvos para a morte.",
        rota: " Selva",
        classe: " Atirador",
        tag: "Caça, Alma, Dupla"
    },
    {
        nome: "Kled",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e7fca39b04ecc83ff3e96b281aa39b385cd5faa3-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Caçador de Gigantes é um lutador que monta em um pequeno dragão chamado Skaarl. Quando separado de Skaarl, Kled fica mais fraco, mas ganha em mobilidade.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Caçador, Dragão, Mobilidade"
    },
    {
        nome: "Kog'Maw",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dce2ccb33c14f6598cd8509fa5c45cefe2c37222-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Boca do Vazio é um atirador de longo alcance que cospe ácido corrosivo em seus inimigos. Ele é fraco em combate corpo a corpo, mas pode causar grandes quantidades de dano à distância.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Vazio, Ácido, Longo alcance"
    },
    {
        nome: "K'Sante",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a0273729f9d2d9710089eea19716cbf86b455e1f-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Onislash é um lutador tanque que pode alternar entre duas formas: uma ágil e outra poderosa. Ele é conhecido por sua resistência e capacidade de iniciar lutas em equipe.",
        rota: " Selva, Topo",
        classe: " Lutador, Tanque",
        tag: "Onislash, Transformação, Resistente"
    },
    {
        nome: "LeBlanc",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/069ada8fd3eb1ee76d0b8f579655e99dddeb6874-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Sedutora é uma maga que cria ilusões de si mesma e engana seus inimigos. Ela é conhecida por sua alta mobilidade e capacidade de causar dano explosivo.",
        rota: " Meio",
        classe: " Maga",
        tag: " Ilusão, Enganação, Mobilidade"
    },
    {
        nome: "Lee Sin",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ce638264ec40c028d3355852192d8feeb969880e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " O Monge Cego é um lutador ágil e poderoso que utiliza artes marciais para derrotar seus inimigos. Ele é conhecido por sua alta mobilidade e capacidade de iniciar lutas em equipe.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Monge, Ágil, Artes marciais, sego"
    },
    {
        nome: "Leona",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ca5514aba585f54d0f193189d5be105a3b2bc510-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Radiante Solar é uma suporte tanque que inicia as lutas com seus feitiços de luz e prende os inimigos em um raio solar.",
        rota: " Suporte",
        classe: " Tanque",
        tag: "Sol, Iniciadora, Proteção"
    },
    {
        nome: "Lillia",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",
        descricao: "A Sonhadora da Floresta é uma jungler que usa a magia da natureza para curar aliados e prejudicar inimigos. Ela é conhecida por sua mobilidade e por invocar criaturas da floresta.",
        rota: " Selva",
        classe: " Lutadora",
        tag: "Floresta, Cura, Mobilidade"
    },
    {
        nome: "Lissandra",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/036bd75b51eb3ca4c1bae0054642ee2af5543b8a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Bruxa da Gelo é uma maga que controla o gelo e a neve. Ela é conhecida por seus feitiços de longo alcance e por sua capacidade de prender os inimigos em blocos de gelo.",
        rota: " Meio",
        classe: " Maga",
        tag: "Gelo, Controle de multidão, Longo alcance"
    },
    {
        nome: "Lucian",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8ed4651535ff27aa19f06215fd608057c218f7e6-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Purificador é um atirador que usa duas pistolas para eliminar seus inimigos a distância. Ele é conhecido por sua alta mobilidade e por sua capacidade de causar grandes danos em curto espaço de tempo.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Pistolas, Mobilidade, Dano explosivo"
    },
    {
        nome: "Lulu",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fc33bd8b0b190bb820bbfc287f83836692b5c2c7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Fada da Floresta é uma suporte que transforma seus aliados em animais fofinhos e protege-os com seus feitiços mágicos.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Fada, Transformação, Proteção"
    },
    {
        nome: " Lux",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4238fe90dd74b08a6e8172c31e3b1ae609afb3cd-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "A Dama da Luz é uma maga de longo alcance que usa a luz para atacar seus inimigos. Ela é conhecida por seus feitiços de área de efeito e por sua capacidade de prender os inimigos.",
        rota: " Meio",
        classe: " Maga",
        tag: "Luz, Longo alcance, Área de efeito"
    },
    {
        nome: "Malphite",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afe536f3bd50d6f4862cc62dda9df824190a46f3-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Monólito de Ferro é um tanque resistente que inicia as lutas com um golpe sísmico devastador. Ele é conhecido por sua alta defesa e por sua capacidade de absorver danos.",
        rota: " Topo",
        classe: " Tanque",
        tag: " Pedra, Resistente, Iniciador"
    },
    {
        nome: "Malzahar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/416cb8cd379b7bb71a2144c0ede5295f72d49cbc-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Profeta do Vazio é um mago que invoca criaturas do Vazio para atacar seus inimigos. Ele é conhecido por seus feitiços de controle de multidão e por sua capacidade de causar danos em área.",
        rota: " Meio",
        classe: " Mago",
        tag: "Vazio, Invocação, Controle de multidão"
    },
    {
        nome: " Maokai",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55afb8c9aaf08c143540a52f623d86fa5ec98e10-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Tormento da Árvore é um tanque que usa raízes e galhos para prender e danificar seus inimigos. Ele é conhecido por sua alta resistência e por sua capacidade de controlar o campo de batalha.",
        rota: " Topo, Selva",
        classe: " Tanque",
        tag: "Árvore, Raízes, Controle de multidão"
    },
    {
        nome: "Master Yi",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6843e7b0592caf9026f032161ddab664148a0232-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Wuju é um assassino ágil que usa espadas para eliminar seus inimigos rapidamente. Ele é conhecido por sua alta mobilidade e por sua capacidade de causar grandes danos em um curto período de tempo.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Espadas, Mobilidade, Dano explosivo"
    },
    {
        nome: "Milio",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28bcae8793c10de4c2e0fc85ff71b10d6d880d74-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um suporte protetor que usa a magia do fogo para criar escudos e curar seus aliados. É conhecido por sua alta mobilidade e por suas habilidades de cura em área.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Fogo, Cura, Proteção"
    },
    {
        nome: "Miss Fortune",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fb6f4d62835fa6e7ba97055baab49408c8c89273-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma atiradora glamourosa e letal que utiliza duas pistolas para eliminar seus inimigos. É conhecida por seus ataques em área e por sua ultimate que pode virar o jogo.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Pistolas, Glamourosa, Ataques em área"
    },
    {
        nome: "Mordekaiser",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1b94f6681d951a6618b4c2db1cc93825af1422eb-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um monstro de ferro e fogo que se alimenta da alma de seus inimigos. É um tanque resistente que pode causar grandes danos e arrastar seus inimigos para sua própria dimensão.",
        rota: " Topo",
        classe: " Lutador, Tanque",
        tag: "Ferro, Fogo, Imortalidade"
    },
    {
        nome: " Morgana",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5ba95b4c6faa6bc845471459aa298cb51142bfa7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Uma maga sombria que usa a magia negra para prender e torturar seus inimigos. É conhecida por seus feitiços de controle de multidão e por sua capacidade de causar danos em área.",
        rota: " Suporte, Meio",
        classe: " Maga",
        tag: "Sombras, Tortura, Controle de multidão"
    },
    {
        nome: "Naafiri",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e1edb620403defb893d04f7e8aedec554ec8bf52-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma assassina que controla uma matilha de sombras. É conhecida por sua alta mobilidade e por sua capacidade de perseguir e eliminar seus inimigos.",
        rota: " Selva",
        classe: " Assassina",
        tag: " Sombras, Mobilidade, Perseguir"
    },
    {
        nome: "Nami",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2988b76577008ad86a492a18ab5d206580abe21e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma suporte que controla as marés e cura seus aliados. É conhecida por seus feitiços de cura em área e por sua capacidade de criar ondas para controlar o ritmo da luta.",
        rota: " Suporte",
        classe: " Suporte",
        tag: " Maré, Cura, Controle de multidão"
    },
    {
        nome: "Nasus",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7ad20e92d0da55bcf2fca1a342774841bfa65383-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um cão de guerra que se torna mais forte a cada inimigo que mata. É conhecido por sua alta resistência e por seu dano físico escalável.",
        rota: " Topo",
        classe: " Lutador, Tanque",
        tag: "Cão de guerra, Escalável, Resistente"
    },
    {
        nome: "Nautilus",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/624a37702a1e54b5f239a40157d42f32dd853b33-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um antigo guardião do mar que usa um âncora para prender e arrastar seus inimigos. É conhecido por sua alta resistência e por sua capacidade de iniciar lutas em equipe.",
        rota: " Suporte",
        classe: " Tanque",
        tag: "Mar, Âncora, Iniciador"
    },
    {
        nome: "Neeko",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/19bcf3f8a2ef5006235be5b9c35931f323a03620-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma yordle que pode se transformar em qualquer campeão aliado. É conhecida por sua capacidade de enganar os inimigos e por seus feitiços de controle de multidão.",
        rota: " Meio, Suporte",
        classe: " Maga",
        tag: "Yordle, Transformação, Enganação"
    },
    {
        nome: "Nidalee",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/32b6045d73da3659586c80a1b043ba3975dc97ed-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma caçadora que pode alternar entre uma forma humana e uma forma felina. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos tanto à distância quanto em combate corpo a corpo.",
        rota: " Selva",
        classe: " Lutadora, Atiradora",
        tag: "Felina, Transformação, Mobilidade"
    },
    {
        nome: "Nilah",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/22d46f952d019cb7500e4a952f93e67c9d7b5377-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma atiradora ágil e versátil que utiliza uma lâmina de água para atacar seus inimigos e curar seus aliados.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Água, Ágil, Cura"
    },
    {
        nome: "Nocturne",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7b2172c259dcf0f2518b4395d466f6e2907d52b5-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um assassino que aterroriza seus inimigos com pesadelos. É conhecido por sua alta mobilidade e por sua capacidade de surpreender os adversários.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Pesadelos, Mobilidade, Surpreendente"
    },
    {
        nome: "Nunu e Willump",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6d9fd040ceab41dbe755f4ac1f6e11aa82548c1e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma dupla de junglers formada por um yeti e um menino. Nunu é um tanque que causa dano em área, enquanto Willump é um companheiro que ajuda a controlar a selva.",
        rota: " Selva",
        classe: " Lutador, Tanque",
        tag: "Yeti, Selva, Amizade"
    },
    {
        nome: "Olaf",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0c89034a2608b5d628e3bf8cfedf655644e41391-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um berserker bárbaro que ignora a dor e se torna mais forte à medida que recebe dano. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: " Selva, Topo",
        classe: " Lutador",
        tag: "Bárbaro, Berserker, Resistência"
    },
    {
        nome: "Orianna",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0a53fcc2e938af2fd80626142c34ce7d7a10802a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "ma maga que controla uma esfera mágica e causa danos em área. É conhecida por sua alta mobilidade e por sua capacidade de prender os inimigos.",
        rota: " Meio",
        classe: " Maga",
        tag: "Esfera, Mobilidade, Controle de multidão"
    },
    {
        nome: "Ornn",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4f7095a3826333552972bb0ebc30d8db4451e38e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um titã que forja armas e armaduras para seus aliados. É um tanque resistente que pode causar grandes danos e controlar o campo de batalha.",
        rota: " Topo",
        classe: " Tanque",
        tag: "Titã, Forja, Controle de mapa"
    },
    {
        nome: "Pantheon",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b987382954c9a6acfd90661dc553964f6488c7f9-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um guerreiro asgardiano que desce do céu para punir seus inimigos. É um lutador tanque que pode iniciar lutas em equipe e causar grandes danos.",
        rota: " Topo, Selva",
        classe: " Lutador, Tanque",
        tag: "Asgardiano, Iniciador, Dano"
    },
    {
        nome: "Poppy",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2fea45326222c12a1520479c7fe1b171eaf95d10-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma yordle guerreira que usa um martelo gigante para esmagar seus inimigos. É conhecida por sua alta resistência e por sua capacidade de deslocar os inimigos.",
        rota: " Topo",
        classe: " Lutadora, Tanque",
        tag: "Yordle, Martelo, Resistência"
    },
    {
        nome: "Pyke",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/26db5e36b7212a5a6ea48ac39d5a686610332a43-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um assassino que assombra as profundezas do mar. É conhecido por sua alta mobilidade e por sua capacidade de eliminar rapidamente seus alvos.",
        rota: " Suporte",
        classe: " Assassino",
        tag: "Mar, Assassino, Mobilidade"
    },
    {
        nome: "Qiyana",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c1455e502012e55c5746423efae861508d5bdff2-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma assassina que usa a natureza ao seu redor para adaptar seu estilo de jogo. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos.",
        rota: " Meio, Selva",
        classe: " Assassina",
        tag: "Natureza, Adaptação, Mobilidade"
    },
    {
        nome: "Quinn",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ff9dea566dd446cc89a01ba1527e0f74d48ca170-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma atiradora que caça com seu falcão Valor. É conhecida por sua alta mobilidade e por sua capacidade de atacar os inimigos por trás.",
        rota: " Topo, Bot",
        classe: " Atiradora",
        tag: "Falcão, Mobilidade, Ataque por trás"
    },
    {
        nome: "Rakan",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/38173b98170a293d57659b7be573350f12442b91-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um suporte charmoso que usa a magia para proteger e fortalecer seus aliados. É conhecido por sua alta mobilidade e por suas habilidades de cura e proteção.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Charmoso, Mobilidade, Proteção"
    },
    {
        nome: "Rammus",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1457af1214e9d3992048a92fc576db2705e0f685-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma tartaruga espinhosa que se enrola em uma bola para se proteger e atacar seus inimigos. É conhecido por sua alta resistência e por sua capacidade de desacelerar os inimigos.",
        rota: " Selva",
        classe: " Tanque",
        tag: "Tartaruga, Resistência, Desaceleração"
    },
    {
        nome: "Rek'Sai",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/617ff36121eb32334f5eadecb6a74da5c46e7041-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um monstro do subsolo que escava túneis para surpreender seus inimigos. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: " Selva",
        classe: " Lutadora",
        tag: " Subsolo, Mobilidade, Surpreendente"
    },
    {
        nome: "Rell",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/599767a99c188ea397c933bcb67743e2fab96b78-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma guerreira que controla o magnetismo e a gravidade. É conhecida por sua alta resistência e por sua capacidade de prender e arrastar seus inimigos.",
        rota: " Suporte",
        classe: " Lutadora, Tanque",
        tag: "Magnetismo, Gravidade, Controle de multidão"
    },
    {
        nome: "Renata Glasc",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f507ceaba050ab9c2b939fcb44935d49f7e80384-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma química que manipula a química para controlar a mente de seus inimigos. É conhecida por suas habilidades de controle de multidão e por sua capacidade de fortalecer seus aliados.",
        rota: " Suporte",
        classe: " Maga",
        tag: " Química, Controle de multidão, Fortalecimento"
    },
    {
        nome: "Renekton",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d4650df7a5a7c35394ff0f861838f45028ddc247-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um crocodilo guerreiro que luta com fúria. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Crocodilo, Fúria, Resistência"
    },
    {
        nome: "Rengar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e75f1fa24a5acdd76e21594dd42c8728fe1a71be-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um caçador que persegue suas presas com ferocidade. É conhecido por sua alta mobilidade e por sua capacidade de eliminar rapidamente seus alvos.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Caçador, Ferocidade, Mobilidade"
    },
    {
        nome: "Riven",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0b9fbf46f30aa38d11f61d29430547279368c06a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma exilada que luta com uma espada mágica. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: " Topo",
        classe: " Lutadora",
        tag: "Espada, Mobilidade, Dano"
    },
    {
        nome: "Rumble",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a02b3b301b201fcf2633cefd676ca609a25a7911-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um yordle mecânico que utiliza armas e armaduras para lutar. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em área.",
        rota: "Topo",
        classe: "Lutador, Mago",
        tag: "Yordle, Mecânico, Área de efeito"
    },
    {
        nome: "Ryze",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e6b174c92f96fb06842f4aac2e417d0e27707c27-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um mago poderoso que teleporta entre as ilhas, lançando poderosas magias.",
        rota: " Meio",
        classe: " Mago",
        tag: "Teleporte, Magia, Controle de mapa"
    },
    {
        nome: "Samira",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",
        descricao: "Uma atiradora que aumenta seu estilo com cada abate, tornando-se mais poderosa.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Estilo, Abates, Dano explosivo"
    },
    {
        nome: "Sejuani",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3d0c94dabcda10df81fac647ad5fda6cf16b1a42-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma guerreira do Freljord que monta um javali gigante e causa caos no campo de batalha.",
        rota: " Selva",
        classe: " Lutadora, Tanque",
        tag: "Freljord, Javali, Controle de multidão"
    },
    {
        nome: "Senna",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/719125ca9f21739ccb8d1a1fae91d7c943fe79dc-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma atiradora espiritual que coleta almas para fortalecer seus ataques.",
        rota: " Suporte, Bot",
        classe: " Atiradora/Suporte",
        tag: "Almas, Espiritual, Longo alcance"
    },
    {
        nome: "Seraphine",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",
        descricao: "Uma ídolo pop que usa sua música para curar e fortalecer seus aliados.",
        rota: " Suporte, Meio",
        classe: " Maga",
        tag: "Música, Cura, Suporte"
    },
    {
        nome: "Sett",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",
        descricao: "Um lutador implacável que usa sua força bruta para dominar seus oponentes.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Força bruta, Lutador, Resistência"
    },
    {
        nome: "Shaco",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e1e9185dbab454137bd62ae958a36856b5896690-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um palhaço psicopata que usa clones e armadilhas para aterrorizar seus inimigos.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Palhaço, Clones, Armadilhas"
    },
    {
        nome: "Shen",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28af24681f499bec551b898caa925c5ca18e84a7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um guerreiro que protege seus aliados e desafia seus inimigos para um duelo.",
        rota: " Topo",
        classe: " Tanque",
        tag: "Protetor, Duelo, Teleporte"
    },
    {
        nome: "Shyvana",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/49279f32616736aca748778c99c84bd2182f6695-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma meio-dragão que pode se transformar em um dragão para causar caos no campo de batalha.",
        rota: " Selva, Topo",
        classe: " Lutadora",
        tag: "Dragão, Transformação, Dano em área"
    },
    {
        nome: "Singed",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ebe0ad435583fd9e32c44bc0bda05c126f95b496-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um alquimista louco que deixa um rastro de veneno por onde passa.",
        rota: " Topo",
        classe: " Tanque",
        tag: "Alquimista, Veneno, Perseguidor"
    },
    {
        nome: "Sion",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/523fbe02a6445674f3c7f8895e7433ede0e7fbdf-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um monstro indestrutível que retorna à vida para lutar novamente.",
        rota: " Topo",
        classe: " Tanque",
        tag: "Imortal, Resistência, Dano em área"
    },
    {
        nome: "Sivir",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cae117f8c64d4354c92d32b2f02a44969c11bca0-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma atiradora mercenária que usa um bumerangue para atacar seus inimigos.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Bumerangue, Mercenária, Mobilidade"
    },
    {
        nome: "Skarner",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c17a66d1b5d217b3c38e9bcad58a298bc956429d-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um cristaliano que protege seu povo e ataca seus inimigos com suas garras afiadas.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Cristaliano, Garras, Mobilidade"
    },
    {
        nome: "Smolder",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7cef5337e65fb08e2785896861c5ea76f983bea8-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Escondido entre os penhascos escarpados da fronteira noxiana e sob o olhar atento da mãe, um jovem dragão está aprendendo o que significa ser herdeiro da linhagem dos dragões imperiais de Camavor. Brincalhão e ansioso por ser grande, Smolder busca",
        rota: " Bot",
        classe: " Atirador",
        tag: "Dragão, filhote"
    },
    {
        nome: "Sona",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8f0b8b20ffcdab53ab33314cd82ea62c2f4cd902-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma maga que usa a música para curar e fortalecer seus aliados.",
        rota: " Suporte",
        classe: " Maga",
        tag: " Música, Cura, Suporte"
    },
    {
        nome: "Soraka",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8a422facc9a83803afca14623ec9da507e07ee35-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma estrela que desceu à Terra para curar os feridos.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Estrela, Cura, Proteção, banana"
    },
    {
        nome: "Swain",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d01f2a33d48dc88ed4bf21adea7eb664b528e526-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um general noxiano que controla corvos e manipula a morte.",
        rota: " Meio, Topo",
        classe: " Mago",
        tag: "Corvos, Morte, Controle de multidão"
    },
    {
        nome: "Sylas",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6b3112e88d1135967c763e6362e7cfab680f58eb-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um rebelde que rouba os poderes de seus inimigos.",
        rota: " Meio",
        classe: " Assassino",
        tag: "Rebelde, Roubo de habilidades, Mobilidade"
    },
    {
        nome: "Syndra",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/757c0c3fffc811c1751f19b4ccbe7340becf0e81-418x473.jpg?auto=format&fit=fill&q=80&w=418",
        descricao: "Uma maga que controla esferas de energia para atacar seus inimigos.",
        rota: " Meio",
        classe: " Maga",
        tag: "Esferas, Energia, Controle de multidão"
    },
    {
        nome: "Tahm Kench",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9ed7b9525c01d12ee744bbf3274803ce3f5299b2-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um monstro aquático que pode engolir aliados e inimigos.",
        rota: " Suporte, Topo",
        classe: " Tanque",
        tag: "Aquático, Engolir, Proteção"
    },
    {
        nome: "Taliyah",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d0e8f46f42002ca24b7a30f8a4d465d5778e90ea-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma xamã que controla a terra para criar paredes e lançar rochas.",
        rota: " Meio, Selva",
        classe: " Maga",
        tag: "Terra, Paredes, Mobilidade"
    },
    {
        nome: "Talon",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b25f6325e2f6f0e35945b2d14edd792044e95beb-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um assassino que ataca do escuro e elimina seus alvos rapidamente.",
        rota: " Meio, Selva",
        classe: " Assassino",
        tag: "Escuridão, Assassino, Mobilidade"
    },
    {
        nome: "Taric",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bb1089300ccc01a26cfaeb516f139344971827fa-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um protetor que usa cristais para fortalecer seus aliados e proteger a justiça.",
        rota: " Suporte",
        classe: " Tanque",
        tag: "Cristais, Proteção, Aliados"
    },
    {
        nome: "Teemo",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6fbbefbe39f97cf20befb9fafe815cafdadebb58-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um yordle explorador que planta cogumelos venenosos para emboscar seus inimigos.",
        rota: " Topo, Selva",
        classe: " Atirador",
        tag: "Yordle, Cogumelos, Emboscada"
    },
    {
        nome: "Thresh",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dc18d5f07fcc968f28e850d46dc9632b7f8492fa-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma antiga alma aprisionada em uma lanterna que busca coletar almas.",
        rota: " Suporte",
        classe: " Suporte",
        tag: "Lanterna, Almas, Controle de multidão"
    },
    {
        nome: "Tristana",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/03e864c901ae16c054f5afafa22b1fd68dfaf192-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma yordle explosiva que usa foguetes para atacar seus inimigos.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Yordle, Foguetes, Explosivo"
    },
    {
        nome: "Trundle",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d7636bd480ae8808200a4f9eff806cf997644152-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um rei troll que rouba a força de seus inimigos.",
        rota: " Topo, Selva",
        classe: " Lutador, Tanque",
        tag: "Troll, Roubo de atributos, Resistência"
    },
    {
        nome: "Tryndamere",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/3da35104857a57eb001ac2ced3f41ec430de8e2e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um bárbaro que não pode morrer e luta até o fim.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Bárbaro, Imortalidade, Dano"
    },
    {
        nome: "Twisted Fate",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c1a9aa77bfcc93fbe32e0f2d85168c875ae81bc7-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um mago charlatão que manipula o destino com suas cartas.",
        rota: " Meio",
        classe: " Mago",
        tag: "Cartas, Destino, Teleporte"
    },
    {
        nome: "Twitch",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d7f78ff166e9234ea1a2f8837236b4d0c7e7bd28-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma ratazana mutante que ataca do escuro e espalha veneno.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Ratazana, Veneno, Emboscada"
    },
    {
        nome: "Udyr",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/36dc5f7979391607c8d1ca380929a74c4476bf0a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um espírito da natureza que pode se transformar em diferentes animais, cada um com habilidades únicas.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Natureza, Transformação, Versátil, uga"
    },
    {
        nome: "Urgot",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/85f550818e4da59fdb2d2f5b2e535a89e35c5528-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um ciborgue noxiano que persegue seus inimigos com suas pernas mecânicas.",
        rota: " Topo",
        classe: " Lutador",
        tag: "Ciborgue, Perseguidor, Resistente, muitas pernas"
    },
    {
        nome: "Varus",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ccecd74b091fd7799fc42cfce7b7dabcc4d6e498-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um atirador amaldiçoado que usa uma besta para lançar flechas venenosas.",
        rota: " Bot",
        classe: " Atirador",
        tag: "Flechas venenosas, Amaldiçoado, Longo alcance"
    },
    {
        nome: "Veigar",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c2c5a55ccd6d6778ddb77ce8082196f94972988b-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um yordle mago que se torna mais poderoso a cada abate.",
        rota: " Meio",
        classe: " Mago",
        tag: "Yordle, Abates, Escala de poder"
    },
    {
        nome: "Vel'Koz",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c4c034a4c79eb1cc0b306d72aa76b31ce27817ed-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um ser do vazio que estuda a vida orgânica através de seus raios de energia.",
        rota: " Meio",
        classe: " Mago",
        tag: "Vazio, Energia, Longo alcance"
    },
    {
        nome: "Vex",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/747fb0ce065ec65ee7c5fe1df418f24141684c3f-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma yordle sombria que se alimenta da negatividade dos outros.",
        rota: " Meio",
        classe: " Maga",
        tag: "Yordle, Negatividade, Magia sombria"
    },
    {
        nome: "Vi",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1d86e26e1b6ec9840b60d9386ae330d6eceacbf0-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma policial de Piltover que usa seus punhos mecânicos para nocautear seus inimigos.",
        rota: " Selva, Topo",
        classe: " Lutadora",
        tag: "Policial, Punhos mecânicos, Mobilidade"
    },
    {
        nome: "Viego",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/aae71b934d3e8fc201fad7bd0b53686f07c6156e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Rei Ruinado, que busca reunir os fragmentos de sua esposa.",
        rota: " Selva",
        classe: " Assassino",
        tag: "Rei Ruinado, Possessão, Mobilidade"
    },
    {
        nome: "Viktor",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cbd186d5916cf044d6f0b855c88121f9b28ce2ad-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um cientista que busca a perfeição através da tecnologia.",
        rota: " Meio",
        classe: " Mago",
        tag: "Cientista, Tecnologia, Magia"
    },
    {
        nome: "Vladimir",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/93d64dc58701a89a03c973879d966756f66b895a-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um vampiro antigo que se alimenta do sangue de seus inimigos.",
        rota: " Meio",
        classe: " Mago",
        tag: "Vampiro, Sangue, Cura"
    },
    {
        nome: "Volibear",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
        descricao: "Um deus urso do Freljord que invoca raios e causa caos no campo de batalha.",
        rota: " Selva, Topo",
        classe: " Lutador, Tanque",
        tag: "Urso, Raios, Freljord"
    },
    {
        nome: "Warwick",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a82cc4bce6d685b81bf8b31098738a0c0188335b-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um monstro transformado pela ciência que caça seus inimigos implacavelmente.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Monstro, Caça, Perseguidor"
    },
    {
        nome: "Wukong",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/769013a96f93d25ba79f5c9c9c2ee2caf7160a04-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "O Rei Macaco, um mestre da ilusão que confunde seus inimigos.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Macaco, Ilusão, Mobilidade"
    },
    {
        nome: "Xayah",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c781ef996d2bcaddd2b66eadf04af577f803b694-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma assassina que luta ao lado de Rakan, usando penas para atacar seus inimigos.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Penas, Rakan, Mobilidade"
    },
    {
        nome: "Xerath",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b18fa515587a4dc70c52d0d5b6215e52ccab2385-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um mago asteca que lança poderosos feitiços de longo alcance.",
        rota: " Meio",
        classe: " Mago",
        tag: "Asteca, Longo alcance, Magia"
    },
    {
        nome: "Xin Zhao",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0779f622717632f5a13c704a4bd97a8d472b50ac-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: " Um guerreiro noxiano que domina a arte da lança.",
        rota: " Selva",
        classe: " Lutador",
        tag: "Noxiano, Lança, Mobilidade"
    },
    {
        nome: "Yasuo",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bdbed4e6ca66f10b86f4dbc41db2d5c066ab9168-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um espadachim errante que domina os ventos.",
        rota: " Meio, Topo",
        classe: " Lutador",
        tag: "Espadachim, Vento, Mobilidade"
    },
    {
        nome: "Yone",
        imagem: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",
        descricao: "O irmão de Yasuo, um espadachim fantasma que busca vingança.",
        rota: " Meio, Topo",
        classe: " Assassino",
        tag: "Fantasma, Espada, Mobilidade"
    },
    {
        nome: "Yorick",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/38d1cc6f80ca931c894f36c222bad76cfe1a25da-496x560.jpg?auto=format&fit=fill&q=80&w=352",
        descricao: " Um sacerdote que invoca os mortos para lutar por ele.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Sacerdote, Mortos, Invocação"
    },
    {
        nome: "Yuumi",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/7a1e9d076808a8f08f7fd36d54e06da7ae36c363-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um felino mágico que se agarra a um aliado e o fortalece.",
        rota: " Suporte",
        classe: " Mago",
        tag: "Felino, Fortalecimento, Cura, gatinho"
    },
    {
        nome: "Zac",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cd71555dbeeba66f40163e195b244869d5846f55-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "ma criatura feita de substância elástica que pode se esticar e dividir.",
        rota: " Selva",
        classe: " Tanque",
        tag: "Elástico, Dividir, Resistência"
    },
    {
        nome: "Zed",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/790ff0f287533f90d2d02132c15f54fb85394fdc-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um mestre das sombras que usa shurikens para eliminar seus inimigos.",
        rota: " Meio",
        classe: " Assassino",
        tag: "Sombras, Shurikens, Mobilidade"
    },
    {
        nome: "Zeri",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/932a64c26ae1984205a2c3899f33ccf4828d2e23-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma corredora elétrica que usa sua velocidade para superar seus inimigos.",
        rota: " Bot",
        classe: " Atiradora",
        tag: "Elétrica, Velocidade, Mobilidade"
    },
    {
        nome: "Ziggs",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/78698b396af1dad5be4a076d1272025032b954f4-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um yordle engenheiro que adora explodir coisas.",
        rota: " Meio",
        classe: " Mago",
        tag: "Yordle, Explosivo, Longo alcance"
    },
    {
        nome: "Zilean",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/de2a666cc2c21932e47ad80b865c5f2740001354-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Um cronomancer que manipula o tempo para ajudar seus aliados.",
        rota: " Suporte",
        classe: " Mago",
        tag: "Tempo, Cura, Proteção"
    },
    {
        nome: "Zoe",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1d06f0e8572e36ab5484458b9a63e40e26be902e-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma yordle travessa que adora brincar com o tempo e o espaço.",
        rota: " Meio",
        classe: " Maga",
        tag: "Yordle, Tempo, Espaço"
    },
    {
        nome: "Zyra",
        imagem: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/814b13e8307739b0f8dc5b29029fb948932fe7b3-496x560.jpg?auto=format&fit=fill&q=80&w=425",
        descricao: "Uma feiticeira das plantas que controla raízes e flores venenosas.",
        rota: " Suporte",
        classe: " Maga",
        tag: "Plantas, Veneno, Controle de multidão"
    },
];


