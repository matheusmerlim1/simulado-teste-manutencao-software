// ══════════════════════════════════════════════════════
// BANCO DE QUESTÕES
// type: "mc" | "tf" | "code"
// Para "code": answer = string canônica, keywords = tokens mínimos que devem aparecer
// ══════════════════════════════════════════════════════
const BANK = [

// ══════════════════ FUNDAMENTOS ══════════════════

{prova:"p2",topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Em um projeto de software, a equipe deseja que os testes sejam executados automaticamente a cada push no repositório. Para isso, os testes devem ser automatizados. Qual das alternativas descreve CORRETAMENTE o que são testes automatizados?",
options:["Testes realizados manualmente por operadores seguindo um roteiro fixo","Testes programados computacionalmente para execução controlada e repetível","Testes executados por um robô físico sem intervenção humana","Testes que só podem ser executados diretamente no ambiente de produção"],
answer:1,
exp:"Testes automatizados são programados — isso permite execução rápida, repetível a qualquer momento e integração com pipelines CI/CD, como o descrito no enunciado."},

{prova:"p2",topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Uma equipe está escolhendo um framework para escrever e executar testes unitários em Java. Qual das ferramentas abaixo atende a essa necessidade?",
options:["Git","Maven","Docker","JUnit"],
answer:3,
exp:"JUnit é um framework para testes unitários em Java. Maven é ferramenta de build; Git é controle de versão; Docker é plataforma de containers."},

{prova:"p2",topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Por convenção, como deve ser nomeada a classe de testes JUnit responsável por testar a classe Calculadora?",
options:["CalculadoraSpec","CalculadoraCheck","CalculadoraTest","CalculadoraSuite"],
answer:2,
exp:"Convenção JUnit: sufixo 'Test'. Assim: CalculadoraTest. Isso facilita identificação e integração com ferramentas de build como Maven Surefire."},

{prova:"p2",topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Uma equipe deseja automatizar todos os testes de seu sistema. Qual tipo de teste NÃO pode ser completamente automatizado?",
options:["Teste de regressão","Teste unitário","Teste de usabilidade","Teste de integração"],
answer:2,
exp:"Testes de usabilidade e acessibilidade exigem julgamento humano subjetivo e não podem ser completamente automatizados."},

{prova:"p2",topic:"Fundamentos",diff:"medium",type:"mc",
text:"[1,0] Um desenvolvedor afirma que, após automatizar todos os testes do sistema, qualquer bug poderá ser detectado. Qual é a LIMITAÇÃO dessa afirmação?",
options:["Testes automatizados são mais lentos que os manuais","Testes automatizados verificam apenas o que foi explicitamente programado — bugs fora do escopo passam despercebidos","Testes automatizados não funcionam em pipelines CI/CD","Testes automatizados não são confiáveis para regressão"],
answer:1,
exp:"Um teste que valida o campo 'nome' não detecta bug no campo 'email'. Testes automatizados são precisos, mas limitados ao que foi codificado."},

{prova:"p2",topic:"Fundamentos",diff:"medium",type:"mc",
text:"[1,0] Ao estruturar os testes JUnit de um sistema, um desenvolvedor criou uma única classe chamada TodosOsTestesTest para testar todas as classes da aplicação. Qual afirmação sobre essa abordagem está CORRETA?",
options:["É a abordagem recomendada — facilita a execução conjunta","Viola a convenção — cada classe de teste deve testar uma única classe da aplicação","É obrigatório que exista apenas uma classe de testes por módulo","Classes de testes devem estender alguma classe base do JUnit"],
answer:1,
exp:"Convenção: uma classe de teste por classe da aplicação. Ex: PedidoServiceTest → testa só PedidoService. Isso facilita manutenção e isolamento de falhas."},

{prova:"p2",topic:"Fundamentos",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação à automação de testes.",
statements:[
{text:"Testes automatizados facilitam a execução de testes de regressão após refatorações.",answer:true},
{text:"Todo tipo de teste, incluindo testes de usabilidade, pode ser completamente automatizado.",answer:false},
{text:"O JUnit faz parte do conjunto de frameworks xUnit, assim como NUnit (.NET) e pytest (Python).",answer:true},
{text:"A ordem de execução dos métodos @Test no JUnit 5 é determinística, seguindo a ordem de declaração na classe.",answer:false}
],
exp:"Usabilidade exige avaliação humana — não pode ser automatizada. A ordem dos @Test é aleatória no JUnit 5, por isso cada teste deve ser independente."},

{prova:"p2",topic:"Fundamentos",diff:"hard",type:"mc",
text:"[1,0] Considere o método de teste abaixo. Qual boa prática está sendo violada?\n\n@Test\npublic void testSomarEMultiplicar() {\n    assertEquals(5, calc.somar(2, 3));\n    assertEquals(6, calc.multiplicar(2, 3));\n}",
options:["O método não utiliza @BeforeEach para inicializar calc","Um único @Test está verificando mais de um comportamento — deveriam ser dois métodos separados","assertEquals não pode ser utilizado com valores inteiros","O método deveria ser declarado como estático"],
answer:1,
exp:"Um @Test deve verificar apenas UM comportamento. Misturar somar e multiplicar dificulta isolar falhas. O correto seria ter testSomar() e testMultiplicar() separados."},

{prova:"p2",topic:"Fundamentos",diff:"hard",type:"mc",
text:"[1,0] Em um determinado projeto JUnit 5, o teste testB depende de uma variável inicializada pelo teste testA. Durante a execução, testB falha inesperadamente. Qual é a causa mais provável?",
options:["Um bug na JVM que executa os testes","A ordem de execução dos @Test é aleatória — testB pode ter executado antes de testA","O @BeforeEach não é chamado quando testes dependem entre si","O JUnit descarta a JVM inteira entre cada @Test"],
answer:1,
exp:"A ordem dos @Test é aleatória no JUnit 5. Se B depende do estado de A e A rodar depois, o resultado é imprevisível. Use @BeforeEach para reinicializar estado antes de cada teste."},

{prova:"p2",topic:"Fundamentos",diff:"easy",type:"code",
text:"[1,0] De acordo com as convenções do JUnit 5, desenvolva a declaração (apenas o cabeçalho) da classe de testes responsável por testar a classe Calculadora.",
answer:`public class CalculadoraTest {
}`,
keywords:["CalculadoraTest"],
exp:"Convenção: sufixo 'Test'. A classe pode ficar vazia — o que importa é a nomenclatura correta."},

{prova:"p2",topic:"Fundamentos",diff:"medium",type:"code",
text:"[2,0] Considere que a classe CalculadoraTest possui um atributo privado 'calc' do tipo Calculadora. Implemente o método de inicialização que deve ser executado antes de cada método de teste, inicializando 'calc' com new Calculadora().",
answer:`@BeforeEach
public void setUp() {
    calc = new Calculadora();
}`,
keywords:["@BeforeEach","setUp","Calculadora"],
exp:"@BeforeEach garante que cada @Test começa com um estado limpo. O método pode ter qualquer nome, mas setUp() é a convenção mais comum."},

{prova:"p2",topic:"Fundamentos",diff:"hard",type:"code",
text:"[3,0] Desenvolva a classe CalculadoraTest completa em JUnit 5, contendo: um atributo privado 'calc' do tipo Calculadora, um método @BeforeEach que inicializa 'calc', e um método @Test chamado testSomar que verifica que calc.somar(3, 7) retorna 10.",
answer:`public class CalculadoraTest {
    private Calculadora calc;

    @BeforeEach
    public void setUp() {
        calc = new Calculadora();
    }

    @Test
    public void testSomar() {
        assertEquals(10, calc.somar(3, 7));
    }
}`,
keywords:["CalculadoraTest","@BeforeEach","setUp","@Test","assertEquals","somar"],
exp:"Estrutura completa: atributo privado + @BeforeEach para inicialização + @Test para verificação com assertEquals."},

// ══════════════════ ANOTAÇÕES JUNIT ══════════════════

{prova:"p2",topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário marcar um método para que ele seja reconhecido e executado automaticamente pelo framework. Para desenvolver esse teste, qual anotação deve ser utilizada?",
options:["@TestMethod","@Execute","@Test","@Run"],
answer:2,
exp:"@Test é a anotação fundamental do JUnit 5 que marca um método como caso de teste, chamado automaticamente durante a execução."},

{prova:"p2",topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que um método de inicialização seja executado antes de CADA método @Test da classe, garantindo um estado limpo. Para desenvolver esse comportamento, qual anotação deve ser utilizada?",
options:["@BeforeAll","@Setup","@BeforeEach","@Before"],
answer:2,
exp:"@BeforeEach é chamado antes de cada @Test individualmente. @BeforeAll executa apenas uma vez antes de todos — por isso deve ser estático."},

{prova:"p2",topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que um método de finalização seja executado UMA ÚNICA VEZ após todos os métodos @Test da classe encerrarem. Para desenvolver esse comportamento, qual anotação deve ser utilizada?",
options:["@AfterEach","@TearDown","@After","@AfterAll"],
answer:3,
exp:"@AfterAll é chamado uma única vez ao final de todos os testes da classe. Deve ser estático. Usado para liberar recursos compartilhados como conexões de banco."},

{prova:"p2",topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Durante o desenvolvimento, um método @Test referencia uma funcionalidade que ainda não foi implementada. Para que esse teste não seja executado enquanto a implementação não estiver pronta, qual anotação deve ser aplicada?",
options:["@Skip","@Ignore","@Disabled","@Pending"],
answer:2,
exp:"@Disabled ignora o teste — ele não é executado e aparece como 'skipped' no relatório. Aceita mensagem explicativa: @Disabled('Aguardando implementação')."},

{prova:"p2",topic:"Anotações JUnit",diff:"medium",type:"mc",
text:"[1,0] Considere uma classe de teste JUnit 5 com os métodos anotados abaixo. Qual é a ordem CORRETA de execução para um único método @Test?\n\n@BeforeAll static void initAll()\n@BeforeEach void setUp()\n@Test void testX()\n@AfterEach void tearDown()\n@AfterAll static void closeAll()",
options:["@BeforeAll → @BeforeEach → @Test → @AfterAll → @AfterEach","@BeforeEach → @BeforeAll → @Test → @AfterEach → @AfterAll","@BeforeAll → @BeforeEach → @Test → @AfterEach → @AfterAll","@BeforeAll → @Test → @AfterAll → @BeforeEach → @AfterEach"],
answer:2,
exp:"Ordem: @BeforeAll (1×) → @BeforeEach → @Test → @AfterEach → @AfterAll (1×). @BeforeAll/@AfterAll envolvem toda a classe; @BeforeEach/@AfterEach envolvem cada @Test individualmente."},

{prova:"p2",topic:"Anotações JUnit",diff:"medium",type:"mc",
text:"[1,0] Considere uma classe de teste com 4 métodos @Test, um @BeforeEach setUp() e um @AfterEach tearDown(). Quantas vezes setUp() e tearDown() serão executados ao total?",
options:["setUp: 1×, tearDown: 1×","setUp: 4×, tearDown: 1×","setUp: 4×, tearDown: 4×","setUp: 1×, tearDown: 4×"],
answer:2,
exp:"@BeforeEach e @AfterEach são chamados para CADA @Test. Com 4 testes: setUp() = 4×, tearDown() = 4×."},

{prova:"p2",topic:"Anotações JUnit",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às anotações do JUnit 5.",
statements:[
{text:"@BeforeAll e @AfterAll devem ser aplicados a métodos estáticos.",answer:true},
{text:"@Disabled faz o teste falhar com uma mensagem especial no relatório.",answer:false},
{text:"@AfterEach é executado após cada @Test, mesmo que o teste tenha falhado.",answer:true},
{text:"Um método @Test pode depender do estado deixado por outro @Test da mesma classe, desde que estejam na ordem correta.",answer:false}
],
exp:"@Disabled apenas ignora — não gera falha. @AfterEach é garantido mesmo em falha. Testes nunca devem depender de estado alheio pois a ordem é aleatória."},

{prova:"p2",topic:"Anotações JUnit",diff:"hard",type:"mc",
text:"[1,0] Considere a classe abaixo. O @Timeout do método testPerimetro1 está comentado. Qual é o limite de tempo efetivo desse método?\n\n@Timeout(value = 100, unit = TimeUnit.SECONDS)\nclass RetanguloTest {\n    @Test void testArea1() { }\n    @Test\n    //@Timeout(value = 1, unit = TimeUnit.MICROSECONDS)\n    void testPerimetro1() { }\n}",
options:["1 microssegundo — o comentário ainda é processado","100 segundos — herda da classe pois o @Timeout do método está comentado","Sem limite — o comentário cancela o @Timeout da classe","Erro de compilação por conflito de anotações"],
answer:1,
exp:"O @Timeout está COMENTADO — sem efeito. testPerimetro1 herda os 100 segundos da classe. Um @Timeout ativo no método sobrescreveria o da classe."},

{prova:"p2",topic:"Anotações JUnit",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a anotação necessária para que o método testLogin não seja executado durante a suíte de testes, com a justificativa 'Aguardando correção do bug #42'.",
answer:`@Disabled("Aguardando correção do bug #42")`,
keywords:["@Disabled","bug"],
exp:"@Disabled com mensagem explicativa. O teste aparece como 'skipped' no relatório — não falha, apenas é ignorado."},

{prova:"p2",topic:"Anotações JUnit",diff:"medium",type:"code",
text:"[2,0] Considere que uma classe de teste necessita abrir uma conexão de banco de dados (DataSource.getConnection()) uma única vez antes de todos os testes, armazenando-a em 'conexao', e fechá-la (conexao.close()) após todos os testes encerrarem. Implemente os dois métodos responsáveis por esse ciclo de vida.",
answer:`@BeforeAll
static void abrirConexao() throws Exception {
    conexao = DataSource.getConnection();
}

@AfterAll
static void fecharConexao() throws Exception {
    conexao.close();
}`,
keywords:["@BeforeAll","static","@AfterAll","getConnection","close"],
exp:"@BeforeAll e @AfterAll devem ser estáticos. São ideais para recursos pesados compartilhados — abrir conexão uma vez é muito mais eficiente que abrir em cada @BeforeEach."},

{prova:"p2",topic:"Anotações JUnit",diff:"hard",type:"code",
text:"[3,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testSetBase2, que verifica que os valores 0.01 (via setter) e 32.2 (via construtor Retangulo(32.2, 10)) são aceitos SEM lançar exceção. Utilize assertDoesNotThrow.",
answer:`@Test
public void testSetBase2() {
    Retangulo ret = new Retangulo(2, 2);
    assertDoesNotThrow(() -> { ret.setBase(0.01); });
    assertDoesNotThrow(() -> { new Retangulo(32.2, 10); });
}`,
keywords:["@Test","assertDoesNotThrow","0.01","32.2"],
exp:"assertDoesNotThrow verifica que valores válidos são aceitos sem exceção. Complementa o testSetBase1 que verifica os valores inválidos com assertThrows."},

// ══════════════════ ASSERÇÕES ══════════════════

{prova:"p2",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar se dois valores numéricos são iguais. Qual método de asserção deve ser utilizado?",
options:["assertSame","assertMatch","assertTrue","assertEquals"],
answer:3,
exp:"assertEquals(esperado, obtido) usa .equals(). Para doubles aceita tolerância: assertEquals(3.14, pi, 0.001)."},

{prova:"p2",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar se a chamada de um método lança uma exceção específica. Qual método de asserção deve ser utilizado?",
options:["assertError(Ex.class, () -> m())","expectThrows(Ex.class, () -> m())","assertThrows(Ex.class, () -> m())","catchThrowable(Ex.class, () -> m())"],
answer:2,
exp:"assertThrows(Classe.class, () -> { chamada; }) — se a exceção não for lançada, o teste falha. É a forma idiomática no JUnit 5."},

{prova:"p2",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário forçar a falha imediata do teste em um ponto específico do código, indicando que aquele ponto nunca deveria ser alcançado. Qual método deve ser utilizado?",
options:["throw new AssertionError()","stop()","fail()","abort()"],
answer:2,
exp:"fail() lança AssertionError imediatamente. Usado para detectar fluxos incorretos — por exemplo, quando uma exceção esperada não é lançada."},

{prova:"p2",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar que uma referência retornada por um método é nula. Qual método de asserção deve ser utilizado?",
options:["assertEmpty","assertZero","assertNull","assertVoid"],
answer:2,
exp:"assertNull(ref) verifica null. Ex: assertNull(cache.get('chave')) verifica que o cache retorna null para chave inexistente."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Qual é o problema na abordagem utilizada?\n\n@Test\nvoid testDivisaoPorZero() {\n    try {\n        calc.dividir(10, 0);\n    } catch (ArithmeticException e) {\n        // esperado\n    }\n}",
options:["O catch deveria relançar a exceção com throw e","Se dividir(10,0) não lançar a exceção, o teste passa incorretamente","@Test não pode conter try/catch","ArithmeticException não é verificada em Java"],
answer:1,
exp:"Se o método não lançar exceção, o fluxo passa direto pelo try e o teste passa sem verificar nada. Solução: adicionar fail() após a chamada, ou usar assertThrows()."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere as duas asserções abaixo. Qual é a diferença entre assertEquals e assertSame?\n\nassertEquals(s1, s2);\nassertSame(s1, s2);",
options:["assertEquals compara valor (.equals()); assertSame compara referência de memória (==)","Ambas comparam valor, mas assertSame é exclusiva para tipos primitivos","assertSame compara valor; assertEquals compara referência","assertEquals é mais rápido; assertSame é mais seguro"],
answer:0,
exp:"assertEquals: .equals() — compara conteúdo. assertSame: == — verifica se é o mesmo objeto na memória. new String('a') e new String('a') passam no assertEquals mas falham no assertSame."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere o teste abaixo. Por que o uso de != para comparar doubles é problemático nesse contexto?\n\n@Test\npublic void testPerimetro2() {\n    Retangulo ret = new Retangulo(22.3, 10.2);\n    if (ret.perimetro() != 65.0)\n        fail(\"PERÍMETRO INCORRETO!\");\n}",
options:["fail() não pode ser chamado dentro de um if","Comparar doubles com != é arriscado — 22.3×2 + 10.2×2 pode retornar 65.00000000000001 em ponto flutuante","assertEquals aceita mais tipos de dado que !=","O uso de != com double gera erro de compilação"],
answer:1,
exp:"Aritmética IEEE 754 é imprecisa. O resultado pode ser 65.00000000000001. assertEquals(65.0, ret.perimetro(), 0.001) é mais robusto por aceitar tolerância."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às asserções do JUnit 5.",
statements:[
{text:"assertEquals(3.14, pi, 0.001) aceita qualquer valor entre 3.139 e 3.141.",answer:true},
{text:"assertDoesNotThrow verifica que um método lança uma exceção.",answer:false},
{text:"assertFalse(x.isBloqueado()) é mais legível que assertTrue(!x.isBloqueado()).",answer:true},
{text:"assertNotSame verifica que dois objetos são referências diferentes na memória.",answer:true}
],
exp:"assertDoesNotThrow verifica que NENHUMA exceção é lançada — oposto de assertThrows. assertFalse evita dupla negação, expressando diretamente a intenção."},

{prova:"p2",topic:"Asserções",diff:"hard",type:"mc",
text:"[1,0] Considere o código abaixo. Qual linha está sendo utilizada INCORRETAMENTE?\n\nString s1 = new String(\"abc\");\nString s2 = new String(\"abc\");\nassertSame(s1, s2);   // linha A\nassertEquals(s1, s2); // linha B",
options:["Linha A — assertSame falha pois s1 e s2 são objetos distintos na heap","Linha B — assertEquals falha pois os conteúdos são diferentes","Ambas estão corretas","Ambas estão incorretas"],
answer:0,
exp:"new String('abc') cria objetos DISTINTOS na heap. assertSame(==) falha. assertEquals(.equals()) passa pois os conteúdos são iguais. Linha A está incorreta para esse cenário."},

{prova:"p2",topic:"Asserções",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as duas asserções: uma que verifica que service.buscarPorId(999L) retorna null, e outra que verifica que service.buscarPorId(1L) não é null. Utilize assertNull e assertNotNull passando o retorno do método diretamente.",
answer:`assertNull(service.buscarPorId(999L));
assertNotNull(service.buscarPorId(1L));`,
keywords:["assertNull","assertNotNull","service.buscarPorId"],
exp:"Sintaxe correta: assertNull(valor) e assertNotNull(valor) — passe o RETORNO do método diretamente. Não use assertNull(null, valor) (assinatura com mensagem) nem assertNotNull(!null, valor) (inválido em Java)."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"code",
text:"[2,0] Considere a classe Retangulo com o construtor Retangulo(double base, double altura) que lança GeometriaException para valores inválidos. De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testSetBase1, que verifica que setBase(-12) E o construtor new Retangulo(0, 10) lançam GeometriaException. Utilize assertThrows.",
answer:`@Test
public void testSetBase1() {
    Retangulo ret = new Retangulo(2, 2);
    assertThrows(GeometriaException.class,
        () -> { ret.setBase(-12); });
    assertThrows(GeometriaException.class,
        () -> { new Retangulo(0, 10); });
}`,
keywords:["@Test","assertThrows","GeometriaException","setBase","-12"],
exp:"Dois assertThrows no mesmo @Test são válidos quando testam a mesma regra de negócio. Cada lambda encapsula uma chamada que deve lançar a exceção."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testArea2 que cria Retangulo(22.3, 10.2) e verifica que a área retornada é 227.46 com tolerância de 0.001.",
answer:`@Test
public void testArea2() {
    Retangulo ret = new Retangulo(22.3, 10.2);
    assertEquals(227.46, ret.area(), 0.001);
}`,
keywords:["@Test","assertEquals","227.46","0.001"],
exp:"Tolerância é essencial para doubles. 22.3 × 10.2 pode resultar em 227.45999... em ponto flutuante — a tolerância 0.001 absorve a imprecisão."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"code",
text:"[2,0] Considere que Config.getInstance() deve sempre retornar a mesma instância (padrão Singleton). De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testSingleton que verifica essa propriedade. Utilize a asserção apropriada para verificar identidade de objeto.",
answer:`@Test
public void testSingleton() {
    assertSame(Config.getInstance(), Config.getInstance());
}`,
keywords:["@Test","assertSame","getInstance"],
exp:"assertSame usa == — verifica identidade de referência. Perfeito para Singleton: duas chamadas devem retornar o mesmo objeto na memória, não apenas objetos iguais em valor."},

{prova:"p2",topic:"Asserções",diff:"hard",type:"code",
text:"[3,0] Considere a classe abaixo, que representa um teste de divisão. O código atual tem um problema grave: se calc.dividir(10, 0) não lançar a exceção, o teste passa incorretamente. De acordo com as especificações abaixo, reescreva o teste de forma CORRETA utilizando assertThrows.\n\n// Versão incorreta:\n@Test\nvoid testDivisaoPorZero() {\n    try { calc.dividir(10, 0); }\n    catch (ArithmeticException e) { }\n}",
answer:`@Test
public void testDivisaoPorZero() {
    assertThrows(ArithmeticException.class,
        () -> { calc.dividir(10, 0); });
}`,
keywords:["@Test","assertThrows","ArithmeticException","dividir"],
exp:"assertThrows é mais seguro: se dividir() não lançar a exceção, o teste falha automaticamente — sem risco de falso positivo como ocorre com try/catch simples."},

{prova:"p2",topic:"Asserções",diff:"hard",type:"code",
text:"[3,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testDivisaoPorZeroCorreto que verifica: (1) que calc.dividir(10, 0) lança ArithmeticException usando assertThrows, e (2) que calc.dividir(10, 2) NÃO lança exceção e retorna 5.0 usando assertDoesNotThrow e assertEquals.",
answer:`@Test
public void testDivisaoPorZeroCorreto() {
    assertThrows(ArithmeticException.class,
        () -> { calc.dividir(10, 0); });
    assertDoesNotThrow(
        () -> { calc.dividir(10, 2); });
    assertEquals(5.0, calc.dividir(10, 2), 0.001);
}`,
keywords:["@Test","assertThrows","ArithmeticException","assertDoesNotThrow","assertEquals","5.0"],
exp:"Teste completo: assertThrows para valor inválido, assertDoesNotThrow para valor válido, assertEquals para verificar o resultado. Os três juntos cobrem comportamento esperado e inesperado."},

// ══════════════════ @TIMEOUT ══════════════════

{prova:"p2",topic:"@Timeout",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário garantir que um método @Test não demore mais que 2 segundos para executar. Caso o tempo seja excedido, o que acontece com o teste?",
options:["O teste é marcado como ignorado no relatório","O teste é reexecutado automaticamente uma vez","O teste falha com erro de tempo excedido","O teste passa com um aviso no relatório"],
answer:2,
exp:"Tempo excedido → teste FALHA. Não é ignorado (@Disabled faz isso). Útil para detectar regressões de performance e loops infinitos."},

{prova:"p2",topic:"@Timeout",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, a anotação @Timeout é utilizada sem o atributo 'unit'. Qual é a unidade de tempo adotada por padrão?",
options:["Milissegundos","Nanosegundos","Minutos","Segundos"],
answer:3,
exp:"@Timeout(2) = 2 SEGUNDOS por padrão. Para outras unidades: @Timeout(value=500, unit=TimeUnit.MILLISECONDS)."},

{prova:"p2",topic:"@Timeout",diff:"medium",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário limitar a execução de um método a 200 milissegundos. Qual das anotações abaixo está CORRETA?",
options:["@Timeout(0.2)","@Timeout(200, TimeUnit.MILLISECONDS)","@Timeout(value = 200, unit = TimeUnit.MILLISECONDS)","@Timeout(millis = 200)"],
answer:2,
exp:"Sintaxe correta: @Timeout(value=X, unit=TimeUnit.UNIDADE). @Timeout(200) = 200 segundos. @Timeout(millis=200) não é atributo válido."},

{prova:"p2",topic:"@Timeout",diff:"medium",type:"mc",
text:"[1,0] Considere que uma classe de teste tem @Timeout(5) e um de seus métodos possui @Timeout(value=100, unit=TimeUnit.MILLISECONDS). Qual é o limite de tempo efetivo para esse método?",
options:["5 segundos — a classe tem precedência sobre o método","100 milissegundos — o @Timeout do método sobrescreve o da classe","5 segundos + 100 ms = 5.1 segundos","Erro de compilação — não podem coexistir"],
answer:1,
exp:"O @Timeout do método SOBRESCREVE o da classe. Os demais métodos sem @Timeout próprio herdam o limite da classe (5s)."},

{prova:"p2",topic:"@Timeout",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação à anotação @Timeout no JUnit 5.",
statements:[
{text:"@Timeout aplicada à classe define o limite individualmente para cada @Test, não o tempo total de todos os testes somados.",answer:true},
{text:"Quando o tempo limite é excedido, o teste é marcado como 'ignorado' no relatório.",answer:false},
{text:"Para operações de I/O (banco, API), recomenda-se SECONDS; para operações em memória, MILLISECONDS.",answer:true},
{text:"@Timeout pode ser aplicada tanto em métodos @Test quanto em classes inteiras.",answer:true}
],
exp:"Tempo excedido = FALHA, não ignorado. @Timeout na classe cria limite individual por @Test — cada um é julgado de forma independente."},

{prova:"p2",topic:"@Timeout",diff:"hard",type:"mc",
text:"[1,0] Em um pipeline CI/CD, um teste com @Timeout(value=200, unit=TimeUnit.MILLISECONDS) falha intermitentemente mesmo sem bug no código. Qual é a causa mais provável?",
options:["O JUnit se comporta diferente em servidores Linux","Pipelines CI/CD compartilham recursos e podem ser 2–3× mais lentos que máquinas locais","O Java é mais lento em ambientes de servidor","CI não suporta TimeUnit.MILLISECONDS"],
answer:1,
exp:"Ambientes CI compartilham CPU e memória — 200ms local pode virar 600ms em CI. Limites muito apertados geram flaky tests. Aumente os limites e adicione margem de segurança."},

{prova:"p2",topic:"@Timeout",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as anotações necessárias para que o método testBuscarTodos seja executado como um @Test com limite de 2 segundos.",
answer:`@Test
@Timeout(2)
public void testBuscarTodos() {
}`,
keywords:["@Test","@Timeout","2"],
exp:"@Timeout(2) sem unit = 2 segundos (padrão). As duas anotações podem ser empilhadas no mesmo método."},

{prova:"p2",topic:"@Timeout",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente a anotação @Timeout com limite de 500 milissegundos para o método testBuscarProdutos, utilizando TimeUnit explícito.",
answer:`@Test
@Timeout(value = 500, unit = TimeUnit.MILLISECONDS)
public void testBuscarProdutos() {
}`,
keywords:["@Test","@Timeout","500","MILLISECONDS"],
exp:"value + unit explícitos são necessários para milissegundos. @Timeout(500) sem unit = 500 segundos — um erro clássico de omitir a unidade."},

{prova:"p2",topic:"@Timeout",diff:"medium",type:"code",
text:"[2,0] Considere que todos os métodos @Test da classe CalculadoraServiceTest devem respeitar um limite de 1 segundo. De acordo com as especificações abaixo, implemente a classe com @Timeout na classe e dois métodos @Test: testSomar e testMultiplicar.",
answer:`@Timeout(1)
class CalculadoraServiceTest {
    @Test
    void testSomar() { }

    @Test
    void testMultiplicar() { }
}`,
keywords:["@Timeout","1","CalculadoraServiceTest","@Test","testSomar","testMultiplicar"],
exp:"@Timeout na classe aplica limite de 1 segundo a CADA @Test individualmente. Cada método é julgado de forma independente."},

{prova:"p2",topic:"@Timeout",diff:"hard",type:"code",
text:"[3,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testQueryRapida com timeout de 300 milissegundos, que verifica com assertFalse que repo.findByCategoria('ELETRONICO') não retorna uma lista vazia.",
answer:`@Test
@Timeout(value = 300, unit = TimeUnit.MILLISECONDS)
public void testQueryRapida() {
    assertFalse(repo.findByCategoria("ELETRONICO").isEmpty());
}`,
keywords:["@Test","@Timeout","300","MILLISECONDS","assertFalse","findByCategoria"],
exp:"Combina @Timeout com assertFalse. assertFalse(lista.isEmpty()) verifica que a lista tem elementos. value+unit são obrigatórios para milissegundos."},

// ══════════════════ TESTES PARAMETRIZADOS ══════════════════

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário executar o mesmo método de teste para uma lista de valores distintos, de forma automatizada. Para desenvolver esse teste, qual anotação deve substituir @Test no método?",
options:["@Repeated","@DataDriven","@ParameterizedTest","@RunWith"],
answer:2,
exp:"@ParameterizedTest substitui @Test em métodos parametrizados. Sem ela, o JUnit não sabe que o método recebe argumentos externos."},

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar uma lista de valores literais de um único tipo (doubles) para um @ParameterizedTest. Qual anotação deve ser utilizada?",
options:["@CsvSource","@MethodSource","@ValueSource","@EnumSource"],
answer:2,
exp:"@ValueSource(doubles={...}) passa valores de UM único tipo. Não suporta múltiplas colunas — para isso use @CsvSource."},

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar tuplas de valores (pares entrada/saída) definidos diretamente no código-fonte, sem arquivo externo. Qual anotação deve ser utilizada?",
options:["@CsvFileSource","@CsvSource","@InlineSource","@DataSource"],
answer:1,
exp:"@CsvSource({'5,10','2,4'}) define tuplas inline no código. @CsvFileSource lê de arquivo externo."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Considere o método de teste abaixo. Quantas vezes ele será executado?\n\n@ParameterizedTest\n@ValueSource(doubles = { -2, -1000, -10.8, 0, -0.02 })\npublic void testAlturaInvalida(double h) {\n    assertThrows(GeometriaException.class,\n        () -> new Retangulo(1, h));\n}",
options:["1 vez com todos os valores simultâneos","3 vezes","5 vezes","10 vezes"],
answer:2,
exp:"@ValueSource tem 5 valores. @ParameterizedTest executa uma vez por valor → 5 execuções independentes."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Um arquivo CSV de dados de teste possui 4 linhas de cabeçalho antes dos dados reais. Qual atributo de @CsvFileSource deve ser utilizado para pular essas linhas?",
options:["skipLines=4","beginInLine=5","headerCount=4","numLinesToSkip=4"],
answer:3,
exp:"numLinesToSkip=4 pula as 4 primeiras linhas. 'beginInLine' e 'skipLines' não existem no JUnit 5."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Por que @MethodSource é necessário nesse caso?\n\n@ParameterizedTest\n@MethodSource(\"dados\")\nvoid testArea(Circulo base, double h, double res) { }",
options:["@CsvSource seria mais lento para muitos dados","@MethodSource permite passar objetos instanciados; @CsvSource só aceita valores literais","@CsvSource não suporta parâmetros do tipo double","@MethodSource é obrigatório quando há mais de 2 parâmetros"],
answer:1,
exp:"@CsvSource aceita apenas tipos primitivos/strings. Para passar objetos como Circulo, é necessário @MethodSource."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Um @ParameterizedTest utiliza @CsvSource com delimitador ';'. Qual anotação está CORRETA?",
options:["@CsvSource({'8, 3, 10, 55'})","@CsvSource(value={'8;3;10;55'}, separator=';')","@CsvSource(value={'8;3;10;55'}, delimiter=';')","@CsvFileSource({'8;3;10;55'}, delimiter=';')"],
answer:2,
exp:"O atributo chama-se 'delimiter', não 'separator'. @CsvFileSource não aceita dados inline."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação aos testes parametrizados no JUnit 5.",
statements:[
{text:"@MethodSource deve referenciar um método estático que retorna um Stream.",answer:true},
{text:"@ValueSource permite passar pares de valores (entrada e saída) para cada execução do teste.",answer:false},
{text:"Stream<Object[]> e Stream<Arguments> são ambos formatos válidos de retorno em @MethodSource.",answer:true},
{text:"@CsvFileSource com numLinesToSkip=4 equivale a beginInLine=5.",answer:false}
],
exp:"@ValueSource: UM valor simples por execução. 'beginInLine' não existe — o atributo correto é numLinesToSkip."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"mc",
text:"[1,0] Um arquivo 'dados.csv' tem 4 linhas de cabeçalho e usa '~' como separador. Qual anotação está CORRETA para carregar esse arquivo em um @ParameterizedTest?\n\n// dados.csv:\n// linha 1: TRAPÉZIO\n// linha 2: DADOS DE TESTE\n// linha 3: BME | BMA | LE | LD | R\n// linha 4: (vazio)\n// linha 5: 5 ~ 2 ~ 4 ~ 6 ~ 17",
options:[
'@CsvFileSource(file="dados.csv", delimiter=\'~\', numLinesToSkip=4)',
'@CsvSource(files={"dados.csv"}, delimiter=\'~\', numLinesToSkip=4)',
'@CsvFileSource(files={"dados.csv"}, delimiter=\'~\', numLinesToSkip=4)',
'@CsvFileSource(files={"dados.csv"}, delimiter=\'~\', beginInLine=5)'],
answer:2,
exp:"Atributo 'files' (plural/array), delimiter='~', numLinesToSkip=4. 'file' singular e 'beginInLine' não existem no JUnit 5."},

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente apenas a anotação @ValueSource para passar os valores -5, 0 e -10 (doubles) a um @ParameterizedTest.",
answer:`@ValueSource(doubles = { -5, 0, -10 })`,
keywords:["@ValueSource","doubles"],
exp:"@ValueSource(doubles={...}) — o atributo 'doubles' aceita um array de valores double literais."},

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente apenas a anotação @CsvFileSource para carregar o arquivo 'TrapezioPerimetroTestValues.txt', pulando as 4 primeiras linhas de cabeçalho.",
answer:`@CsvFileSource(files = {"TrapezioPerimetroTestValues.txt"}, numLinesToSkip = 4)`,
keywords:["@CsvFileSource","files","numLinesToSkip","4"],
exp:"'files' (plural, array de strings) é o atributo correto. numLinesToSkip=4 pula o cabeçalho."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] Considere a classe Trapezio com o método area(). De acordo com as especificações abaixo, desenvolva o método @ParameterizedTest chamado testArea, que recebe (double baseMaior, double baseMenor, double altura, double resultado) via @CsvSource com os dados '8;3;10;55' e '12;3.5;2.2;17.05', usando ';' como delimitador. O método deve verificar o resultado com assertEquals com tolerância 0.1.",
answer:`@ParameterizedTest
@CsvSource(value = {
    "8 ; 3 ; 10 ; 55",
    "12 ; 3.5 ; 2.2 ; 17.05"
}, delimiter = ';')
public void testArea(double baseMaior, double baseMenor,
                     double altura, double resultado) {
    Trapezio t = new Trapezio(baseMaior, baseMenor, altura);
    assertEquals(resultado, t.area(), 0.1);
}`,
keywords:["@ParameterizedTest","@CsvSource","delimiter","Trapezio","assertEquals","0.1"],
exp:"@CsvSource com delimiter=';' e 4 parâmetros na ordem das colunas. assertEquals com tolerância 0.1 para doubles."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente o método de provimento de argumentos chamado dataTestPerimetro() para @MethodSource, retornando dois casos de teste: Retangulo(20,18)→resultado 76.0 e Retangulo(22.3,10.2)→resultado 65.0.",
answer:`private static Stream<Arguments> dataTestPerimetro() {
    return Stream.of(
        Arguments.of(new Retangulo(20, 18), 76.0),
        Arguments.of(new Retangulo(22.3, 10.2), 65.0)
    );
}`,
keywords:["static","Stream","Arguments","Retangulo","76","65"],
exp:"Método estático retornando Stream<Arguments>. Arguments.of() empacota cada caso. Permite passar objetos instanciados — impossível com @CsvSource."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[3,0] Considere a classe Coordenada com atributos x, y, z (double) e a classe CoordenadaJSON com o método estático JSONParaCoordenada(String json) que converte texto JSON em objeto Coordenada. De acordo com as especificações abaixo, desenvolva a classe de teste CoordenadaJSONTest em JUnit 5, contendo:\n\nA) Um método de provimento testJSONParaCoordenadaData() que fornece os seguintes pares (json, Coordenada esperada):\n   1. '{ x : -98.43 , y : 2.2 , z : -8.9 }' → Coordenada(-98.43, 2.2, -8.9)\n   2. '{ x:21, y: 100.2, z:189 }' → Coordenada(21, 100.2, 189)\n   3. '{x:174.22,y:-982,z:890.8}' → Coordenada(174.22, -982, 890.8)\n\nB) Um @ParameterizedTest chamado testJSONParaCoordenada que recebe (String json, Coordenada obj), converte o json e verifica os três atributos com assertEquals.\n\nDica: os argumentos providos por métodos podem ser objetos.",
answer:`class CoordenadaJSONTest {

    public static Stream<Arguments> testJSONParaCoordenadaData() {
        String c1j = "{ x : -98.43 , y : 2.2 , z : -8.9 }";
        Coordenada c1o = new Coordenada(-98.43, 2.2, -8.9);
        String c2j = "{ x:21, y: 100.2, z:189 }";
        Coordenada c2o = new Coordenada(21, 100.2, 189);
        String c3j = "{x:174.22,y:-982,z:890.8}";
        Coordenada c3o = new Coordenada(174.22, -982, 890.8);
        return Stream.of(
            Arguments.of(c1j, c1o),
            Arguments.of(c2j, c2o),
            Arguments.of(c3j, c3o)
        );
    }

    @ParameterizedTest
    @MethodSource("testJSONParaCoordenadaData")
    public void testJSONParaCoordenada(String json, Coordenada obj) {
        Coordenada c = CoordenadaJSON.JSONParaCoordenada(json);
        assertEquals(obj.getX(), c.getX());
        assertEquals(obj.getY(), c.getY());
        assertEquals(obj.getZ(), c.getZ());
    }
}`,
keywords:["Stream","Arguments","Arguments.of","@ParameterizedTest","@MethodSource","testJSONParaCoordenadaData","assertEquals","getX","getY","getZ"],
exp:"Reprodução fiel da questão 3 da prova. Pontos-chave: método de provimento retorna Stream<Arguments> com Arguments.of(json, objeto); @MethodSource referencia pelo nome; @ParameterizedTest recebe (String, Coordenada); três assertEquals para cada atributo."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[3,0] Considere a classe Cilindro com o método area() e a classe Circulo(double raio). De acordo com as especificações abaixo, desenvolva o método de provimento dataTestArea() e o método @ParameterizedTest testArea para a classe CilindroTest, conforme os dados:\n   - Circulo(4), altura=8, resultado esperado=301.59\n   - Circulo(10.72), altura=5.4, resultado esperado=1085.77\n   - Circulo(1), altura=2.3, resultado esperado=20.73\nO teste deve verificar o resultado com tolerância 0.001.",
answer:`private static Stream<Arguments> dataTestArea() {
    Circulo c1 = new Circulo(4);
    Circulo c2 = new Circulo(10.72);
    Circulo c3 = new Circulo(1);
    return Stream.of(
        Arguments.of(c1, 8,   301.59),
        Arguments.of(c2, 5.4, 1085.77),
        Arguments.of(c3, 2.3, 20.73)
    );
}

@ParameterizedTest
@MethodSource("dataTestArea")
public void testArea(Circulo base, double altura, double resultado) {
    Cilindro cil = new Cilindro(base, altura);
    assertEquals(resultado, cil.area(), 0.001);
}`,
keywords:["Stream","Arguments","Arguments.of","Circulo","@ParameterizedTest","@MethodSource","dataTestArea","assertEquals","0.001"],
exp:"Reprodução do CilindroTest real. Método estático + Stream<Arguments> + Arguments.of() com objetos instanciados. @MethodSource referencia pelo nome. assertEquals com tolerância 0.001."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[3,0] Considere que o CilindroTest possui também um método dataTestVolume() que testa o volume. De acordo com as especificações abaixo, implemente o dataTestVolume() usando Stream<Object[]> (em vez de Stream<Arguments>) para os casos: Cilindro(Circulo(6.7),2.2)→310.26 e Cilindro(Circulo(5),3.7)→290.6. Em seguida, implemente o @ParameterizedTest testVolume que verifica o volume com tolerância 0.01.",
answer:`public static Stream<Object[]> dataTestVolume() {
    Cilindro cil1 = new Cilindro(new Circulo(6.7), 2.2);
    Cilindro cil2 = new Cilindro(new Circulo(5), 3.7);
    return Stream.of(
        new Object[]{ cil1, 310.26 },
        new Object[]{ cil2, 290.6 }
    );
}

@ParameterizedTest
@MethodSource("dataTestVolume")
public void testVolume(Cilindro cilindro, double resultado) {
    assertEquals(resultado, cilindro.volume(), 0.01);
}`,
keywords:["Stream","Object[]","Cilindro","@ParameterizedTest","@MethodSource","dataTestVolume","assertEquals","0.01"],
exp:"Stream<Object[]> é alternativa válida ao Stream<Arguments>. Cada new Object[]{...} empacota os argumentos de uma execução. O @ParameterizedTest é idêntico — apenas o provimento muda."},

