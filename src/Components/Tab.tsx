import React, { Fragment } from "react";
import '../Stylesheets/Tab.css'

interface TabProps {
    id: string;
    label: string;
    notificationCount?: number;
}

interface TabsProps {
    tabs: TabProps[];
    activeTabIndex: number;
    onTabChange: (index: number) => void;
}

const Tabs = ({ tabs, activeTabIndex, onTabChange }: TabsProps) => (
    <div className="tabs">
        {tabs.map((tab, index) => (
            <Fragment key={index}>
                <input type="radio" id={tab.id} name="tabs" />
                <label
                    className="tab text-sm font-semibold"
                    htmlFor={tab.id}
                    onClick={() => onTabChange(index)}
                >
                    {tab.label}
                </label>
            </Fragment>
        ))}
        <span className="glider" style={{ transform: `translateX(${activeTabIndex * 100}%)` }} />
    </div>
);

export default Tabs;
