import express from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import logger from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from './swagger.js'
import ErrorHandlerMiddleware from '../../interfaces/middlewares/error-handler-middleware'

import AnalyticsRouter from './routers/analytics-router'
import UserTimerActionRouter from './routers/user-timer-action-router'

const app = express()
const port = process.env.PORT || 8002

app.use(logger('common'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/api', AnalyticsRouter)
app.use('/api', UserTimerActionRouter)
app.use(ErrorHandlerMiddleware.log)
app.use(ErrorHandlerMiddleware.handle)

app.get('/', (_req, res) =>
  res.status(200).send({
    status: 'Success',
    message: 'Analytics Service API',
  })
)

app.get('*', (_req, res) =>
  res.status(404).send({
    status: 'Error',
    message: 'Path not found :(',
  })
)

app.listen(port, () => {
  console.log(`Server port: ${port}`)
})

export default app
