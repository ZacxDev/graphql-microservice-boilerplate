export default class HealthCheckController {
  static async handle(req, res) {
    res.json({
      api: process.env.APP_NAME,
      health: 'healthy'
    });
  }
}