// ══════════════════ SUÍTE DE TESTES ══════════════════

{prova:"p2",topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Em um projeto com diversas classes de teste, é necessário executar todas de uma só vez, em um único comando. Para isso, deve-se criar uma suíte de testes. Qual anotação é OBRIGATÓRIA para identificar uma classe como suíte no JUnit 5?",
options:["@TestSuite","@RunWith(Suite.class)","@Suite","@SuiteClass"],
answer:2,
exp:"@Suite (junit.platform.suite.api) é a anotação do JUnit 5. @RunWith(Suite.class) era do JUnit 4."},

{prova:"p2",topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que uma suíte inclua automaticamente todas as classes de teste de um pacote, inclusive as que forem criadas futuramente. Qual anotação deve ser utilizada?",
options:["@SelectClasses","@RunPackage","@IncludeAll","@SelectPackages"],
answer:3,
exp:"@SelectPackages({'pacote'}) inclui automaticamente todas as classes de teste do pacote, inclusive novas adicionadas futuramente. @SelectClasses exige listagem manual."},

{prova:"p2",topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Considere a classe abaixo. O que ela representa e qual é sua característica mais importante?\n\n@Suite\n@SelectPackages({\"testes\"})\nclass GeometriaTestSuite { }",
options:["Classe de teste normal que verifica o pacote 'testes'","Suíte que executa todos os testes do pacote 'testes' — a classe pode ficar vazia","Inválida — suítes precisam de pelo menos um @Test","Executa apenas GeometriaTestSuite e ignora os demais"],
answer:1,
exp:"GeometriaTestSuite é uma suíte. A classe pode ficar completamente vazia — sua função é apenas carregar as anotações. Executa todos os @Test do pacote 'testes'."},

{prova:"p2",topic:"Suíte de Testes",diff:"medium",type:"mc",
text:"[1,0] Uma suíte de testes usa @SelectPackages({'testes.geometria'}). É necessário que ela também execute os testes do subpacote 'testes.geometria.plana'. Qual anotação adicional deve ser utilizada?",
options:["@AddPackages({'testes.geometria.plana'})","@IncludePackages({'testes.geometria.plana'})","@SelectPackages também inclui subpacotes automaticamente","@ExtendPackages({'testes.geometria.plana'})"],
answer:1,
exp:"@IncludePackages adiciona subpacotes específicos à seleção. @SelectPackages não inclui subpacotes automaticamente."},

{prova:"p2",topic:"Suíte de Testes",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre utilizar @SelectClasses e @SelectPackages em uma suíte de testes?",
options:["@SelectClasses é mais rápido que @SelectPackages","@SelectClasses lista classes individuais; @SelectPackages inclui todas as classes de um pacote automaticamente","@SelectPackages só funciona com subpacotes","Não há diferença prática entre as duas"],
answer:1,
exp:"@SelectClasses({A.class, B.class}) = lista manual — útil para classes de pacotes distintos. @SelectPackages = inclui tudo do pacote, inclusive novos testes adicionados futuramente."},

{prova:"p2",topic:"Suíte de Testes",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às suítes de teste no JUnit 5.",
statements:[
{text:"A classe da suíte pode ficar completamente vazia — as anotações definem o que executar.",answer:true},
{text:"@ExcludePackages exclui subpacotes de uma seleção feita por @SelectPackages.",answer:true},
{text:"Uma suíte de testes pode incluir classes de apenas um único pacote.",answer:false},
{text:"@IncludePackages inclui subpacotes além dos selecionados por @SelectPackages.",answer:true}
],
exp:"@SelectClasses permite incluir classes de pacotes completamente distintos. A suíte não precisa de @Test — é apenas um agregador de anotações."},

{prova:"p2",topic:"Suíte de Testes",diff:"hard",type:"mc",
text:"[1,0] É necessário criar uma suíte que inclua o pacote 'testes.geometria' mas exclua o subpacote 'testes.geometria.espacial'. Qual configuração está CORRETA?",
options:[
"@Suite + @SelectPackages({'testes.geometria'}) + @RemovePackages({'testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria'}) + @ExcludePackages({'testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria', '!testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria'}) + @IgnorePackages({'testes.geometria.espacial'})"],
answer:1,
exp:"@ExcludePackages é a anotação correta. @RemovePackages e @IgnorePackages não existem. A negação com '!' não é sintaxe válida."},

{prova:"p2",topic:"Suíte de Testes",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as duas anotações necessárias para criar uma suíte que executa todos os testes do pacote 'testes'.",
answer:`@Suite
@SelectPackages({"testes"})`,
keywords:["@Suite","@SelectPackages"],
exp:"@Suite identifica a suíte. @SelectPackages define o pacote. A classe pode ficar vazia — esses dois elementos são suficientes."},

{prova:"p2",topic:"Suíte de Testes",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a suíte que executa especificamente CirculoTest e RetanguloTest, sem incluir outros testes do pacote.",
answer:`@Suite
@SelectClasses({CirculoTest.class, RetanguloTest.class})
class GeometriaBasicaSuite { }`,
keywords:["@Suite","@SelectClasses","CirculoTest","RetanguloTest"],
exp:"@SelectClasses lista classes individuais. Ideal para incluir apenas testes específicos de pacotes distintos."},

{prova:"p2",topic:"Suíte de Testes",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva a suíte GeometriaCompletaSuite que inclui o pacote 'testes.geometria' e também inclui o subpacote 'testes.geometria.plana'.",
answer:`@Suite
@SelectPackages({"testes.geometria"})
@IncludePackages({"testes.geometria.plana"})
class GeometriaCompletaSuite { }`,
keywords:["@Suite","@SelectPackages","@IncludePackages","plana"],
exp:"@IncludePackages adiciona subpacotes à seleção. @ExcludePackages faz o oposto."},

{prova:"p2",topic:"Suíte de Testes",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva a suíte completa GeometriaTestSuite no pacote 'testes' que inclui todo o pacote 'testes' e exclui o subpacote 'testes.geometria.espacial', com os imports corretos.",
answer:`package testes;

import org.junit.platform.suite.api.ExcludePackages;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectPackages({"testes"})
@ExcludePackages({"testes.geometria.espacial"})
class GeometriaTestSuite { }`,
keywords:["@Suite","@SelectPackages","@ExcludePackages","espacial","import"],
exp:"Suíte completa com package, imports, @Suite, @SelectPackages e @ExcludePackages. A classe fica vazia."},

{prova:"p2",topic:"Suíte de Testes",diff:"hard",type:"code",
text:"[3,0] Considere que o projeto possui os pacotes: 'testes.geometria' (com CirculoTest, RetanguloTest, TrapezioTest, CilindroTest) e 'testes.geometria.espacial' (com testes de geometria 3D que demoram muito). De acordo com as especificações abaixo, desenvolva a suíte GeometriaTestSuite completa que executa todos os testes de 'testes.geometria', excluindo 'testes.geometria.espacial'. Inclua package, imports e a declaração da classe.",
answer:`package testes;

import org.junit.platform.suite.api.ExcludePackages;
import org.junit.platform.suite.api.SelectPackages;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectPackages({"testes.geometria"})
@ExcludePackages({"testes.geometria.espacial"})
class GeometriaTestSuite { }`,
keywords:["package","import","@Suite","@SelectPackages","testes.geometria","@ExcludePackages","espacial"],
exp:"Suíte profissional: package correto + imports das três anotações + @Suite + @SelectPackages + @ExcludePackages. A classe fica vazia pois é apenas um container de anotações."},

// ══════════════════ ANÁLISE DE CÓDIGO ══════════════════

{prova:"p2",topic:"Análise de Código",diff:"easy",type:"mc",
text:"[1,0] Considere o método abaixo. Qual é o papel do @BeforeEach setUp()?\n\n@BeforeEach\npublic void setUp() {\n    dados = new ArrayList<Double[]>();\n    dados.add(new Double[]{ 10.0, 314.16, 62.8 });\n}",
options:["Executado uma única vez, define dados globais permanentes para todos os testes","Executado antes de cada @Test, garantindo que cada teste começa com uma lista de dados limpa","Executado após cada @Test para validar os resultados","Define constantes compartilhadas entre todas as classes de teste"],
answer:1,
exp:"@BeforeEach garante estado limpo para cada @Test. Sem ele, um teste que modificar 'dados' afetaria os seguintes."},

{prova:"p2",topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. O que o método testSetBase1() está verificando?\n\n@Test\npublic void testSetBase1() {\n    Retangulo ret = new Retangulo(2, 2);\n    assertThrows(GeometriaException.class,\n        () -> { ret.setBase(-12); });\n    assertThrows(GeometriaException.class,\n        () -> { new Retangulo(0, 10); });\n}",
options:["Que -12 e 0 são valores válidos para a base","Que setBase(-12) e o construtor Retangulo(0,10) lançam GeometriaException — testando setter e construtor","Que GeometriaException é subclasse de RuntimeException","Que o retângulo tem base igual a -12 após o set"],
answer:1,
exp:"Dois assertThrows: setter (setBase(-12)) e construtor (Retangulo(0,10)). Ambos validam que valores inválidos são rejeitados com GeometriaException."},

{prova:"p2",topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Qual é o problema na abordagem de comparação utilizada?\n\n@Test\npublic void testPerimetro2() {\n    Retangulo ret = new Retangulo(22.3, 10.2);\n    if (ret.perimetro() != 65.0)\n        fail(\"PERÍMETRO INCORRETO!\");\n}",
options:["O valor esperado 65.0 está matematicamente incorreto","Comparar doubles com != é arriscado — 22.3×2 + 10.2×2 pode retornar 65.00000000000001 em ponto flutuante","fail() não pode ser chamado dentro de um if","Retangulo(22.3, 10.2) não é uma instância válida"],
answer:1,
exp:"IEEE 754: o resultado pode ser 65.00000000000001. assertEquals(65.0, ret.perimetro(), 0.001) é mais robusto."},

{prova:"p2",topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo do CilindroTest. Por que dataTestVolume() usa Stream<Object[]> ao invés de Stream<Arguments>?\n\npublic static Stream<Object[]> dataTestVolume() {\n    return Stream.of(\n        new Object[]{ new Cilindro(new Circulo(6.7), 2.2), 310.26 }\n    );\n}",
options:["Stream<Object[]> é obrigatório para objetos instanciados","São formas equivalentes — @MethodSource aceita ambas","Stream<Arguments> não suporta objetos customizados","Stream<Object[]> usa menos memória"],
answer:1,
exp:"@MethodSource aceita Stream<Arguments> e Stream<Object[]> igualmente. Arguments.of() é mais idiomático, mas ambas funcionam."},

{prova:"p2",topic:"Análise de Código",diff:"hard",type:"mc",
text:"[1,0] Considere o trecho do CirculoTest abaixo. Por que o @Test testArea utiliza assertTrue em vez de assertEquals?\n\n@Test\npublic void testArea() {\n    for (Double dt[] : dados) {\n        Circulo c = new Circulo(dt[RAIO_IND]);\n        double area = c.area();\n        if (!(area>=dt[AREA_IND]-0.3 && area<=dt[AREA_IND]+0.3))\n            throw new AssertionError();\n    }\n}",
options:["assertEquals não aceita doubles","A tolerância é uma faixa ±0.3 verificada manualmente com if — alternativa ao assertEquals com delta","assertTrue é sempre preferível a assertEquals","O código está errado — deveria usar assertEquals(dt[AREA_IND], area, 0.3)"],
answer:1,
exp:"O código original verifica a faixa manualmente com if + throw. É equivalente a assertEquals(dt[AREA_IND], area, 0.3) — ambas as abordagens validam tolerância de ±0.3."},

{prova:"p2",topic:"Análise de Código",diff:"easy",type:"code",
text:"[1,0] Considere a classe CirculoTest com um atributo 'dados' do tipo List<Double[]>. De acordo com as especificações abaixo, implemente o método @BeforeEach setUp() que inicializa a lista e adiciona o caso de teste: raio=10.0, área esperada=314.16, perímetro esperado=62.8.",
answer:`@BeforeEach
public void setUp() {
    dados = new ArrayList<Double[]>();
    dados.add(new Double[]{ 10.0, 314.16, 62.8 });
}`,
keywords:["@BeforeEach","setUp","ArrayList","10.0","314.16"],
exp:"@BeforeEach reinicializa a lista antes de cada @Test. new ArrayList<>() cria lista vazia; add() insere o caso de teste como array de Double."},

{prova:"p2",topic:"Análise de Código",diff:"medium",type:"code",
text:"[2,0] Considere o TrapezioTest do projeto. De acordo com as especificações abaixo, implemente o método @ParameterizedTest testArea com @CsvSource contendo '8;3;10;55' e '15.5;1.5;5.6;47.6', delimitador ';', e verificação com assertEquals tolerância 0.1.",
answer:`@ParameterizedTest
@CsvSource(value = {
    "8 ; 3 ; 10 ; 55",
    "15.5 ; 1.5 ; 5.6 ; 47.6"
}, delimiter = ';')
public void testArea(double baseMaior, double baseMenor,
                     double altura, double resultado) {
    Trapezio t = new Trapezio(baseMaior, baseMenor, altura);
    assertEquals(resultado, t.area(), 0.1);
}`,
keywords:["@ParameterizedTest","@CsvSource","delimiter","Trapezio","assertEquals","0.1"],
exp:"Reprodução do TrapezioTest real. @CsvSource com delimiter=';' e os 4 parâmetros correspondentes às colunas CSV."},

{prova:"p2",topic:"Análise de Código",diff:"hard",type:"code",
text:"[3,0] Considere o CilindroTest do projeto. De acordo com as especificações abaixo, desenvolva o método de provimento dataTestArea() e o @ParameterizedTest testArea com os dados: Circulo(4)/altura=8/resultado=301.59, Circulo(10.72)/altura=5.4/resultado=1085.77, Circulo(1)/altura=2.3/resultado=20.73. Verificação com tolerância 0.001.",
answer:`private static Stream<Arguments> dataTestArea() {
    Circulo c1 = new Circulo(4);
    Circulo c2 = new Circulo(10.72);
    Circulo c3 = new Circulo(1);
    return Stream.of(
        Arguments.of(c1, 8,   301.59),
        Arguments.of(c2, 5.4, 1085.77),
        Arguments.of(c3, 2.3, 20.73)
    );
}

@ParameterizedTest
@MethodSource("dataTestArea")
public void testArea(Circulo base, double altura, double resultado) {
    Cilindro cil = new Cilindro(base, altura);
    assertEquals(resultado, cil.area(), 0.001);
}`,
keywords:["Stream","Arguments","Arguments.of","Circulo","@ParameterizedTest","@MethodSource","dataTestArea","assertEquals","0.001"],
exp:"Reprodução fiel do CilindroTest real. Método estático + Stream<Arguments> + Arguments.of() com objetos Circulo instanciados."},

// ══════════════════ KATALON ══════════════════

{prova:"p2",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Um sistema possui uma interface web que deve ser testada simulando as ações de um usuário real, sem acesso ao código-fonte interno. Qual ferramenta e qual tipo de teste se aplicam a esse cenário?",
options:["JUnit — teste de caixa branca","Katalon — teste de caixa preta","Maven — teste de caixa branca","Cypress — teste de caixa branca"],
answer:1,
exp:"Katalon = caixa preta: testa a interface sem ver o código interno. JUnit = caixa branca: testa código Java diretamente. Cypress também é caixa preta, mas não é a opção principal do curso."},

{prova:"p2",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário abrir o navegador em uma URL específica. Qual comando deve ser utilizado?",
options:["WebUI.navigate('url')","WebUI.startBrowser('url')","WebUI.launch('url')","WebUI.openBrowser('url')"],
answer:3,
exp:"WebUI.openBrowser('url') abre e navega. Para fechar: WebUI.closeBrowser(). Geralmente chamado no @Setup."},

{prova:"p2",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário preencher um campo de texto com um valor. Qual comando deve ser utilizado?",
options:["WebUI.findText(obj, valor)","WebUI.type(obj, valor)","WebUI.input(obj, valor)","WebUI.setText(findTestObject('obj'), valor)"],
answer:3,
exp:"WebUI.setText(findTestObject('nome'), 'valor') preenche campos. WebUI.findText() VERIFICA se texto existe — não preenche. Confundir os dois é erro clássico."},

{prova:"p2",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário que um método de inicialização seja executado antes dos casos de teste para abrir o navegador. Qual anotação Katalon deve ser utilizada?",
options:["@BeforeTest","@Before","@Init","@Setup"],
answer:3,
exp:"@Setup executa antes dos testes. @TearDown após (se sucesso). @TearDownIfError após (se falha)."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário que o navegador seja fechado APENAS se o teste for bem-sucedido. Qual anotação deve ser utilizada no método que fecha o navegador?",
options:["@AfterEach","@TearDownIfError","@TearDown","@AfterAll"],
answer:2,
exp:"@TearDown executa somente se o teste PASSOU. @TearDownIfError executa somente se FALHOU. Trocar os dois inverte completamente o comportamento — a distinção mais cobrada em prova."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Considere a interface web abaixo com os campos InpX, InpY, InpZ, botão BtnGerar e saída OutJSON. Para o dado X=-98.43, Y=2.2, Z=-8.9 com JSON esperado '{x:-98.43,y:2.2,z:-8.9}', qual é a sequência CORRETA de comandos Katalon?",
options:["click(BtnGerar) → setText(InpX) → verifyText(OutJSON)","setText(InpX,-98.43) → setText(InpY,2.2) → setText(InpZ,-8.9) → click(BtnGerar) → verifyText(OutJSON,esperado)","openBrowser() → verifyText(OutJSON) → click(BtnGerar)","findText(InpX,-98.43) → findText(InpY,2.2) → findText(InpZ,-8.9) → click(BtnGerar)"],
answer:1,
exp:"Fluxo: preencher campos (setText), acionar botão (click), verificar saída (verifyText). openBrowser() fica no @Setup."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre @TearDown e @TearDownIfError no Katalon?",
options:["Ambos executam sempre ao final, independente do resultado","@TearDown sempre; @TearDownIfError só se falhar","@TearDown só se passou; @TearDownIfError só se falhou","@TearDownIfError sempre; @TearDown só se passou"],
answer:2,
exp:"@TearDown = executa SOMENTE após sucesso. @TearDownIfError = executa SOMENTE após falha. Para executar sempre, use ambos."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação ao Katalon Studio.",
statements:[
{text:"Katalon Studio realiza testes de caixa preta, testando a interface sem acesso ao código-fonte.",answer:true},
{text:"WebUI.findText() preenche um campo de texto com o valor informado.",answer:false},
{text:"@Setup no Katalon é executado antes dos testes, de forma análoga ao @BeforeEach no JUnit.",answer:true},
{text:"@TearDownIfError é executado somente quando o teste falha.",answer:true}
],
exp:"WebUI.findText() VERIFICA se texto existe — não preenche. Para preencher: WebUI.setText(). A confusão entre os dois é a pegadinha mais frequente em provas."},

{prova:"p2",topic:"Katalon",diff:"hard",type:"mc",
text:"[1,0] Considere o script abaixo. Qual erro ele contém em relação à especificação 'o navegador deve ser fechado apenas se o teste for bem-sucedido'?\n\n@Setup\ndef setUp() { WebUI.openBrowser('http://json.cordenada.html') }\n\n@TearDownIfError\ndef tearDown() { WebUI.closeBrowser() }",
options:["Não há erros — o script está correto","@TearDownIfError fecha o browser quando FALHA, mas a especificação pede fechar somente quando PASSA","WebUI.openBrowser() não pode ficar no @Setup","closeBrowser() não existe no Katalon"],
answer:1,
exp:"@TearDownIfError executa após FALHA. Para fechar após SUCESSO → @TearDown. Trocar os dois é o erro mais cobrado em prova sobre Katalon."},

{prova:"p2",topic:"Katalon",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente o comando Katalon que preenche o campo 'Object InpX' com o valor '-98.43'.",
answer:`WebUI.setText(findTestObject('Object InpX'), '-98.43')`,
keywords:["WebUI.setText","findTestObject","InpX","-98.43"],
exp:"WebUI.setText(findTestObject('nome'), 'valor') — sempre findTestObject() para referenciar elementos."},

{prova:"p2",topic:"Katalon",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente o comando Katalon que clica no botão 'Object BtnGerar'.",
answer:`WebUI.click(findTestObject('Object BtnGerar'))`,
keywords:["WebUI.click","findTestObject","BtnGerar"],
exp:"WebUI.click(findTestObject('nome')) — clica no elemento identificado pelo Test Object."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente o método @Setup de um script Katalon que abre o navegador em 'http://json.cordenada.html'.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://json.cordenada.html')
}`,
keywords:["@Setup","openBrowser","json.cordenada.html"],
exp:"@Setup executa antes dos testes. WebUI.openBrowser() abre e navega. Deve ficar no @Setup — não dentro do loop de dados."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] Considere uma interface web com os campos Object InpX, InpY, InpZ, o botão Object BtnGerar e a saída Object OutJSON. De acordo com as especificações abaixo, implemente os comandos Katalon para: preencher X=21, Y=100.2, Z=189, clicar em Gerar e verificar que OutJSON contém '{x:21, y:100.2, z:189}'.",
answer:`WebUI.setText(findTestObject('Object InpX'), '21')
WebUI.setText(findTestObject('Object InpY'), '100.2')
WebUI.setText(findTestObject('Object InpZ'), '189')
WebUI.click(findTestObject('Object BtnGerar'))
WebUI.verifyText(findTestObject('Object OutJSON'),
                 '{x:21, y:100.2, z:189}')`,
keywords:["setText","InpX","21","InpY","100.2","InpZ","189","click","BtnGerar","verifyText","OutJSON"],
exp:"Sequência obrigatória: setText para cada campo, click no botão, verifyText na saída. A verificação sempre vem por último."},

{prova:"p2",topic:"Katalon",diff:"hard",type:"code",
text:"[4,0] Considere a funcionalidade de geração de JSONs com coordenadas cartesianas, cuja interface possui os campos Object InpX, Object InpY, Object InpZ, o botão Object BtnGerar e a saída Object OutJSON. De acordo com as especificações abaixo, usando tipagem estática e as boas práticas de programação, desenvolva um script de caso de teste em Katalon para automatizar os testes da funcionalidade, observando:\n- Antes de iniciar o teste, deve-se abrir o navegador no endereço http://json.cordenada.html\n- Para cada item da tabela abaixo, atribuir X, Y, Z e verificar o JSON gerado:\n  #1: X=-98.43, Y=2.2, Z=-8.9 → {x:-98.43, y:2.2, z:-8.9}\n  #2: X=21, Y=100.2, Z=189 → {x:21, y:100.2, z:189}\n  #3: X=174.22, Y=-982, Z=890.8 → {x:174.22, y:-982, z:890.8}\n- Ao término, o navegador deve ser fechado apenas se o teste tiver sido bem-sucedido.\n- Considere que o número de itens pode ser muito maior que os apresentados.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://json.cordenada.html')
}

@TearDown
def tearDown() {
    WebUI.closeBrowser()
}

def dados = [
    [-98.43, 2.2,   -8.9,  '{x:-98.43, y:2.2, z:-8.9}'],
    [21,     100.2,  189,   '{x:21, y:100.2, z:189}'],
    [174.22, -982,   890.8, '{x:174.22, y:-982, z:890.8}']
]

for (linha in dados) {
    WebUI.setText(findTestObject('Object InpX'), String.valueOf(linha[0]))
    WebUI.setText(findTestObject('Object InpY'), String.valueOf(linha[1]))
    WebUI.setText(findTestObject('Object InpZ'), String.valueOf(linha[2]))
    WebUI.click(findTestObject('Object BtnGerar'))
    WebUI.verifyText(findTestObject('Object OutJSON'), linha[3])
}`,
keywords:["@Setup","openBrowser","@TearDown","closeBrowser","for","setText","InpX","InpY","InpZ","click","BtnGerar","verifyText","OutJSON"],
exp:"Script completo reproduzindo a questão 4 da prova. Pontos-chave: @Setup abre, @TearDown (não @TearDownIfError) fecha apenas em sucesso, loop sobre os dados (escalável), setText+click+verifyText para cada linha."},

// ══════════════════ REVISÃO ══════════════════

{prova:"p2",topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Complete a afirmação: '@BeforeAll executa ___ vez(es) antes de todos os testes; @BeforeEach executa ___ vez(es) antes de cada teste.'",
options:["1 / 1","1 / N (uma por @Test)","N / 1","N / N"],
answer:1,
exp:"@BeforeAll = 1× para toda a classe (estático). @BeforeEach = 1× por @Test. Com 5 testes: @BeforeAll=1, @BeforeEach=5."},

{prova:"p2",topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste Katalon, o método de encerramento deve fechar o navegador. A especificação exige que o fechamento ocorra SOMENTE se o teste for bem-sucedido. Qual sequência de anotações está CORRETA?",
options:["@Setup / @TearDown","@Setup / @TearDownIfError","@BeforeEach / @AfterEach","@Init / @TearDownIfError"],
answer:0,
exp:"@Setup abre. @TearDown fecha apenas após sucesso. @TearDownIfError faria o oposto — fecharia somente após falha."},

{prova:"p2",topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar 3 linhas de dados com 4 colunas cada para um @ParameterizedTest. Qual combinação de anotações está CORRETA?",
options:["@Test + @ValueSource","@ParameterizedTest + @ValueSource","@ParameterizedTest + @CsvSource","@Test + @CsvSource"],
answer:2,
exp:"Múltiplas colunas = @CsvSource ou @CsvFileSource. @ValueSource: um único valor por execução. @ParameterizedTest é obrigatório (substitui @Test)."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar objetos instanciados como argumentos para um @ParameterizedTest. Qual anotação de fonte de dados deve ser utilizada?",
options:["@ValueSource","@CsvSource","@CsvFileSource","@MethodSource"],
answer:3,
exp:"Somente @MethodSource permite objetos instanciados, pois chama um método estático que retorna Stream<Arguments>. @CsvSource e @ValueSource só aceitam literais."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Assinale qual das afirmações abaixo resume CORRETAMENTE a diferença entre JUnit e Katalon.",
options:["JUnit testa interfaces web; Katalon testa código Java","JUnit é caixa branca (testa código Java diretamente); Katalon é caixa preta (testa interface web)","Ambos realizam testes de caixa preta sobre a interface do sistema","JUnit é mais recente e substituiu o Katalon"],
answer:1,
exp:"JUnit = caixa branca: acessa e testa código Java interno. Katalon = caixa preta: simula usuário na interface. São complementares."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Um teste falha intermitentemente em ambiente CI/CD mas sempre passa na máquina do desenvolvedor. Qual é a causa mais provável relacionada a @Timeout?",
options:["Bug no JUnit em ambiente Linux","@Timeout muito apertado — CI/CD pode ser 2–3× mais lento que máquina local","O @BeforeEach não é executado em CI/CD","A ordem dos @Test muda em CI/CD"],
answer:1,
exp:"Flaky tests em CI geralmente indicam @Timeout muito apertado. Pipelines compartilham recursos e podem ser 2–3× mais lentos. Adicione margem de segurança."},

{prova:"p2",topic:"Revisão",diff:"hard",type:"mc",
text:"[1,0] Assinale qual das afirmações abaixo está INCORRETA.",
options:["@AfterAll deve ser estático no JUnit 5","@Disabled ignora o teste sem fazê-lo falhar","assertSame verifica igualdade de valor usando .equals()","@ParameterizedTest substitui @Test em testes com dados externos"],
answer:2,
exp:"assertSame usa ==, não .equals() — verifica identidade de referência (mesmo objeto na memória). Para valor, usa-se assertEquals. Essa distinção é das mais cobradas em prova."},

{prova:"p2",topic:"Revisão",diff:"hard",type:"mc",
text:"[1,0] Considere as afirmações: (I) @TearDown no Katalon executa somente após sucesso. (II) assertSame(new String('a'), new String('a')) passa pois os valores são iguais. (III) @Timeout no método sobrescreve o @Timeout da classe. Quais estão CORRETAS?",
options:["Somente I","Somente II","I e III","I, II e III"],
answer:2,
exp:"I: CORRETA — @TearDown = sucesso. II: INCORRETA — assertSame usa ==, dois new String() são objetos distintos, falha. III: CORRETA — @Timeout no método sobrescreve o da classe."},

{prova:"p2",topic:"Revisão",diff:"easy",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — revisão geral dos conceitos do curso.",
statements:[
{text:"@BeforeAll e @AfterAll devem ser métodos estáticos no JUnit 5.",answer:true},
{text:"@Disabled faz o teste falhar com uma mensagem de erro no relatório.",answer:false},
{text:"assertEquals com terceiro parâmetro define tolerância para comparação de valores double.",answer:true},
{text:"@ValueSource permite passar pares de valores (entrada e saída) para um @ParameterizedTest.",answer:false}
],
exp:"@Disabled ignora — não falha. @ValueSource: UM valor simples por execução. Para pares, use @CsvSource."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — testes parametrizados e suítes.",
statements:[
{text:"@CsvFileSource com numLinesToSkip=4 pula as 4 primeiras linhas do arquivo de dados.",answer:true},
{text:"Uma suíte anotada com @Suite precisa ter pelo menos um método @Test para funcionar.",answer:false},
{text:"O método de provimento do @MethodSource deve ser estático e retornar um Stream.",answer:true},
{text:"@ExcludePackages remove subpacotes de uma seleção feita por @SelectPackages.",answer:true}
],
exp:"A suíte pode ficar completamente vazia — é apenas um container de anotações que define o que executar."},

{prova:"p2",topic:"Revisão",diff:"hard",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — questões de nível avançado.",
statements:[
{text:"@TearDown no Katalon executa o método de encerramento somente após o teste passar.",answer:true},
{text:"assertSame(new String('abc'), new String('abc')) passa pois os valores são iguais.",answer:false},
{text:"@Timeout aplicado em um método sobrescreve o @Timeout definido na classe para aquele método.",answer:true},
{text:"Stream<Object[]> e Stream<Arguments> são formatos válidos de retorno para @MethodSource.",answer:true}
],
exp:"assertSame usa ==: new String() cria objetos DISTINTOS na heap → assertSame falha. @TearDown (sucesso) ≠ @TearDownIfError (falha)."},

{prova:"p2",topic:"Revisão",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a linha de código que verifica que calc.somar(2, 3) retorna 5.",
answer:`assertEquals(5, calc.somar(2, 3));`,
keywords:["assertEquals","5","somar"],
exp:"assertEquals(esperado, obtido) — o primeiro parâmetro é sempre o valor esperado; o segundo, o obtido."},

{prova:"p2",topic:"Revisão",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a anotação @Timeout que limita um método a 500 milissegundos.",
answer:`@Timeout(value = 500, unit = TimeUnit.MILLISECONDS)`,
keywords:["@Timeout","500","MILLISECONDS"],
exp:"value + unit explícitos para milissegundos. @Timeout(500) sem unit = 500 segundos — erro clássico."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva um @ParameterizedTest chamado testValoresValidos que usa @ValueSource com doubles {0.01, 1.0, 100.0} e verifica com assertDoesNotThrow que new Retangulo(1, altura) NÃO lança exceção.",
answer:`@ParameterizedTest
@ValueSource(doubles = { 0.01, 1.0, 100.0 })
public void testValoresValidos(double altura) {
    assertDoesNotThrow(() -> { new Retangulo(1, altura); });
}`,
keywords:["@ParameterizedTest","@ValueSource","doubles","assertDoesNotThrow","Retangulo"],
exp:"Complemento do teste com assertThrows: cada valor positivo deve ser aceito sem exceção."},

{prova:"p2",topic:"Revisão",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente a estrutura mínima de um script Katalon que abre 'http://minha-app.html' antes dos testes e fecha o navegador somente em caso de sucesso.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://minha-app.html')
}

@TearDown
def tearDown() {
    WebUI.closeBrowser()
}`,
keywords:["@Setup","openBrowser","@TearDown","closeBrowser"],
exp:"@Setup abre. @TearDown fecha após SUCESSO. Estrutura base de todo script Katalon."},

{prova:"p2",topic:"Revisão",diff:"hard",type:"code",
text:"[5,0] Considere a classe Coordenada (atributos double x, y, z com getters) e a classe CoordenadaJSON com o método estático JSONParaCoordenada(String json). De acordo com as especificações abaixo, desenvolva a classe de teste CoordenadaJSONTest em JUnit 5 contendo:\nA) Método de provimento testJSONParaCoordenadaData() com os pares:\n   '{ x : -98.43 , y : 2.2 , z : -8.9 }' → Coordenada(-98.43, 2.2, -8.9)\n   '{ x:21, y: 100.2, z:189 }' → Coordenada(21, 100.2, 189)\n   '{x:174.22,y:-982,z:890.8}' → Coordenada(174.22, -982, 890.8)\nB) @ParameterizedTest testJSONParaCoordenada que converte o JSON e verifica os 3 atributos com assertEquals.\nDica: os argumentos providos por métodos podem ser objetos.",
answer:`class CoordenadaJSONTest {

    public static Stream<Arguments> testJSONParaCoordenadaData() {
        String c1j = "{ x : -98.43 , y : 2.2 , z : -8.9 }";
        Coordenada c1o = new Coordenada(-98.43, 2.2, -8.9);
        String c2j = "{ x:21, y: 100.2, z:189 }";
        Coordenada c2o = new Coordenada(21, 100.2, 189);
        String c3j = "{x:174.22,y:-982,z:890.8}";
        Coordenada c3o = new Coordenada(174.22, -982, 890.8);
        return Stream.of(
            Arguments.of(c1j, c1o),
            Arguments.of(c2j, c2o),
            Arguments.of(c3j, c3o)
        );
    }

    @ParameterizedTest
    @MethodSource("testJSONParaCoordenadaData")
    public void testJSONParaCoordenada(String json, Coordenada obj) {
        Coordenada c = CoordenadaJSON.JSONParaCoordenada(json);
        assertEquals(obj.getX(), c.getX());
        assertEquals(obj.getY(), c.getY());
        assertEquals(obj.getZ(), c.getZ());
    }
}`,
keywords:["Stream","Arguments","Arguments.of","@ParameterizedTest","@MethodSource","testJSONParaCoordenadaData","assertEquals","getX","getY","getZ"],
exp:"Reprodução exata da questão 3 da prova. Pontos críticos: método de provimento retorna Stream<Arguments> com Arguments.of(json, objeto Coordenada); @MethodSource referencia pelo nome; três assertEquals verificam cada atributo individualmente."}


// ═══ P1 — FUNDAMENTOS DO TESTE DE SOFTWARE ═══

,{prova:"p1",topic:"Intro ao Teste",diff:"easy",type:"mc",
text:"[1,0] Qual afirmação descreve CORRETAMENTE o que é um teste de software, segundo a definição pragmática do material do curso?",
options:["O processo de desenvolver um programa seguindo boas práticas de codificação","O processo de executar um programa com o objetivo de revelar a presença de falhas ou, falhando nisso, aumentar a confiança no software","O processo de documentar todos os requisitos funcionais de um sistema","O processo de avaliar a interface gráfica de um sistema junto aos usuários finais"],
answer:1,
exp:"Definição pragmática: 'o processo de executar um programa ou sistema com o objetivo de revelar a presença de falhas ou, falhando nesse objetivo, aumentar a confiança sobre o software'."}

,{prova:"p1",topic:"Intro ao Teste",diff:"easy",type:"mc",
text:"[1,0] Segundo Edsger Dijkstra, o que o teste é capaz de fazer?",
options:["Provar a ausência total de defeitos no software","Garantir que o software atende 100% dos requisitos","Sinalizar a ocorrência de falhas, nunca a sua ausência","Substituir a atividade de revisão de código"],
answer:2,
exp:"Dijkstra: 'Teste somente sinaliza a ocorrência de falhas, nunca a sua ausência.' Um teste pode encontrar erros, mas jamais provar que o software está livre deles."}

,{prova:"p1",topic:"Intro ao Teste",diff:"easy",type:"mc",
text:"[1,0] Um bom teste de software deve buscar mostrar qual das alternativas abaixo?",
options:["A ausência de defeitos no sistema","Que o sistema funciona corretamente em todos os cenários","A presença de defeitos e que o sistema NÃO funciona corretamente","Que o sistema está pronto para ser implantado em produção"],
answer:2,
exp:"O material é explícito: um bom teste NÃO deve buscar mostrar a ausência de defeitos nem que funciona. Deve buscar mostrar a PRESENÇA de defeitos e que o sistema não funciona corretamente."}

,{prova:"p1",topic:"Intro ao Teste",diff:"easy",type:"mc",
text:"[1,0] Do ponto de vista PSICOLÓGICO, qual é o objetivo de um teste de software?",
options:["Construir a confiança no software provando que ele está correto","Destruir a confiança de que o software funciona adequadamente","Substituir a validação feita pelos usuários finais","Reduzir o custo de manutenção do software"],
answer:1,
exp:"Perspectiva psicológica: destruir a confiança de que o software funciona. O paradoxo: destruir a confiança é o caminho para construí-la, pois os defeitos encontrados são corrigidos."}

,{prova:"p1",topic:"Intro ao Teste",diff:"medium",type:"mc",
text:"[1,0] Por que o teste de software é considerado uma atividade paradoxal?",
options:["Porque exige mais tempo que o desenvolvimento em si","Porque os testadores ganham mais que os desenvolvedores","Porque destruir a confiança no software é o caminho para construí-la — os defeitos encontrados são corrigidos","Porque os testes aumentam o custo sem gerar valor direto"],
answer:2,
exp:"O paradoxo: testes destroem a confiança ao encontrar defeitos. Com os defeitos corrigidos, a confiança é restabelecida. Destruir é o caminho para construir."}

,{prova:"p1",topic:"Intro ao Teste",diff:"medium",type:"mc",
text:"[1,0] Qual é a ordem correta do encadeamento que leva a uma falha de software?",
options:["Falha → Defeito → Erro","Defeito → Erro → Falha","Erro → Defeito → Falha","Falha → Erro → Defeito"],
answer:2,
exp:"Sequência: Erro (engano humano) → Defeito (bug no código/documento) → Falha (execução problemática). Nem todo defeito resulta em falha — apenas quando a parte com defeito é executada."}

,{prova:"p1",topic:"Intro ao Teste",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação ao teste de software.",
statements:[
{text:"Testes reduzem o risco de falhas e contribuem para o aumento da qualidade do software.",answer:true},
{text:"Ao final de um processo de testes completo, pode-se afirmar com certeza que o software não possui defeitos.",answer:false},
{text:"A realização de testes pode ser uma exigência legal ou contratual em determinados contextos.",answer:true},
{text:"O objetivo principal de um teste é confirmar que o software está funcionando corretamente.",answer:false}
],
exp:"Testes NUNCA provam ausência de defeitos (Dijkstra). O objetivo é ENCONTRAR defeitos. Testes podem ser exigência normativa ou contratual."}

,{prova:"p1",topic:"Intro ao Teste",diff:"hard",type:"mc",
text:"[1,0] Após uma bateria extensa de testes, nenhuma falha foi encontrada. Qual das interpretações abaixo está CORRETA?",
options:["O software não possui defeitos, pois os testes foram extensos","O software possui alta qualidade comprovada pelos testes","Os testes reduziram o nível de risco, mas não provam a ausência de defeitos","Os testes foram ineficazes pois nenhum resultado foi encontrado"],
answer:2,
exp:"Não encontrar falhas pode significar: software bom + testes bons; software ruim + testes ruins; ou software bom + testes ruins. A ausência de falhas apenas reduz o risco — não prova perfeição."}

,{prova:"p1",topic:"Intro ao Teste",diff:"hard",type:"tf",
text:"[1,6] Assinale V ou F sobre objetivos e perspectivas do teste de software.",
statements:[
{text:"De perspectiva prática, um teste objetiva reduzir a probabilidade de ocorrência de falhas em produção.",answer:true},
{text:"De perspectiva técnica, um teste busca entradas que gerem saídas IGUAIS às esperadas.",answer:false},
{text:"Todo software sempre será testado — se não pelo testador, pelo cliente.",answer:true},
{text:"Um teste que encontra muitas falhas indica necessariamente que o software é de baixa qualidade.",answer:false}
],
exp:"Tecnicamente, busca-se entradas que gerem saídas DIFERENTES (contra-exemplos). Muitas falhas pode indicar software ruim OU testes muito bons — não é conclusivo sozinho."}

,{prova:"p1",topic:"Defeitos de Software",diff:"easy",type:"mc",
text:"[1,0] Na terminologia de defeitos, qual conceito representa o engano cometido por um ser humano que leva a uma incorreção em um artefato de software?",
options:["Falha","Vulnerabilidade","Defeito","Erro"],
answer:3,
exp:"Erro = engano humano (distração, falta de conhecimento, sobrecarga). Defeito = consequência do erro (bug). Falha = consequência da execução de uma parte com defeito."}

,{prova:"p1",topic:"Defeitos de Software",diff:"easy",type:"mc",
text:"[1,0] O que é uma FALHA de software?",
options:["Um engano cometido pelo programador durante a codificação","Uma imperfeição em um documento de requisitos","A execução problemática ou inesperada de um software decorrente de um defeito","Um acesso não autorizado ao sistema"],
answer:2,
exp:"Falha = execução problemática ou inesperada do software. É a consequência da execução de uma parte com defeito. Na ocorrência de uma falha o defeito normalmente é descoberto."}

,{prova:"p1",topic:"Defeitos de Software",diff:"easy",type:"mc",
text:"[1,0] O que é uma VULNERABILIDADE de software?",
options:["Um tipo de erro de compilação","Uma parte do software que, executada sob condições peculiares, ocasiona comportamento indesejado","O mesmo que um defeito de código","Um requisito não atendido pelo sistema"],
answer:1,
exp:"Vulnerabilidade: parte do software que, quando executada sob entradas ou condições peculiares, ocasiona comportamento indesejado. Ex: falta de verificação de permissão. Vulnerabilidades também são defeitos."}

,{prova:"p1",topic:"Defeitos de Software",diff:"easy",type:"mc",
text:"[1,0] A Taxonomia de Shull classifica defeitos em quantas naturezas distintas?",
options:["3","4","5","7"],
answer:2,
exp:"Taxonomia de Shull (baseada IEEE 830): 5 naturezas — 1.Omissão; 2.Ambiguidade; 3.Inconsistência; 4.Fato Incorreto; 5.Informação Estranha."}

,{prova:"p1",topic:"Defeitos de Software",diff:"medium",type:"mc",
text:"[1,0] Um documento de requisitos descreve um procedimento de forma que diferentes desenvolvedores o interpretam de maneiras distintas. Segundo a Taxonomia de Shull, qual é a natureza desse defeito?",
options:["Omissão","Ambiguidade","Inconsistência","Fato Incorreto"],
answer:1,
exp:"Ambiguidade: informação passível de múltiplas interpretações. O mesmo texto é interpretado de formas diferentes, levando a implementações divergentes."}

,{prova:"p1",topic:"Defeitos de Software",diff:"medium",type:"mc",
text:"[1,0] Dois diagramas do mesmo projeto descrevem a implementação de um mesmo conceito de formas diferentes e contraditórias. Segundo a Taxonomia de Shull, qual é a natureza desse defeito?",
options:["Omissão","Ambiguidade","Inconsistência","Informação Estranha"],
answer:2,
exp:"Inconsistência: informações conflitantes entre si. Dois diagramas descrevendo o mesmo conceito de formas distintas se contradizem."}

,{prova:"p1",topic:"Defeitos de Software",diff:"medium",type:"mc",
text:"[1,0] Um documento de requisitos apresenta informações verdadeiras mas irrelevantes ao projeto. Segundo a Taxonomia de Shull, qual é a natureza desse defeito?",
options:["Ambiguidade","Fato Incorreto","Omissão","Informação Estranha"],
answer:3,
exp:"Informação Estranha: informação verdadeira mas irrelevante ao software, que serve apenas para causar equívocos. Leva a implementação de funcionalidade não contratada — perda de tempo."}

,{prova:"p1",topic:"Defeitos de Software",diff:"medium",type:"mc",
text:"[1,0] Um diagrama UML de projeto omite uma regra de negócio indicada nos requisitos, levando a sua não-implementação. Segundo a Taxonomia de Shull, qual é a natureza do defeito no diagrama?",
options:["Ambiguidade","Omissão","Inconsistência","Fato Incorreto"],
answer:1,
exp:"Omissão: falta de informação necessária à implementação. A informação deveria estar presente e não está — diferente de estar errada (Fato Incorreto) ou contraditória (Inconsistência)."}

,{prova:"p1",topic:"Defeitos de Software",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre defeitos de software.",
statements:[
{text:"A maioria dos defeitos se localiza nas partes do software que raramente são utilizadas.",answer:true},
{text:"Um defeito na especificação de requisitos não impacta o código final do software.",answer:false},
{text:"Vulnerabilidades também são classificadas como defeitos de software.",answer:true},
{text:"Quanto mais cedo um defeito for descoberto, menor é o custo de sua correção.",answer:true}
],
exp:"Defeitos propagam em cascata: especificação → arquitetura → projeto → código → falha. A maioria fica em partes pouco executadas. Custo de correção cresce com o tempo."}

,{prova:"p1",topic:"Defeitos de Software",diff:"hard",type:"mc",
text:"[1,0] Um software hipotético sem nenhum defeito pode mesmo assim apresentar falhas? Qual justificativa está CORRETA?",
options:["Não — sem defeito no código, não há falha possível","Sim — falhas podem ocorrer por causas externas: falhas de hardware, banco inconsistente, bugs em frameworks de terceiros","Não — se o código está correto, o sistema sempre funcionará","Sim — mas apenas em caso de ataques hackers"],
answer:1,
exp:"Mesmo software perfeito pode falhar por razões externas: falhas de hardware, banco inconsistente, travamento de SO, falhas em frameworks, erros por uso incorreto. O sistema precisa ser resiliente."}

,{prova:"p1",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] O que é DEPURAÇÃO (debugging)?",
options:["O processo de executar testes automatizados em um software","O processo de identificar a causa de um defeito, corrigir o código e verificar se foi reparado","O processo de documentar os defeitos encontrados durante os testes","O processo de revisar requisitos para evitar defeitos futuros"],
answer:1,
exp:"Depuração: identificar a causa, corrigir o código e verificar a correção. É tarefa de DESENVOLVIMENTO, não de teste. Testadores testam; programadores depuram."}

,{prova:"p1",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] Qual das opções abaixo é um método da técnica de depuração por FORÇA BRUTA?",
options:["Backtracking","Eliminação de causa por dedução","Uso de saída de dados (prints) ao longo do código","Depuração por indução"],
answer:2,
exp:"Força Bruta tem 3 métodos: análise de despejo de memória, uso de prints (saída de dados) e ferramentas de depuração com breakpoints. Backtracking e eliminação de causa são técnicas distintas."}

,{prova:"p1",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] A técnica que parte do ponto onde a falha ocorreu e analisa as chamadas que levaram àquele ponto, retrocedendo no código, é chamada de:",
options:["Força Bruta","Eliminação de Causa","Backtracking","Depuração por Indução"],
answer:2,
exp:"Backtracking: parte do ponto da falha e rastreia para trás as chamadas. Mais eficiente em programas menores — em grandes sistemas o número de caminhos é muito alto."}

,{prova:"p1",topic:"Depuração",diff:"medium",type:"mc",
text:"[1,0] Na depuração por INDUÇÃO, qual é o segundo passo após a coleta de dados pertinentes?",
options:["Correção do defeito","Prova da hipótese","Estruturação dos dados obtidos","Formulação de uma hipótese"],
answer:2,
exp:"Processo formal de indução: 1.Coleta de dados; 2.Estruturação dos dados; 3.Identificação das relações entre pistas; 4.Formulação de hipótese; 5.Prova da hipótese; 6.Correção do defeito."}

,{prova:"p1",topic:"Depuração",diff:"medium",type:"mc",
text:"[1,0] Van Vleck (1989) recomenda 3 questionamentos ao corrigir um defeito. Qual das opções NÃO é um deles?",
options:["O mesmo defeito está presente em outras partes do código?","Quais novos defeitos podem ser ocasionados pela correção?","O que deveria ter sido feito para prevenir o presente defeito?","O código defeituoso pode ser reutilizado em outro projeto?"],
answer:3,
exp:"Os 3 questionamentos de Van Vleck: (1) o defeito existe em outras partes? (2) que novos defeitos a correção pode causar? (3) o que deveria ter sido feito para prevenir? Reutilização não é um dos questionamentos."}

,{prova:"p1",topic:"Depuração",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre depuração de software.",
statements:[
{text:"Depuração é uma tarefa de desenvolvimento, não de teste.",answer:true},
{text:"O uso de prints para depuração pode mascarar defeitos temporariamente ou introduzir novos.",answer:true},
{text:"A eliminação de causa exige contato direto com o código para ser aplicada.",answer:false},
{text:"Na depuração por indução, se a hipótese não for provada, retorna-se ao passo de coleta de dados.",answer:true}
],
exp:"Eliminação de causa não exige contato direto com o código — embora seja facilitada se o depurador o conhecer. Prints alteram o código e podem mascarar ou introduzir defeitos."}

,{prova:"p1",topic:"Depuração",diff:"hard",type:"mc",
text:"[1,0] Qual é a diferença CORRETA entre as metodologias de depuração por dedução e por indução?",
options:["Dedução parte de pistas e formula hipótese; indução parte de uma hipótese e tenta prová-la","Indução coleta pistas e formula hipótese; dedução cria uma hipótese e tenta prová-la diretamente","Ambas são idênticas — diferem apenas no nome","Dedução é mais eficiente para programas grandes; indução para pequenos"],
answer:1,
exp:"Indução: coleta pistas → formula hipótese a partir delas. Dedução: cria hipótese diretamente → tenta prová-la (casos mais óbvios). O Caminho Reverso parte da última instrução e percorre para trás."}

,{prova:"p1",topic:"Qualidade de Software",diff:"easy",type:"mc",
text:"[1,0] Quais são as duas atividades centrais do Controle da Qualidade, popularmente chamadas atividades V&V?",
options:["Verificação e Validação","Versionamento e Validação","Verificação e Versionamento","Validação e Vulnerabilidade"],
answer:0,
exp:"O Controle da Qualidade envolve Verificação e Validação (V&V). Essas atividades têm melhorado a produtividade do processo e a qualidade do produto de software."}

,{prova:"p1",topic:"Qualidade de Software",diff:"easy",type:"mc",
text:"[1,0] A atividade de VERIFICAÇÃO visa responder a qual pergunta?",
options:["Estamos construindo o produto correto?","O produto atende as necessidades dos usuários?","Estamos construindo corretamente o produto?","O produto está pronto para ser implantado?"],
answer:2,
exp:"Verificação: 'Estamos construindo CORRETAMENTE o produto?' — confirma se o artefato atende os requisitos especificados. Validação: 'Estamos construindo o produto CORRETO?' — confirma se atende as necessidades dos usuários."}

,{prova:"p1",topic:"Qualidade de Software",diff:"easy",type:"mc",
text:"[1,0] A atividade de VALIDAÇÃO visa responder a qual pergunta?",
options:["Estamos construindo corretamente o produto?","O código está livre de erros de compilação?","O sistema foi entregue dentro do prazo?","Estamos construindo o produto correto?"],
answer:3,
exp:"Validação: 'Estamos construindo o produto CORRETO?' — confirma se o software atenderá seu uso pretendido em produção. Envolve clientes e stakeholders, diferente da verificação."}

,{prova:"p1",topic:"Qualidade de Software",diff:"medium",type:"mc",
text:"[1,0] Segundo o material, qual consideração sobre qualidade de software está CORRETA?",
options:["Corrigir um defeito após a entrega custa o mesmo que nas etapas iniciais","Aproximadamente 80% dos defeitos são provenientes de 80% dos módulos","Um desenvolvedor não é indicado para testar seu próprio software","Testes revelam tanto a presença quanto a ausência de defeitos"],
answer:2,
exp:"Desenvolvedor não é indicado para testar seu próprio código — falta de imparcialidade. 80% dos defeitos vêm de 20% dos módulos (Pareto). Corrigir após entrega pode custar 100x mais. Testes só revelam PRESENÇA de defeitos."}

,{prova:"p1",topic:"Qualidade de Software",diff:"medium",type:"mc",
text:"[1,0] Poucos defeitos foram encontrados em uma bateria de testes. Qual das interpretações abaixo está CORRETA?",
options:["O software tem alta qualidade comprovada","Significa testes de alta qualidade e software também","Pode significar: software bom + testes bons; ou ambos ruins; ou software bom + testes ruins","O software está pronto para implantação imediata"],
answer:2,
exp:"Poucos defeitos tem 3 causas possíveis: (1) software bom + testes bons; (2) software ruim + testes ruins; (3) software bom + testes ruins. Só com software ruim + testes bons é que se obtém muitas falhas. Ausência de falhas não prova qualidade."}

,{prova:"p1",topic:"Qualidade de Software",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre qualidade de software e atividades V&V.",
statements:[
{text:"Verificação confirma se o produto atende os requisitos especificados.",answer:true},
{text:"Validação confirma se o produto atenderá seu uso pretendido no ambiente de produção.",answer:true},
{text:"Testes revelam a presença E a ausência de defeitos.",answer:false},
{text:"A prevenção de defeitos é mais eficaz que a remoção de defeitos.",answer:true}
],
exp:"Testes revelam apenas a PRESENÇA de defeitos, nunca a ausência (Dijkstra). Prevenção é mais eficaz e barata que remoção tardia."}

,{prova:"p1",topic:"Qualidade de Software",diff:"hard",type:"mc",
text:"[1,0] Um desenvolvedor afirma: 'Executei todos os testes e nenhuma falha foi encontrada, portanto o software está correto e pronto.' Qual é o erro nessa afirmação?",
options:["O desenvolvedor não deveria ter executado os testes ele mesmo","A afirmação está correta — ausência de falhas prova a correção do software","Não encontrar falhas não prova que o software está correto — pode significar testes insuficientes ou software realmente bom","Os testes deveriam ser executados pelo cliente, não pelo desenvolvedor"],
answer:2,
exp:"Dois problemas: (1) ausência de falhas não prova correção — pode ser testes ruins; (2) desenvolvedores não devem testar seu próprio software por falta de imparcialidade. A afirmação é duplamente equivocada."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Quantos atributos de qualidade compõem o modelo da norma ISO/IEC 25010?",
options:["5","6","7","8"],
answer:3,
exp:"ISO/IEC 25010 define 8 atributos: Adequação, Eficiência, Compatibilidade, Usabilidade, Confiabilidade, Segurança, Manutenibilidade e Portabilidade."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Qual atributo da ISO/IEC 25010 refere-se à capacidade do software executar suas funções sob condições específicas por dado período e se comportar bem em circunstâncias adversas?",
options:["Adequação","Eficiência","Segurança","Confiabilidade"],
answer:3,
exp:"Confiabilidade: execução sob condições específicas por dado período e comportamento adequado em adversidades. Características: maturidade, disponibilidade, tolerância a falhas e recuperabilidade."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Qual atributo da ISO/IEC 25010 refere-se à capacidade do software ser modificado, atualizado, corrigido e adaptado a mudanças?",
options:["Portabilidade","Manutenibilidade","Compatibilidade","Usabilidade"],
answer:1,
exp:"Manutenibilidade: modificação, atualização, correção e adaptação. Características: modularidade, reusabilidade, analisabilidade, modificabilidade e testabilidade."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"mc",
text:"[1,0] Um sistema bancário não permite identificar quais ações cada usuário realizou, impossibilitando auditorias. Qual atributo e característica da ISO/IEC 25010 não está sendo atendida?",
options:["Usabilidade — Operabilidade","Segurança — Rastreabilidade de uso","Confiabilidade — Maturidade","Manutenibilidade — Analisabilidade"],
answer:1,
exp:"Segurança — Rastreabilidade de uso: verificar quais ações foram feitas por cada pessoa para atestar responsabilidade. A ausência dessa característica impede auditorias e identificação de responsáveis."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"mc",
text:"[1,0] Qual característica do atributo EFICIÊNCIA da ISO/IEC 25010 refere-se ao tempo de resposta e processamento do software?",
options:["Capacidade","Uso de Recursos","Comportamento Temporal","Disponibilidade"],
answer:2,
exp:"Eficiência: Comportamento Temporal (tempo de resposta/processamento), Uso de Recursos (quantidade e tipos) e Capacidade (limites máximos). Disponibilidade é característica de Confiabilidade."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre os atributos da ISO/IEC 25010.",
statements:[
{text:"Compatibilidade envolve as características Coexistência e Interoperabilidade.",answer:true},
{text:"Portabilidade refere-se à capacidade do sistema proteger dados de acessos não autorizados.",answer:false},
{text:"Manutenibilidade inclui a característica Testabilidade.",answer:true},
{text:"Adequação é a capacidade do software realizar o que ele se propõe a fazer.",answer:true}
],
exp:"Portabilidade = transferência para outro ambiente (Adaptabilidade, Instalabilidade, Substituibilidade). Segurança é que protege dados. Testabilidade é sub-característica de Manutenibilidade."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"hard",type:"mc",
text:"[1,0] Um sistema sofreu falha grave e perdeu dados de transações. Ao reiniciar, não conseguiu recuperar os dados nem retornar ao estado anterior. Qual atributo e característica da ISO/IEC 25010 não foi atendida?",
options:["Eficiência — Comportamento Temporal","Segurança — Integridade","Confiabilidade — Recuperabilidade","Manutenibilidade — Modificabilidade"],
answer:2,
exp:"Confiabilidade — Recuperabilidade: capacidade de recuperar dados e entrar novamente em operação após falha. O sistema falhou ao recuperar dados e retornar ao estado correto."}

,{prova:"p1",topic:"Padrão ISO/IEC 25010",diff:"hard",type:"mc",
text:"[1,0] Um sistema é muito difícil de modificar: qualquer alteração em um módulo impacta dezenas de outros. Qual característica da ISO/IEC 25010 está comprometida?",
options:["Confiabilidade — Tolerância a Falhas","Manutenibilidade — Modularidade","Segurança — Integridade","Usabilidade — Operabilidade"],
answer:1,
exp:"Manutenibilidade — Modularidade: nível em que o software é dividido em partes coesas, de forma que uma alteração em uma parte tenha impacto mínimo nas demais. Alto acoplamento = baixa modularidade."}

,{prova:"p1",topic:"Princípios do Teste",diff:"easy",type:"mc",
text:"[1,0] Qual é o 1º princípio geral de teste?",
options:["Teste exaustivo é impossível","Teste depende do contexto","Teste demonstra a presença de defeitos","Agrupamento de defeitos"],
answer:2,
exp:"1º princípio: Teste demonstra a PRESENÇA de defeitos. Testes buscam mostrar que defeitos existem, não o contrário. Mesmo sem encontrar nada, não se atesta que o sistema está perfeito."}

,{prova:"p1",topic:"Princípios do Teste",diff:"easy",type:"mc",
text:"[1,0] O princípio do 'Agrupamento de defeitos' afirma que:",
options:["Todos os módulos tendem a ter a mesma quantidade de defeitos","Um reduzido grupo de módulos tende a conter a maior parte dos defeitos","Os defeitos se distribuem uniformemente por todo o código","A maioria dos defeitos está nos módulos mais recentes"],
answer:1,
exp:"Agrupamento de defeitos (4º princípio): um reduzido grupo de módulos tende a conter a maior parte dos defeitos. Baseia-se no Princípio de Pareto: ~80% dos defeitos em ~20% dos componentes."}

,{prova:"p1",topic:"Princípios do Teste",diff:"easy",type:"mc",
text:"[1,0] O que é o 'Paradoxo do Pesticida' no contexto de testes de software?",
options:["Testes tornam o software mais frágil com o tempo","Um mesmo conjunto de testes, executado repetidamente, tende a parar de encontrar novos defeitos","Testes de software são prejudiciais ao processo de desenvolvimento","Quanto mais testes, mais defeitos surgirão"],
answer:1,
exp:"Paradoxo do Pesticida (5º princípio): os casos de teste, executados repetidamente, param de encontrar novos defeitos — como se os defeitos desenvolvessem resistência. Solução: revisar e criar novos testes."}

,{prova:"p1",topic:"Princípios do Teste",diff:"medium",type:"mc",
text:"[1,0] O 7º princípio — 'Ilusão da ausência de erros' — afirma que:",
options:["Um sistema sem defeitos é impossível de existir","Corrigir defeitos técnicos não é útil se o software não atender as expectativas dos usuários","Testes que não encontram erros são inúteis","Ausência de falhas indica software de alta qualidade"],
answer:1,
exp:"Ilusão da ausência de erros: corrigir todos os defeitos técnicos não tem valor se o software não atende as necessidades e expectativas dos usuários. Software tecnicamente perfeito mas inútil ao negócio não tem valor."}

,{prova:"p1",topic:"Princípios do Teste",diff:"medium",type:"mc",
text:"[1,0] Segundo os princípios adicionais de Myers, Sandler e Badgett, qual afirmação está CORRETA?",
options:["Testes devem ser realizados pelos próprios desenvolvedores para maior conhecimento","A outra metade do esforço envolve verificar se o programa faz o que NÃO se espera dele","Testes devem ser aplicados primeiro nos módulos de menor importância","Planejar os testes após o início da execução é suficiente"],
answer:1,
exp:"Myers: 'Examinar se o programa não faz o que se espera é apenas metade. A outra metade envolve verificar se faz o que NÃO se espera.' Além disso, testes devem ser feitos por equipe independente."}

,{prova:"p1",topic:"Princípios do Teste",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre os princípios do teste de software.",
statements:[
{text:"O 2º princípio afirma que o teste exaustivo é impossível, exceto em situações triviais.",answer:true},
{text:"O teste antecipado defende que os testes devem começar apenas após a codificação estar completa.",answer:false},
{text:"O paradoxo do pesticida indica que os casos de teste precisam ser frequentemente revisados e atualizados.",answer:true},
{text:"O 6º princípio afirma que o teste depende do contexto do software.",answer:true}
],
exp:"Teste antecipado (3º princípio): atividades de teste devem iniciar o mais cedo possível no ciclo de vida — não apenas após a codificação."}

,{prova:"p1",topic:"Princípios do Teste",diff:"hard",type:"mc",
text:"[1,0] Um software de controle de tráfego aéreo e um sistema de controle de estoque são testados de formas completamente diferentes em rigor e tipos de teste. Qual princípio justifica essa diferença?",
options:["Paradoxo do Pesticida","Teste demonstra a presença de defeitos","Teste depende do contexto","Agrupamento de defeitos"],
answer:2,
exp:"Teste depende do contexto (6º princípio): estratégias, tipos e execuções variam de acordo com o contexto do software. Controle de voo tem tolerância a falhas muito menor que sistema de estoque."}

,{prova:"p1",topic:"Processo de Teste",diff:"easy",type:"mc",
text:"[1,0] Segundo o padrão IEEE 829, o processo de teste é dividido em quantas partes sequenciais?",
options:["1","2","3","4"],
answer:1,
exp:"IEEE 829 divide em 2 partes: 1. Planejamento dos testes; 2. Execução dos testes."}

,{prova:"p1",topic:"Processo de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual é o artefato produzido pela etapa 'Planejar Testes'?",
options:["Especificação de Caso de Teste","Log de Teste","Plano de Testes","Relatório de Incidente de Teste"],
answer:2,
exp:"Planejar Testes → Plano de Testes. Projetar Testes → Especificação de Projeto de Teste. Especificar Casos → Especificação de Caso de Teste. Executar → Log + Relatório de Incidente."}

,{prova:"p1",topic:"Processo de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual profissional é responsável pela execução dos testes e pelo registro das falhas detectadas?",
options:["Gerente de Teste","Arquiteto de Teste","Projetista de Teste","Testador"],
answer:3,
exp:"Testador: executa os testes e registra as falhas. Gerente: planejamento e controle. Arquiteto: preparação do ambiente. Projetista: projeto dos testes e escolha de técnicas."}

,{prova:"p1",topic:"Processo de Teste",diff:"medium",type:"mc",
text:"[1,0] Qual artefato é produzido pela etapa 'Analisar Resultados dos Testes'?",
options:["Log de Teste","Relatório de Incidente de Teste","Relatório de Resumo de Teste","Especificação de Procedimento de Teste"],
answer:2,
exp:"Analisar Resultados → Relatório de Resumo de Testes (síntese de todos os resultados). Executar Testes → Log + Relatório de Incidente. O Relatório de Resumo é o laudo final."}

,{prova:"p1",topic:"Processo de Teste",diff:"medium",type:"mc",
text:"[1,0] O Relatório de Incidente de Teste documenta eventos que requerem investigação. Qual informação abaixo NÃO é obrigatória nesse relatório?",
options:["Entradas que geraram o incidente","Resultados obtidos e esperados","Biografia do testador responsável","Data, hora e grau de impacto"],
answer:2,
exp:"O Relatório de Incidente contém: resumo, entradas, resultados esperados/obtidos, anomalias, data/hora, procedimento, item que falhou, tentativas de repetição, nomes dos testadores e grau de impacto. Biografia não é campo previsto."}

,{prova:"p1",topic:"Processo de Teste",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre o processo de teste.",
statements:[
{text:"O Plano de Testes considera os documentos de requisitos, análise e projeto do sistema.",answer:true},
{text:"A etapa 'Especificar Casos de Teste' tem por produto a Especificação de PROJETO de Teste.",answer:false},
{text:"A etapa 'Executar Testes' gera o Log de Teste e o Relatório de Incidente de Teste.",answer:true},
{text:"O Relatório de Resumo de Testes é o produto da etapa 'Analisar Resultados dos Testes'.",answer:true}
],
exp:"Especificar Casos de Teste → Especificação de CASO de Teste. Projetar Testes → Especificação de PROJETO. São artefatos diferentes com nomes parecidos — atenção à distinção."}

,{prova:"p1",topic:"Processo de Teste",diff:"hard",type:"mc",
text:"[1,0] Por que é essencial que os testes executados sejam documentados de forma reproduzível por outras pessoas com os mesmos resultados?",
options:["Para facilitar a remoção de defeitos pelos desenvolvedores","Para possibilitar a execução de testes de regressão em versões futuras do software","Para reduzir o tempo de treinamento dos testadores","Para permitir que menos testadores sejam necessários"],
answer:1,
exp:"Reprodutibilidade é fundamental para testes de regressão: quando o software é modificado, os mesmos testes precisam ser reexecutados. Sem documentação reproduzível, como refazer os testes em versões futuras?"}

,{prova:"p1",topic:"Modelo V e Ciclo de Vida",diff:"easy",type:"mc",
text:"[1,0] O Modelo V classicamente possui quantos níveis de desenvolvimento e de teste?",
options:["3 de desenvolvimento e 3 de teste","4 de desenvolvimento e 4 de teste","5 de desenvolvimento e 5 de teste","2 de desenvolvimento e 4 de teste"],
answer:1,
exp:"Modelo V clássico: 4 desenvolvimento (Especificação, Análise, Projeto, Implementação) e 4 de teste (Aceitação, Sistema, Integração, Unidade)."}

,{prova:"p1",topic:"Modelo V e Ciclo de Vida",diff:"easy",type:"mc",
text:"[1,0] No Modelo V, à fase de Implementação do Código corresponde qual nível de teste?",
options:["Teste de Aceitação","Teste de Sistema","Teste de Integração","Teste de Unidade"],
answer:3,
exp:"No Modelo V: Especificação↔Aceitação; Análise↔Sistema; Projeto↔Integração; Implementação↔Unidade. O mais concreto (implementação) corresponde ao mais específico (unidade)."}

,{prova:"p1",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"mc",
text:"[1,0] Qual é o principal problema do 'Cenário Comum' de testes descrito no material?",
options:["Os testes são realizados por equipes muito grandes e caras","Os testes constituem uma única etapa após a codificação e podem ser eliminados para reduzir prazos","Os testes começam muito cedo e atrasam o desenvolvimento","Os testadores não têm acesso ao código-fonte"],
answer:1,
exp:"Cenário Comum: testes = única etapa após codificação; podem ser eliminados por pressão de prazo; realizados pelos próprios programadores; verificam apenas funcionalidades. O Cenário Ideal preconiza processo independente e paralelo."}

,{prova:"p1",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre o Modelo V e o ciclo de vida dos testes.",
statements:[
{text:"O Modelo V propõe que os testes ocorram simultaneamente ao desenvolvimento.",answer:true},
{text:"No Modelo V, o Teste de Aceitação corresponde à fase de Análise de Requisitos.",answer:false},
{text:"O cenário ideal prevê que o processo de teste comece na etapa de requisitos.",answer:true},
{text:"O Modelo V foi proposto como um aprimoramento do modelo em cascata.",answer:true}
],
exp:"No Modelo V: Aceitação ↔ Especificação de Requisitos (não Análise). Análise ↔ Teste de Sistema. O Modelo V foi proposto por Rock (1986) como evolução do cascata."}

,{prova:"p1",topic:"Estratégia e Dimensões",diff:"easy",type:"mc",
text:"[1,0] Uma estratégia de teste deve responder 3 perguntas básicas. Qual das opções abaixo NÃO é uma delas?",
options:["Quando testar?","O que testar?","Quem deve testar?","Como testar?"],
answer:2,
exp:"As 3 perguntas: QUANDO testar (momento no desenvolvimento), O QUE testar (partes e características), COMO testar (métodos e ferramentas). 'Quem testa' é definido no processo, não na estratégia."}

,{prova:"p1",topic:"Estratégia e Dimensões",diff:"easy",type:"mc",
text:"[1,0] No modelo tridimensional de testes, a pergunta 'O QUE testar?' corresponde a qual dimensão?",
options:["Níveis de teste","Técnicas de teste","Tipos de teste","Estratégias de teste"],
answer:2,
exp:"Modelo tridimensional: QUANDO → Nível de Teste; O QUE → Tipo de Teste; COMO → Técnica de Teste. Nível ≠ Tipo ≠ Técnica."}

,{prova:"p1",topic:"Estratégia e Dimensões",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre TIPO de teste e TÉCNICA de teste?",
options:["São sinônimos — não há diferença","Tipo define o objetivo do teste (O QUE verificar); técnica define o método para realizá-lo (COMO testar)","Técnica define o objetivo; tipo define o método","Tipo refere-se ao nível de abstração; técnica ao momento de execução"],
answer:1,
exp:"Tipo = objetivo/verificação (funcional, não funcional, estrutural, regressão). Técnica = método aplicado (caixa branca, caixa preta). Para um mesmo tipo, diferentes técnicas podem ser empregadas."}

,{prova:"p1",topic:"Níveis de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual nível de teste verifica as menores unidades do software (módulos, classes, funções) de forma independente?",
options:["Teste de Integração","Teste de Sistema","Teste de Aceitação","Teste de Unidade"],
answer:3,
exp:"Teste de Unidade: verifica as menores unidades testáveis separadamente. Busca falhas de forma independente do todo. Normalmente emprega técnicas de caixa branca."}

,{prova:"p1",topic:"Níveis de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual nível de teste tem o objetivo de verificar as INTERFACES entre componentes do sistema?",
options:["Teste de Unidade","Teste de Integração","Teste de Sistema","Teste de Aceitação"],
answer:1,
exp:"Teste de Integração: verifica as interfaces entre componentes, garantindo compatibilidade e correta comunicação. Não verifica funcionalidades internas — isso é papel do teste de unidade."}

,{prova:"p1",topic:"Níveis de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual nível de teste é de responsabilidade do CLIENTE e ocorre em ambiente de homologação ou produção?",
options:["Teste de Unidade","Teste de Sistema","Teste de Integração","Teste de Aceitação"],
answer:3,
exp:"Teste de Aceitação: responsabilidade do cliente, usuário e stakeholders. Ocorre em ambiente de homologação ou produção. Objetiva verificar se o sistema está pronto para implantação."}

,{prova:"p1",topic:"Níveis de Teste",diff:"medium",type:"mc",
text:"[1,0] Por que o teste de integração deve acontecer APÓS todos os testes de unidade?",
options:["Para economizar recursos","Para evitar que defeitos internos nos componentes sejam confundidos com defeitos de integração","Por exigência do IEEE 829","Porque os componentes não estão prontos antes disso"],
answer:1,
exp:"Se um componente com defeito interno é submetido ao teste de integração, os problemas podem ser confundidos com defeitos de comunicação entre módulos. Teste de unidade garante componentes corretos antes da integração."}

,{prova:"p1",topic:"Níveis de Teste",diff:"medium",type:"mc",
text:"[1,0] Na abordagem de integração Bottom-Up, qual recurso é usado para simular módulos mais gerais que ainda não foram implementados?",
options:["Stubs (simuladores)","Drivers (controladores)","Mocks","Proxies"],
answer:1,
exp:"Bottom-Up: integra dos específicos para os gerais. Módulos mais gerais ausentes → usa-se Drivers. Top-Down é o contrário: usa Stubs para simular módulos específicos ausentes."}

,{prova:"p1",topic:"Níveis de Teste",diff:"medium",type:"mc",
text:"[1,0] Qual subdivisão do Teste de Aceitação é realizada por clientes no LOCAL DO CLIENTE, sem interferência da equipe de desenvolvimento?",
options:["Teste Alfa","Teste Beta","Teste de aceite do usuário","Teste operacional de aceite"],
answer:1,
exp:"Teste Beta: no local do cliente, sem interferência da equipe. Teste Alfa: no local do desenvolvimento, sob observação da equipe. Beta vem depois do Alfa."}

,{prova:"p1",topic:"Níveis de Teste",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre os níveis de teste.",
statements:[
{text:"O Teste de Sistema deve acontecer após todos os Testes de Integração.",answer:true},
{text:"O Teste de Unidade normalmente emprega técnicas de caixa branca.",answer:true},
{text:"Na abordagem Top-Down, a integração parte dos componentes mais específicos do sistema.",answer:false},
{text:"O Teste Alfa ocorre no local do cliente, sem interferência da equipe de desenvolvimento.",answer:false}
],
exp:"Top-Down: parte do componente principal (mais geral) → específicos. Teste Alfa: no LOCAL DO DESENVOLVIMENTO, sob observação. Teste Beta: no local do cliente, sem interferência."}

,{prova:"p1",topic:"Níveis de Teste",diff:"hard",type:"mc",
text:"[1,0] Um sistema passou nos testes de integração e será submetido ao Teste de Sistema. Qual afirmação está CORRETA?",
options:["É realizado intercalado com as atividades de desenvolvimento pendentes","O ambiente de teste deve ser o mais próximo possível ao de produção","Deve ser realizado pelos próprios desenvolvedores para maior conhecimento","Considera apenas requisitos funcionais"],
answer:1,
exp:"Teste de Sistema: ambiente deve ser o mais próximo possível ao de produção. É realizado de forma NÃO intercalada com desenvolvimento. Feito por equipe independente. Considera requisitos funcionais E não-funcionais."}

,{prova:"p1",topic:"Tipos de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual tipo de teste visa verificar se uma FUNCIONALIDADE do sistema atua como esperado, baseando-se nos requisitos funcionais?",
options:["Teste Estrutural","Teste de Regressão","Teste Funcional","Teste de Performance"],
answer:2,
exp:"Teste Funcional: verifica se a funcionalidade faz o que deveria, com base nos requisitos funcionais. Pode ser empregado em todos os níveis de teste."}

,{prova:"p1",topic:"Tipos de Teste",diff:"easy",type:"mc",
text:"[1,0] O teste que objetiva testar novamente o software após modificações, buscando defeitos introduzidos pelas mudanças, é chamado de:",
options:["Teste Funcional","Teste de Estresse","Teste de Regressão","Teste de Usabilidade"],
answer:2,
exp:"Teste de Regressão: reexecuta casos de teste após modificações para verificar se surgiram novos defeitos. Se a modificação foi para corrigir um erro específico, pode ser chamado de Teste de Confirmação."}

,{prova:"p1",topic:"Tipos de Teste",diff:"easy",type:"mc",
text:"[1,0] Qual tipo de teste visa levar o sistema ao seu LIMITE de utilização em condições extremas?",
options:["Teste de Carga","Teste de Performance","Teste de Estresse","Teste de Resiliência"],
answer:2,
exp:"Teste de Estresse: aumenta gradualmente a carga até o sistema falhar, determinando os limites máximos. Teste de Carga: verifica condições ESPERADAS de uso (não extremas)."}

,{prova:"p1",topic:"Tipos de Teste",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre Teste de CARGA e Teste de ESTRESSE?",
options:["Teste de carga é mais demorado que o de estresse","Teste de carga verifica condições ESPERADAS de uso; teste de estresse leva ao LIMITE até falhar","Teste de estresse verifica condições normais; teste de carga verifica extremas","São sinônimos"],
answer:1,
exp:"Carga: simula condições normais esperadas. Estresse: aumenta a carga gradualmente até o sistema falhar, determinando limites máximos. São tipos não-funcionais distintos."}

,{prova:"p1",topic:"Tipos de Teste",diff:"medium",type:"mc",
text:"[1,0] O Teste Estrutural tem como objetivo principal:",
options:["Verificar se as funcionalidades atendem os requisitos dos usuários","Verificar a nível de código se as estruturas internas funcionam corretamente sob diferentes condições","Testar a interface com usuários reais","Verificar a integração entre sistemas externos"],
answer:1,
exp:"Teste Estrutural: avalia execução de estruturas internas do código (loops, desvios, classes) sob diferentes condições. Busca cobertura máxima dos caminhos de execução. Técnica de caixa branca."}

,{prova:"p1",topic:"Tipos de Teste",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre os tipos de teste de software.",
statements:[
{text:"O Teste de Usabilidade não pode ser completamente automatizado.",answer:true},
{text:"O Teste de Regressão reexecuta os casos de teste após modificações no software.",answer:true},
{text:"O Teste Funcional deve ser empregado apenas no nível de Teste de Sistema.",answer:false},
{text:"O Teste de Segurança verifica se o acesso a dados é concedido apenas a quem tem autorização.",answer:true}
],
exp:"Teste Funcional deve ser empregado em TODOS os níveis (unidade, integração, sistema, aceitação). Usabilidade exige avaliação humana — não pode ser totalmente automatizada."}

,{prova:"p1",topic:"Tipos de Teste",diff:"hard",type:"mc",
text:"[1,0] Um sistema de e-commerce foi atualizado para corrigir um bug de cálculo de frete. Após a atualização, novos bugs surgiram no módulo de pagamento. Qual tipo de teste deveria ter detectado esses novos bugs?",
options:["Teste de Integração","Teste de Aceitação","Teste de Regressão","Teste Estrutural"],
answer:2,
exp:"Teste de Regressão: após qualquer modificação, reexecuta todos os casos de teste para verificar se a mudança introduziu novos defeitos. A correção do bug de frete introduziu defeitos no pagamento — exatamente o cenário que a regressão previne."}


// ══════════════════ PROVA FINAL (PF) ══════════════════
// Questões baseadas na Prova Final 2025/2 (Prof. Octavio Vieira de Aguiar)

,{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"easy",type:"mc",
text:"[1,0] Proposto por Rook (1986), o Modelo V é um modelo de desenvolvimento que integra fortemente a testagem ao processo. De acordo com esse modelo, quando uma parte do software está em fase de ANÁLISE DE REQUISITOS, o que deve estar ocorrendo em relação aos testes?",
options:["Os testes de aceitação desta parte devem estar sendo planejados","Os testes de unidade desta parte devem estar sendo executados","Os testes de integração desta parte devem estar sendo executados","Os testes de sistema desta parte devem estar sendo executados"],
answer:0,
exp:"No Modelo V, cada fase de desenvolvimento (lado esquerdo) é espelhada por um nível de teste (lado direito): a análise de requisitos corresponde ao PLANEJAMENTO dos testes de aceitação. A execução só ocorre depois, na subida do V."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"mc",
text:"[1,0] No Modelo V, durante a fase de PROJETO DA ARQUITETURA (projeto de alto nível) de uma parte do software, o que deve estar ocorrendo em relação aos testes dessa parte?",
options:["Os testes de integração desta parte devem estar sendo planejados","Os testes de unidade desta parte devem estar sendo executados","Os testes de aceitação desta parte devem estar sendo executados","Os testes de sistema desta parte devem estar sendo executados"],
answer:0,
exp:"No Modelo V, o projeto da arquitetura (alto nível) espelha o nível de teste de integração — portanto, nessa fase os testes de integração estão sendo PLANEJADOS. A execução ocorre na subida do V, após a codificação."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação ao Modelo V.",
statements:[
{text:"O Modelo V integra fortemente as atividades de teste ao processo de desenvolvimento.",answer:true},
{text:"Cada fase de desenvolvimento à esquerda do V está associada a um nível de teste à direita.",answer:true},
{text:"No Modelo V, todos os testes são planejados e executados somente após o término da codificação.",answer:false},
{text:"A fase de análise de requisitos está associada ao nível de teste de aceitação.",answer:true}
],
exp:"O diferencial do Modelo V é planejar cada nível de teste JUNTO com a fase de desenvolvimento correspondente (lado esquerdo), antecipando o planejamento. A execução é que ocorre depois, na subida do V."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Segundo a ISO/IEC 25010, a característica 'Coexistência' — capacidade de um produto operar eficientemente compartilhando um ambiente comum com outros produtos — pertence a qual característica de qualidade?",
options:["Compatibilidade","Usabilidade","Portabilidade","Manutenibilidade"],
answer:0,
exp:"Na ISO/IEC 25010, a Compatibilidade reúne as subcaracterísticas Coexistência e Interoperabilidade. Coexistência = operar bem compartilhando recursos com outros produtos."},

{prova:"pf",topic:"Qualidade de Software",diff:"medium",type:"tf",
text:"[2,0] Assinale V para as alternativas verdadeiras e F para as falsas, em relação a fundamentos de teste e qualidade de software.",
statements:[
{text:"Segundo a ISO/IEC 25010, a Coexistência é uma das características do atributo de qualidade Compatibilidade.",answer:true},
{text:"O teste de resiliência é um tipo de teste funcional de software.",answer:false},
{text:"O intuito geral de um teste é refutar a ideia de que o produto está correto.",answer:true},
{text:"A análise de despejo de memória (memory dump) é um método de depuração por força bruta.",answer:true}
],
exp:"Resiliência é teste NÃO funcional (avalia recuperação a falhas, não a regra de negócio). Testar é tentar refutar a correção do software, revelando defeitos (visão de Myers). Memory dump é depuração por força bruta. Coexistência ∈ Compatibilidade (ISO 25010)."},

{prova:"pf",topic:"Qualidade de Software",diff:"medium",type:"mc",
text:"[1,0] Um gerente afirma: 'Após esta bateria de testes sem falhas, está provado que o software não tem defeitos.' Qual visão sobre o objetivo dos testes contradiz CORRETAMENTE essa afirmação?",
options:["O objetivo do teste é provar a ausência total de defeitos","O objetivo do teste é refutar a hipótese de que o software está correto, revelando defeitos — testes não provam ausência de defeitos","O objetivo do teste é garantir 100% de cobertura de código","O objetivo do teste é substituir a fase de depuração"],
answer:1,
exp:"Testar é tentar refutar a correção do software. A ausência de falhas em uma bateria de testes não prova ausência de defeitos — apenas que aqueles casos passaram (princípio de Dijkstra/Myers)."},

{prova:"pf",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] Durante um processo conjunto de teste e depuração, uma vez que as falhas são encontradas, a depuração é realizada, as causas são descobertas e corrigidas. Qual é o passo a ser realizado IMEDIATAMENTE a seguir?",
options:["Encerrar o processo de teste","Executar testes de regressão","Realizar testes exploratórios completamente distintos","Expandir a depuração atual para módulos não relacionados"],
answer:1,
exp:"Após corrigir uma falha, executa-se o teste de regressão para garantir que a correção não introduziu novos defeitos e que o comportamento anterior continua íntegro. Só então o ciclo prossegue."},

{prova:"pf",topic:"Depuração",diff:"medium",type:"mc",
text:"[1,0] A análise de despejo de memória (memory dump) é classificada como um método de depuração de qual categoria?",
options:["Força bruta","Indução","Dedução","Eliminação de causas (backtracking)"],
answer:0,
exp:"A análise de memory dump examina grandes volumes de dados brutos da memória sem uma hipótese guiada — por isso é considerada depuração por FORÇA BRUTA, geralmente o último recurso."},

{prova:"pf",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Em um teste que recebe uma equação VÁLIDA e precisa garantir que o método validarEquacaoLinear NÃO lança nenhuma exceção, qual asserção do JUnit 5 deve ser utilizada?",
options:["assertThrows(DataFormatException.class, () -> fv.validarEquacaoLinear(eq))","assertDoesNotThrow(() -> fv.validarEquacaoLinear(eq))","assertNull(fv.validarEquacaoLinear(eq))","assertFalse(fv.validarEquacaoLinear(eq))"],
answer:1,
exp:"assertDoesNotThrow verifica que o bloco executa SEM lançar exceção — ideal para entradas válidas. Para a entrada inválida, usa-se assertThrows(DataFormatException.class, ...)."},

{prova:"pf",topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] Considere a classe FormatoValidador com o método validarEquacaoLinear(String eq) que lança DataFormatException para equações inválidas. Implemente um teste parametrizado JUnit 5 chamado testValidarEquacaoValida que, para cada equação VÁLIDA fornecida por argumentos simples (\"0.87x+0=0\", \"(45)x+(-6.23)=0\", \"0.5x+(-0.23)=0\", \"(1.2)x+100=0\"), verifica que NENHUMA exceção é lançada. Use assertDoesNotThrow. Considere que existe um atributo 'fv' já inicializado.",
answer:`@ParameterizedTest
@ValueSource(strings = {"0.87x+0=0", "(45)x+(-6.23)=0", "0.5x+(-0.23)=0", "(1.2)x+100=0"})
public void testValidarEquacaoValida(String eq) {
    assertDoesNotThrow(() -> fv.validarEquacaoLinear(eq));
}`,
keywords:["@ParameterizedTest","@ValueSource","testValidarEquacaoValida","assertDoesNotThrow","validarEquacaoLinear"],
exp:"@ParameterizedTest + @ValueSource(strings = {...}) injeta cada string como argumento simples. assertDoesNotThrow garante que equações válidas não disparam exceção."},

{prova:"pf",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[4,0] Considere a classe FormatoValidador, construída com um ValidadorTextual (new FormatoValidador(new ValidadorTextual())), cujo método validarEquacaoLinear(String eq) lança DataFormatException para equações inválidas. Desenvolva o caso de teste JUnit 5 FormatoValidadorTest observando: (A) antes de todos os testes, instanciar UM único objeto FormatoValidador reutilizado por todos; (B) testValidarEquacaoValida, parametrizado por argumentos simples, verifica que equações válidas (\"0.87x+0=0\", \"(45)x+(-6.23)=0\", \"0.5x+(-0.23)=0\", \"(1.2)x+100=0\") NÃO lançam exceção; (C) testValidarEquacaoInvalida, parametrizado, verifica que equações inválidas (\"x+23.2=0\", \"5)x+6.23=0\", \"0.5x+-0.23=0\", \"(1.2)x+100\") lançam DataFormatException.",
answer:`public class FormatoValidadorTest {
    private static FormatoValidador fv;

    @BeforeAll
    public static void setUpAll() {
        fv = new FormatoValidador(new ValidadorTextual());
    }

    @ParameterizedTest
    @ValueSource(strings = {"0.87x+0=0", "(45)x+(-6.23)=0", "0.5x+(-0.23)=0", "(1.2)x+100=0"})
    public void testValidarEquacaoValida(String eq) {
        assertDoesNotThrow(() -> fv.validarEquacaoLinear(eq));
    }

    @ParameterizedTest
    @ValueSource(strings = {"x+23.2=0", "5)x+6.23=0", "0.5x+-0.23=0", "(1.2)x+100"})
    public void testValidarEquacaoInvalida(String eq) {
        assertThrows(DataFormatException.class, () -> fv.validarEquacaoLinear(eq));
    }
}`,
keywords:["FormatoValidadorTest","@BeforeAll","static","@ParameterizedTest","@ValueSource","assertDoesNotThrow","assertThrows","DataFormatException","validarEquacaoLinear"],
exp:"Pontos-chave: (A) @BeforeAll em método ESTÁTICO instancia o FormatoValidador uma única vez (compartilhado); (B) válidas → assertDoesNotThrow; (C) inválidas → assertThrows(DataFormatException.class, ...). @ValueSource fornece os argumentos simples a cada @ParameterizedTest."},

{prova:"pf",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um script Katalon, a especificação exige que, ao término do teste, o navegador seja fechado APENAS SE o teste tiver sido malsucedido (falha em verificação ou erro inesperado). Qual anotação deve conter o WebUI.closeBrowser()?",
options:["@TearDown","@TearDownIfError","@Setup","@AfterEach"],
answer:1,
exp:"@TearDownIfError executa SOMENTE quando o teste falha — exatamente o pedido. @TearDown executaria apenas em caso de sucesso, invertendo a especificação."},

{prova:"pf",topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] Implemente o método de finalização de um script Katalon que fecha o navegador APENAS quando o teste for malsucedido (falha ou erro inesperado).",
answer:`@TearDownIfError
def tearDown() {
    WebUI.closeBrowser()
}`,
keywords:["@TearDownIfError","closeBrowser"],
exp:"'Fechar apenas se malsucedido' → @TearDownIfError (executa só em falha). Não confundir com @TearDown, que executa apenas em sucesso."},

{prova:"pf",topic:"Katalon",diff:"hard",type:"code",
text:"[2,0] Considere um verificador de números primos cuja interface possui o campo de entrada 'Object InpNumero' e o campo de saída 'Object InpEPrimo' (informa se o número é primo). Desenvolva um script de caso de teste em Katalon que: abra o navegador em http://localhost/numerosprimos.html antes do teste; para cada item da tabela, atribua o número e verifique se a saída corresponde ao resultado esperado — 829→Sim, -93→Não, 122→Não; e, ao término, feche o navegador APENAS se o teste tiver sido malsucedido. Considere que o número de itens pode ser muito maior que o apresentado.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://localhost/numerosprimos.html')
}

@TearDownIfError
def tearDown() {
    WebUI.closeBrowser()
}

def dados = [
    [829, 'Sim'],
    [-93, 'Não'],
    [122, 'Não']
]

for (linha in dados) {
    WebUI.setText(findTestObject('Object InpNumero'), String.valueOf(linha[0]))
    WebUI.verifyElementAttributeValue(findTestObject('Object InpEPrimo'), 'value', linha[1], 0)
}`,
keywords:["@Setup","openBrowser","numerosprimos","@TearDownIfError","closeBrowser","for","setText","InpNumero","verify","InpEPrimo"],
exp:"Pontos-chave: @Setup abre o navegador; @TearDownIfError (NÃO @TearDown) fecha apenas em falha, conforme a especificação; o laço sobre a lista de dados torna o teste escalável; setText preenche o número e verifyElementAttributeValue confere o valor do campo de saída (disabled). A inversão @TearDown × @TearDownIfError é a pegadinha clássica."}

// ══════════════════ PROVA FINAL (PF) — AMPLIAÇÃO ══════════════════
// Lote adicional de questões baseadas na Prova Final 2025/2

// ── Tema 1: Modelo V e Ciclo de Vida ──
,{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"easy",type:"mc",
text:"[1,0] No Modelo V, a fase de PROJETO DETALHADO (projeto de módulos) está espelhada em qual nível de teste?",
options:["Teste de unidade","Teste de integração","Teste de sistema","Teste de aceitação"],
answer:0,
exp:"O projeto detalhado (de cada módulo) corresponde ao teste de unidade. Quanto mais baixo o nível de projeto, mais baixo o nível de teste espelhado no V."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"easy",type:"mc",
text:"[1,0] No Modelo V, durante a fase de ESPECIFICAÇÃO DO SISTEMA (projeto de alto nível do sistema), qual nível de teste está sendo PLANEJADO?",
options:["Teste de sistema","Teste de unidade","Teste de aceitação","Teste de regressão"],
answer:0,
exp:"A especificação do sistema espelha o teste de sistema. No Modelo V cada fase à esquerda planeja o nível de teste correspondente à direita."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"mc",
text:"[1,0] Qual é a principal vantagem do Modelo V em relação a um modelo cascata tradicional?",
options:["Elimina a necessidade de testes de aceitação","Antecipa o planejamento de cada nível de teste, associando-o à fase de desenvolvimento correspondente","Permite que a codificação ocorra antes da análise de requisitos","Garante ausência total de defeitos no produto final"],
answer:1,
exp:"O Modelo V integra teste ao desenvolvimento: cada fase à esquerda já planeja seu nível de teste correspondente à direita, antecipando a detecção de problemas em vez de deixar todo o teste para o fim."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"mc",
text:"[1,0] Considerando o Modelo V, associe corretamente as fases de desenvolvimento aos níveis de teste: análise de requisitos, projeto de arquitetura e projeto detalhado.",
options:["aceitação, integração, unidade","unidade, integração, aceitação","integração, aceitação, unidade","aceitação, unidade, integração"],
answer:0,
exp:"Requisitos → aceitação; arquitetura (alto nível) → integração; projeto detalhado (módulos) → unidade. Essa simetria é a essência do V."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"hard",type:"mc",
text:"[1,0] Uma equipe seguindo o Modelo V está na fase de análise de requisitos. Um membro afirma: 'Como ainda não há código, não há nada a fazer em relação a testes nesta fase.' Por que essa afirmação está ERRADA?",
options:["Porque os testes de unidade já deveriam estar sendo executados","Porque o planejamento dos testes de aceitação deve ocorrer já nesta fase, espelhando os requisitos","Porque o Modelo V exige codificar antes de levantar requisitos","Porque a fase de requisitos não pertence ao Modelo V"],
answer:1,
exp:"No Modelo V, planejar testes não exige código. Na análise de requisitos já se PLANEJAM os testes de aceitação (lado direito espelhado). A execução é que virá depois, na subida do V."},

{prova:"pf",topic:"Modelo V e Ciclo de Vida",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as verdadeiras e F para as falsas sobre o Modelo V e os níveis de teste.",
statements:[
{text:"O teste de unidade está associado à fase de projeto detalhado dos módulos.",answer:true},
{text:"No Modelo V, o planejamento dos testes de aceitação só pode começar após a codificação.",answer:false},
{text:"A execução dos testes ocorre na subida do V, do nível mais baixo ao mais alto.",answer:true},
{text:"O Modelo V foi proposto por Rook (1986).",answer:true}
],
exp:"O planejamento de cada nível de teste começa JUNTO da fase de desenvolvimento correspondente (descida do V). A execução sobe do teste de unidade até a aceitação."},

// ── Tema 2: ISO/IEC 25010 e Qualidade ──
{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Segundo a ISO/IEC 25010, a subcaracterística 'Interoperabilidade' pertence a qual característica de qualidade?",
options:["Compatibilidade","Confiabilidade","Usabilidade","Segurança"],
answer:0,
exp:"Compatibilidade reúne Coexistência e Interoperabilidade. Interoperabilidade = capacidade de dois ou mais sistemas trocarem e usarem informações."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"easy",type:"mc",
text:"[1,0] Segundo a ISO/IEC 25010, 'Tolerância a falhas' e 'Recuperabilidade' são subcaracterísticas de qual característica?",
options:["Confiabilidade","Segurança","Manutenibilidade","Portabilidade"],
answer:0,
exp:"Confiabilidade reúne Maturidade, Disponibilidade, Tolerância a falhas e Recuperabilidade — relaciona-se à capacidade do sistema de manter o funcionamento sob condições adversas."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"mc",
text:"[1,0] Segundo a ISO/IEC 25010, a 'Testabilidade' — facilidade de estabelecer critérios de teste e executá-los para verificar se foram atendidos — é subcaracterística de qual característica?",
options:["Manutenibilidade","Adequação Funcional","Usabilidade","Confiabilidade"],
answer:0,
exp:"Manutenibilidade reúne Modularidade, Reusabilidade, Analisabilidade, Modificabilidade e Testabilidade. Software testável é mais fácil de manter."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"mc",
text:"[1,0] Segundo a ISO/IEC 25010, 'Confidencialidade', 'Integridade' e 'Autenticidade' são subcaracterísticas de qual característica de qualidade?",
options:["Segurança","Confiabilidade","Compatibilidade","Adequação Funcional"],
answer:0,
exp:"Segurança reúne Confidencialidade, Integridade, Não-repúdio, Responsabilização e Autenticidade — proteção das informações e do acesso."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"hard",type:"mc",
text:"[1,0] Um sistema precisa funcionar bem ao compartilhar o mesmo servidor com outras aplicações, sem degradar nem ser degradado por elas. Qual subcaracterística da ISO/IEC 25010 está em foco?",
options:["Coexistência (Compatibilidade)","Interoperabilidade (Compatibilidade)","Maturidade (Confiabilidade)","Modularidade (Manutenibilidade)"],
answer:0,
exp:"Coexistência = operar eficientemente compartilhando ambiente/recursos comuns com outros produtos, sem impacto negativo. Interoperabilidade seria TROCAR informações com outros sistemas."},

{prova:"pf",topic:"Padrão ISO/IEC 25010",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre as características de qualidade da ISO/IEC 25010.",
statements:[
{text:"Coexistência e Interoperabilidade são subcaracterísticas da Compatibilidade.",answer:true},
{text:"Testabilidade é uma subcaracterística da Manutenibilidade.",answer:true},
{text:"Tolerância a falhas pertence à característica Usabilidade.",answer:false},
{text:"Confidencialidade e Integridade pertencem à característica Segurança.",answer:true}
],
exp:"Tolerância a falhas pertence à Confiabilidade, não à Usabilidade. As demais associações estão corretas conforme a ISO/IEC 25010."},

{prova:"pf",topic:"Qualidade de Software",diff:"easy",type:"mc",
text:"[1,0] O teste de resiliência, que avalia a capacidade do sistema de se recuperar de falhas e continuar operando, é classificado como:",
options:["Teste não funcional","Teste funcional","Teste de unidade","Teste de aceitação"],
answer:0,
exp:"Resiliência diz respeito a COMO o sistema se comporta sob falhas (qualidade de recuperação), não a regras de negócio — portanto é teste NÃO funcional."},

{prova:"pf",topic:"Qualidade de Software",diff:"medium",type:"mc",
text:"[1,0] 'Um teste bem-sucedido é aquele que revela a presença de um defeito ainda não descoberto.' Essa visão sobre o objetivo dos testes é mais associada a qual ideia?",
options:["O teste prova que o software está livre de defeitos","O teste busca refutar a correção do software, expondo defeitos","O teste substitui a depuração","O teste garante 100% de cobertura"],
answer:1,
exp:"Visão de Myers: testar é tentar refutar a correção, e um teste 'de sucesso' é o que encontra defeito. Testes não provam ausência de defeitos."},

{prova:"pf",topic:"Defeitos de Software",diff:"medium",type:"mc",
text:"[1,0] A respeito da terminologia de defeitos, qual sequência causal está CORRETA?",
options:["Defeito (no código) → falha (execução incorreta) → erro (estado interno inválido)","Engano humano → defeito (no código) → erro (estado interno inválido) → falha (comportamento observável incorreto)","Falha → erro → defeito → engano","Erro → falha → engano → defeito"],
answer:1,
exp:"Engano (mistake) do humano introduz um defeito (fault/bug) no código; ao executar, ele pode gerar um erro (estado interno incorreto), que pode se manifestar como falha (failure) observável."},

{prova:"pf",topic:"Defeitos de Software",diff:"hard",type:"mc",
text:"[1,0] Um defeito existe no código de tratamento de uma exceção raríssima, que nunca é acionada em produção. Sobre esse defeito, é CORRETO afirmar:",
options:["Todo defeito sempre gera uma falha observável","Um defeito pode existir sem nunca produzir uma falha, caso o trecho defeituoso não seja exercido","Defeito e falha são sinônimos","Como não há falha, não existe defeito"],
answer:1,
exp:"Defeito é a causa potencial; falha é a manifestação. Se o caminho defeituoso nunca for executado com os dados que disparam o problema, o defeito existe mas não vira falha."},

{prova:"pf",topic:"Qualidade de Software",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre fundamentos de qualidade e teste.",
statements:[
{text:"O teste de resiliência é um tipo de teste não funcional.",answer:true},
{text:"Testes exaustivos (testar todas as entradas possíveis) são, em geral, viáveis e recomendados.",answer:false},
{text:"A ausência de falhas em uma bateria de testes prova a ausência de defeitos no software.",answer:false},
{text:"O objetivo de testar é revelar defeitos, não demonstrar que o software está correto.",answer:true}
],
exp:"Teste exaustivo é inviável (exceto casos triviais). Ausência de falhas não prova ausência de defeitos. Testar busca refutar a correção, revelando defeitos."},

// ── Tema 3: Depuração e Regressão ──
{prova:"pf",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] Qual a diferença fundamental entre TESTE e DEPURAÇÃO (debugging)?",
options:["São sinônimos","O teste revela a existência de falhas; a depuração localiza e corrige a causa (defeito)","A depuração revela falhas; o teste corrige o código","Ambos servem apenas para medir desempenho"],
answer:1,
exp:"Teste evidencia que algo está errado (falha). Depuração investiga a causa-raiz (defeito) e a corrige. São atividades complementares, mas distintas."},

{prova:"pf",topic:"Depuração",diff:"medium",type:"mc",
text:"[1,0] São métodos clássicos de depuração, EXCETO:",
options:["Força bruta","Indução","Dedução","Teste de aceitação"],
answer:3,
exp:"Métodos de depuração incluem força bruta, indução, dedução e backtracking (eliminação de causas). Teste de aceitação é um NÍVEL de teste, não um método de depuração."},

{prova:"pf",topic:"Depuração",diff:"medium",type:"mc",
text:"[1,0] Um desenvolvedor parte de um sintoma observado e, percorrendo o código de trás para frente até a origem do defeito, localiza a causa. Qual método de depuração ele utilizou?",
options:["Backtracking (rastreamento reverso)","Força bruta","Indução pura","Análise de despejo de memória"],
answer:0,
exp:"Backtracking percorre o fluxo do ponto da falha para trás até encontrar onde o estado se tornou incorreto. Eficaz em programas pequenos."},

{prova:"pf",topic:"Depuração",diff:"easy",type:"mc",
text:"[1,0] Após corrigir o defeito que causava uma falha, por que é necessário executar testes de regressão?",
options:["Para medir o tempo de resposta do sistema","Para garantir que a correção não introduziu novos defeitos nem quebrou funcionalidades já existentes","Para substituir a documentação do sistema","Porque a depuração ainda não terminou"],
answer:1,
exp:"Uma correção pode introduzir efeitos colaterais. O teste de regressão reexecuta os casos existentes para confirmar que nada que funcionava foi quebrado."},

{prova:"pf",topic:"Depuração",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre teste, depuração e regressão.",
statements:[
{text:"A análise de despejo de memória (memory dump) é um método de depuração por força bruta.",answer:true},
{text:"Após corrigir um defeito, deve-se executar testes de regressão antes de prosseguir.",answer:true},
{text:"Depuração e teste são exatamente a mesma atividade.",answer:false},
{text:"O backtracking percorre o código a partir da falha em direção à sua origem.",answer:true}
],
exp:"Memory dump = força bruta. Regressão valida correções. Teste ≠ depuração (revelar vs. localizar/corrigir). Backtracking caminha do sintoma à causa."},

{prova:"pf",topic:"Depuração",diff:"hard",type:"mc",
text:"[1,0] Em um processo conjunto de teste e depuração, qual é a ordem CORRETA das atividades após uma falha ser observada?",
options:["Corrigir → encontrar a causa → executar regressão → continuar testando","Encontrar a causa (depurar) → corrigir o defeito → executar testes de regressão → continuar o processo de teste","Executar regressão → encontrar a causa → encerrar","Continuar testando → corrigir → ignorar regressão"],
answer:1,
exp:"Fluxo correto: a falha aciona a depuração (achar a causa), corrige-se o defeito, executa-se a regressão para validar e só então o processo de teste prossegue."},

// ── Tema 4: JUnit parametrizado, asserções, exceções ──
{prova:"pf",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Qual par de anotações permite executar o MESMO método de teste várias vezes, uma para cada valor de uma lista de literais (argumentos simples)?",
options:["@ParameterizedTest + @ValueSource","@Test + @BeforeEach","@RepeatedTest + @MethodSource","@Test + @CsvSource"],
answer:0,
exp:"@ParameterizedTest marca o método como parametrizado; @ValueSource(strings/ints/...) fornece a lista de argumentos simples. @Test puro executa uma única vez."},

{prova:"pf",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Em um @ParameterizedTest que precisa receber várias Strings literais como entrada, qual fonte de dados é a mais adequada?",
options:["@ValueSource(strings = {...})","@MethodSource sem método","@EnumSource","@NullSource"],
answer:0,
exp:"@ValueSource(strings = {\"a\", \"b\"}) injeta cada literal como um argumento simples — exatamente o caso de 'argumentos simples' pedido em prova."},

{prova:"pf",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Qual asserção do JUnit 5 deve ser usada para verificar que um método LANÇA uma exceção do tipo DataFormatException?",
options:["assertThrows(DataFormatException.class, () -> m())","assertDoesNotThrow(() -> m())","assertEquals(DataFormatException.class, m())","assertNull(() -> m())"],
answer:0,
exp:"assertThrows(Classe.class, () -> { chamada; }) falha se a exceção esperada não for lançada. É a forma idiomática de testar exceções no JUnit 5."},

{prova:"pf",topic:"Asserções",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre asserções de exceção no JUnit 5.",
statements:[
{text:"assertThrows verifica que o bloco lança a exceção esperada.",answer:true},
{text:"assertDoesNotThrow verifica que o bloco NÃO lança nenhuma exceção.",answer:true},
{text:"Para validar uma entrada VÁLIDA, usa-se assertThrows.",answer:false},
{text:"assertThrows e assertDoesNotThrow recebem a chamada dentro de uma expressão lambda.",answer:true}
],
exp:"Entrada válida → assertDoesNotThrow; entrada inválida → assertThrows. Ambas recebem a chamada como lambda (() -> ...)."},

{prova:"pf",topic:"Anotações JUnit",diff:"medium",type:"mc",
text:"[1,0] Uma especificação exige que, antes da execução de TODOS os testes, seja instanciado UM único objeto compartilhado por todos eles, sem recriá-lo a cada teste. Qual anotação atende a esse requisito?",
options:["@BeforeAll (em método estático)","@BeforeEach","@Test","@AfterAll"],
answer:0,
exp:"@BeforeAll executa UMA vez antes de toda a classe e deve estar em método estático — ideal para um objeto único compartilhado. @BeforeEach recriaria o objeto a cada teste."},

{prova:"pf",topic:"Anotações JUnit",diff:"hard",type:"mc",
text:"[1,0] Um desenvolvedor anotou com @BeforeAll um método NÃO estático para instanciar um recurso compartilhado. O que acontece?",
options:["Funciona normalmente","O JUnit 5 lança erro: métodos @BeforeAll devem ser estáticos (salvo ciclo de vida PER_CLASS)","O método passa a se comportar como @BeforeEach","O recurso é instanciado duas vezes"],
answer:1,
exp:"Por padrão (ciclo PER_METHOD), @BeforeAll/@AfterAll exigem método estático. Sem static, o JUnit lança erro — a menos que se use @TestInstance(PER_CLASS)."},

{prova:"pf",topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] Considere a classe FormatoValidador com o método validarEquacaoLinear(String eq) que lança DataFormatException para equações inválidas. Implemente um teste parametrizado JUnit 5 chamado testValidarEquacaoInvalida que, para cada equação INVÁLIDA fornecida por argumentos simples (\"x+23.2=0\", \"5)x+6.23=0\", \"0.5x+-0.23=0\", \"(1.2)x+100\"), verifica que DataFormatException é lançada. Considere o atributo 'fv' já inicializado.",
answer:`@ParameterizedTest
@ValueSource(strings = {"x+23.2=0", "5)x+6.23=0", "0.5x+-0.23=0", "(1.2)x+100"})
public void testValidarEquacaoInvalida(String eq) {
    assertThrows(DataFormatException.class, () -> fv.validarEquacaoLinear(eq));
}`,
keywords:["@ParameterizedTest","@ValueSource","testValidarEquacaoInvalida","assertThrows","DataFormatException","validarEquacaoLinear"],
exp:"@ValueSource injeta cada equação inválida; assertThrows(DataFormatException.class, () -> ...) confirma que a validação rejeita o formato lançando a exceção."},

{prova:"pf",topic:"Anotações JUnit",diff:"medium",type:"code",
text:"[2,0] Considere a classe FormatoValidador, construída como new FormatoValidador(new ValidadorTextual()). Implemente o método de inicialização que, ANTES DE TODOS os testes, instancia UM único objeto 'fv' compartilhado por todos os testes (não deve ser recriado a cada teste).",
answer:`private static FormatoValidador fv;

@BeforeAll
public static void setUpAll() {
    fv = new FormatoValidador(new ValidadorTextual());
}`,
keywords:["static","@BeforeAll","fv","FormatoValidador","ValidadorTextual"],
exp:"@BeforeAll em método ESTÁTICO instancia o objeto uma única vez para toda a classe. O atributo também deve ser estático para ser acessível no método estático."},

{prova:"pf",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[3,0] Considere a classe Calculadora com o método ehPar(int n) que lança IllegalArgumentException para valores negativos. Desenvolva um teste parametrizado JUnit 5 chamado testEhParNegativo que, para cada valor inválido fornecido por argumentos simples (-1, -10, -100), verifica que IllegalArgumentException é lançada. Considere o atributo 'calc' já inicializado.",
answer:`@ParameterizedTest
@ValueSource(ints = {-1, -10, -100})
public void testEhParNegativo(int n) {
    assertThrows(IllegalArgumentException.class, () -> calc.ehPar(n));
}`,
keywords:["@ParameterizedTest","@ValueSource","ints","testEhParNegativo","assertThrows","IllegalArgumentException"],
exp:"@ValueSource(ints = {...}) fornece inteiros como argumentos simples; assertThrows confirma que cada valor negativo dispara IllegalArgumentException."},

{prova:"pf",topic:"Análise de Código",diff:"hard",type:"mc",
text:"[1,0] No teste parametrizado abaixo, por que ele FALHA na compilação?\n\n@ParameterizedTest\n@ValueSource(strings = {\"a\", \"b\"})\npublic void testX() {\n    assertNotNull(\"a\");\n}",
options:["Falta a anotação @Test","O método parametrizado não declara o parâmetro que recebe cada valor (ex.: String s)","@ValueSource não aceita strings","assertNotNull não existe"],
answer:1,
exp:"Um @ParameterizedTest com @ValueSource(strings=...) deve receber o valor como parâmetro: public void testX(String s). Sem o parâmetro, não há onde injetar cada literal."},

// ── Tema 5: Katalon ──
{prova:"pf",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um script Katalon, qual comando preenche o campo de entrada 'Object InpNumero' com o valor 829?",
options:["WebUI.setText(findTestObject('Object InpNumero'), '829')","WebUI.verifyText(findTestObject('Object InpNumero'), '829')","WebUI.click(findTestObject('Object InpNumero'))","WebUI.findText('Object InpNumero', 829)"],
answer:0,
exp:"WebUI.setText(findTestObject('nome'), 'valor') preenche campos. verifyText VERIFICA, não preenche; findText não é usado para inserir dados."},

{prova:"pf",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] No verificador de números primos, após preencher o número deseja-se conferir se o campo de saída 'Object InpEPrimo' contém 'Sim'. Qual abordagem é adequada em Katalon?",
options:["WebUI.verifyElementAttributeValue(findTestObject('Object InpEPrimo'), 'value', 'Sim', 0)","WebUI.setText(findTestObject('Object InpEPrimo'), 'Sim')","WebUI.click(findTestObject('Object InpEPrimo'))","WebUI.openBrowser('Sim')"],
answer:0,
exp:"Para conferir o conteúdo de um campo (input), usa-se uma verificação — verifyElementAttributeValue confere o atributo 'value'. setText preencheria o campo (errado: queremos verificar, não escrever)."},

