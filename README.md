# Machobear React App
This project is conversion of a Sketch UI into Single Page react application. Based on my experience, marketing web pages like this are not ideal for React-Redux unless rendering of the UI components is done on server. Search engines can't index SPA's because there's no content "on the page". 

I tried to create an app covering all basic aspects of React-Redux. There are components (dump components) and containers (smart components) designed based on the provided design. Use of Redux and Store is limited to Members and Works.

Layout is fully responsive - used Flexbox CSS concepts where needed to make the components look great on all screen sizes. Please note that mobile view also has navigation rather than popular hamburger icon to open the collapsible menu. Since there were only 5 links, it didn't make sense to waste an extra click for nagigation. 

For sliders I used jQuery Owl Carousel because it's fully responsive and touch friendly - Try sliding the team members using touch / mouse (drag-drop). 

Redux implementation of Members and Works shows that half records are loaded when component is mounted and remaining records based on an action dispatching on store. 

Webpack: configured website to include BootStrap CSS & associated fonts + icons, process sass files for each component and container and include jQuery library. 

Please let me know if you like to see React Native implementation too. This version of project is limited to web on desktop, tablets and smartphones. 



