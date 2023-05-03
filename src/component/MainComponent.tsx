/*eslint-disable*/
import React from 'react';
import './MainComponent.css';


const MainComponent = () => {

    return (
        <div className="main_component">
                <video muted autoPlay loop className={'bg_video'}>
                    <source src="/video/nj_bg2023_24fps.mp4" type="video/mp4" />
                </video>
            <div className={'site_title'}>HEEYOUNG</div>
        </div>
    );
}

export default MainComponent;
