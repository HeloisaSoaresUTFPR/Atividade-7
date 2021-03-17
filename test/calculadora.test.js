//Exemplos de cálculo do salário:
//• DESENVOLVEDOR com salário-base 5,000.00. Salário final = 4.000,00
//• GERENTE com salário-base de 2.500,00. Salário final: 2.000,00
//• TESTADOR com salário de 550.00. Salário final: 467,50” 

import funcionario from '../lib/Funcionario'
import calculoSalario from '../lib/calculadora'

describe ('TESTE CALCULADORA', () => {
    test('DESENVOLVEDOR SALARIO ACIMA DE 3000', () => {
        const desenvolvedor =  funcionario(5000, 'DESENVOLVEDOR')
        const resultado = calculoSalario(desenvolvedor)

        expect(resultado).toBe(4000)
    } )

    test('DESENVOLVEDOR SALARIO ABAIXO DE 3000', () => {
        const desenvolvedor =  funcionario(2000, 'DESENVOLVEDOR')
        const resultado = calculoSalario(desenvolvedor)

        expect(resultado).toBe(1800)
    } )

    test('GERENTE', () => {
        const gerente =  funcionario(2500, 'GERENTE')
        const resultado = calculoSalario(gerente)

        expect(resultado).toBe(2000)
    } )

    test('GERENTE MAIOR QUE 5000', () => {
        const gerente =  funcionario(6000, 'GERENTE')
        const resultado = calculoSalario(gerente)

        expect(resultado).toBe(4200)
    } )

    test('TESTADOR', () => {
        const testador =  funcionario(550, 'TESTADOR')
        const resultado = calculoSalario(testador)

        expect(resultado).toBe(467.50)
    } )

    test('TESTADOR', () => {
        const testador =  funcionario(3000, 'TESTADOR')
        const resultado = calculoSalario(testador)

        expect(resultado).toBe(2250)
    } )

    test('DBA', () => {
        const dba =  funcionario(3000, 'DBA')
        const resultado = calculoSalario(dba)

        expect(resultado).toBe(2250)
    } )

    test('DBA', () => {
        const dba =  funcionario(1000, 'DBA')
        const resultado = calculoSalario(dba)

        expect(resultado).toBe(850)
    } )

}) 