{prova:"pf",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Qual anotação Katalon executa um método de finalização SOMENTE quando o teste é bem-sucedido?",
options:["@TearDown","@TearDownIfError","@Setup","@BeforeEach"],
answer:0,
exp:"@TearDown executa apenas após SUCESSO; @TearDownIfError apenas após FALHA. Inverter os dois é o erro mais cobrado em prova."},

{prova:"pf",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] A especificação diz: 'o navegador deve ser fechado apenas se o teste tiver sido malsucedido'. Um aluno usou @TearDown para o closeBrowser(). Qual é o erro?",
options:["Nenhum, está correto","@TearDown fecha apenas em SUCESSO; o correto para fechar em falha é @TearDownIfError","closeBrowser() não existe","Deveria usar @Setup"],
answer:1,
exp:"'Fechar apenas se malsucedido' = fechar em FALHA → @TearDownIfError. @TearDown executaria só em sucesso, exatamente o oposto da especificação."},

{prova:"pf",topic:"Katalon",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre o script Katalon do verificador de números primos.",
statements:[
{text:"WebUI.openBrowser('http://localhost/numerosprimos.html') deve ficar no método @Setup.",answer:true},
{text:"Para fechar o navegador apenas em caso de falha, usa-se @TearDownIfError.",answer:true},
{text:"WebUI.setText é usado para VERIFICAR o resultado exibido na tela.",answer:false},
{text:"Usar um laço sobre a lista de dados torna o teste escalável para muitos itens.",answer:true}
],
exp:"setText PREENCHE; a verificação é feita com verifyText/verifyElementAttributeValue. As demais afirmações estão corretas."},

