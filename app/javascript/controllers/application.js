import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
// デバッグモード（コンソールにログが吐き出される
application.debug = true
window.Stimulus   = application

export { application }
