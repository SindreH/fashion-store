const INITIAL_STATE = {
    sections: [ 
        {
            title: 'HATS',
            id: 1,
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            linkUrl: "shop/hats"
        },
        {
            title: "JACKETS",
            id: 2,
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            linkUrl: "shop/jackets"
        },
        {
            title: "SNEAKERS",
            id: 3,
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            linkUrl: "shop/sneakers"
        },
        {
            title: "WOMENS",
            id: 4,
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            size: 'large',
            linkUrl: "shop/womens"
        },
        {
            title: "MENS",
            id: 5,
            imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
            size: 'large',
            linkUrl: "shop/mens"
        }
     ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default directoryReducer