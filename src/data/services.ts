export interface Service {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  problem: string;
  method: string;
  deliverables: string[];
  differentials: string[];
  relatedSlugs: string[];
  keywords: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    slug: "inspecao-predial",
    title: "Inspeção Predial",
    h1: "Inspeção Predial: Diagnóstico Técnico de Edificações conforme NBR 16747",
    metaTitle: "Inspeção Predial | Laudo Técnico conforme NBR 16747 — NED Engenharia Diagnóstica",
    metaDescription: "Inspeção predial com diagnóstico de manifestações patológicas, classificação de prioridades e plano de manutenção conforme ABNT NBR 16747. Laudos técnicos com responsabilidade CREA em todo o Brasil.",
    image: "/images/inspecao-fachada.jpg",
    imageAlt: "Inspeção predial com registro fotográfico de manifestações patológicas em edificação",
    shortDescription: "Análise técnica completa de edificações conforme NBR 16747, com diagnóstico de manifestações patológicas e plano de manutenção.",
    problem: "Edificações deterioram com o tempo. Fissuras, infiltrações, desplacamentos e corrosão de armaduras são manifestações patológicas que comprometem a segurança, durabilidade e valorização do imóvel. A inspeção predial identifica esses problemas antes que se agravem, permitindo intervenções planejadas e economicamente viáveis.",
    method: "A inspeção predial da NED segue rigorosamente a ABNT NBR 16747. Realizamos análise documental prévia, inspeção visual sistematizada de todos os sistemas construtivos (estrutura, fachada, instalações, cobertura, áreas comuns), registro fotográfico numerado, classificação de anomalias por grau de risco e urgência, e elaboração de relatório técnico completo com diagnóstico e prescrição corretiva.",
    deliverables: [
      "Relatório técnico completo conforme NBR 16747",
      "Registro fotográfico numerado e legendado",
      "Classificação de anomalias por grau de risco",
      "Matriz de prioridades de intervenção",
      "Prescrição corretiva para cada anomalia",
      "Plano de manutenção preventiva",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Conformidade com ABNT NBR 16747 e normas correlatas",
      "Registro fotográfico detalhado com identificação de cada manifestação",
      "Classificação por grau de risco para tomada de decisão",
      "Prescrição corretiva com soluções técnicas fundamentadas",
      "Responsabilidade técnica CREA CE 48771",
    ],
    relatedSlugs: ["laudo-tecnico-de-fachada", "laudo-de-infiltracao", "drone-termografico-fachada"],
    keywords: ["inspeção predial", "laudo de inspeção predial", "NBR 16747", "vistoria predial", "diagnóstico de edificações", "manifestações patológicas"],
    ctaText: "Solicitar inspeção predial",
  },
  {
    slug: "laudo-tecnico-de-fachada",
    title: "Laudo Técnico de Fachada",
    h1: "Laudo Técnico de Fachada: Diagnóstico, Mapeamento de Patologias e Prescrição Corretiva",
    metaTitle: "Laudo Técnico de Fachada | Mapeamento de Patologias e Diagnóstico — NED",
    metaDescription: "Laudo técnico de fachada com mapeamento de manifestações patológicas, registro fotográfico, análise de aderência e prescrição corretiva. Atendimento com drone termográfico em todo o Brasil.",
    image: "/images/fachada-drone-termografico.jpg",
    imageAlt: "Laudo técnico de fachada com mapeamento de patologias e registro fotográfico",
    shortDescription: "Avaliação detalhada de fachadas com registro fotográfico, mapeamento de patologias e prescrição corretiva.",
    problem: "Fachadas de edifícios estão expostas a intempéries, variações térmicas, umidade e ação do vento. Com o tempo, surgem manifestações patológicas como fissuras, eflorescências, manchas de umidade, desplacamento cerâmico e descolamento de revestimentos. Essas patologias comprometem a segurança dos usuários, a estanqueidade da edificação e a valorização do imóvel.",
    method: "O laudo técnico de fachada da NED inclui análise documental (projeto, memoriais, histórico), inspeção visual presencial, inspeção com drone para áreas de difícil acesso, registro fotográfico detalhado, mapeamento gráfico de todas as manifestações patológicas identificadas, análise técnica de causas, classificação por gravidade e prescrição corretiva fundamentada em normas técnicas.",
    deliverables: [
      "Laudo técnico de fachada completo",
      "Mapeamento gráfico de manifestações patológicas",
      "Registro fotográfico numerado e legendado",
      "Análise de causas e mecanismos de deterioração",
      "Prescrição corretiva com procedimentos técnicos",
      "Classificação por prioridade de intervenção",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Mapeamento gráfico preciso de cada patologia na fachada",
      "Inspeção complementar com drone para áreas inacessíveis",
      "Fundamentação em ABNT NBR 13755, NBR 15575 e normas correlatas",
      "Diagnóstico com identificação de causas e não apenas sintomas",
      "Prescrição corretiva detalhada, não genérica",
    ],
    relatedSlugs: ["drone-termografico-fachada", "inspecao-predial", "laudo-de-infiltracao"],
    keywords: ["laudo técnico de fachada", "laudo de fachada", "mapeamento de patologias", "manifestações patológicas em fachadas", "desplacamento cerâmico", "patologias construtivas"],
    ctaText: "Solicitar laudo de fachada",
  },
  {
    slug: "drone-termografico-fachada",
    title: "Inspeção de Fachada com Drone Termográfico",
    h1: "Drone Termográfico em Fachadas: Inspeção com Termografia Infravermelha",
    metaTitle: "Drone Termográfico em Fachadas | Termografia Infravermelha para Inspeção — NED",
    metaDescription: "Inspeção de fachadas com drone e câmera termográfica infravermelha. Detecção de infiltrações, desplacamentos e falhas ocultas com mapeamento térmico. Atendimento em todo o Brasil.",
    image: "/images/termografia-fachada.jpg",
    imageAlt: "Imagem termográfica de fachada capturada por drone com câmera infravermelha",
    shortDescription: "Inspeção de fachadas com drone e câmera termográfica para identificação de infiltrações, desplacamentos e falhas ocultas.",
    problem: "Muitas patologias em fachadas não são visíveis a olho nu. Infiltrações ocultas, descolamentos de revestimento ainda sem desplacamento, falhas de impermeabilização e pontes térmicas só podem ser detectadas com tecnologia especializada. A termografia infravermelha, aplicada via drone, permite visualizar diferenças de temperatura na superfície da fachada que indicam a presença dessas anomalias.",
    method: "A inspeção com drone termográfico da NED utiliza aeronave equipada com câmera termográfica infravermelha de alta resolução. O voo é planejado tecnicamente para capturar imagens térmicas de toda a fachada, respeitando as condições ideais de incidência solar e vento. As imagens são processadas e analisadas por engenheiro especialista, gerando mapeamento térmico que identifica anomalias não visíveis em inspeção convencional.",
    deliverables: [
      "Mapeamento termográfico completo das fachadas",
      "Imagens térmicas de alta resolução com escala de temperatura",
      "Imagens no espectro visível correspondentes",
      "Relatório técnico com análise das anomalias térmicas",
      "Identificação de infiltrações, descolamentos e pontes térmicas",
      "Prescrição corretiva baseada nos achados termográficos",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Drone com câmera termográfica infravermelha profissional",
      "Captura de imagens em alturas e ângulos impossíveis manualmente",
      "Detecção de patologias ocultas antes do agravamento",
      "Redução de custos com andaimes e balancins para inspeção",
      "Complemento técnico ao laudo visual convencional",
    ],
    relatedSlugs: ["laudo-tecnico-de-fachada", "laudo-de-infiltracao", "inspecao-predial"],
    keywords: ["drone termográfico", "termografia em fachadas", "inspeção de fachada com drone", "câmera termográfica", "termografia infravermelha", "drone termográfico em fachada"],
    ctaText: "Solicitar inspeção com drone",
  },
  {
    slug: "recebimento-de-obras",
    title: "Recebimento de Obras",
    h1: "Recebimento de Obras: Vistoria Técnica para Entrega de Imóveis Novos",
    metaTitle: "Recebimento de Obras | Vistoria Técnica de Entrega de Imóvel — NED",
    metaDescription: "Vistoria técnica para recebimento de obras novas com checklist normativo, registro fotográfico e relatório de conformidade. Proteja seu investimento com laudo técnico independente.",
    image: "/images/recebimento-obra.jpg",
    imageAlt: "Vistoria técnica de recebimento de obra nova com checklist e registro fotográfico",
    shortDescription: "Verificação técnica para recebimento de obras novas, garantindo conformidade com projeto, normas e padrões de qualidade.",
    problem: "A entrega de uma obra nova nem sempre atende ao que foi contratado. Vícios construtivos, acabamentos fora do padrão, instalações com falhas e não conformidades com o projeto são problemas frequentes. Sem uma vistoria técnica independente, o comprador pode aceitar um imóvel com defeitos que só se manifestarão depois, perdendo o prazo de garantia para reclamação.",
    method: "O recebimento de obras da NED é feito por engenheiro especialista que verifica sistematicamente todos os itens da edificação: estrutura, instalações hidráulicas e elétricas, revestimentos, esquadrias, impermeabilização, pintura, áreas comuns e fachada. Cada item é conferido em relação ao projeto aprovado, memorial descritivo e normas técnicas aplicáveis, com registro fotográfico detalhado.",
    deliverables: [
      "Relatório técnico de recebimento de obra",
      "Checklist completo por sistema construtivo",
      "Registro fotográfico de todas as não conformidades",
      "Comparativo com projeto e memorial descritivo",
      "Lista de pendências para correção pela construtora",
      "Fundamentação normativa para cada item verificado",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Vistoria independente da construtora",
      "Checklist técnico completo por sistema construtivo",
      "Fundamentação em NBR 15575 e normas de desempenho",
      "Relatório aceito para acionamento de garantia",
      "Proteção do investimento do comprador",
    ],
    relatedSlugs: ["laudo-de-garantia-de-imovel", "fiscalizacao-de-obras-alto-padrao", "inspecao-predial"],
    keywords: ["recebimento de obras", "vistoria de recebimento de imóvel", "vistoria de entrega de obra", "recebimento de obra nova", "vistoria técnica de imóvel"],
    ctaText: "Solicitar vistoria de recebimento",
  },
  {
    slug: "fiscalizacao-de-obras-alto-padrao",
    title: "Fiscalização de Obras de Alto Padrão",
    h1: "Fiscalização de Obras de Alto Padrão: Acompanhamento Técnico com Controle de Qualidade",
    metaTitle: "Fiscalização de Obras de Alto Padrão | Acompanhamento Técnico — NED",
    metaDescription: "Fiscalização técnica de obras de alto padrão com controle de qualidade, cronograma e conformidade normativa. Engenharia diagnóstica para garantir a excelência da sua obra.",
    image: "/images/fiscalizacao-obra-alto-padrao.jpg",
    imageAlt: "Fiscalização técnica de obra de alto padrão com acompanhamento de engenheiro",
    shortDescription: "Acompanhamento técnico de obras de alto padrão com controle de qualidade, cronograma e conformidade normativa.",
    problem: "Obras de alto padrão exigem controle rigoroso de qualidade, materiais e execução. Sem fiscalização técnica independente, erros construtivos podem passar despercebidos, comprometendo a qualidade final, gerando retrabalho, atrasos e custos adicionais. O proprietário ou incorporador precisa de um profissional independente que garanta que a obra está sendo executada conforme o projeto e as normas técnicas.",
    method: "A fiscalização de obras da NED inclui visitas técnicas periódicas (quinzenais ou mensais), verificação de conformidade com projetos e especificações, controle de qualidade de materiais e serviços, acompanhamento de cronograma, registro fotográfico de cada visita, identificação e comunicação imediata de não conformidades, e relatórios técnicos periódicos para o contratante.",
    deliverables: [
      "Relatórios técnicos periódicos de acompanhamento",
      "Registro fotográfico de cada visita",
      "Verificação de conformidade com projetos",
      "Controle de qualidade de materiais e serviços",
      "Acompanhamento de cronograma executivo",
      "Comunicação de não conformidades",
      "Relatório final consolidado",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Fiscalização independente do construtor",
      "Controle técnico rigoroso em todas as etapas",
      "Relatórios claros e objetivos para o contratante",
      "Prevenção de vícios construtivos e retrabalho",
      "Experiência em obras de alto padrão",
    ],
    relatedSlugs: ["recebimento-de-obras", "inspecao-predial", "laudo-de-garantia-de-imovel"],
    keywords: ["fiscalização de obras", "fiscalização de obras de alto padrão", "acompanhamento técnico de obra", "controle de qualidade de obra"],
    ctaText: "Solicitar fiscalização técnica",
  },
  {
    slug: "laudo-de-infiltracao",
    title: "Laudo de Infiltração",
    h1: "Laudo de Infiltração: Diagnóstico Técnico de Infiltrações em Edificações",
    metaTitle: "Laudo de Infiltração | Diagnóstico Técnico de Infiltrações — NED",
    metaDescription: "Laudo técnico de infiltração com identificação de causas, ensaios, termografia e prescrição de soluções corretivas definitivas. Diagnóstico fundamentado em normas técnicas.",
    image: "/images/laudo-infiltracao.jpg",
    imageAlt: "Diagnóstico técnico de infiltração com identificação de causas e registro fotográfico",
    shortDescription: "Diagnóstico técnico de infiltrações com identificação de causas, ensaios e prescrição de soluções corretivas.",
    problem: "Infiltrações são um dos problemas mais recorrentes em edificações. Podem ter origem em falhas de impermeabilização, fissuras na fachada, instalações hidráulicas, juntas de dilatação ou cobertura. Identificar corretamente a causa é essencial para aplicar a solução correta e evitar retrabalho. Reparos sem diagnóstico técnico tendem a falhar e gerar custos recorrentes.",
    method: "O diagnóstico de infiltração da NED começa com análise documental e entrevista com o solicitante. Em campo, realizamos inspeção visual detalhada, ensaios de estanqueidade quando necessário, termografia infravermelha para mapeamento de umidade oculta, e rastreamento da origem da água. O diagnóstico identifica a causa raiz e não apenas o sintoma, garantindo que a prescrição corretiva resolva o problema de forma definitiva.",
    deliverables: [
      "Laudo técnico de infiltração completo",
      "Identificação da causa raiz da infiltração",
      "Registro fotográfico detalhado",
      "Mapeamento termográfico quando aplicável",
      "Prescrição corretiva com procedimentos técnicos",
      "Especificação de materiais e sistemas para reparo",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Diagnóstico focado na causa raiz, não no sintoma",
      "Uso de termografia para detecção de umidade oculta",
      "Prescrição corretiva com soluções definitivas",
      "Fundamentação técnica para acionamento de seguro ou garantia",
      "Experiência em infiltrações complexas e recorrentes",
    ],
    relatedSlugs: ["drone-termografico-fachada", "laudo-tecnico-de-fachada", "laudo-de-garantia-de-imovel"],
    keywords: ["laudo de infiltração", "diagnóstico de infiltração", "infiltração em edificação", "causa de infiltração", "perícia de infiltração"],
    ctaText: "Solicitar diagnóstico de infiltração",
  },
  {
    slug: "laudo-de-garantia-de-imovel",
    title: "Laudo de Garantia de Imóvel",
    h1: "Laudo de Garantia de Imóvel: Laudo Técnico para Acionamento de Garantia Construtora",
    metaTitle: "Laudo de Garantia de Imóvel | Laudo Técnico para Garantia Construtora — NED",
    metaDescription: "Laudo técnico para acionamento de garantia de imóvel junto à construtora. Fundamentação normativa, registro fotográfico e responsabilidade técnica CREA para defesa do proprietário.",
    image: "/images/relatorio-tecnico-ned.jpg",
    imageAlt: "Laudo técnico de garantia de imóvel com fundamentação normativa e registro fotográfico",
    shortDescription: "Laudo técnico para acionamento de garantia construtora, com fundamentação normativa e registro detalhado.",
    problem: "Imóveis novos podem apresentar vícios construtivos dentro do período de garantia. Porém, sem um laudo técnico fundamentado, a construtora pode negar a responsabilidade ou minimizar o problema. O proprietário precisa de documentação técnica independente que comprove a existência do vício, sua origem construtiva e a fundamentação normativa para exigir o reparo.",
    method: "O laudo de garantia da NED documenta tecnicamente cada vício construtivo identificado, com registro fotográfico detalhado, análise técnica da causa (se é vício de construção, projeto ou material), fundamentação nas normas ABNT aplicáveis (especialmente NBR 15575 sobre desempenho), e classificação conforme os prazos de garantia previstos. O laudo serve como instrumento técnico para negociação ou, se necessário, ação judicial.",
    deliverables: [
      "Laudo técnico de garantia completo",
      "Registro fotográfico de cada vício construtivo",
      "Análise técnica de causa e responsabilidade",
      "Fundamentação em NBR 15575 e normas correlatas",
      "Classificação conforme prazos de garantia",
      "Prescrição corretiva para cada item",
      "ART (Anotação de Responsabilidade Técnica)",
    ],
    differentials: [
      "Laudo aceito como documento técnico para garantia",
      "Fundamentação sólida em NBR 15575 (norma de desempenho)",
      "Análise independente da construtora",
      "Classificação precisa dos prazos de garantia por sistema",
      "Documento válido para negociação ou processo judicial",
    ],
    relatedSlugs: ["recebimento-de-obras", "inspecao-predial", "laudo-de-infiltracao"],
    keywords: ["laudo de garantia de imóvel", "laudo de garantia construtora", "vício construtivo", "garantia de imóvel novo", "NBR 15575"],
    ctaText: "Solicitar laudo de garantia",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
