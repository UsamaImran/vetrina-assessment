import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import reportWebVitals from './reportWebVitals'

Sentry.init({
    dsn: 'https://9126a7d7acec4f9bbf3bca897aec946b@o1363164.ingest.sentry.io/6655559',
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <App />
        </Sentry.ErrorBoundary>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
