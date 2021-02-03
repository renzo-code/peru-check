import {
  Nombre,
  Texto,
  Lista
} from './style'

const TextoQuienesSomos = () => {
  return (
      <>
        <Nombre>Perú Check</Nombre>
        <Texto> es una alianza de periodismo colaborativo de fact-checking para contrarrestar la desinformación que surja durante el proceso electoral 2021. Esta involucra a medios nacionales y locales de más de 15 regiones que participarán como replicadores y como productores de notas de verificación.</Texto>
        <br/><br/>
        <Texto>La metodología de </Texto>
        <Nombre>Perú Check</Nombre>
        <Texto> incluye un riguroso proceso de edición de editores de diferente línea editorial, lo cual garantiza la calidad del producto periodístico.</Texto>
        <br/><br/><br/><br/>
        <Texto>Medios aliados:</Texto>
        <br/><br/>
        <ul>
          <Lista>RPP</Lista>
          <Lista>El Comercio</Lista>
          <Lista>La República</Lista>
        </ul>
      </>
  )
}

export default TextoQuienesSomos
