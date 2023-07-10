import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';

function Widget() {
    return (
        <div className='widget'>
            <div className='widget-top'>
                <div className='widget-header'>
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className='widget-body'>
                    <ul className='widget-options'>
                            <li>
                                <h4>Hexaware Technologies to hire 6,000</h4>
                                <p>21h ago • 3,338 readers</p>
                            </li>

                            <li>
                                <h4>India Inc plugs into EV rides</h4>
                                <p>1d ago • 1,632 readers</p>
                            </li>
                            <li>
                                <h4>A must-have Pride Month conversation</h4>
                                <p>4d ago • 4,020 readers</p>
                            </li>
                            <li>
                                <h4>Curbing digital payment frauds</h4>
                                <p>2d ago • 2,238 readers</p>
                            </li>
                            <li>
                                <h4>India's eB2B market set to soar</h4>
                                <p>1d ago • 794 readers</p>
                            </li>
                    </ul>
                </div>
            </div>

            <div className='widget-bottom'>
                <div className='widget-header'>
                    <h4>Today's top courses</h4>
                    <InfoIcon />
                </div>
                <div className='widget-body'>
                    <ul className='widget-options'>
                            <li>
                                <h4>Leading with a Heavy Heat</h4>
                                <p>Kay Coly</p>
                            </li>

                            <li>
                                <h4>Shorter hour boost productivity</h4>
                                <p>11d ago • 1,552 readers</p>
                            </li>
                            <li>
                                <h4>Flexi leave is the new flexi</h4>
                                <p>4d ago • 7,090 readers</p>
                            </li>
                            <li>
                                <h4>Croitical thinking for better judgemnet</h4>
                                <p>2d ago • 4,238 readers</p>
                            </li>
                            <li>
                                <h4>Building Resillience</h4>
                                <p>Titanan Kolovau</p>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Widget
