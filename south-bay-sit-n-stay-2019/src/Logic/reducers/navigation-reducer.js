

const initialState = {
    nav_names : ['home' , 'about' , 'services' , 'gallery' , 'contact']
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
       
        
        default:
            return state;
    }
}