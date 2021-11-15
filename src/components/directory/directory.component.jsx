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
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    linkUrl: "hats"
                },
                {
                    title: "JACKETS",
                    id: 2,
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    linkUrl: ""
                },
                {
                    title: "SNEAKERS",
                    id: 3,
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    linkUrl: ""
                },
                {
                    title: "WOMENS",
                    id: 4,
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: 'large',
                    linkUrl: ""
                },
                {
                    title: "MENS",
                    id: 5,
                    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
                    size: 'large',
                    linkUrl: ""
                }
             ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionProps }) => (
                            <MenuItem key={id} { ...sectionProps } />
                        )
                    )
                }
            </div>
        );
    }
}

export default Directory