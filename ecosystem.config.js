module.exports = {
  apps : [{
    name: "freeGPT",
    script: "app.js",
    out_file: "./logs/freeGPT.log",         //正常日志
    error_file: "./logs/freeGPT-err.log",   //错误日志
    merge_logs: true,
    exec_mode: 'cluster',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
