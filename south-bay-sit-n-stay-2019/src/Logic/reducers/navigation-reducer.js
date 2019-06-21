

const initialState = {
    nav_names: [
        {id: '/' ,        name: 'home'},
        {id: 'services' , name: 'services'},
        {id: 'book-now' , name: 'book now'},
        {id: 'about' ,    name: 'about'},
        {id: 'gallery' ,  name: 'gallery'},
        {id: 'contact' ,  name: 'contact'},
    ],
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
       
        
        default:
            return state;
    }
}