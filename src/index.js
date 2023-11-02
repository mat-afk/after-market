const redirectTo = (url) => {
    window.location.href = url;
};

document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const textContent = document.getElementById("text-content");

    const circleTexts = [
        `<p>
            O agronegócio faz parte de uma grande porcentagem da renda de muitos países, estando presente em todos os continentes. 
            Foi criada a meio de investimento LCA (Letra de Crédito do Agronegócio). 
            A LCA é um atributo referente à renda fixa, e sua emissão é realizada a fim de financiar principalmente operações do agronegócio. 
            <br><br>
            Quando há um investimento neste atributo e seu valor é resgatado em um tempo determinado pela organização, o dinheiro do investidor está totalmente isento de impostos. 
            Os investidores da LCA estão basicamente realizando um empréstimo ao banco, e ao término do investimento, recebem um pagamento dos juros como remuneração. 
            A liquidez das LCAs é ligeiramente menor em comparação a outros ativos, já que normalmente só é possível movimentar o valor aplicado após no mínimo 90 dias após o investimento.
        </p>`,

        `<p>
            A LCI (Letra de Crédito Imobiliário) é uma opção de investimento em renda fixa que se destaca por ser isenta de Imposto de Renda. 
            Essa característica atrativa a torna uma alternativa mais rentável em comparação à poupança. Basicamente, quando você investe em LCI, 
            está emprestando dinheiro a uma instituição financeira, seja um banco ou outras entidades financeiras. 
            Em troca desse empréstimo, você recebe uma compensação na forma de juros enquanto o seu dinheiro é aplicado. 
            <br><br>
            É importante destacar que não são apenas os bancos que emitem LCIs, outras entidades como sociedades de crédito imobiliário, 
            associações de poupança e empréstimo podem oferecer esse tipo de investimento. 
            Essas LCIs desempenham um papel muito importante e contribuem para estimular o crescimento e desenvolvimento do mercado de construção. 
            Ao investir em LCI, você não apenas busca rentabilidade, mas também está indiretamente apoiando o setor imobiliário e o mercado como um todo. 
            É uma maneira eficaz de fazer seu dinheiro trabalhar a seu favor e, ao mesmo tempo, contribuir para o crescimento da economia.
        </p>`,

        `<p>
            A sigla CDB significa Certificado de depósito bancário, este faz parte dos investimentos de renda fixa, e existem 3 modalidades diferentes dentro do investimento do CDB, sendo elas:
            <ul>
                <li>A prefixada, onde os juros são definidos na tela do investimento.
                <li>A pós-fixada está relacionada ao CDI do investimento e à taxa definida pela instituição financeira no momento da aplicação do CDB.
                <li>E por último a progressiva, também tem relação ao CDI, mas sua taxa aumenta conforme o tempo em que o fundo é aplicado. 
            </ul>
            Na prática, no momento da aplicação do CDB, o investidor está emprestando seu dinheiro ao banco, recebendo juros das instituições como remuneração do investimento, 
            e esses fundos são utilizados pelo banco para fazer empréstimos às outras pessoas.
        </p>`,

        `<p>
        A caderneta de poupança é frequentemente o ponto de partida de muitos brasileiros no mundo dos investimentos. 
        A simplicidade e acessibilidade deste veículo de renda fixa a tornam uma opção popular. 
        A poupança é um investimento de renda fixa, acessível e direta, disponível para pessoas de todas as idades, inclusive menores, 
        desde que representados ou assistidos por pais ou responsáveis legais. 
        <br><br>
        A obtenção de uma conta de poupança é descomplicada; basta escolher um banco de preferência, apresentar a documentação necessária e aguardar a aprovação. 
        Uma característica da poupança é que a rentabilidade é uniforme em todas as instituições. A escolha do banco não afeta o rendimento do investimento. 
        A legislação proíbe a cobrança de tarifas de abertura, manutenção, taxas de administração ou de performance. 
        Além disso, os rendimentos da caderneta não estão sujeitos a tributação.
        </p>`,
    ];

    circles.forEach((circle, index) => {
        circle.addEventListener("click", () => {
            textContent.innerHTML = `<h1>${circle.textContent}</h1><br>${circleTexts[index]}`;
        });
    });
});
