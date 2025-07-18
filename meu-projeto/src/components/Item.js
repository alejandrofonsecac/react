import PropTypes from 'prop-types'

function Item({ marca = "Faltou a marca", lancamento = 0 }) {
    return <li>{marca} - {lancamento}</li>;
}
//Esse é o jeito certo de se fazer defaulProps hoje em dia, propTypes ACHO q parou de ser usado com a popularidade de TypeScript

Item.propTypes= {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

export default Item

