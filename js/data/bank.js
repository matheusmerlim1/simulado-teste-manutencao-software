// ══════════════════════════════════════════════════════
// BANCO DE QUESTÕES
// type: "mc" | "tf" | "code"
// Para "code": answer = string canônica, keywords = tokens mínimos que devem aparecer
// ══════════════════════════════════════════════════════
const BANK = [

// ══════════════════ FUNDAMENTOS ══════════════════

{topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Em um projeto de software, a equipe deseja que os testes sejam executados automaticamente a cada push no repositório. Para isso, os testes devem ser automatizados. Qual das alternativas descreve CORRETAMENTE o que são testes automatizados?",
options:["Testes realizados manualmente por operadores seguindo um roteiro fixo","Testes programados computacionalmente para execução controlada e repetível","Testes executados por um robô físico sem intervenção humana","Testes que só podem ser executados diretamente no ambiente de produção"],
answer:1,
exp:"Testes automatizados são programados — isso permite execução rápida, repetível a qualquer momento e integração com pipelines CI/CD, como o descrito no enunciado."},

{topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Uma equipe está escolhendo um framework para escrever e executar testes unitários em Java. Qual das ferramentas abaixo atende a essa necessidade?",
options:["Git","Maven","Docker","JUnit"],
answer:3,
exp:"JUnit é um framework para testes unitários em Java. Maven é ferramenta de build; Git é controle de versão; Docker é plataforma de containers."},

{topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Por convenção, como deve ser nomeada a classe de testes JUnit responsável por testar a classe Calculadora?",
options:["CalculadoraSpec","CalculadoraCheck","CalculadoraTest","CalculadoraSuite"],
answer:2,
exp:"Convenção JUnit: sufixo 'Test'. Assim: CalculadoraTest. Isso facilita identificação e integração com ferramentas de build como Maven Surefire."},

{topic:"Fundamentos",diff:"easy",type:"mc",
text:"[1,0] Uma equipe deseja automatizar todos os testes de seu sistema. Qual tipo de teste NÃO pode ser completamente automatizado?",
options:["Teste de regressão","Teste unitário","Teste de usabilidade","Teste de integração"],
answer:2,
exp:"Testes de usabilidade e acessibilidade exigem julgamento humano subjetivo e não podem ser completamente automatizados."},

{topic:"Fundamentos",diff:"medium",type:"mc",
text:"[1,0] Um desenvolvedor afirma que, após automatizar todos os testes do sistema, qualquer bug poderá ser detectado. Qual é a LIMITAÇÃO dessa afirmação?",
options:["Testes automatizados são mais lentos que os manuais","Testes automatizados verificam apenas o que foi explicitamente programado — bugs fora do escopo passam despercebidos","Testes automatizados não funcionam em pipelines CI/CD","Testes automatizados não são confiáveis para regressão"],
answer:1,
exp:"Um teste que valida o campo 'nome' não detecta bug no campo 'email'. Testes automatizados são precisos, mas limitados ao que foi codificado."},

{topic:"Fundamentos",diff:"medium",type:"mc",
text:"[1,0] Ao estruturar os testes JUnit de um sistema, um desenvolvedor criou uma única classe chamada TodosOsTestesTest para testar todas as classes da aplicação. Qual afirmação sobre essa abordagem está CORRETA?",
options:["É a abordagem recomendada — facilita a execução conjunta","Viola a convenção — cada classe de teste deve testar uma única classe da aplicação","É obrigatório que exista apenas uma classe de testes por módulo","Classes de testes devem estender alguma classe base do JUnit"],
answer:1,
exp:"Convenção: uma classe de teste por classe da aplicação. Ex: PedidoServiceTest → testa só PedidoService. Isso facilita manutenção e isolamento de falhas."},

{topic:"Fundamentos",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação à automação de testes.",
statements:[
{text:"Testes automatizados facilitam a execução de testes de regressão após refatorações.",answer:true},
{text:"Todo tipo de teste, incluindo testes de usabilidade, pode ser completamente automatizado.",answer:false},
{text:"O JUnit faz parte do conjunto de frameworks xUnit, assim como NUnit (.NET) e pytest (Python).",answer:true},
{text:"A ordem de execução dos métodos @Test no JUnit 5 é determinística, seguindo a ordem de declaração na classe.",answer:false}
],
exp:"Usabilidade exige avaliação humana — não pode ser automatizada. A ordem dos @Test é aleatória no JUnit 5, por isso cada teste deve ser independente."},

{topic:"Fundamentos",diff:"hard",type:"mc",
text:"[1,0] Considere o método de teste abaixo. Qual boa prática está sendo violada?\n\n@Test\npublic void testSomarEMultiplicar() {\n    assertEquals(5, calc.somar(2, 3));\n    assertEquals(6, calc.multiplicar(2, 3));\n}",
options:["O método não utiliza @BeforeEach para inicializar calc","Um único @Test está verificando mais de um comportamento — deveriam ser dois métodos separados","assertEquals não pode ser utilizado com valores inteiros","O método deveria ser declarado como estático"],
answer:1,
exp:"Um @Test deve verificar apenas UM comportamento. Misturar somar e multiplicar dificulta isolar falhas. O correto seria ter testSomar() e testMultiplicar() separados."},

{topic:"Fundamentos",diff:"hard",type:"mc",
text:"[1,0] Em um determinado projeto JUnit 5, o teste testB depende de uma variável inicializada pelo teste testA. Durante a execução, testB falha inesperadamente. Qual é a causa mais provável?",
options:["Um bug na JVM que executa os testes","A ordem de execução dos @Test é aleatória — testB pode ter executado antes de testA","O @BeforeEach não é chamado quando testes dependem entre si","O JUnit descarta a JVM inteira entre cada @Test"],
answer:1,
exp:"A ordem dos @Test é aleatória no JUnit 5. Se B depende do estado de A e A rodar depois, o resultado é imprevisível. Use @BeforeEach para reinicializar estado antes de cada teste."},

{topic:"Fundamentos",diff:"easy",type:"code",
text:"[1,0] De acordo com as convenções do JUnit 5, desenvolva a declaração (apenas o cabeçalho) da classe de testes responsável por testar a classe Calculadora.",
answer:`public class CalculadoraTest {
}`,
keywords:["CalculadoraTest"],
exp:"Convenção: sufixo 'Test'. A classe pode ficar vazia — o que importa é a nomenclatura correta."},

{topic:"Fundamentos",diff:"medium",type:"code",
text:"[2,0] Considere que a classe CalculadoraTest possui um atributo privado 'calc' do tipo Calculadora. Implemente o método de inicialização que deve ser executado antes de cada método de teste, inicializando 'calc' com new Calculadora().",
answer:`@BeforeEach
public void setUp() {
    calc = new Calculadora();
}`,
keywords:["@BeforeEach","setUp","Calculadora"],
exp:"@BeforeEach garante que cada @Test começa com um estado limpo. O método pode ter qualquer nome, mas setUp() é a convenção mais comum."},

{topic:"Fundamentos",diff:"hard",type:"code",
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

{topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário marcar um método para que ele seja reconhecido e executado automaticamente pelo framework. Para desenvolver esse teste, qual anotação deve ser utilizada?",
options:["@TestMethod","@Execute","@Test","@Run"],
answer:2,
exp:"@Test é a anotação fundamental do JUnit 5 que marca um método como caso de teste, chamado automaticamente durante a execução."},

{topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que um método de inicialização seja executado antes de CADA método @Test da classe, garantindo um estado limpo. Para desenvolver esse comportamento, qual anotação deve ser utilizada?",
options:["@BeforeAll","@Setup","@BeforeEach","@Before"],
answer:2,
exp:"@BeforeEach é chamado antes de cada @Test individualmente. @BeforeAll executa apenas uma vez antes de todos — por isso deve ser estático."},

{topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que um método de finalização seja executado UMA ÚNICA VEZ após todos os métodos @Test da classe encerrarem. Para desenvolver esse comportamento, qual anotação deve ser utilizada?",
options:["@AfterEach","@TearDown","@After","@AfterAll"],
answer:3,
exp:"@AfterAll é chamado uma única vez ao final de todos os testes da classe. Deve ser estático. Usado para liberar recursos compartilhados como conexões de banco."},

{topic:"Anotações JUnit",diff:"easy",type:"mc",
text:"[1,0] Durante o desenvolvimento, um método @Test referencia uma funcionalidade que ainda não foi implementada. Para que esse teste não seja executado enquanto a implementação não estiver pronta, qual anotação deve ser aplicada?",
options:["@Skip","@Ignore","@Disabled","@Pending"],
answer:2,
exp:"@Disabled ignora o teste — ele não é executado e aparece como 'skipped' no relatório. Aceita mensagem explicativa: @Disabled('Aguardando implementação')."},

{topic:"Anotações JUnit",diff:"medium",type:"mc",
text:"[1,0] Considere uma classe de teste JUnit 5 com os métodos anotados abaixo. Qual é a ordem CORRETA de execução para um único método @Test?\n\n@BeforeAll static void initAll()\n@BeforeEach void setUp()\n@Test void testX()\n@AfterEach void tearDown()\n@AfterAll static void closeAll()",
options:["@BeforeAll → @BeforeEach → @Test → @AfterAll → @AfterEach","@BeforeEach → @BeforeAll → @Test → @AfterEach → @AfterAll","@BeforeAll → @BeforeEach → @Test → @AfterEach → @AfterAll","@BeforeAll → @Test → @AfterAll → @BeforeEach → @AfterEach"],
answer:2,
exp:"Ordem: @BeforeAll (1×) → @BeforeEach → @Test → @AfterEach → @AfterAll (1×). @BeforeAll/@AfterAll envolvem toda a classe; @BeforeEach/@AfterEach envolvem cada @Test individualmente."},

{topic:"Anotações JUnit",diff:"medium",type:"mc",
text:"[1,0] Considere uma classe de teste com 4 métodos @Test, um @BeforeEach setUp() e um @AfterEach tearDown(). Quantas vezes setUp() e tearDown() serão executados ao total?",
options:["setUp: 1×, tearDown: 1×","setUp: 4×, tearDown: 1×","setUp: 4×, tearDown: 4×","setUp: 1×, tearDown: 4×"],
answer:2,
exp:"@BeforeEach e @AfterEach são chamados para CADA @Test. Com 4 testes: setUp() = 4×, tearDown() = 4×."},

{topic:"Anotações JUnit",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às anotações do JUnit 5.",
statements:[
{text:"@BeforeAll e @AfterAll devem ser aplicados a métodos estáticos.",answer:true},
{text:"@Disabled faz o teste falhar com uma mensagem especial no relatório.",answer:false},
{text:"@AfterEach é executado após cada @Test, mesmo que o teste tenha falhado.",answer:true},
{text:"Um método @Test pode depender do estado deixado por outro @Test da mesma classe, desde que estejam na ordem correta.",answer:false}
],
exp:"@Disabled apenas ignora — não gera falha. @AfterEach é garantido mesmo em falha. Testes nunca devem depender de estado alheio pois a ordem é aleatória."},

{topic:"Anotações JUnit",diff:"hard",type:"mc",
text:"[1,0] Considere a classe abaixo. O @Timeout do método testPerimetro1 está comentado. Qual é o limite de tempo efetivo desse método?\n\n@Timeout(value = 100, unit = TimeUnit.SECONDS)\nclass RetanguloTest {\n    @Test void testArea1() { }\n    @Test\n    //@Timeout(value = 1, unit = TimeUnit.MICROSECONDS)\n    void testPerimetro1() { }\n}",
options:["1 microssegundo — o comentário ainda é processado","100 segundos — herda da classe pois o @Timeout do método está comentado","Sem limite — o comentário cancela o @Timeout da classe","Erro de compilação por conflito de anotações"],
answer:1,
exp:"O @Timeout está COMENTADO — sem efeito. testPerimetro1 herda os 100 segundos da classe. Um @Timeout ativo no método sobrescreveria o da classe."},

{topic:"Anotações JUnit",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a anotação necessária para que o método testLogin não seja executado durante a suíte de testes, com a justificativa 'Aguardando correção do bug #42'.",
answer:`@Disabled("Aguardando correção do bug #42")`,
keywords:["@Disabled","bug"],
exp:"@Disabled com mensagem explicativa. O teste aparece como 'skipped' no relatório — não falha, apenas é ignorado."},

{topic:"Anotações JUnit",diff:"medium",type:"code",
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

{topic:"Anotações JUnit",diff:"hard",type:"code",
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

{topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar se dois valores numéricos são iguais. Qual método de asserção deve ser utilizado?",
options:["assertSame","assertMatch","assertTrue","assertEquals"],
answer:3,
exp:"assertEquals(esperado, obtido) usa .equals(). Para doubles aceita tolerância: assertEquals(3.14, pi, 0.001)."},

{topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar se a chamada de um método lança uma exceção específica. Qual método de asserção deve ser utilizado?",
options:["assertError(Ex.class, () -> m())","expectThrows(Ex.class, () -> m())","assertThrows(Ex.class, () -> m())","catchThrowable(Ex.class, () -> m())"],
answer:2,
exp:"assertThrows(Classe.class, () -> { chamada; }) — se a exceção não for lançada, o teste falha. É a forma idiomática no JUnit 5."},

{topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário forçar a falha imediata do teste em um ponto específico do código, indicando que aquele ponto nunca deveria ser alcançado. Qual método deve ser utilizado?",
options:["throw new AssertionError()","stop()","fail()","abort()"],
answer:2,
exp:"fail() lança AssertionError imediatamente. Usado para detectar fluxos incorretos — por exemplo, quando uma exceção esperada não é lançada."},

{topic:"Asserções",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário verificar que uma referência retornada por um método é nula. Qual método de asserção deve ser utilizado?",
options:["assertEmpty","assertZero","assertNull","assertVoid"],
answer:2,
exp:"assertNull(ref) verifica null. Ex: assertNull(cache.get('chave')) verifica que o cache retorna null para chave inexistente."},

{topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Qual é o problema na abordagem utilizada?\n\n@Test\nvoid testDivisaoPorZero() {\n    try {\n        calc.dividir(10, 0);\n    } catch (ArithmeticException e) {\n        // esperado\n    }\n}",
options:["O catch deveria relançar a exceção com throw e","Se dividir(10,0) não lançar a exceção, o teste passa incorretamente","@Test não pode conter try/catch","ArithmeticException não é verificada em Java"],
answer:1,
exp:"Se o método não lançar exceção, o fluxo passa direto pelo try e o teste passa sem verificar nada. Solução: adicionar fail() após a chamada, ou usar assertThrows()."},

{topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere as duas asserções abaixo. Qual é a diferença entre assertEquals e assertSame?\n\nassertEquals(s1, s2);\nassertSame(s1, s2);",
options:["assertEquals compara valor (.equals()); assertSame compara referência de memória (==)","Ambas comparam valor, mas assertSame é exclusiva para tipos primitivos","assertSame compara valor; assertEquals compara referência","assertEquals é mais rápido; assertSame é mais seguro"],
answer:0,
exp:"assertEquals: .equals() — compara conteúdo. assertSame: == — verifica se é o mesmo objeto na memória. new String('a') e new String('a') passam no assertEquals mas falham no assertSame."},

{topic:"Asserções",diff:"medium",type:"mc",
text:"[1,0] Considere o teste abaixo. Por que o uso de != para comparar doubles é problemático nesse contexto?\n\n@Test\npublic void testPerimetro2() {\n    Retangulo ret = new Retangulo(22.3, 10.2);\n    if (ret.perimetro() != 65.0)\n        fail(\"PERÍMETRO INCORRETO!\");\n}",
options:["fail() não pode ser chamado dentro de um if","Comparar doubles com != é arriscado — 22.3×2 + 10.2×2 pode retornar 65.00000000000001 em ponto flutuante","assertEquals aceita mais tipos de dado que !=","O uso de != com double gera erro de compilação"],
answer:1,
exp:"Aritmética IEEE 754 é imprecisa. O resultado pode ser 65.00000000000001. assertEquals(65.0, ret.perimetro(), 0.001) é mais robusto por aceitar tolerância."},

{topic:"Asserções",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às asserções do JUnit 5.",
statements:[
{text:"assertEquals(3.14, pi, 0.001) aceita qualquer valor entre 3.139 e 3.141.",answer:true},
{text:"assertDoesNotThrow verifica que um método lança uma exceção.",answer:false},
{text:"assertFalse(x.isBloqueado()) é mais legível que assertTrue(!x.isBloqueado()).",answer:true},
{text:"assertNotSame verifica que dois objetos são referências diferentes na memória.",answer:true}
],
exp:"assertDoesNotThrow verifica que NENHUMA exceção é lançada — oposto de assertThrows. assertFalse evita dupla negação, expressando diretamente a intenção."},

{topic:"Asserções",diff:"hard",type:"mc",
text:"[1,0] Considere o código abaixo. Qual linha está sendo utilizada INCORRETAMENTE?\n\nString s1 = new String(\"abc\");\nString s2 = new String(\"abc\");\nassertSame(s1, s2);   // linha A\nassertEquals(s1, s2); // linha B",
options:["Linha A — assertSame falha pois s1 e s2 são objetos distintos na heap","Linha B — assertEquals falha pois os conteúdos são diferentes","Ambas estão corretas","Ambas estão incorretas"],
answer:0,
exp:"new String('abc') cria objetos DISTINTOS na heap. assertSame(==) falha. assertEquals(.equals()) passa pois os conteúdos são iguais. Linha A está incorreta para esse cenário."},

{topic:"Asserções",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as duas asserções: uma que verifica que service.buscarPorId(999L) retorna null, e outra que verifica que service.buscarPorId(1L) não é null. Utilize assertNull e assertNotNull passando o retorno do método diretamente.",
answer:`assertNull(service.buscarPorId(999L));
assertNotNull(service.buscarPorId(1L));`,
keywords:["assertNull","assertNotNull","service.buscarPorId"],
exp:"Sintaxe correta: assertNull(valor) e assertNotNull(valor) — passe o RETORNO do método diretamente. Não use assertNull(null, valor) (assinatura com mensagem) nem assertNotNull(!null, valor) (inválido em Java)."},

{topic:"Asserções",diff:"medium",type:"code",
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

{topic:"Asserções",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testArea2 que cria Retangulo(22.3, 10.2) e verifica que a área retornada é 227.46 com tolerância de 0.001.",
answer:`@Test
public void testArea2() {
    Retangulo ret = new Retangulo(22.3, 10.2);
    assertEquals(227.46, ret.area(), 0.001);
}`,
keywords:["@Test","assertEquals","227.46","0.001"],
exp:"Tolerância é essencial para doubles. 22.3 × 10.2 pode resultar em 227.45999... em ponto flutuante — a tolerância 0.001 absorve a imprecisão."},

{topic:"Asserções",diff:"medium",type:"code",
text:"[2,0] Considere que Config.getInstance() deve sempre retornar a mesma instância (padrão Singleton). De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testSingleton que verifica essa propriedade. Utilize a asserção apropriada para verificar identidade de objeto.",
answer:`@Test
public void testSingleton() {
    assertSame(Config.getInstance(), Config.getInstance());
}`,
keywords:["@Test","assertSame","getInstance"],
exp:"assertSame usa == — verifica identidade de referência. Perfeito para Singleton: duas chamadas devem retornar o mesmo objeto na memória, não apenas objetos iguais em valor."},

{topic:"Asserções",diff:"hard",type:"code",
text:"[3,0] Considere a classe abaixo, que representa um teste de divisão. O código atual tem um problema grave: se calc.dividir(10, 0) não lançar a exceção, o teste passa incorretamente. De acordo com as especificações abaixo, reescreva o teste de forma CORRETA utilizando assertThrows.\n\n// Versão incorreta:\n@Test\nvoid testDivisaoPorZero() {\n    try { calc.dividir(10, 0); }\n    catch (ArithmeticException e) { }\n}",
answer:`@Test
public void testDivisaoPorZero() {
    assertThrows(ArithmeticException.class,
        () -> { calc.dividir(10, 0); });
}`,
keywords:["@Test","assertThrows","ArithmeticException","dividir"],
exp:"assertThrows é mais seguro: se dividir() não lançar a exceção, o teste falha automaticamente — sem risco de falso positivo como ocorre com try/catch simples."},

{topic:"Asserções",diff:"hard",type:"code",
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

{topic:"@Timeout",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário garantir que um método @Test não demore mais que 2 segundos para executar. Caso o tempo seja excedido, o que acontece com o teste?",
options:["O teste é marcado como ignorado no relatório","O teste é reexecutado automaticamente uma vez","O teste falha com erro de tempo excedido","O teste passa com um aviso no relatório"],
answer:2,
exp:"Tempo excedido → teste FALHA. Não é ignorado (@Disabled faz isso). Útil para detectar regressões de performance e loops infinitos."},

{topic:"@Timeout",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, a anotação @Timeout é utilizada sem o atributo 'unit'. Qual é a unidade de tempo adotada por padrão?",
options:["Milissegundos","Nanosegundos","Minutos","Segundos"],
answer:3,
exp:"@Timeout(2) = 2 SEGUNDOS por padrão. Para outras unidades: @Timeout(value=500, unit=TimeUnit.MILLISECONDS)."},

{topic:"@Timeout",diff:"medium",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário limitar a execução de um método a 200 milissegundos. Qual das anotações abaixo está CORRETA?",
options:["@Timeout(0.2)","@Timeout(200, TimeUnit.MILLISECONDS)","@Timeout(value = 200, unit = TimeUnit.MILLISECONDS)","@Timeout(millis = 200)"],
answer:2,
exp:"Sintaxe correta: @Timeout(value=X, unit=TimeUnit.UNIDADE). @Timeout(200) = 200 segundos. @Timeout(millis=200) não é atributo válido."},

{topic:"@Timeout",diff:"medium",type:"mc",
text:"[1,0] Considere que uma classe de teste tem @Timeout(5) e um de seus métodos possui @Timeout(value=100, unit=TimeUnit.MILLISECONDS). Qual é o limite de tempo efetivo para esse método?",
options:["5 segundos — a classe tem precedência sobre o método","100 milissegundos — o @Timeout do método sobrescreve o da classe","5 segundos + 100 ms = 5.1 segundos","Erro de compilação — não podem coexistir"],
answer:1,
exp:"O @Timeout do método SOBRESCREVE o da classe. Os demais métodos sem @Timeout próprio herdam o limite da classe (5s)."},

{topic:"@Timeout",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação à anotação @Timeout no JUnit 5.",
statements:[
{text:"@Timeout aplicada à classe define o limite individualmente para cada @Test, não o tempo total de todos os testes somados.",answer:true},
{text:"Quando o tempo limite é excedido, o teste é marcado como 'ignorado' no relatório.",answer:false},
{text:"Para operações de I/O (banco, API), recomenda-se SECONDS; para operações em memória, MILLISECONDS.",answer:true},
{text:"@Timeout pode ser aplicada tanto em métodos @Test quanto em classes inteiras.",answer:true}
],
exp:"Tempo excedido = FALHA, não ignorado. @Timeout na classe cria limite individual por @Test — cada um é julgado de forma independente."},

{topic:"@Timeout",diff:"hard",type:"mc",
text:"[1,0] Em um pipeline CI/CD, um teste com @Timeout(value=200, unit=TimeUnit.MILLISECONDS) falha intermitentemente mesmo sem bug no código. Qual é a causa mais provável?",
options:["O JUnit se comporta diferente em servidores Linux","Pipelines CI/CD compartilham recursos e podem ser 2–3× mais lentos que máquinas locais","O Java é mais lento em ambientes de servidor","CI não suporta TimeUnit.MILLISECONDS"],
answer:1,
exp:"Ambientes CI compartilham CPU e memória — 200ms local pode virar 600ms em CI. Limites muito apertados geram flaky tests. Aumente os limites e adicione margem de segurança."},

{topic:"@Timeout",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as anotações necessárias para que o método testBuscarTodos seja executado como um @Test com limite de 2 segundos.",
answer:`@Test
@Timeout(2)
public void testBuscarTodos() {
}`,
keywords:["@Test","@Timeout","2"],
exp:"@Timeout(2) sem unit = 2 segundos (padrão). As duas anotações podem ser empilhadas no mesmo método."},

{topic:"@Timeout",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente a anotação @Timeout com limite de 500 milissegundos para o método testBuscarProdutos, utilizando TimeUnit explícito.",
answer:`@Test
@Timeout(value = 500, unit = TimeUnit.MILLISECONDS)
public void testBuscarProdutos() {
}`,
keywords:["@Test","@Timeout","500","MILLISECONDS"],
exp:"value + unit explícitos são necessários para milissegundos. @Timeout(500) sem unit = 500 segundos — um erro clássico de omitir a unidade."},

{topic:"@Timeout",diff:"medium",type:"code",
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

{topic:"@Timeout",diff:"hard",type:"code",
text:"[3,0] De acordo com as especificações abaixo, desenvolva um caso de teste em JUnit 5 chamado testQueryRapida com timeout de 300 milissegundos, que verifica com assertFalse que repo.findByCategoria('ELETRONICO') não retorna uma lista vazia.",
answer:`@Test
@Timeout(value = 300, unit = TimeUnit.MILLISECONDS)
public void testQueryRapida() {
    assertFalse(repo.findByCategoria("ELETRONICO").isEmpty());
}`,
keywords:["@Test","@Timeout","300","MILLISECONDS","assertFalse","findByCategoria"],
exp:"Combina @Timeout com assertFalse. assertFalse(lista.isEmpty()) verifica que a lista tem elementos. value+unit são obrigatórios para milissegundos."},

// ══════════════════ TESTES PARAMETRIZADOS ══════════════════

{topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário executar o mesmo método de teste para uma lista de valores distintos, de forma automatizada. Para desenvolver esse teste, qual anotação deve substituir @Test no método?",
options:["@Repeated","@DataDriven","@ParameterizedTest","@RunWith"],
answer:2,
exp:"@ParameterizedTest substitui @Test em métodos parametrizados. Sem ela, o JUnit não sabe que o método recebe argumentos externos."},

{topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar uma lista de valores literais de um único tipo (doubles) para um @ParameterizedTest. Qual anotação deve ser utilizada?",
options:["@CsvSource","@MethodSource","@ValueSource","@EnumSource"],
answer:2,
exp:"@ValueSource(doubles={...}) passa valores de UM único tipo. Não suporta múltiplas colunas — para isso use @CsvSource."},

{topic:"Testes Parametrizados",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar tuplas de valores (pares entrada/saída) definidos diretamente no código-fonte, sem arquivo externo. Qual anotação deve ser utilizada?",
options:["@CsvFileSource","@CsvSource","@InlineSource","@DataSource"],
answer:1,
exp:"@CsvSource({'5,10','2,4'}) define tuplas inline no código. @CsvFileSource lê de arquivo externo."},

{topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Considere o método de teste abaixo. Quantas vezes ele será executado?\n\n@ParameterizedTest\n@ValueSource(doubles = { -2, -1000, -10.8, 0, -0.02 })\npublic void testAlturaInvalida(double h) {\n    assertThrows(GeometriaException.class,\n        () -> new Retangulo(1, h));\n}",
options:["1 vez com todos os valores simultâneos","3 vezes","5 vezes","10 vezes"],
answer:2,
exp:"@ValueSource tem 5 valores. @ParameterizedTest executa uma vez por valor → 5 execuções independentes."},

{topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Um arquivo CSV de dados de teste possui 4 linhas de cabeçalho antes dos dados reais. Qual atributo de @CsvFileSource deve ser utilizado para pular essas linhas?",
options:["skipLines=4","beginInLine=5","headerCount=4","numLinesToSkip=4"],
answer:3,
exp:"numLinesToSkip=4 pula as 4 primeiras linhas. 'beginInLine' e 'skipLines' não existem no JUnit 5."},

{topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Por que @MethodSource é necessário nesse caso?\n\n@ParameterizedTest\n@MethodSource(\"dados\")\nvoid testArea(Circulo base, double h, double res) { }",
options:["@CsvSource seria mais lento para muitos dados","@MethodSource permite passar objetos instanciados; @CsvSource só aceita valores literais","@CsvSource não suporta parâmetros do tipo double","@MethodSource é obrigatório quando há mais de 2 parâmetros"],
answer:1,
exp:"@CsvSource aceita apenas tipos primitivos/strings. Para passar objetos como Circulo, é necessário @MethodSource."},

{topic:"Testes Parametrizados",diff:"medium",type:"mc",
text:"[1,0] Um @ParameterizedTest utiliza @CsvSource com delimitador ';'. Qual anotação está CORRETA?",
options:["@CsvSource({'8, 3, 10, 55'})","@CsvSource(value={'8;3;10;55'}, separator=';')","@CsvSource(value={'8;3;10;55'}, delimiter=';')","@CsvFileSource({'8;3;10;55'}, delimiter=';')"],
answer:2,
exp:"O atributo chama-se 'delimiter', não 'separator'. @CsvFileSource não aceita dados inline."},

{topic:"Testes Parametrizados",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação aos testes parametrizados no JUnit 5.",
statements:[
{text:"@MethodSource deve referenciar um método estático que retorna um Stream.",answer:true},
{text:"@ValueSource permite passar pares de valores (entrada e saída) para cada execução do teste.",answer:false},
{text:"Stream<Object[]> e Stream<Arguments> são ambos formatos válidos de retorno em @MethodSource.",answer:true},
{text:"@CsvFileSource com numLinesToSkip=4 equivale a beginInLine=5.",answer:false}
],
exp:"@ValueSource: UM valor simples por execução. 'beginInLine' não existe — o atributo correto é numLinesToSkip."},

{topic:"Testes Parametrizados",diff:"hard",type:"mc",
text:"[1,0] Um arquivo 'dados.csv' tem 4 linhas de cabeçalho e usa '~' como separador. Qual anotação está CORRETA para carregar esse arquivo em um @ParameterizedTest?\n\n// dados.csv:\n// linha 1: TRAPÉZIO\n// linha 2: DADOS DE TESTE\n// linha 3: BME | BMA | LE | LD | R\n// linha 4: (vazio)\n// linha 5: 5 ~ 2 ~ 4 ~ 6 ~ 17",
options:[
'@CsvFileSource(file="dados.csv", delimiter=\'~\', numLinesToSkip=4)',
'@CsvSource(files={"dados.csv"}, delimiter=\'~\', numLinesToSkip=4)',
'@CsvFileSource(files={"dados.csv"}, delimiter=\'~\', numLinesToSkip=4)',
'@CsvFileSource(files={"dados.csv"}, delimiter=\'~\', beginInLine=5)'],
answer:2,
exp:"Atributo 'files' (plural/array), delimiter='~', numLinesToSkip=4. 'file' singular e 'beginInLine' não existem no JUnit 5."},

{topic:"Testes Parametrizados",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente apenas a anotação @ValueSource para passar os valores -5, 0 e -10 (doubles) a um @ParameterizedTest.",
answer:`@ValueSource(doubles = { -5, 0, -10 })`,
keywords:["@ValueSource","doubles"],
exp:"@ValueSource(doubles={...}) — o atributo 'doubles' aceita um array de valores double literais."},

{topic:"Testes Parametrizados",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente apenas a anotação @CsvFileSource para carregar o arquivo 'TrapezioPerimetroTestValues.txt', pulando as 4 primeiras linhas de cabeçalho.",
answer:`@CsvFileSource(files = {"TrapezioPerimetroTestValues.txt"}, numLinesToSkip = 4)`,
keywords:["@CsvFileSource","files","numLinesToSkip","4"],
exp:"'files' (plural, array de strings) é o atributo correto. numLinesToSkip=4 pula o cabeçalho."},

{topic:"Testes Parametrizados",diff:"medium",type:"code",
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

{topic:"Testes Parametrizados",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente o método de provimento de argumentos chamado dataTestPerimetro() para @MethodSource, retornando dois casos de teste: Retangulo(20,18)→resultado 76.0 e Retangulo(22.3,10.2)→resultado 65.0.",
answer:`private static Stream<Arguments> dataTestPerimetro() {
    return Stream.of(
        Arguments.of(new Retangulo(20, 18), 76.0),
        Arguments.of(new Retangulo(22.3, 10.2), 65.0)
    );
}`,
keywords:["static","Stream","Arguments","Retangulo","76","65"],
exp:"Método estático retornando Stream<Arguments>. Arguments.of() empacota cada caso. Permite passar objetos instanciados — impossível com @CsvSource."},

{topic:"Testes Parametrizados",diff:"hard",type:"code",
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

{topic:"Testes Parametrizados",diff:"hard",type:"code",
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

{topic:"Testes Parametrizados",diff:"hard",type:"code",
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

{topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Em um projeto com diversas classes de teste, é necessário executar todas de uma só vez, em um único comando. Para isso, deve-se criar uma suíte de testes. Qual anotação é OBRIGATÓRIA para identificar uma classe como suíte no JUnit 5?",
options:["@TestSuite","@RunWith(Suite.class)","@Suite","@SuiteClass"],
answer:2,
exp:"@Suite (junit.platform.suite.api) é a anotação do JUnit 5. @RunWith(Suite.class) era do JUnit 4."},

{topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário que uma suíte inclua automaticamente todas as classes de teste de um pacote, inclusive as que forem criadas futuramente. Qual anotação deve ser utilizada?",
options:["@SelectClasses","@RunPackage","@IncludeAll","@SelectPackages"],
answer:3,
exp:"@SelectPackages({'pacote'}) inclui automaticamente todas as classes de teste do pacote, inclusive novas adicionadas futuramente. @SelectClasses exige listagem manual."},

{topic:"Suíte de Testes",diff:"easy",type:"mc",
text:"[1,0] Considere a classe abaixo. O que ela representa e qual é sua característica mais importante?\n\n@Suite\n@SelectPackages({\"testes\"})\nclass GeometriaTestSuite { }",
options:["Classe de teste normal que verifica o pacote 'testes'","Suíte que executa todos os testes do pacote 'testes' — a classe pode ficar vazia","Inválida — suítes precisam de pelo menos um @Test","Executa apenas GeometriaTestSuite e ignora os demais"],
answer:1,
exp:"GeometriaTestSuite é uma suíte. A classe pode ficar completamente vazia — sua função é apenas carregar as anotações. Executa todos os @Test do pacote 'testes'."},

{topic:"Suíte de Testes",diff:"medium",type:"mc",
text:"[1,0] Uma suíte de testes usa @SelectPackages({'testes.geometria'}). É necessário que ela também execute os testes do subpacote 'testes.geometria.plana'. Qual anotação adicional deve ser utilizada?",
options:["@AddPackages({'testes.geometria.plana'})","@IncludePackages({'testes.geometria.plana'})","@SelectPackages também inclui subpacotes automaticamente","@ExtendPackages({'testes.geometria.plana'})"],
answer:1,
exp:"@IncludePackages adiciona subpacotes específicos à seleção. @SelectPackages não inclui subpacotes automaticamente."},

{topic:"Suíte de Testes",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre utilizar @SelectClasses e @SelectPackages em uma suíte de testes?",
options:["@SelectClasses é mais rápido que @SelectPackages","@SelectClasses lista classes individuais; @SelectPackages inclui todas as classes de um pacote automaticamente","@SelectPackages só funciona com subpacotes","Não há diferença prática entre as duas"],
answer:1,
exp:"@SelectClasses({A.class, B.class}) = lista manual — útil para classes de pacotes distintos. @SelectPackages = inclui tudo do pacote, inclusive novos testes adicionados futuramente."},

{topic:"Suíte de Testes",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação às suítes de teste no JUnit 5.",
statements:[
{text:"A classe da suíte pode ficar completamente vazia — as anotações definem o que executar.",answer:true},
{text:"@ExcludePackages exclui subpacotes de uma seleção feita por @SelectPackages.",answer:true},
{text:"Uma suíte de testes pode incluir classes de apenas um único pacote.",answer:false},
{text:"@IncludePackages inclui subpacotes além dos selecionados por @SelectPackages.",answer:true}
],
exp:"@SelectClasses permite incluir classes de pacotes completamente distintos. A suíte não precisa de @Test — é apenas um agregador de anotações."},

{topic:"Suíte de Testes",diff:"hard",type:"mc",
text:"[1,0] É necessário criar uma suíte que inclua o pacote 'testes.geometria' mas exclua o subpacote 'testes.geometria.espacial'. Qual configuração está CORRETA?",
options:[
"@Suite + @SelectPackages({'testes.geometria'}) + @RemovePackages({'testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria'}) + @ExcludePackages({'testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria', '!testes.geometria.espacial'})",
"@Suite + @SelectPackages({'testes.geometria'}) + @IgnorePackages({'testes.geometria.espacial'})"],
answer:1,
exp:"@ExcludePackages é a anotação correta. @RemovePackages e @IgnorePackages não existem. A negação com '!' não é sintaxe válida."},

{topic:"Suíte de Testes",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente as duas anotações necessárias para criar uma suíte que executa todos os testes do pacote 'testes'.",
answer:`@Suite
@SelectPackages({"testes"})`,
keywords:["@Suite","@SelectPackages"],
exp:"@Suite identifica a suíte. @SelectPackages define o pacote. A classe pode ficar vazia — esses dois elementos são suficientes."},

{topic:"Suíte de Testes",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a suíte que executa especificamente CirculoTest e RetanguloTest, sem incluir outros testes do pacote.",
answer:`@Suite
@SelectClasses({CirculoTest.class, RetanguloTest.class})
class GeometriaBasicaSuite { }`,
keywords:["@Suite","@SelectClasses","CirculoTest","RetanguloTest"],
exp:"@SelectClasses lista classes individuais. Ideal para incluir apenas testes específicos de pacotes distintos."},

{topic:"Suíte de Testes",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva a suíte GeometriaCompletaSuite que inclui o pacote 'testes.geometria' e também inclui o subpacote 'testes.geometria.plana'.",
answer:`@Suite
@SelectPackages({"testes.geometria"})
@IncludePackages({"testes.geometria.plana"})
class GeometriaCompletaSuite { }`,
keywords:["@Suite","@SelectPackages","@IncludePackages","plana"],
exp:"@IncludePackages adiciona subpacotes à seleção. @ExcludePackages faz o oposto."},

{topic:"Suíte de Testes",diff:"medium",type:"code",
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

{topic:"Suíte de Testes",diff:"hard",type:"code",
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

{topic:"Análise de Código",diff:"easy",type:"mc",
text:"[1,0] Considere o método abaixo. Qual é o papel do @BeforeEach setUp()?\n\n@BeforeEach\npublic void setUp() {\n    dados = new ArrayList<Double[]>();\n    dados.add(new Double[]{ 10.0, 314.16, 62.8 });\n}",
options:["Executado uma única vez, define dados globais permanentes para todos os testes","Executado antes de cada @Test, garantindo que cada teste começa com uma lista de dados limpa","Executado após cada @Test para validar os resultados","Define constantes compartilhadas entre todas as classes de teste"],
answer:1,
exp:"@BeforeEach garante estado limpo para cada @Test. Sem ele, um teste que modificar 'dados' afetaria os seguintes."},

{topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. O que o método testSetBase1() está verificando?\n\n@Test\npublic void testSetBase1() {\n    Retangulo ret = new Retangulo(2, 2);\n    assertThrows(GeometriaException.class,\n        () -> { ret.setBase(-12); });\n    assertThrows(GeometriaException.class,\n        () -> { new Retangulo(0, 10); });\n}",
options:["Que -12 e 0 são valores válidos para a base","Que setBase(-12) e o construtor Retangulo(0,10) lançam GeometriaException — testando setter e construtor","Que GeometriaException é subclasse de RuntimeException","Que o retângulo tem base igual a -12 após o set"],
answer:1,
exp:"Dois assertThrows: setter (setBase(-12)) e construtor (Retangulo(0,10)). Ambos validam que valores inválidos são rejeitados com GeometriaException."},

{topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo. Qual é o problema na abordagem de comparação utilizada?\n\n@Test\npublic void testPerimetro2() {\n    Retangulo ret = new Retangulo(22.3, 10.2);\n    if (ret.perimetro() != 65.0)\n        fail(\"PERÍMETRO INCORRETO!\");\n}",
options:["O valor esperado 65.0 está matematicamente incorreto","Comparar doubles com != é arriscado — 22.3×2 + 10.2×2 pode retornar 65.00000000000001 em ponto flutuante","fail() não pode ser chamado dentro de um if","Retangulo(22.3, 10.2) não é uma instância válida"],
answer:1,
exp:"IEEE 754: o resultado pode ser 65.00000000000001. assertEquals(65.0, ret.perimetro(), 0.001) é mais robusto."},

{topic:"Análise de Código",diff:"medium",type:"mc",
text:"[1,0] Considere o código abaixo do CilindroTest. Por que dataTestVolume() usa Stream<Object[]> ao invés de Stream<Arguments>?\n\npublic static Stream<Object[]> dataTestVolume() {\n    return Stream.of(\n        new Object[]{ new Cilindro(new Circulo(6.7), 2.2), 310.26 }\n    );\n}",
options:["Stream<Object[]> é obrigatório para objetos instanciados","São formas equivalentes — @MethodSource aceita ambas","Stream<Arguments> não suporta objetos customizados","Stream<Object[]> usa menos memória"],
answer:1,
exp:"@MethodSource aceita Stream<Arguments> e Stream<Object[]> igualmente. Arguments.of() é mais idiomático, mas ambas funcionam."},

{topic:"Análise de Código",diff:"hard",type:"mc",
text:"[1,0] Considere o trecho do CirculoTest abaixo. Por que o @Test testArea utiliza assertTrue em vez de assertEquals?\n\n@Test\npublic void testArea() {\n    for (Double dt[] : dados) {\n        Circulo c = new Circulo(dt[RAIO_IND]);\n        double area = c.area();\n        if (!(area>=dt[AREA_IND]-0.3 && area<=dt[AREA_IND]+0.3))\n            throw new AssertionError();\n    }\n}",
options:["assertEquals não aceita doubles","A tolerância é uma faixa ±0.3 verificada manualmente com if — alternativa ao assertEquals com delta","assertTrue é sempre preferível a assertEquals","O código está errado — deveria usar assertEquals(dt[AREA_IND], area, 0.3)"],
answer:1,
exp:"O código original verifica a faixa manualmente com if + throw. É equivalente a assertEquals(dt[AREA_IND], area, 0.3) — ambas as abordagens validam tolerância de ±0.3."},

{topic:"Análise de Código",diff:"easy",type:"code",
text:"[1,0] Considere a classe CirculoTest com um atributo 'dados' do tipo List<Double[]>. De acordo com as especificações abaixo, implemente o método @BeforeEach setUp() que inicializa a lista e adiciona o caso de teste: raio=10.0, área esperada=314.16, perímetro esperado=62.8.",
answer:`@BeforeEach
public void setUp() {
    dados = new ArrayList<Double[]>();
    dados.add(new Double[]{ 10.0, 314.16, 62.8 });
}`,
keywords:["@BeforeEach","setUp","ArrayList","10.0","314.16"],
exp:"@BeforeEach reinicializa a lista antes de cada @Test. new ArrayList<>() cria lista vazia; add() insere o caso de teste como array de Double."},

{topic:"Análise de Código",diff:"medium",type:"code",
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

{topic:"Análise de Código",diff:"hard",type:"code",
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

{topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Um sistema possui uma interface web que deve ser testada simulando as ações de um usuário real, sem acesso ao código-fonte interno. Qual ferramenta e qual tipo de teste se aplicam a esse cenário?",
options:["JUnit — teste de caixa branca","Katalon — teste de caixa preta","Maven — teste de caixa branca","Cypress — teste de caixa branca"],
answer:1,
exp:"Katalon = caixa preta: testa a interface sem ver o código interno. JUnit = caixa branca: testa código Java diretamente. Cypress também é caixa preta, mas não é a opção principal do curso."},

{topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário abrir o navegador em uma URL específica. Qual comando deve ser utilizado?",
options:["WebUI.navigate('url')","WebUI.startBrowser('url')","WebUI.launch('url')","WebUI.openBrowser('url')"],
answer:3,
exp:"WebUI.openBrowser('url') abre e navega. Para fechar: WebUI.closeBrowser(). Geralmente chamado no @Setup."},

{topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário preencher um campo de texto com um valor. Qual comando deve ser utilizado?",
options:["WebUI.findText(obj, valor)","WebUI.type(obj, valor)","WebUI.input(obj, valor)","WebUI.setText(findTestObject('obj'), valor)"],
answer:3,
exp:"WebUI.setText(findTestObject('nome'), 'valor') preenche campos. WebUI.findText() VERIFICA se texto existe — não preenche. Confundir os dois é erro clássico."},

{topic:"Katalon",diff:"easy",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário que um método de inicialização seja executado antes dos casos de teste para abrir o navegador. Qual anotação Katalon deve ser utilizada?",
options:["@BeforeTest","@Before","@Init","@Setup"],
answer:3,
exp:"@Setup executa antes dos testes. @TearDown após (se sucesso). @TearDownIfError após (se falha)."},

{topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Em um determinado script de teste Katalon, é necessário que o navegador seja fechado APENAS se o teste for bem-sucedido. Qual anotação deve ser utilizada no método que fecha o navegador?",
options:["@AfterEach","@TearDownIfError","@TearDown","@AfterAll"],
answer:2,
exp:"@TearDown executa somente se o teste PASSOU. @TearDownIfError executa somente se FALHOU. Trocar os dois inverte completamente o comportamento — a distinção mais cobrada em prova."},

{topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Considere a interface web abaixo com os campos InpX, InpY, InpZ, botão BtnGerar e saída OutJSON. Para o dado X=-98.43, Y=2.2, Z=-8.9 com JSON esperado '{x:-98.43,y:2.2,z:-8.9}', qual é a sequência CORRETA de comandos Katalon?",
options:["click(BtnGerar) → setText(InpX) → verifyText(OutJSON)","setText(InpX,-98.43) → setText(InpY,2.2) → setText(InpZ,-8.9) → click(BtnGerar) → verifyText(OutJSON,esperado)","openBrowser() → verifyText(OutJSON) → click(BtnGerar)","findText(InpX,-98.43) → findText(InpY,2.2) → findText(InpZ,-8.9) → click(BtnGerar)"],
answer:1,
exp:"Fluxo: preencher campos (setText), acionar botão (click), verificar saída (verifyText). openBrowser() fica no @Setup."},

{topic:"Katalon",diff:"medium",type:"mc",
text:"[1,0] Qual é a diferença entre @TearDown e @TearDownIfError no Katalon?",
options:["Ambos executam sempre ao final, independente do resultado","@TearDown sempre; @TearDownIfError só se falhar","@TearDown só se passou; @TearDownIfError só se falhou","@TearDownIfError sempre; @TearDown só se passou"],
answer:2,
exp:"@TearDown = executa SOMENTE após sucesso. @TearDownIfError = executa SOMENTE após falha. Para executar sempre, use ambos."},

{topic:"Katalon",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas, em relação ao Katalon Studio.",
statements:[
{text:"Katalon Studio realiza testes de caixa preta, testando a interface sem acesso ao código-fonte.",answer:true},
{text:"WebUI.findText() preenche um campo de texto com o valor informado.",answer:false},
{text:"@Setup no Katalon é executado antes dos testes, de forma análoga ao @BeforeEach no JUnit.",answer:true},
{text:"@TearDownIfError é executado somente quando o teste falha.",answer:true}
],
exp:"WebUI.findText() VERIFICA se texto existe — não preenche. Para preencher: WebUI.setText(). A confusão entre os dois é a pegadinha mais frequente em provas."},

{topic:"Katalon",diff:"hard",type:"mc",
text:"[1,0] Considere o script abaixo. Qual erro ele contém em relação à especificação 'o navegador deve ser fechado apenas se o teste for bem-sucedido'?\n\n@Setup\ndef setUp() { WebUI.openBrowser('http://json.cordenada.html') }\n\n@TearDownIfError\ndef tearDown() { WebUI.closeBrowser() }",
options:["Não há erros — o script está correto","@TearDownIfError fecha o browser quando FALHA, mas a especificação pede fechar somente quando PASSA","WebUI.openBrowser() não pode ficar no @Setup","closeBrowser() não existe no Katalon"],
answer:1,
exp:"@TearDownIfError executa após FALHA. Para fechar após SUCESSO → @TearDown. Trocar os dois é o erro mais cobrado em prova sobre Katalon."},

{topic:"Katalon",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente o comando Katalon que preenche o campo 'Object InpX' com o valor '-98.43'.",
answer:`WebUI.setText(findTestObject('Object InpX'), '-98.43')`,
keywords:["WebUI.setText","findTestObject","InpX","-98.43"],
exp:"WebUI.setText(findTestObject('nome'), 'valor') — sempre findTestObject() para referenciar elementos."},

{topic:"Katalon",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente o comando Katalon que clica no botão 'Object BtnGerar'.",
answer:`WebUI.click(findTestObject('Object BtnGerar'))`,
keywords:["WebUI.click","findTestObject","BtnGerar"],
exp:"WebUI.click(findTestObject('nome')) — clica no elemento identificado pelo Test Object."},

{topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, implemente o método @Setup de um script Katalon que abre o navegador em 'http://json.cordenada.html'.",
answer:`@Setup
def setUp() {
    WebUI.openBrowser('http://json.cordenada.html')
}`,
keywords:["@Setup","openBrowser","json.cordenada.html"],
exp:"@Setup executa antes dos testes. WebUI.openBrowser() abre e navega. Deve ficar no @Setup — não dentro do loop de dados."},

{topic:"Katalon",diff:"medium",type:"code",
text:"[2,0] Considere uma interface web com os campos Object InpX, InpY, InpZ, o botão Object BtnGerar e a saída Object OutJSON. De acordo com as especificações abaixo, implemente os comandos Katalon para: preencher X=21, Y=100.2, Z=189, clicar em Gerar e verificar que OutJSON contém '{x:21, y:100.2, z:189}'.",
answer:`WebUI.setText(findTestObject('Object InpX'), '21')
WebUI.setText(findTestObject('Object InpY'), '100.2')
WebUI.setText(findTestObject('Object InpZ'), '189')
WebUI.click(findTestObject('Object BtnGerar'))
WebUI.verifyText(findTestObject('Object OutJSON'),
                 '{x:21, y:100.2, z:189}')`,
keywords:["setText","InpX","21","InpY","100.2","InpZ","189","click","BtnGerar","verifyText","OutJSON"],
exp:"Sequência obrigatória: setText para cada campo, click no botão, verifyText na saída. A verificação sempre vem por último."},

{topic:"Katalon",diff:"hard",type:"code",
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

{topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Complete a afirmação: '@BeforeAll executa ___ vez(es) antes de todos os testes; @BeforeEach executa ___ vez(es) antes de cada teste.'",
options:["1 / 1","1 / N (uma por @Test)","N / 1","N / N"],
answer:1,
exp:"@BeforeAll = 1× para toda a classe (estático). @BeforeEach = 1× por @Test. Com 5 testes: @BeforeAll=1, @BeforeEach=5."},

{topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste Katalon, o método de encerramento deve fechar o navegador. A especificação exige que o fechamento ocorra SOMENTE se o teste for bem-sucedido. Qual sequência de anotações está CORRETA?",
options:["@Setup / @TearDown","@Setup / @TearDownIfError","@BeforeEach / @AfterEach","@Init / @TearDownIfError"],
answer:0,
exp:"@Setup abre. @TearDown fecha apenas após sucesso. @TearDownIfError faria o oposto — fecharia somente após falha."},

{topic:"Revisão",diff:"easy",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar 3 linhas de dados com 4 colunas cada para um @ParameterizedTest. Qual combinação de anotações está CORRETA?",
options:["@Test + @ValueSource","@ParameterizedTest + @ValueSource","@ParameterizedTest + @CsvSource","@Test + @CsvSource"],
answer:2,
exp:"Múltiplas colunas = @CsvSource ou @CsvFileSource. @ValueSource: um único valor por execução. @ParameterizedTest é obrigatório (substitui @Test)."},

{topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Em um determinado caso de teste JUnit 5, é necessário passar objetos instanciados como argumentos para um @ParameterizedTest. Qual anotação de fonte de dados deve ser utilizada?",
options:["@ValueSource","@CsvSource","@CsvFileSource","@MethodSource"],
answer:3,
exp:"Somente @MethodSource permite objetos instanciados, pois chama um método estático que retorna Stream<Arguments>. @CsvSource e @ValueSource só aceitam literais."},

{topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Assinale qual das afirmações abaixo resume CORRETAMENTE a diferença entre JUnit e Katalon.",
options:["JUnit testa interfaces web; Katalon testa código Java","JUnit é caixa branca (testa código Java diretamente); Katalon é caixa preta (testa interface web)","Ambos realizam testes de caixa preta sobre a interface do sistema","JUnit é mais recente e substituiu o Katalon"],
answer:1,
exp:"JUnit = caixa branca: acessa e testa código Java interno. Katalon = caixa preta: simula usuário na interface. São complementares."},

{topic:"Revisão",diff:"medium",type:"mc",
text:"[1,0] Um teste falha intermitentemente em ambiente CI/CD mas sempre passa na máquina do desenvolvedor. Qual é a causa mais provável relacionada a @Timeout?",
options:["Bug no JUnit em ambiente Linux","@Timeout muito apertado — CI/CD pode ser 2–3× mais lento que máquina local","O @BeforeEach não é executado em CI/CD","A ordem dos @Test muda em CI/CD"],
answer:1,
exp:"Flaky tests em CI geralmente indicam @Timeout muito apertado. Pipelines compartilham recursos e podem ser 2–3× mais lentos. Adicione margem de segurança."},

{topic:"Revisão",diff:"hard",type:"mc",
text:"[1,0] Assinale qual das afirmações abaixo está INCORRETA.",
options:["@AfterAll deve ser estático no JUnit 5","@Disabled ignora o teste sem fazê-lo falhar","assertSame verifica igualdade de valor usando .equals()","@ParameterizedTest substitui @Test em testes com dados externos"],
answer:2,
exp:"assertSame usa ==, não .equals() — verifica identidade de referência (mesmo objeto na memória). Para valor, usa-se assertEquals. Essa distinção é das mais cobradas em prova."},

{topic:"Revisão",diff:"hard",type:"mc",
text:"[1,0] Considere as afirmações: (I) @TearDown no Katalon executa somente após sucesso. (II) assertSame(new String('a'), new String('a')) passa pois os valores são iguais. (III) @Timeout no método sobrescreve o @Timeout da classe. Quais estão CORRETAS?",
options:["Somente I","Somente II","I e III","I, II e III"],
answer:2,
exp:"I: CORRETA — @TearDown = sucesso. II: INCORRETA — assertSame usa ==, dois new String() são objetos distintos, falha. III: CORRETA — @Timeout no método sobrescreve o da classe."},

{topic:"Revisão",diff:"easy",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — revisão geral dos conceitos do curso.",
statements:[
{text:"@BeforeAll e @AfterAll devem ser métodos estáticos no JUnit 5.",answer:true},
{text:"@Disabled faz o teste falhar com uma mensagem de erro no relatório.",answer:false},
{text:"assertEquals com terceiro parâmetro define tolerância para comparação de valores double.",answer:true},
{text:"@ValueSource permite passar pares de valores (entrada e saída) para um @ParameterizedTest.",answer:false}
],
exp:"@Disabled ignora — não falha. @ValueSource: UM valor simples por execução. Para pares, use @CsvSource."},

{topic:"Revisão",diff:"medium",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — testes parametrizados e suítes.",
statements:[
{text:"@CsvFileSource com numLinesToSkip=4 pula as 4 primeiras linhas do arquivo de dados.",answer:true},
{text:"Uma suíte anotada com @Suite precisa ter pelo menos um método @Test para funcionar.",answer:false},
{text:"O método de provimento do @MethodSource deve ser estático e retornar um Stream.",answer:true},
{text:"@ExcludePackages remove subpacotes de uma seleção feita por @SelectPackages.",answer:true}
],
exp:"A suíte pode ficar completamente vazia — é apenas um container de anotações que define o que executar."},

{topic:"Revisão",diff:"hard",type:"tf",
text:"[1,6] Assinale V para as alternativas verdadeiras e F para as falsas — questões de nível avançado.",
statements:[
{text:"@TearDown no Katalon executa o método de encerramento somente após o teste passar.",answer:true},
{text:"assertSame(new String('abc'), new String('abc')) passa pois os valores são iguais.",answer:false},
{text:"@Timeout aplicado em um método sobrescreve o @Timeout definido na classe para aquele método.",answer:true},
{text:"Stream<Object[]> e Stream<Arguments> são formatos válidos de retorno para @MethodSource.",answer:true}
],
exp:"assertSame usa ==: new String() cria objetos DISTINTOS na heap → assertSame falha. @TearDown (sucesso) ≠ @TearDownIfError (falha)."},

{topic:"Revisão",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a linha de código que verifica que calc.somar(2, 3) retorna 5.",
answer:`assertEquals(5, calc.somar(2, 3));`,
keywords:["assertEquals","5","somar"],
exp:"assertEquals(esperado, obtido) — o primeiro parâmetro é sempre o valor esperado; o segundo, o obtido."},

{topic:"Revisão",diff:"easy",type:"code",
text:"[1,0] De acordo com as especificações abaixo, implemente a anotação @Timeout que limita um método a 500 milissegundos.",
answer:`@Timeout(value = 500, unit = TimeUnit.MILLISECONDS)`,
keywords:["@Timeout","500","MILLISECONDS"],
exp:"value + unit explícitos para milissegundos. @Timeout(500) sem unit = 500 segundos — erro clássico."},

{topic:"Revisão",diff:"medium",type:"code",
text:"[2,0] De acordo com as especificações abaixo, desenvolva um @ParameterizedTest chamado testValoresValidos que usa @ValueSource com doubles {0.01, 1.0, 100.0} e verifica com assertDoesNotThrow que new Retangulo(1, altura) NÃO lança exceção.",
answer:`@ParameterizedTest
@ValueSource(doubles = { 0.01, 1.0, 100.0 })
public void testValoresValidos(double altura) {
    assertDoesNotThrow(() -> { new Retangulo(1, altura); });
}`,
keywords:["@ParameterizedTest","@ValueSource","doubles","assertDoesNotThrow","Retangulo"],
exp:"Complemento do teste com assertThrows: cada valor positivo deve ser aceito sem exceção."},

{topic:"Revisão",diff:"medium",type:"code",
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

{topic:"Revisão",diff:"hard",type:"code",
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

]; // fim BANK
