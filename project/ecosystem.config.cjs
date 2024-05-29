module.exports = {
  apps : [
    {
      name: "osbank",
      script: "./build/index.js",
      instances: 1,
      autorestart: true,
      watch: false,
      env_production: {
        NODE_ENV:"prod",
        ENV:"prod",
        HOST:"",
        PORT:"3000",
        DB_URL:"",
        SECRET_KEY:"",
      },
      exec_mode:"cluster",
    }
  ],
}
