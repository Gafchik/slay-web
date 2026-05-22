import { initializePaddle } from '@paddle/paddle-js'

let paddleInstance = null

export async function usePaddle(callbacks = {
  onSuccess: (eventData) => {
    console.log(eventData)
  }
}) {
  if (paddleInstance) {
    return paddleInstance
  }

  paddleInstance = await initializePaddle({
    environment: import.meta.env.VITE_PADDLE_ENV || 'production',
    token: import.meta.env.VITE_PADDLE_CLIENT_SIDE_TOKEN,
    eventCallback: function(eventData) {

      if (eventData.name === 'checkout.completed') {
        callbacks.onSuccess(eventData)
      }
    }
  })

  return paddleInstance
}
