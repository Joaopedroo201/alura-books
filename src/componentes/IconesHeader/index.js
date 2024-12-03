import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
const icones = [perfil, sacola]

const Icones = styled.ul`
  display: flex;
  gap: 45px;
  align-items: center;
`
const Icone = styled.li`
  width: 25px;
`
function IconesHeader() {
    return (
      <Icones>
        {icones.map((icone, i) => (
          <Icone key={i}>
            <img src={icone} alt='icone'></img>
          </Icone>
        ))}
      </Icones>
    )
}

export default IconesHeader;