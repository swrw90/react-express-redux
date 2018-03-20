const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: Seth, lastName: Watson },
        { id: 1, firstName: Grover, lastName: Watson },
        { id: 1, firstName: Wyatt, lastName: Watson },
        { id: 1, firstName: Wyatt, lastName: Watson }                        
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));