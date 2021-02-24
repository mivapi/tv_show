import PropTypes from 'prop-types'
const Title = (props) => {
    return(
        <div className="row" style={{ backgroundColor:'#272635', textAlign:'center', marginTop:'-25px', marginBottom:'-25px', color:'white' }}>
            <div className="col-12">
                <h1>{props.titleHeader}</h1>
            </div>
        </div>
    );
}
export default Title;

Title.propTypes = {
    titleHeader : PropTypes.string.isRequired
}
