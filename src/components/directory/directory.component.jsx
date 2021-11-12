import React from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [ 
                {
                    title: 'HATS',
                    id: 1,
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
                },
                {
                    title: "JACKETS",
                    id: 2,
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
                },
                {
                    title: "SNEAKERS",
                    id: 3,
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
                },
                {
                    title: "WOMENS",
                    id: 4,
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: 'large'
                },
                {
                    title: "MENS",
                    id: 5,
                    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
                    size: 'large'
                }
             ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, id, imageUrl, size }) => (
                            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                        )
                    )
                }
            </div>
        );
    }
}

export default Directory