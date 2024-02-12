import React, { useState } from 'react'
import { Color1, Color2, Color3, Color4, Color5, Color6, Color7, Color8 } from './Color'
import { Earth_Lines_Sphere, _3D_Abstract_Ball, Water_Waves, Liquids_Wavy, Solid_Color, Simple_Strings } from './Color'
const SettingIco = () => {
    const [isActive, setIsActive] = useState(false);

    const settingOpen = () => {
        setIsActive(true);
    };
    const settingClose = () => {
        setIsActive(false);
    };
    return (
        <div className={`global-color ${isActive ? 'active' : ''}`}>
            <div className='d-flex gap-md-2  gap-1' style={{marginTop:'-30px'}}>
                <span className="setting-toggle" onClick={settingOpen}>
                    <i className="las la-cog" />
                </span>
                <span className="setting-toggle">
                    <i class="lar la-newspaper"></i>
                </span>
            </div>
            <div className="inner">
                <div className="overlay" onClick={settingClose} />
                <div className="global-color-option">
                    <span className="close-settings" onClick={settingClose} >
                        <i className="las la-times" />
                    </span>
                    <h2>Configuration</h2>
                    <div className="global-color-option-inner">
                        <p>Colors</p>
                        <div className="color-boxed">
                            <a className="clr-active" onClick={Color1} />
                            <a onClick={Color2} />
                            <a onClick={Color3} />
                            <a onClick={Color4} />
                            <a onClick={Color5} />
                            <a onClick={Color6} />
                            <a onClick={Color7} />
                            <a onClick={Color8} />
                        </div>
                        <p>THREE DIMENSIONAL SHAPES</p>
                        <ul className="themes">
                            <li><a onClick={Earth_Lines_Sphere}>Earth Lines Sphere</a></li>
                            <li><a onClick={_3D_Abstract_Ball}>3D Abstract Ball</a></li>
                            <li><a onClick={Water_Waves}>Water Waves</a></li>
                            <li><a onClick={Liquids_Wavy}>Liquids Wavy</a></li>
                            <li><a onClick={Solid_Color}>Solid Color</a></li>
                            <li><a onClick={Simple_Strings}>Simple Strings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SettingIco