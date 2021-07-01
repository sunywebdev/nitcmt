
        let themes = {
            light: {
                '--page-bgcolor': 'white',
                '--text-color': 'black',
                '--icon-dark':'block',
                '--icon-light':'none'
            },
            dark: {
                '--page-bgcolor': 'black',
                '--text-color': 'white',
                '--icon-dark':'none',
                '--icon-light':'block'
            },
        };

        $('.color-changer').on('click', 'a', (e) => {
            e.preventDefault();
            let theme = $(e.target).data('theme');
            setTheme(theme);
        });

        function setTheme(theme) {
            let body = $('body')[0]; // Get the raw Element, not jQuery
            for (let [prop, value] of Object.entries(themes[theme])) {
                // set value to the CSS variable
                body.style.setProperty(prop, value); 
            }
} 

// default theme
setTheme('light');