{prova:"pf",topic:"Katalon",diff:"easy",type:"code",
text:"[1,0] Implemente o método @Setup de um script Katalon que abre o navegador no endereço http://localhost/numerosprimos.html.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://localhost/numerosprimos.html')
}`,
keywords:["@Setup","openBrowser","numerosprimos"],
exp:"@Setup roda antes dos testes; WebUI.openBrowser('url') abre e navega para a URL informada."},

{prova:"pf",topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] Considere o verificador de primos com o campo de entrada 'Object InpNumero' e o de saída 'Object InpEPrimo'. Implemente os comandos Katalon que: preenchem o número 829 e verificam que a saída contém 'Sim'.",
answer:`WebUI.setText(findTestObject('Object InpNumero'), '829')
WebUI.verifyElementAttributeValue(findTestObject('Object InpEPrimo'), 'value', 'Sim', 0)`,
keywords:["setText","InpNumero","829","verify","InpEPrimo","Sim"],
exp:"Sequência: preencher a entrada (setText) e verificar a saída (verifyElementAttributeValue no atributo 'value'). A verificação sempre vem após preencher."},

{prova:"pf",topic:"Katalon",diff:"hard",type:"code",
text:"[3,0] Considere um verificador de números pares cuja interface possui o campo de entrada 'Object InpNum' e a saída 'Object InpEhPar'. Desenvolva um script de caso de teste em Katalon que: abra o navegador em http://localhost/pares.html; para cada item da tabela atribua o número e verifique a saída — 10→Sim, 7→Não, 0→Sim; e, ao término, feche o navegador APENAS se o teste tiver sido malsucedido. Considere que o número de itens pode ser muito maior.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://localhost/pares.html')
}

@TearDownIfError
def tearDown() {
    WebUI.closeBrowser()
}

def dados = [
    [10, 'Sim'],
    [7,  'Não'],
    [0,  'Sim']
]

for (linha in dados) {
    WebUI.setText(findTestObject('Object InpNum'), String.valueOf(linha[0]))
    WebUI.verifyElementAttributeValue(findTestObject('Object InpEhPar'), 'value', linha[1], 0)
}`,
keywords:["@Setup","openBrowser","pares","@TearDownIfError","closeBrowser","for","setText","InpNum","verify","InpEhPar"],
exp:"Mesma estrutura do verificador de primos: @Setup abre; @TearDownIfError fecha só em falha; laço escalável sobre os dados; setText na entrada e verifyElementAttributeValue na saída."},

