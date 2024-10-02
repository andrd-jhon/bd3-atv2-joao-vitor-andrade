const database ='bd3_atv2';
const collection ='bd3_atv2_produtos';
use(database);
db[collection].insertMany(
    [
        {
            "Nome do Produto": "Câmera 4K Ultra HD",
            "Valor (R$)": 2999,
            "Quantidade em Estoque": 5,
            "Fabricante": "CaptureTech",
            "Categoria": "Eletrônicos",
            "Descrição": "Câmera com gravação 4K e estabilização."
        },
        {
            "Nome do Produto": "Tablet 10\"",
            "Valor (R$)": 1499,
            "Quantidade em Estoque": 12,
            "Fabricante": "TabTech",
            "Categoria": "Eletrônicos",
            "Descrição": "Tablet com 64GB de armazenamento."
        },
        {
            "Nome do Produto": "Impressora 3D",
            "Valor (R$)": 1999,
            "Quantidade em Estoque": 8,
            "Fabricante": "PrintMaster",
            "Categoria": "Informática",
            "Descrição": "Impressora 3D de alta precisão."
        },
        {
            "Nome do Produto": "Fone de Ouvido Gaming",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 20,
            "Fabricante": "GamerAudio",
            "Categoria": "Acessórios",
            "Descrição": "Fones com microfone e som surround."
        },
        {
            "Nome do Produto": "Webcam Full HD",
            "Valor (R$)": 249,
            "Quantidade em Estoque": 30,
            "Fabricante": "VisionCam",
            "Categoria": "Acessórios",
            "Descrição": "Webcam com gravação em 1080p."
        },
        {
            "Nome do Produto": "Batedeira Elétrica",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 15,
            "Fabricante": "KitchenMaster",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Batedeira com 5 velocidades."
        },
        {
            "Nome do Produto": "Fogão Elétrico",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 10,
            "Fabricante": "CookTech",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Fogão elétrico com 4 bocas."
        },
        {
            "Nome do Produto": "Secador de Cabelos",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 25,
            "Fabricante": "HairStyle",
            "Categoria": "Beleza",
            "Descrição": "Secador com 3 temperaturas."
        },
        {
            "Nome do Produto": "Bicicleta Aro 29",
            "Valor (R$)": 1099,
            "Quantidade em Estoque": 7,
            "Fabricante": "BikePro",
            "Categoria": "Esportes",
            "Descrição": "Bicicleta com suspensão e freios a disco."
        },
        {
            "Nome do Produto": "Equipamento de Yoga",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 15,
            "Fabricante": "FitLife",
            "Categoria": "Esportes",
            "Descrição": "Conjunto de tapete e acessórios para yoga."
        },
        {
            "Nome do Produto": "Relógio de Pulso Inteligente",
            "Valor (R$)": 699,
            "Quantidade em Estoque": 10,
            "Fabricante": "SmartTime",
            "Categoria": "Acessórios",
            "Descrição": "Relógio com monitoramento de sono."
        },
        {
            "Nome do Produto": "Mochila de Câmera",
            "Valor (R$)": 249,
            "Quantidade em Estoque": 20,
            "Fabricante": "PhotoBag",
            "Categoria": "Acessórios",
            "Descrição": "Mochila com compartimentos para equipamentos."
        },
        {
            "Nome do Produto": "Conjunto de Facas",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 30,
            "Fabricante": "ChefKnives",
            "Categoria": "Cozinha",
            "Descrição": "Conjunto com 5 facas de cozinha."
        },
        {
            "Nome do Produto": "Panela Elétrica",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 5,
            "Fabricante": "CookSmart",
            "Categoria": "Cozinha",
            "Descrição": "Panela elétrica com múltiplas funções."
        },
        {
            "Nome do Produto": "Máquina de Café",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 8,
            "Fabricante": "CoffeeTech",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Máquina de café expresso automática."
        },
        {
            "Nome do Produto": "Cadeira de Escritório",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 10,
            "Fabricante": "OfficeStyle",
            "Categoria": "Mobiliário",
            "Descrição": "Cadeira ergonômica com suporte lombar."
        },
        {
            "Nome do Produto": "Mesa para Computador",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 6,
            "Fabricante": "FurniturePro",
            "Categoria": "Mobiliário",
            "Descrição": "Mesa com espaço para teclado e monitor."
        },
        {
            "Nome do Produto": "Estante de TV",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 4,
            "Fabricante": "HomeEntertainment",
            "Categoria": "Mobiliário",
            "Descrição": "Estante para TVs de até 55\"."
        },
        {
            "Nome do Produto": "Carrinho de Bebê",
            "Valor (R$)": 699,
            "Quantidade em Estoque": 5,
            "Fabricante": "BabyCare",
            "Categoria": "Infantil",
            "Descrição": "Carrinho leve e dobrável."
        },
        {
            "Nome do Produto": "Bola de Futebol",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 40,
            "Fabricante": "SportsGear",
            "Categoria": "Esportes",
            "Descrição": "Bola de futebol oficial."
        },
        {
            "Nome do Produto": "Caixa Organizadora",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 50,
            "Fabricante": "HomeStorage",
            "Categoria": "Mobiliário",
            "Descrição": "Caixa de plástico para organização."
        },
        {
            "Nome do Produto": "Trilho de Mesa",
            "Valor (R$)": 29,
            "Quantidade em Estoque": 60,
            "Fabricante": "HomeDecor",
            "Categoria": "Mobiliário",
            "Descrição": "Trilho de mesa em linho."
        },
        {
            "Nome do Produto": "Jogo de Talheres Infantil",
            "Valor (R$)": 59,
            "Quantidade em Estoque": 35,
            "Fabricante": "KidsTableware",
            "Categoria": "Infantil",
            "Descrição": "Talheres divertidos para crianças."
        },
        {
            "Nome do Produto": "Cama de Casal",
            "Valor (R$)": 1599,
            "Quantidade em Estoque": 3,
            "Fabricante": "SleepWell",
            "Categoria": "Mobiliário",
            "Descrição": "Cama com cabeceira estofada."
        },
        {
            "Nome do Produto": "Triciclo para Crianças",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 10,
            "Fabricante": "KidsRide",
            "Categoria": "Infantil",
            "Descrição": "Triciclo com design colorido."
        },
        {
            "Nome do Produto": "Tenda para Camping",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 5,
            "Fabricante": "OutdoorGear",
            "Categoria": "Esportes",
            "Descrição": "Tenda resistente à água para 4 pessoas."
        },
        {
            "Nome do Produto": "Acessórios para Cerveja",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 20,
            "Fabricante": "BrewTools",
            "Categoria": "Cozinha",
            "Descrição": "Kit de acessórios para preparar cerveja."
        },
        {
            "Nome do Produto": "Roupão de Banho",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 25,
            "Fabricante": "HomeTextiles",
            "Categoria": "Beleza",
            "Descrição": "Roupão macio e confortável."
        },
        {
            "Nome do Produto": "Escova de Dentes Elétrica",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 15,
            "Fabricante": "DentalCare",
            "Categoria": "Beleza",
            "Descrição": "Escova com timer e pressão controlada."
        },
        {
            "Nome do Produto": "Bicicleta Infantil",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 10,
            "Fabricante": "KidsBike",
            "Categoria": "Infantil",
            "Descrição": "Bicicleta com rodinhas para iniciantes."
        },
        {
            "Nome do Produto": "Equipamento de Fotografia",
            "Valor (R$)": 2999,
            "Quantidade em Estoque": 3,
            "Fabricante": "PhotoGear",
            "Categoria": "Eletrônicos",
            "Descrição": "Conjunto completo para fotógrafos."
        },
        {
            "Nome do Produto": "Kit de Jardinagem",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 30,
            "Fabricante": "GardenTools",
            "Categoria": "Casa e Jardim",
            "Descrição": "Kit com ferramentas para jardinagem."
        },
        {
            "Nome do Produto": "Churrasqueira a Gás",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 5,
            "Fabricante": "GrillMaster",
            "Categoria": "Casa e Jardim",
            "Descrição": "Churrasqueira com grelha de ferro."
        },
        {
            "Nome do Produto": "Aspirador de Pó",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 8,
            "Fabricante": "CleanTech",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Aspirador com filtro HEPA."
        },
        {
            "Nome do Produto": "Umidificador de Ar",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 20,
            "Fabricante": "AirCare",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Umidificador silencioso e eficiente."
        },
        {
            "Nome do Produto": "Cesta de Compras Dobrável",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 40,
            "Fabricante": "HomeEssentials",
            "Categoria": "Casa e Jardim",
            "Descrição": "Cesta leve e fácil de armazenar."
        },
        {
            "Nome do Produto": "Rádio Relógio",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 30,
            "Fabricante": "AudioTech",
            "Categoria": "Eletrônicos",
            "Descrição": "Rádio com relógio e alarme."
        },
        {
            "Nome do Produto": "Colchão de Casal",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 6,
            "Fabricante": "SleepBetter",
            "Categoria": "Mobiliário",
            "Descrição": "Colchão com tecnologia ortopédica."
        },
        {
            "Nome do Produto": "Luminária de Mesa",
            "Valor (R$)": 129,
            "Quantidade em Estoque": 25,
            "Fabricante": "LightPro",
            "Categoria": "Mobiliário",
            "Descrição": "Luminária com ajuste de intensidade."
        },
        {
            "Nome do Produto": "Set de Maquiagem",
            "Valor (R$)": 349,
            "Quantidade em Estoque": 20,
            "Fabricante": "MakeupMaster",
            "Categoria": "Beleza",
            "Descrição": "Kit com diversos produtos de maquiagem."
        },
        {
            "Nome do Produto": "Conjunto de Cama",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 15,
            "Fabricante": "HomeBedding",
            "Categoria": "Mobiliário",
            "Descrição": "Conjunto de lençóis e fronhas."
        },
        {
            "Nome do Produto": "Manta de Sofá",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 25,
            "Fabricante": "CozyHome",
            "Categoria": "Mobiliário",
            "Descrição": "Manta macia para aquecer."
        },
        {
            "Nome do Produto": "Cesta de Roupas",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 30,
            "Fabricante": "HomeStorage",
            "Categoria": "Casa e Jardim",
            "Descrição": "Cesta de roupas em tecido."
        }
    ]
)