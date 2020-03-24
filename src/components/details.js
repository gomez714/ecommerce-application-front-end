import React, { Component } from 'react';

class Details extends Component {

    renderChildren = () => {
        const { links, info } = this.props;
        let children = [];
        if(links){
            children = links.map(link => {
            return <a key={link.id} onClick={link.onClick} className='details-link'>{link.title}</a>
            })
        } else if (info) {
            children = info.map(item => {
                return <div key={item.id} className='details-item'>{item.title}</div>
                })
        }

        return children;
    }
    
    render(){
        const { className, title, links, info} = this.props;
        return(
            <div className={`${className} details`}>
                <div className='details-title'>
                    {title}
                </div>
                <div className='details-links'>
                    {
                        this.renderChildren()
                    }
                </div>
            </div>
        )
    }
}

export default Details;