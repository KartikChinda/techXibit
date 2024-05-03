1. Init the frontend and the backend. 
2. Set the backend initial getRoutes up. 
3. Create the mongoDb database, connect it to the backend. 
4. Create the mongoose model from the schema you have in mind. 
5. In the frontend, npm i the dependencies you need, at the moment they will just be moment, axios, react-file-base-64 (working w imgs), redux and redux-thunk. 
6. Write actual functionality for getting and creating posts. (Creation: get req.body; do const newthing = new Model(req.body variable); await newthing.save()). 
7. Can test the backend out rn, or start building the frontend layout (ie the form, so you can directly test w the form). 
8. Post building the basic frontend layout (ie the navbar, and the layout for where the form and the posts go), you build the API. 
9. Daunting part: Add redux capabilities to your application. 
10. Use Selectors and use dispatch shit. Honestly I could not hate redux any more. 
11. Create the layout of the form, and then create the functions of the form, ie onChange, onSubmit etc. 
    11a. Whenever you are performing the onChange on a button, and the value is not just a standalone value, but say an element of an array or an object, make sure to spread the array/object first. 
12. 








Color Palletes: 
    - https://colorhunt.co/palette/f11a7b9821763e001fffe5ad
    - https://colorhunt.co/palette/000000f72798f57d1febf400

    (Color pallete design guide: The biggest color is used for the background or, the part that covers the website the most). 


Fonts: 
    - Playfair Display
    - Inconsolata
    - 