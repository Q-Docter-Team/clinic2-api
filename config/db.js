

module.exports= {
   database: 'clinic',
   username: 'root',
   password: (process.env.production) ? 'root' : ''
}

