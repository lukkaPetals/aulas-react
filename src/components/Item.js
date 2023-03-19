import PropTypes from 'prop-types'

function Item({marca, ano}) {
    return (
        <>
        <li>{marca} - {ano}</li>
        </>
    )
}

Item.propType = {
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired
}
//Definição do padrão
Item.defaultProps = {
    marca: 'falta a marca',
    ano: 0
}

export default Item