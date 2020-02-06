import React,{useState} from "react";
import Card from './SoundItemCard'


export default function(props){
    
    const[plyaingId, setPlyaingId] = useState(0)
    const setPlyaingIdTreck = (id) => setPlyaingId(id)

    let soundThisCategory = null

    if(props.searchResponse && props.searchResponse.searchResult.numberOfElements !== 0){
        soundThisCategory = props.searchResponse.searchResult.element.map((item, index)=>{
            return (<div key={item.contentNo}><Card
                setPlayTrackId={props.setPlayTrackId}
                stopPlayer={ props.stopPlayer}
                playerPlayWithId={props.playerPlayWithId} 
                musicTrackId={item.contentNo}
                imageSrc={item.imageId ? 
                    "https://t-rbt.telesens.ua/t-rbt/image?id="+item.imageId : 
                    "https://www.tunefind.com/i/album-art-empty.png"}
                title={item.title}
                artist={item.artist}
                priceModelNo={item.priceModelNo}
                infoItem={item}
                soundSrc={'https://t-rbt.telesens.ua/t-rbt/sound?id='+item.contentNo}
                authorize={props.authorize}  
                buyRingtoneRequest={props.buyRingtone} 
                plyaingId={plyaingId}
                setPlyaingIdTreck={ setPlyaingIdTreck }

            ></Card>
            </div>)
        })

    } else if (props.searchResponse && props.searchResponse.searchResult.numberOfElements === 0) {
        soundThisCategory = <div>No search result</div>

    } else {
        if(!(props.allSounds === undefined) && (props.allSounds.length > 0) && !(props.selectedChildCategoryId === undefined)){
            soundThisCategory = (props.allSounds.filter(item => (item.contentCatId === props.selectedChildCategoryId)).map((item, index)=>{
                return (<div key={item.contentNo}><Card 
                    setPlayTrackId={props.setPlayTrackId}
                    stopPlayer={ props.stopPlayer}
                    playerPlayWithId={props.playerPlayWithId} 
                    musicTrackId={item.contentNo}
                    imageSrc={item.imageId ? 
                        "https://t-rbt.telesens.ua/t-rbt/image?id="+item.imageId : 
                        "https://www.tunefind.com/i/album-art-empty.png"}
                    title={item.title}
                    artist={item.artist}
                    priceModelNo={item.priceModelNo}
                    infoItem={item}
                    soundSrc={'https://t-rbt.telesens.ua/t-rbt/sound?id='+item.contentNo}
                    authorize={props.authorize}  
                    buyRingtoneRequest={props.buyRingtone} 
                    plyaingId={plyaingId}
                    setPlyaingIdTreck={setPlyaingIdTreck}
                    ></Card>
                </div>)
            }))
        }
    }
    
    return(
        <div className="flexBlock justifyContentStart" style={{flexWrap: 'wrap'}}>
            {soundThisCategory}
        </div>
    )
}