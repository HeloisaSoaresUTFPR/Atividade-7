//Um funcionário contém nome, e-mail, salário-base e cargo. De acordo com seu cargo, a regra
//para cálculo do salário líquido é diferente:

const funcionario = ( salarioBase = 0.0, cargo = '') => {
    return{
        nome: 'Heloisa',
        email: 'gmail',
        salarioBase: salarioBase,
        cargo: cargo
    }
}
export default funcionario