import './App.css';
import {useEffect, useState} from 'react'
import Filter from './components/tv_show/Filter'
import List from './components/tv_show/List';
import Alert from './components/Util/Alert';
import Title from './components/tv_show/Title';

const tvShowFromLocalStorage = JSON.parse(localStorage.getItem("tvShow") || "[]");

const App = () => {
    const [tvShowLs, colocaTvShow] = useState()
    const [filterSearch, colocaFilter] = useState('')
    const [tvShow, setTvShow] = useState(
        tvShowFromLocalStorage
    )
    const [isFavorites, setIsFavorites] = useState(false);
    const deleteElement = (value) => {
        let filteredArray = tvShow.filter(item => item.show.id !== value.show.id)
        setTvShow(filteredArray)
    }
    const setLocalStorage = value => {
        try{
            let exist = tvShow.filter(m => m.show.id === value.show.id);
            {
                if(!!exist[0]){
                    deleteElement(value)
                }else{
                    setTvShow(() => {
                        const newItems = [...tvShow, value];
                        localStorage.setItem("tvShow", JSON.stringify(newItems));
                        return newItems;
                    })
                }
            }
        }catch(error){
            console.error(error);
        }
    }
    const tvShowCon = async (e) =>{
        const requestInfo={
            method:'GET',
            header: new Headers({
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'CORS': 'Access-Control-Allow-Origin'
            })
        }
        const response = await fetch('http://api.tvmaze.com/search/shows?q='+e.toLowerCase(), requestInfo)
        const tvShowLs = await response.json();
        if(tvShowLs.id === 'x'){
            alert('No se encontraron resultados.');
            colocaTvShow([]);
        }else{
            colocaTvShow(tvShowLs)
        }
    }
    useEffect(()=>{
        tvShowCon('');
    },[])
    
    useEffect(()=>{
        localStorage.setItem("tvShow", JSON.stringify(tvShow))
    },[tvShow])

    const filterByfavorites = () =>{
        if(!isFavorites){
            colocaTvShow(filterSearch.length === 0 ? tvShow : tvShow.filter(m => m.show.name.toLowerCase().includes(filterSearch.toLowerCase())))
        }else{
            tvShowCon(filterSearch);
        }
        setIsFavorites(!isFavorites)
    }
    const colocaFilter_ = (event) => {
        colocaFilter(event)
        if(!isFavorites){
            tvShowCon(event);
        }else{
            colocaTvShow(event.length === 0 ? tvShow : tvShow.filter(m => m.show.name.toLowerCase().includes(event.toLowerCase())))
        }        
    }
    return (
        <div>
            <Title titleHeader={'My Tv Shows'}/>
            <Filter colocaFilter={colocaFilter} filterByfavorites={filterByfavorites} colocaFilter_={colocaFilter_}/>
            {
                tvShowLs && tvShowLs.length > 0 ?
                <List tvShowLs={tvShowLs} setLocalStorage={setLocalStorage} tvShow={tvShow} isFavorites={isFavorites}/>:
                <Alert message={'No results.'}/>
            }
        </div>
    );
}

export default App;