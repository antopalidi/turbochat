import {Controller} from "@hotwired/stimulus"
import {cable} from "@hotwired/turbo-rails"

export default class extends Controller {
    connect() {
        this.subscribe()
        this.scrollMessages()
    }

    subscribe() {
        const turboCableStreamTag = document.querySelector('#turbo-stream-tag')
        const signedStreamName = turboCableStreamTag.channel.signed_stream_name
        const channelName = turboCableStreamTag.channel.channel

        const scrollMessages = this.scrollMessages.bind(this)

        this.channel = cable.subscribeTo({channel: channelName, signed_stream_name: signedStreamName}, {
            received(data) {
                setTimeout(scrollMessages, 100)
            }
        })
    }

    clearInput() {
        this.element.reset()
    }

    scrollMessages() {
        const chatContainer = document.getElementById('chat-container')
        if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight
    }
}
