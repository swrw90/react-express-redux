const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstName: "Grover", lastName: "Watson" },
        { id: 2, firstName: "Kelly", lastName: "Watson" },
        { id: 3, firstName: "Wyatt", lastName: "Watson" },
        { id: 4, firstName: "Seth", lastName: "Watson" }                        
    ];
    
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));