{prova:"pf",topic:"Katalon",diff:"hard",type:"mc",
text:"[1,0] No script Katalon do verificador de primos, por que é recomendado iterar sobre uma LISTA de dados em um laço, em vez de repetir manualmente setText/verify para cada número?",
options:["Porque o Katalon proíbe chamadas repetidas de setText","Porque torna o teste escalável: a especificação avisa que o número de itens pode ser muito maior que o apresentado","Porque laços executam mais rápido que chamadas diretas","Porque sem laço o navegador não abre"],
answer:1,
exp:"A especificação alerta que o número de itens pode ser muito maior. Um laço sobre a lista de dados evita repetição e escala para qualquer quantidade de casos."}


// ══════════════════ P2 — PROVA 2 CORRIGIDA (Conversor de Temperatura) ══════════════════
// Questões baseadas na P2 2026/1 (Prof. Octavio Vieira de Aguiar) e seu gabarito

// ── @MethodSource: assinatura do método provedor ──
,{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um teste parametrizado JUnit 5, qual anotação indica que os argumentos serão fornecidos por um MÉTODO provedor (provimento de argumentos)?",
options:["@MethodSource","@ValueSource","@CsvSource","@EnumSource"],
answer:0,
exp:"@MethodSource referencia um método estático que retorna os argumentos (Stream, Collection, etc.). @ValueSource fornece literais simples; @CsvSource, linhas CSV inline."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Considere um método de teste parametrizado cuja assinatura é public void testAtribuirNome(String nome), que recebe via @MethodSource os valores 'Maria', 'Elso' e 'Manel'. Qual é a assinatura MAIS correta para o método de provimento de argumentos?",
options:["public static Stream<String> testAtribuirNomeArgs()","public static Stream<String[]> testAtribuirNomeArgs()","public static Arguments<String> testAtribuirNomeArgs()","public static Arguments<String[]> testAtribuirNomeArgs()"],
answer:0,
exp:"Como o teste recebe UM único parâmetro String, o provedor deve retornar Stream<String> (cada elemento é um argumento). Stream<String[]> serviria para múltiplos parâmetros; Arguments<...> não é um tipo de retorno válido. O método deve ser static."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Um método de teste parametrizado recebe MÚLTIPLOS parâmetros de tipos diferentes (ex.: Temperatura, Unidade, Temperatura). Como o método provedor de @MethodSource deve fornecer cada caso?",
options:["Retornando Stream<Arguments>, em que cada caso é montado com Arguments.of(...)","Retornando Stream<String> com os valores concatenados","Retornando um único Arguments sem Stream","Usando @ValueSource em vez de @MethodSource"],
answer:0,
exp:"Para múltiplos parâmetros, o provedor retorna Stream<Arguments> e cada caso é Arguments.of(arg1, arg2, arg3). O JUnit injeta os elementos de Arguments nos parâmetros do teste, na ordem."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"mc",
text:"[1,0] No JUnit 5, em quais condições é possível usar @MethodSource SEM informar o nome do método provedor entre parênteses?",
options:["Quando o método provedor tem o MESMO nome do método de teste","Nunca — o nome é sempre obrigatório","Apenas quando o provedor retorna @ValueSource","Apenas quando o teste não recebe parâmetros"],
answer:0,
exp:"Por convenção, se o método provedor tiver o mesmo nome do método de teste, pode-se usar apenas @MethodSource (sem o argumento). Foi o caso do gabarito: testConverter() provê e testConverter(...) consome."},

