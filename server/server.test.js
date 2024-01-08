const connect = async () => {
    const URI = process.env.URI || 'mongodb://localhost:3015';
    const dbName = process.env.healthcards || 'healthcards';
    return new Promise((resolve) => {
        node1user.connect();
        db = node1user.db(healthcards);
        resolve(db);
        console.info(`Successfully connected to the mongodb cluster: ${3015}/${healthcards}`)
    })
}