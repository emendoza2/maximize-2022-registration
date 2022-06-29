/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* Configuration: General */
var API_URL = "https://script.google.com/macros/s/AKfycbzshwiKylA18QhFyKzuNPkBrLNo8YD83goVlMLB_QcLPHXOL3mteB771FM0agUDDqzp4A/exec";
var TRIPETTO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNFI5QkNGWVNsd2ZRblJOQVpoWHE4YlJDVGxvbGt2bjMwejU1TWQzbS85MD0iLCJkZWZpbml0aW9uIjoieEhGU1pza20weE9sbTZZakJQVG1BaW9aNHhqRGpUdzdzVVVSTkduajdCND0iLCJ0eXBlIjoiY29sbGVjdCJ9.smUZuyo5bR22w7s00PFrY4wRTHZXvM5mzufVqeOmiTI";

var tripetto = window.TripettoServices.init({
  token: TRIPETTO_TOKEN
});
var FORM_DEFINITION = tripetto.definition;
var CUSTOM_CSS = window.CUSTOM_CSS;
var FORM_STYLES = window.FORM_STYLES;

var handleChange, handleImport, handleSubmit;

/* Instance-specific config & initialization */

var runner = window.TripettoChat;

function main() {
  runner.run({
    element: document.body,
    definition: FORM_DEFINITION,
    styles: FORM_STYLES,
    onChange: handleChange,
    onImport: handleImport,
    onSubmit: (handleSubmit || function (instance, r, n, o) {
      var fields = window.TripettoRunner.Export.exportables(instance);
      fields.name =
        window.FORM_DEFINITION.name || window.FORM_DEFINITION._value.name;
      var actionables = window.TripettoRunner.Export.actionables(instance);
      fetch(
        API_URL+"?key=safety",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({exportables: fields, actionables: actionables}),
        }
      )
        .then((res) => res.text())
        .then((text) => console.log(text));
      return tripetto.onSubmit(instance, r, n, o)
    }),
    persistent: true,
    display: "page",
    customCSS: CUSTOM_CSS,
    className: "tripetto-iframe",
  });
}

window.onload = main;

/* Utilities */
function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  return new Blob(ia, { type: mimeString });
}