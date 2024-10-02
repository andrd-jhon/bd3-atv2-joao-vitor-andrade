const database ='bd3_atv2';
const collection ='bd3_atv2_produtos';
use(database);
db[collection].insertMany(
    [
        {
            "Nome do Produto": "Fritadeira a Ar",
            "Valor (R$)": 649,
            "Quantidade em Estoque": 15,
            "Fabricante": "AirFryPro",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Fritadeira a ar com tecnologia de circulação de ar quente."
        },
        {
            "Nome do Produto": "Panela de Pressão Elétrica",
            "Valor (R$)": 399,
            "Quantidade em Estoque": 20,
            "Fabricante": "QuickCook",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Panela de pressão elétrica com múltiplas funções."
        },
        {
            "Nome do Produto": "Liquidificador Profissional",
            "Valor (R$)": 259,
            "Quantidade em Estoque": 30,
            "Fabricante": "BlendMaster",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Liquidificador com jarra de vidro e potência de 1000W."
        },
        {
            "Nome do Produto": "Máquina de Pão",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 10,
            "Fabricante": "BreadMaker",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Máquina de fazer pão com receitas programadas."
        },
        {
            "Nome do Produto": "Cafeteira Elétrica",
            "Valor (R$)": 179,
            "Quantidade em Estoque": 25,
            "Fabricante": "BrewMaster",
            "Categoria": "Cozinha",
            "Descrição": "Cafeteira elétrica com capacidade para 12 xícaras."
        },
        {
            "Nome do Produto": "Frigideira de Ferro",
            "Valor (R$)": 89,
            "Quantidade em Estoque": 40,
            "Fabricante": "CookPro",
            "Categoria": "Cozinha",
            "Descrição": "Frigideira de ferro fundido para uso em fogão e forno."
        },
        {
            "Nome do Produto": "Escova Alisadora",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 15,
            "Fabricante": "HairEase",
            "Categoria": "Beleza",
            "Descrição": "Escova alisadora com temperatura ajustável."
        },
        {
            "Nome do Produto": "Penteadeira com Espelho",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 5,
            "Fabricante": "BeautySpace",
            "Categoria": "Mobiliário",
            "Descrição": "Penteadeira com espelho e iluminação LED."
        },
        {
            "Nome do Produto": "Chaleira Elétrica",
            "Valor (R$)": 119,
            "Quantidade em Estoque": 35,
            "Fabricante": "KettlePro",
            "Categoria": "Cozinha",
            "Descrição": "Chaleira elétrica com desligamento automático."
        },
        {
            "Nome do Produto": "Organizador de Armário",
            "Valor (R$)": 59,
            "Quantidade em Estoque": 60,
            "Fabricante": "StorageWise",
            "Categoria": "Mobiliário",
            "Descrição": "Organizador para armário em tecido."
        },
        {
            "Nome do Produto": "Sofá Cama",
            "Valor (R$)": 1599,
            "Quantidade em Estoque": 7,
            "Fabricante": "ComfortSofa",
            "Categoria": "Mobiliário",
            "Descrição": "Sofá cama com estrutura resistente e design moderno."
        },
        {
            "Nome do Produto": "Cabeça de Ducha",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 45,
            "Fabricante": "ShowerTech",
            "Categoria": "Mobiliário",
            "Descrição": "Cabeça de ducha com jatos ajustáveis."
        },
        {
            "Nome do Produto": "Jogo de Cadeiras",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 10,
            "Fabricante": "ChairDesign",
            "Categoria": "Mobiliário",
            "Descrição": "Conjunto de 4 cadeiras de jantar."
        },
        {
            "Nome do Produto": "Balança de Cozinha",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 50,
            "Fabricante": "KitchenScale",
            "Categoria": "Cozinha",
            "Descrição": "Balança digital para ingredientes, capacidade 5kg."
        },
        {
            "Nome do Produto": "Corta-Vento",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 20,
            "Fabricante": "WindBlock",
            "Categoria": "Acessórios",
            "Descrição": "Corta-vento leve e fácil de transportar."
        },
        {
            "Nome do Produto": "Capa de Chuva",
            "Valor (R$)": 49,
            "Quantidade em Estoque": 40,
            "Fabricante": "RainGuard",
            "Categoria": "Acessórios",
            "Descrição": "Capa de chuva dobrável e impermeável."
        },
        {
            "Nome do Produto": "Squeeze Térmico",
            "Valor (R$)": 69,
            "Quantidade em Estoque": 25,
            "Fabricante": "HydroBottle",
            "Categoria": "Acessórios",
            "Descrição": "Squeeze térmico com isolamento para bebidas quentes e frias."
        },
        {
            "Nome do Produto": "Porta-Retrato Digital",
            "Valor (R$)": 249,
            "Quantidade em Estoque": 10,
            "Fabricante": "PhotoFrame",
            "Categoria": "Acessórios",
            "Descrição": "Porta-retrato digital com capacidade para 1000 fotos."
        },
        {
            "Nome do Produto": "Acessório para Massagem",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 30,
            "Fabricante": "RelaxTech",
            "Categoria": "Saúde",
            "Descrição": "Acessório elétrico para massagem muscular."
        },
        {
            "Nome do Produto": "Protetor Auricular",
            "Valor (R$)": 29,
            "Quantidade em Estoque": 60,
            "Fabricante": "SoundBlock",
            "Categoria": "Saúde",
            "Descrição": "Protetor auricular de silicone para conforto e isolamento."
        },
        {
            "Nome do Produto": "Bicicleta Infantil",
            "Valor (R$)": 699,
            "Quantidade em Estoque": 8,
            "Fabricante": "KidsRide",
            "Categoria": "Esportes",
            "Descrição": "Bicicleta infantil com guidão ajustável e cores vibrantes."
        },
        {
            "Nome do Produto": "Tenda de Camping",
            "Valor (R$)": 799,
            "Quantidade em Estoque": 12,
            "Fabricante": "CampOut",
            "Categoria": "Acessórios",
            "Descrição": "Tenda de camping para 4 pessoas, fácil de montar."
        },
        {
            "Nome do Produto": "Conjunto de Malas",
            "Valor (R$)": 599,
            "Quantidade em Estoque": 5,
            "Fabricante": "TravelPro",
            "Categoria": "Acessórios",
            "Descrição": "Conjunto de malas em 3 tamanhos com rodas giratórias."
        },
        {
            "Nome do Produto": "Jogo de Tabuleiro",
            "Valor (R$)": 129,
            "Quantidade em Estoque": 25,
            "Fabricante": "GameNight",
            "Categoria": "Lazer",
            "Descrição": "Jogo de tabuleiro estratégico para até 6 jogadores."
        },
        {
            "Nome do Produto": "Canoagem Inflável",
            "Valor (R$)": 899,
            "Quantidade em Estoque": 6,
            "Fabricante": "WaterFun",
            "Categoria": "Esportes",
            "Descrição": "Canoagem inflável, fácil de transportar e montar."
        },
        {
            "Nome do Produto": "Skate Completo",
            "Valor (R$)": 299,
            "Quantidade em Estoque": 20,
            "Fabricante": "SkateCo",
            "Categoria": "Esportes",
            "Descrição": "Skate completo com design moderno e rodas de alta performance."
        },
        {
            "Nome do Produto": "Cinta Modeladora",
            "Valor (R$)": 79,
            "Quantidade em Estoque": 35,
            "Fabricante": "FitWear",
            "Categoria": "Saúde",
            "Descrição": "Cinta modeladora confortável para uso diário."
        },
        {
            "Nome do Produto": "Máscara Facial",
            "Valor (R$)": 39,
            "Quantidade em Estoque": 50,
            "Fabricante": "SkinCare",
            "Categoria": "Beleza",
            "Descrição": "Máscara facial hidratante com extrato de aloe vera."
        },
        {
            "Nome do Produto": "Espremedor de Frutas",
            "Valor (R$)": 89,
            "Quantidade em Estoque": 40,
            "Fabricante": "JuiceMaker",
            "Categoria": "Cozinha",
            "Descrição": "Espremedor manual de frutas com design ergonômico."
        },
        {
            "Nome do Produto": "Corta-Cabelo Elétrico",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 15,
            "Fabricante": "ClipperPro",
            "Categoria": "Beleza",
            "Descrição": "Corta-cabelo elétrico com lâminas de aço inoxidável."
        },
        {
            "Nome do Produto": "Secador de Cabelo",
            "Valor (R$)": 149,
            "Quantidade em Estoque": 20,
            "Fabricante": "DryMaster",
            "Categoria": "Beleza",
            "Descrição": "Secador de cabelo com 3 temperaturas e jato frio."
        },
        {
            "Nome do Produto": "Filtro de Água",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 30,
            "Fabricante": "PureWater",
            "Categoria": "Saúde",
            "Descrição": "Filtro de água com capacidade para 2 litros."
        },
        {
            "Nome do Produto": "Bolsa de Viagem",
            "Valor (R$)": 199,
            "Quantidade em Estoque": 15,
            "Fabricante": "TravelGear",
            "Categoria": "Acessórios",
            "Descrição": "Bolsa de viagem com compartimentos organizadores."
        },
        {
            "Nome do Produto": "Guia de Viagem",
            "Valor (R$)": 29,
            "Quantidade em Estoque": 70,
            "Fabricante": "ExploreMore",
            "Categoria": "Lazer",
            "Descrição": "Guia de viagem com dicas e itinerários."
        },
        {
            "Nome do Produto": "Capacete de Segurança",
            "Valor (R$)": 89,
            "Quantidade em Estoque": 40,
            "Fabricante": "SafeHead",
            "Categoria": "Esportes",
            "Descrição": "Capacete de segurança para atividades radicais."
        },
        {
            "Nome do Produto": "Luminária de Mesa",
            "Valor (R$)": 159,
            "Quantidade em Estoque": 25,
            "Fabricante": "LightDesk",
            "Categoria": "Mobiliário",
            "Descrição": "Luminária de mesa com intensidade de luz ajustável."
        },
        {
            "Nome do Produto": "Lava-Louças",
            "Valor (R$)": 2399,
            "Quantidade em Estoque": 4,
            "Fabricante": "CleanWave",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Máquina de lavar louça com eficiência energética."
        },
        {
            "Nome do Produto": "Saco de Dormir",
            "Valor (R$)": 179,
            "Quantidade em Estoque": 30,
            "Fabricante": "SleepBag",
            "Categoria": "Acessórios",
            "Descrição": "Saco de dormir leve e confortável para camping."
        },
        {
            "Nome do Produto": "Lanterna Tática",
            "Valor (R$)": 99,
            "Quantidade em Estoque": 35,
            "Fabricante": "TacticalLight",
            "Categoria": "Acessórios",
            "Descrição": "Lanterna tática com alta luminosidade e resistência à água."
        },
        {
            "Nome do Produto": "Guarda-Chuva Automático",
            "Valor (R$)": 89,
            "Quantidade em Estoque": 50,
            "Fabricante": "RainStop",
            "Categoria": "Acessórios",
            "Descrição": "Guarda-chuva automático e resistente ao vento."
        },
        {
            "Nome do Produto": "Churrasqueira Elétrica",
            "Valor (R$)": 499,
            "Quantidade em Estoque": 8,
            "Fabricante": "GrillMaster",
            "Categoria": "Eletrodomésticos",
            "Descrição": "Churrasqueira elétrica com grelha antiaderente."
        }
    ]
)