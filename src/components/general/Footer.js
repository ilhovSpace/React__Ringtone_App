import React from 'react'

export default function(){
    return(
        <div style={{border: '1px solid white', borderRadius: '10px', padding:'10px', marginTop: '50px'}}>
        <div className="row">
            <div className="col-sm-8">
                <img src='https://t-rbt.telesens.ua/t-rbt/img/telesens_logo.png' alt='Telesens' style={{paddingBottom: '10px'}}></img>
            <p>Telesens RBT service enables subscribers to specify a custom defined melody (song) 
                or a personal prompt/greetings (here and after Ring Back tone Melody) which caller 
                party can hear instead of the standard "beeps" (known as ring back tone) during call 
                initiation process. Subscribers can purchase melodies (songs) provided by content provider 
                and personalize the service by configuring rules determining what content is played based 
                on the caller's phone number, the time/date of the call.</p>
            </div>
        <div className="col-sm-4" style={{textAlign:'center', paddingTop: '30px'}}>
            <div style={{paddingBottom: '10px'}}>Download app</div>
                <img src='https://t-rbt.telesens.ua/t-rbt/img/google_play.png' alt='google play' style={{width:'130px'}}></img>
                <img src='https://t-rbt.telesens.ua/t-rbt/img/apple-512.png' alt='apple store' style={{width:'130px'}}></img>
            </div>
        </div>
            <p>© Telesens International Ltd., 2013 - 2019, Version 1.0.0 Ilhov Vladyslav</p>       
        </div>
    )
}