import {useState} from 'react'
import Buttons from './Buttons';
import PropTypes from 'prop-types'
const ModalDetails = (props) => {
    const [isTrue, openModal] = useState(false);
    return(
        <div>
            <button id="myBtn" className="block" onClick={openModal.bind(this, !isTrue)}>
                {props.show.name}
            </button>
            <div id="myModal" className="modal" style={{ display: isTrue ? 'block' : 'none' }}>
                <div className="modal-content">
                <div className="modal-header">
                <span className="close" onClick={openModal.bind(this, false)}>&times;</span>
                <h1></h1>
                </div>
                    <div className="row">    
                        <div className="col-4">
                            <img src={props.show.image ? props.show.image.original : '../../image/withou_timage.png'} alt="Avatar" className="avatar_size" />
                        </div>
                        <div className="col-8">
                            <div className="card">
                                <div className="container">
                                    <div dangerouslySetInnerHTML={ { __html: props.show.summary } }></div>
                                    {!!(props.show.externals.imdb) ? 
                                    <h4>
                                        <Buttons setLocalStorage={props.setLocalStorage} 
                                                 tvShow={props.tvShow} 
                                                 show={props.show} 
                                                 color={props.color}/> 
                                                 <b style={{ marginLeft:'10px' }}>
                                                     IMDB: <a target="_blank" 
                                                              href={"https://www.imdb.com/title/"+props.show.externals.imdb} 
                                                              style={{ color:"green" }}>
                                                                  {props.show.externals.imdb}
                                                           </a>
                                                 </b>
                                    </h4>
                                    : ''}
                                    <label><b>Language: </b>{props.show.language}</label><br/><br/>
                                    <label><b>Rating: </b>{props.show.rating.average}</label><br/><br/>
                                    <label><b>Genres: </b>{props.show?.genres.map((genre, index) => (genre) +""+ ( (props.show.genres.length === index+1) ? '.' : ', '))}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="block_in_card" onClick={openModal.bind(this, false)}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default ModalDetails;

ModalDetails.propTypes = {
    show : PropTypes.object.isRequired,
    tvShow : PropTypes.array.isRequired,
    setLocalStorage : PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
}
