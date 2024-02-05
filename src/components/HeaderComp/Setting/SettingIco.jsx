import React from 'react'
import {Color1,Color2,Color3,Color4,Color5,Color6,Color7,Color8} from './Color'
import {Earth_Lines_Sphere,_3D_Abstract_Ball,Water_Waves,Liquids_Wavy,Solid_Color,Simple_Strings} from './Color'
const SettingIco = () => {
    return (
        <div className="global-color">
            <span className="setting-toggle">
                <i className="las la-cog" />
            </span>
            <div className="inner">
                <div className="overlay" />
                <div className="global-color-option">
                    <span className="close-settings">
                        <i className="las la-times" />
                    </span>
                    <h2>Configuration</h2>
                    <div className="global-color-option-inner">
                        <p>Colors</p>
                        <div className="color-boxed">
                            <a href="#" className="clr-active" onClick={Color1} />
                            <a href="#" onClick={Color2} />
                            <a href="#" onClick={Color3} />
                            <a href="#" onClick={Color4} />
                            <a href="#" onClick={Color5} />
                            <a href="#" onClick={Color6} />
                            <a href="#" onClick={Color7} />
                            <a href="#" onClick={Color8} />
                        </div>
                        <p>THREE DIMENSIONAL SHAPES</p>
                        <ul className="themes">
                            <li><a href="#" onClick={Earth_Lines_Sphere}>Earth Lines Sphere</a></li>
                            <li><a href="#" onClick={_3D_Abstract_Ball}>3D Abstract Ball</a></li>
                            <li><a href="#" onClick={Water_Waves}>Water Waves</a></li>
                            <li><a href="#" onClick={Liquids_Wavy}>Liquids Wavy</a></li>
                            <li><a href="#" onClick={Solid_Color}>Solid Color</a></li>
                            <li><a href="#" onClick={Simple_Strings}>Simple Strings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SettingIco