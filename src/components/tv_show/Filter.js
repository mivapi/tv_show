import PropTypes from 'prop-types';
const Filter = (props) => {
    return(
        <div id="myDIV" className="header">
            <div className="row">
                <div className="col-2">
                    <label className="font-size-20">Favorites</label>
                    <label className="switch">
                        <input type="checkbox" onClick={props.filterByfavorites}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="col-10">
                    <label className="font-size-20">Title</label>
                    <input type="text" id="myInput" placeholder="Title..." onChange={e => props.colocaFilter_(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}
export default Filter;

Filter.propTypes = {
    colocaFilter_ : PropTypes.func.isRequired,
    filterByfavorites: PropTypes.func.isRequired
}