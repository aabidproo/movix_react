import React, { useState } from 'react';
import './style.scss';

const SwitchTabs = ({ data, onTabChange }) => {

    const [selectedTab, SetSelectedTab] = useState(0);
    const [left, SetLeft] = useState(0);

    const activeTab = (tab, index) => {
        SetLeft(index * 100)
        setTimeout(() => {
            SetSelectedTab(index)
        }, 300);
        onTabChange(tab, index)
    }

    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${selectedTab === index ? "active" : ""}`}
                        onClick={() => activeTab(tab, index)} >
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    )
}

export default SwitchTabs