{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Sobre o método provedor usado com @MethodSource, é CORRETO afirmar que ele deve ser, por padrão:",
options:["static","private e de instância","final","abstract"],
answer:0,
exp:"Por padrão (ciclo PER_METHOD), o método provedor de @MethodSource deve ser estático, pois é chamado antes de qualquer instância de teste. Com @TestInstance(PER_CLASS) ele pode ser de instância."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre @MethodSource e provimento de argumentos no JUnit 5.",
statements:[
{text:"O método provedor de @MethodSource deve ser, por padrão, estático.",answer:true},
{text:"Para um teste com um único parâmetro String, o provedor pode retornar Stream<String>.",answer:true},
{text:"Para múltiplos parâmetros, monta-se cada caso com Arguments.of(...).",answer:true},
{text:"@MethodSource só funciona se o teste não receber nenhum parâmetro.",answer:false}
],
exp:"@MethodSource serve justamente para injetar parâmetros: Stream<String> para um argumento, Stream<Arguments> (com Arguments.of) para vários. O provedor é estático por padrão."},

// ── @CsvSource × @CsvFileSource ──
{prova:"p2",topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Para fornecer dados a um teste parametrizado a partir de um ARQUIVO CSV externo (carregado de um arquivo), qual anotação deve ser utilizada?",
options:["@CsvFileSource","@CsvSource","@ValueSource","@MethodSource"],
answer:0,
exp:"@CsvFileSource lê os dados de um arquivo .csv (atributo resources/files). @CsvSource recebe as linhas CSV inline, diretamente no código."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre @CsvSource e @CsvFileSource?",
options:["@CsvSource recebe as linhas CSV inline no código; @CsvFileSource lê as linhas de um arquivo .csv externo","São sinônimos","@CsvSource só aceita inteiros; @CsvFileSource só aceita Strings","@CsvFileSource é exclusivo do Katalon"],
answer:0,
exp:"@CsvSource({\"1, um\", \"2, dois\"}) traz os dados embutidos. @CsvFileSource(resources = \"/dados.csv\") carrega de arquivo — útil para grandes volumes de dados."},

