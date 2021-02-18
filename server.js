const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8080; 

app.use(express.urlencoded.encoded({ extended: true })); 
app.use(express.json()); 

const tableArray = [
    {
        customerName: '', 
        customerEmail: '',
        customerID: '', 
        phoneNumber: ''
    }
]; 

const waitingArray = [
    {
        customerName: '', 
        customerEmail: '',
        customerID: '', 
        phoneNumber: ''
    }
]; 

// add their name to the table array
// if the table array === 5 object etries then they add waiting array
// if a table opens take entry 0 and add it to the table array 
