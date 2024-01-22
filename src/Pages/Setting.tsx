import React, {useEffect, useState} from 'react';
import Tabs from "../Components/Tab";
import PersonalInformation from "../Components/Settings/PersonalInformation";
import NextOfKin from '../Components/Settings/NextOfKin';
import BankAndCard from "../Components/Settings/BankandCard";
import ChangePassword from "../Components/Settings/ChangePassword";
import {useLocation, useNavigate} from "react-router-dom";

function Setting() {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabs = [
        { id: 'personal', label: 'Personal Information' },
        { id: 'nextofkin', label: 'Next Of Kin' },
        { id: 'bankandcard', label: 'Bank and Cards' },
        { id: 'changepassword', label: 'Change Password' },
    ];
    const history = useNavigate();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const tab = params.get('tab');

    const handleTabChange = (index: number) => {
        setActiveTabIndex(index);
        console.log(`Selected Tab: ${tabs[index].id}`);
        const tabLabel = tabs[index].id;
        history(`/setting?tab=${encodeURIComponent(tabLabel)}`);

        console.log(`Selected Tab: ${tabLabel}`);
    };
    useEffect(() => {
        console.log(tab)
        if (tab === 'personal'){
            setActiveTabIndex(0);
        }
        if (tab === 'nextofkin'){
            setActiveTabIndex(1);
        }
        if (tab === 'bankandcard'){
            setActiveTabIndex(2);
        }
        if (tab === 'changepassword'){
            setActiveTabIndex(3);
        }
    },[setActiveTabIndex, tab])
    return (
        <div className='p-2 md:p-10 md:w-10/12 lg:w-7/12 '>
            <div className="container">
                <Tabs tabs={tabs} activeTabIndex={activeTabIndex} onTabChange={handleTabChange}/>
            </div>
            <div className=" w-full">
                <div className="">
                    {activeTabIndex === 0 ?
                        <PersonalInformation/>
                        : activeTabIndex === 1 ?
                            <NextOfKin />
                        : activeTabIndex === 2 ?
                            <BankAndCard />
                        : activeTabIndex === 3 ?
                            <ChangePassword />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Setting