{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre as fontes de dados de testes parametrizados.",
statements:[
{text:"A passagem de parâmetros por argumentos CSV carregados de ARQUIVOS é feita com @CsvSource.",answer:false},
{text:"@ValueSource fornece uma lista de literais simples (um argumento por execução).",answer:true},
{text:"@CsvFileSource lê os dados de um arquivo .csv externo.",answer:true},
{text:"@MethodSource permite fornecer objetos complexos por meio de um método provedor.",answer:true}
],
exp:"CSV de ARQUIVO usa @CsvFileSource (não @CsvSource, que é inline). Esse é exatamente o item A da P2, cujo gabarito é F."},

// ── Asserções: assertThrows / assertDoesNotThrow / tolerância ──
{prova:"p2",topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] No JUnit 5, quais parâmetros o método assertThrows deve receber?",
options:["Uma classe de exceção e uma função anônima (lambda) com a chamada","Apenas a função anônima (lambda)","Apenas a classe de exceção","O valor esperado e o valor obtido"],
answer:0,
exp:"assertThrows(MinhaExcecao.class, () -> { chamada; }) — precisa da CLASSE da exceção esperada e do bloco lambda. Se a exceção não for lançada, o teste falha."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Diferente de assertThrows, o método assertDoesNotThrow:",
options:["Não precisa receber a classe de exceção — apenas a função anônima (lambda)","Precisa receber duas classes de exceção","Só funciona com exceções verificadas (checked)","Substitui o @Test"],
answer:0,
exp:"assertDoesNotThrow(() -> { chamada; }) verifica que NENHUMA exceção é lançada, logo não há classe de exceção a informar — basta a lambda. assertThrows é que exige a classe esperada."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Ao verificar que uma conversão de temperatura (double) coincide com o valor esperado admitindo uma tolerância de 1 unidade, qual chamada é a correta no JUnit 5?",
options:["assertEquals(esperado, obtido, 1)","assertEquals(esperado, obtido)","assertSame(esperado, obtido)","assertTrue(esperado == obtido)"],
answer:0,
exp:"Para doubles, usa-se assertEquals(esperado, obtido, delta), onde delta é a tolerância (aqui, 1). Comparar doubles sem tolerância (== ou assertEquals de 2 args) é frágil devido a arredondamentos."},

