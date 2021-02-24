import Buttons from "./Buttons";
import ModalDetails from "./ModalDetails";
import PropTypes from 'prop-types'

const List = (props) => {
    return(
        <ul id="myUL">
            {
                props.tvShowLs ? 
                props.tvShowLs.map((show, index) => (
                    <li key={"tv_show_"+index}>
                        <div id="contenedor" className="clearfix">
                            <div id="lateral">
                                <ModalDetails setLocalStorage={props.setLocalStorage} 
                                              tvShow={props.tvShow} 
                                              show={show.show} 
                                              color={props.tvShow.filter(exist => exist.show.id === show.show.id ).length === 0 ? 'default' : 'warning'}/>
                            </div>
                            <div id="principal">
                                <img src={show.show.image ? show.show.image.medium : '../../image/withou_timage.png'} alt="Avatar" className="avatar" />                                        
                                <Buttons setLocalStorage={props.setLocalStorage} 
                                         tvShow={props.tvShow} 
                                         show={show} 
                                         isFavorites={props.isFavorites}
                                         color={props.tvShow.filter(exist => exist.show.id === show.show.id ).length === 0 ? 'default' : 'warning'}/>
                            </div>
                        </div>
                    </li>
                )) : 
                'Loading ...'
            }
        </ul>
    )
}
export default List;

List.propTypes = {
    tvShowLs : PropTypes.array.isRequired,
    setLocalStorage: PropTypes.func.isRequired,
    tvShow : PropTypes.array.isRequired
}