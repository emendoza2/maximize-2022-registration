/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
var tripetto = window.TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNFI5QkNGWVNsd2ZRblJOQVpoWHE4YlJDVGxvbGt2bjMwejU1TWQzbS85MD0iLCJkZWZpbml0aW9uIjoieEhGU1pza20weE9sbTZZakJQVG1BaW9aNHhqRGpUdzdzVVVSTkduajdCND0iLCJ0eXBlIjoiY29sbGVjdCJ9.smUZuyo5bR22w7s00PFrY4wRTHZXvM5mzufVqeOmiTI" });
window.FORM_DEFINITION = tripetto.definition;

window.onload = function () {
  window.TripettoChat.run({
    element: document.body,
    definition: window.FORM_DEFINITION,
    styles: window.FORM_STYLES,
    onSubmit: function (instance) {
      // TODO: Handle the results
      // Or retrieve the individual fields:
      var fields = window.TripettoRunner.Export.exportables(instance);
      fields.name = window.FORM_DEFINITION.name || window.FORM_DEFINITION._value.name;
      console.log(fields);
      // fetch(
      //   "https://script.google.com/macros/s/AKfycbzshwiKylA18QhFyKzuNPkBrLNo8YD83goVlMLB_QcLPHXOL3mteB771FM0agUDDqzp4A/exec?key=safety",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "text/plain",
      //     },
      //     body: JSON.stringify(fields),
      //   }
      // )
      //   .then((res) => res.text())
      //   .then((text) => console.log(text));
    },
    persistent: true,
    display: "page",
    customCSS: `
      nav > div > div > div:last-child > a, html body div div div div div div a, div.sc-eCImPb a {
        opacity: 0.5
      }
      body div * {
        font-family: "Comfortaa", sans-serif !important;
        font-weight: 350;
      }
      h2 > label *, h2 *, .kDCMTC {
        font-weight: 700;
      }
      div div div.sc-jRQBWg > div:last-child h3 {
        opacity: 0.5;
        font-weight: 700;
      }
      body div div div.sc-jRQBWg > div.lleNLY:last-child h3 + p {
  opacity: 0.5;
}
body div div div.sc-jRQBWg > div.lleNLY:last-child h3 + nav {
  opacity: 0.5;
}
      div div div.sc-jRQBWg > div:last-child {
        /*opacity: 0.5;*/
      }
      .sc-cxabCf.iuDZmx {
        color: #fffa;
      }
    `,
    className: "your-custom-class-name"
  });
};