{prova:"p2",topic:"Asserções",diff:"hard",type:"mc",
text:"[1,0] Por que comparar dois valores double com assertEquals(esperado, obtido) (sem tolerância) é considerado uma má prática?",
options:["Porque arredondamentos de ponto flutuante podem fazer valores 'iguais' diferirem em casas decimais, falhando o teste","Porque assertEquals não aceita double","Porque double não pode ser testado","Porque o correto seria assertSame"],
answer:0,
exp:"Operações com double acumulam erros de ponto flutuante; 0.1+0.2 != 0.3 exatamente. Por isso usa-se a versão com delta (tolerância): assertEquals(esperado, obtido, delta)."},

{prova:"p2",topic:"Asserções",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre asserções no JUnit 5.",
statements:[
{text:"assertThrows deve receber, ao menos, uma classe de exceção e uma função anônima.",answer:true},
{text:"assertDoesNotThrow não precisa receber a classe de exceção.",answer:true},
{text:"Para comparar doubles, recomenda-se assertEquals com um parâmetro de tolerância (delta).",answer:true},
{text:"assertSame compara o conteúdo (equals) de dois objetos.",answer:false}
],
exp:"assertThrows = classe + lambda; assertDoesNotThrow = só lambda; doubles → delta. assertSame compara REFERÊNCIA (==), não conteúdo (equals)."},

// ── Katalon: @Setup × @BeforeAll, selectOptionByValue, verifyElementAttributeValue, @TearDownIfPassed ──
{prova:"p2",topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um script de teste em Katalon, qual anotação é usada para um método executado antes do início do teste (inicialização)?",
options:["@Setup","@BeforeAll","@BeforeEach","@Before"],
answer:0,
exp:"No Katalon usa-se @Setup (e @TearDown ao final). @BeforeAll/@BeforeEach são anotações do JUnit, não do Katalon — confundi-las é a pegadinha do item B da P2."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Uma afirmação de prova diz: 'Em um script Katalon, um método anotado com @BeforeAll será executado uma única vez antes do início do teste.' Por que essa afirmação é FALSA?",
options:["Porque @BeforeAll é uma anotação do JUnit; no Katalon a inicialização usa @Setup","Porque @BeforeAll executa após o teste","Porque o Katalon não permite inicialização","Porque @BeforeAll executa a cada item de dados"],
answer:0,
exp:"@BeforeAll pertence ao JUnit. No Katalon, o método de inicialização é anotado com @Setup. Por isso o item B da P2 tem gabarito F."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Em um formulário web, é preciso escolher uma opção de uma caixa de seleção (dropdown) pelo seu valor. Qual comando Katalon faz isso?",
options:["WebUI.selectOptionByValue(findTestObject('Object Unidade'), 'C', false)","WebUI.setText(findTestObject('Object Unidade'), 'C')","WebUI.click(findTestObject('Object Unidade'))","WebUI.verifyOption(findTestObject('Object Unidade'), 'C')"],
answer:0,
exp:"WebUI.selectOptionByValue(objeto, valor, false) seleciona a <option> cujo value corresponde. setText serve para campos de texto, não para <select>."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Para verificar se um campo de entrada (input) exibe um valor esperado em seu atributo 'value', qual comando Katalon é adequado?",
options:["WebUI.verifyElementAttributeValue(findTestObject('Object Celsius'), 'value', '23.30', 0)","WebUI.setText(findTestObject('Object Celsius'), '23.30')","WebUI.click(findTestObject('Object Celsius'))","WebUI.findText('Object Celsius', '23.30')"],
answer:0,
exp:"verifyElementAttributeValue(objeto, 'value', esperado, timeout) confere o atributo 'value' do elemento. setText preencheria o campo (errado: queremos verificar a saída)."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] A especificação exige que o navegador seja fechado APENAS SE o teste tiver sido bem-sucedido (passou). Qual anotação Katalon deve conter o WebUI.closeBrowser()?",
options:["@TearDownIfPassed","@TearDownIfError","@TearDownIfFailed","@Setup"],
answer:0,
exp:"@TearDownIfPassed executa o bloco SOMENTE quando o teste passa — exatamente o pedido pela P2. @TearDownIfError/@TearDownIfFailed executariam em falha; @TearDown (sem condição) executaria sempre."},

{prova:"p2",topic:"Katalon",diff:"hard",type:"mc",
text:"[1,0] No Katalon, qual a diferença entre @TearDown, @TearDownIfPassed e @TearDownIfError?",
options:["@TearDown sempre executa ao final; @TearDownIfPassed só se passou; @TearDownIfError só se houve erro","Todos executam sempre, independentemente do resultado","@TearDown só executa se falhar; os demais nunca executam","@TearDownIfPassed executa antes do teste"],
answer:0,
exp:"@TearDown roda sempre; @TearDownIfPassed apenas em sucesso; @TearDownIfError (e @TearDownIfFailed) apenas em falha. Escolher a anotação certa conforme a condição de fechamento é cobrado em prova."},

{prova:"p2",topic:"Katalon",diff:"medium",type:"tf",
text:"[1,6] Assinale V ou F sobre o script Katalon do conversor de temperatura.",
statements:[
{text:"WebUI.openBrowser('http://conversor.temperatura.html') deve ficar no método @Setup.",answer:true},
{text:"WebUI.selectOptionByValue é usado para escolher uma opção de uma caixa de seleção pelo seu valor.",answer:true},
{text:"Para fechar o navegador apenas em caso de sucesso, usa-se @TearDownIfError.",answer:false},
{text:"WebUI.verifyElementAttributeValue confere o atributo 'value' de um campo.",answer:true}
],
exp:"Fechar apenas em SUCESSO é @TearDownIfPassed (não @TearDownIfError, que é para falha). As demais afirmações estão corretas."},

// ── Código: ConversorTemperaturaTest (@MethodSource) ──
{prova:"p2",topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] Implemente o método provedor de argumentos testConverter() para um @ParameterizedTest, retornando um Stream<Arguments> com os 3 casos: (orig, destino, esperado) = (new Temperatura(22.05, Unidade.CELSIUS), Unidade.FAHRENHEIT, new Temperatura(71.69, Unidade.FAHRENHEIT)); (new Temperatura(-200.23, Unidade.FAHRENHEIT), Unidade.KELVIN, new Temperatura(144.13, Unidade.KELVIN)); (new Temperatura(9.8, Unidade.KELVIN), Unidade.CELSIUS, new Temperatura(-263.35, Unidade.CELSIUS)).",
answer:`public static Stream<Arguments> testConverter() {
    Temperatura o1 = new Temperatura(22.05, Unidade.CELSIUS);
    Temperatura o2 = new Temperatura(-200.23, Unidade.FAHRENHEIT);
    Temperatura o3 = new Temperatura(9.8, Unidade.KELVIN);
    Temperatura e1 = new Temperatura(71.69, Unidade.FAHRENHEIT);
    Temperatura e2 = new Temperatura(144.13, Unidade.KELVIN);
    Temperatura e3 = new Temperatura(-263.35, Unidade.CELSIUS);
    return Stream.of(
        Arguments.of(o1, Unidade.FAHRENHEIT, e1),
        Arguments.of(o2, Unidade.KELVIN, e2),
        Arguments.of(o3, Unidade.CELSIUS, e3)
    );
}`,
keywords:["static","Stream<Arguments>","testConverter","Arguments.of","Stream.of","Temperatura"],
exp:"O provedor é estático e retorna Stream<Arguments>; cada Arguments.of(orig, destino, esperado) vira um caso. Os parâmetros são injetados na ordem nos parâmetros do teste."},

{prova:"p2",topic:"Testes Parametrizados",diff:"hard",type:"code",
text:"[3,0] Considere as classes Temperatura (com getValor() e getUnidade()) e ConversorTemperatura (com o método estático converter(Temperatura t, Unidade destino)). Desenvolva o caso de teste JUnit 5 ConversorTemperaturaTest com um teste parametrizado testConverter que: receba (Temperatura orig, Unidade dest, Temperatura esp) de um método provedor @MethodSource; converta orig para dest; e verifique o valor (com tolerância de 1) e a unidade da temperatura convertida. Use o provedor com o mesmo nome do teste.",
answer:`class ConversorTemperaturaTest {

    public static Stream<Arguments> testConverter() {
        Temperatura o1 = new Temperatura(22.05, Unidade.CELSIUS);
        Temperatura o2 = new Temperatura(-200.23, Unidade.FAHRENHEIT);
        Temperatura o3 = new Temperatura(9.8, Unidade.KELVIN);
        Temperatura e1 = new Temperatura(71.69, Unidade.FAHRENHEIT);
        Temperatura e2 = new Temperatura(144.13, Unidade.KELVIN);
        Temperatura e3 = new Temperatura(-263.35, Unidade.CELSIUS);
        return Stream.of(
            Arguments.of(o1, Unidade.FAHRENHEIT, e1),
            Arguments.of(o2, Unidade.KELVIN, e2),
            Arguments.of(o3, Unidade.CELSIUS, e3)
        );
    }

    @ParameterizedTest
    @MethodSource
    public void testConverter(Temperatura orig, Unidade dest, Temperatura esp) {
        Temperatura convertida = ConversorTemperatura.converter(orig, dest);
        assertEquals(esp.getValor(), convertida.getValor(), 1);
        assertEquals(esp.getUnidade(), convertida.getUnidade());
    }
}`,
keywords:["ConversorTemperaturaTest","@ParameterizedTest","@MethodSource","Stream<Arguments>","Arguments.of","ConversorTemperatura.converter","assertEquals","getValor","getUnidade"],
exp:"Pontos-chave: provedor estático testConverter() com Stream<Arguments>; @MethodSource sem argumento (mesmo nome do teste); assertEquals do valor com tolerância 1 (delta) e assertEquals da unidade. Reproduz o gabarito da questão 3 da P2."},

// ── Código: Katalon conversor de temperatura ──
{prova:"p2",topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] Implemente o método @Setup de um script Katalon que abre o navegador em http://conversor.temperatura.html e o método de finalização que fecha o navegador APENAS se o teste tiver sido bem-sucedido.",
answer:`@Setup
void setUp() {
    WebUI.openBrowser('http://conversor.temperatura.html')
}

@TearDownIfPassed
void tearDown() {
    WebUI.closeBrowser()
}`,
keywords:["@Setup","openBrowser","conversor.temperatura","@TearDownIfPassed","closeBrowser"],
exp:"@Setup abre o navegador antes do teste; @TearDownIfPassed fecha SOMENTE em sucesso, conforme a especificação 'fechado apenas se bem-sucedido'."},

{prova:"p2",topic:"Katalon",diff:"hard",type:"code",
text:"[4,0] Considere o conversor de temperatura web com os elementos Object Temperatura (campo), Object Unidade (caixa de seleção), Object Celsius, Object Fahrenheit e Object Kelvin (campos de saída). Usando tipagem estática e boas práticas, desenvolva um script de caso de teste em Katalon que: abra o navegador em http://conversor.temperatura.html (no @Setup); para cada item da tabela atribua a temperatura e selecione a unidade, depois verifique os valores esperados em Celsius, Fahrenheit e Kelvin — (23.3,'C' → 23.30/73.94/296.30), (-40.2,'F' → -40.11/-40.20/232.89), (400,'K' → 127.00/260.60/400.00); e, ao término, feche o navegador apenas se o teste tiver sido bem-sucedido. Considere que o número de itens pode ser muito maior.",
answer:`@Setup
void setUp() {
    WebUI.openBrowser('http://conversor.temperatura.html')
}

TestObject inpTemp       = findTestObject('Object Temperatura')
TestObject selUnid       = findTestObject('Object Unidade')
TestObject inpCelsius    = findTestObject('Object Celsius')
TestObject inpFahrenheit = findTestObject('Object Fahrenheit')
TestObject inpKelvin     = findTestObject('Object Kelvin')

List<Tuple> dt = List.of(
    new Tuple('23.3',  'C', '23.30',  '73.94',  '296.30'),
    new Tuple('-40.2', 'F', '-40.11', '-40.20', '232.89'),
    new Tuple('400',   'K', '127.00', '260.60', '400.00')
)

for (Tuple t : dt) {
    WebUI.setText(inpTemp, t.get(0))
    WebUI.selectOptionByValue(selUnid, t.get(1), false)
    WebUI.verifyElementAttributeValue(inpCelsius,    'value', t.get(2), 0)
    WebUI.verifyElementAttributeValue(inpFahrenheit, 'value', t.get(3), 0)
    WebUI.verifyElementAttributeValue(inpKelvin,     'value', t.get(4), 0)
}

@TearDownIfPassed
void tearDown() {
    WebUI.closeBrowser()
}`,
keywords:["@Setup","openBrowser","conversor.temperatura","findTestObject","List","Tuple","for","setText","selectOptionByValue","verifyElementAttributeValue","@TearDownIfPassed","closeBrowser"],
exp:"Reproduz o gabarito da questão 4 da P2. Pontos-chave: @Setup abre; laço sobre List<Tuple> (escalável); setText na temperatura, selectOptionByValue na unidade, verifyElementAttributeValue('value',...) em cada saída; @TearDownIfPassed fecha apenas em sucesso."}


]; // fim BANK
