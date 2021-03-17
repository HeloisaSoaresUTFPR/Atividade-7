
const calculoSalario  = (funcionario) => {
    
    if (funcionario.cargo === 'DESENVOLVEDOR')  {
        if(funcionario.salarioBase >= 3000 ) {
            return funcionario.salarioBase - (funcionario.salarioBase * 0.20)
        }
         
        return funcionario.salarioBase - (funcionario.salarioBase * 0.10)
    } 

    if (funcionario.cargo === 'DBA')  {
        if(funcionario.salarioBase >= 2000 ) {
            return funcionario.salarioBase - (funcionario.salarioBase * 0.25)
        }
         
        return funcionario.salarioBase - (funcionario.salarioBase * 0.15)
    } 

    if (funcionario.cargo === 'TESTADOR')  {
        if(funcionario.salarioBase >= 2000 ) {
            return funcionario.salarioBase - (funcionario.salarioBase * 0.25)
        }
         
        return funcionario.salarioBase - (funcionario.salarioBase * 0.15)
    } 

    if (funcionario.cargo === 'GERENTE')  {
        if(funcionario.salarioBase >= 5000 ) {
            return funcionario.salarioBase - (funcionario.salarioBase * 0.30)
        }
         
        return  funcionario.salarioBase - (funcionario.salarioBase * 0.20)
    } 
}

export default calculoSalario
  