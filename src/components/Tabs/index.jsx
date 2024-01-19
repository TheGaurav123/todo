import React from 'react'

const Tabs = ({ items, currentTab, onChange }) => {

    return (
        <div role="tablist" className="tabs tabs-bordered sticky -top-11">
            {
                items.map((val) => {
                    return (
                        <button
                            key={val.id}
                            name={val.name}
                            onClick={onChange}
                            role="tab"
                            className={`tab cursor-pointer ${currentTab === val.name && 'tab-active'}`}>
                            {val.label}
                        </button>
                    )
                })
            }
        </div>
    )
}

export { Tabs }