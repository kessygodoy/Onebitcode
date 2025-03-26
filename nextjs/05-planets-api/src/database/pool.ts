import pg from 'pg'

 const pool = new pg.Pool({
    connectionString: 'postgres://postgres:k112233k@localhost:5432/nextjs_planets_app'
})

export {pool}