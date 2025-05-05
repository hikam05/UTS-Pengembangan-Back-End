const express = require('express');
const router = express.Router();
const db = require('../db'); 


router.post('/', (req, res) => {
    console.log('RAW BODY:', req.body); 
    
    const { namaSupplier, perusahaan, barang, kuota, hari } = req.body;
    const sql = 'INSERT INTO supplier (namaSupplier, perusahaan, barang, kuota, hari) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [namaSupplier, perusahaan, barang, kuota, hari], (err, result) => {
        if (err) return res.status(500).json({ success: false, error: err.message });
        res.json({ success: true, message: 'Data berhasil ditambahkan', data: result });
    });
});


router.get('/', (req, res) => {
    const sql = 'SELECT * FROM supplier';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { namaSupplier, perusahaan, barang, kuota, hari } = req.body;
    const sql = 'UPDATE supplier SET namaSupplier = ?, perusahaan = ?, barang = ?, kuota = ?, hari = ? WHERE idSup = ?';
    db.query(sql, [namaSupplier, perusahaan, barang, kuota, hari, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Data berhasil diperbarui', data: result });
    });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM supplier WHERE idSup = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Data berhasil dihapus', data: result });
    });
});

module.exports = router;
