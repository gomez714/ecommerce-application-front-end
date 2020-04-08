import React from 'react';

export function UnderlinedTitle({className, title}) {
    return(
        <div className={`${className} underlined-title`}>
            {title}
        </div>
    )
}

export function InfoLabel({className, title, value}) {
    return(
        <div className={`${className} info-title`}>
            <div className='info-title-title'>
                {title}
            </div>
            <div className='info-title-value'>
                {value}
            </div>
        </div>
    )
}