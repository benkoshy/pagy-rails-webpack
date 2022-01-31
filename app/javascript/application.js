// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"


import Pagy from "pagy-module";
window.addEventListener("turbo:load", Pagy.init);