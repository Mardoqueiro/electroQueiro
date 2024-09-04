import { connection as db } from '../config/index.js'

class Products{
    fetchProducts(req, res) {
        try{
            const strQry = `SELECT prodID, prodName, price, prodBrand, imageURL
            FROM Products;`
            db.query(strQry, (err, results) => {
                // `Unable to fetch all Products`
                if(err) throw new Error('Unable to fetch all products.')
               res.json({
            status: res.statusCode,
            results
            })
        
        })
          } catch(e){
             res.json({
                status: 404,
                msg: e.message
             })
          }
    }

    recentProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, price, prodBrand, imageURL
            FROM Products
            ORDER BY prodID DESC
            LIMIT 5;
            `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent products')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchProduct(req, res) {
        try {
            const strQry = `SELECT prodID, prodName, price, prodBrand, imageURL
            FROM Products 
            WHERE prodID = ${req.params.id};`
            
            db.query(strQry, (err, result) => {
                if(err) throw new Error(`Unable to fetch product with id ${req.params.id}`)
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        
        } catch (e) { 
            res.json({
                status: 404,
                msg: e.message
             })
        }
    }
     addProduct(req, res) {
        try{
           const strQry = `INSERT INTO Products SET ?;`

        db.query(strQry, [req.body], (err) => {
            if(err) throw new Error('Unable to add a product')
            res.json({
           status: res.statusCode, 
          msg: 'Product was added'
            })
        })
         } catch(e) {
            res.json({
                status: 400,
                msg: e.message 
            })
         }
     }
    
    updateProduct(req, res) {
        try{
        const strQry = `
        UPDATE Products
        SET ?
        WHERE prodID = ${req.params.id}
        `
        db.query(strQry, [req.body], (err) => {
            if(err) throw new Error('Unable to update a product')
                res.json({
            status: res.statusCode,
            msg: 'The product was updated'
          })
        })
      } catch(e) {
        res.json({
            status: 400,
            err: e.message
        })
      }
     }
    
     deleteProduct(req, res) {
        try{
            const strQry = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id};
            `
            db.query(strQry, (err) => {
             if (err) throw new Error('Unable to delete a product.')
             res.json({
            status: res.statusCode,
            msg: "Product deleted successfully."
            })
          })
        } catch(e) {
            res.json({
                status: 404,
                msg: e.message
             })
        }
     }
    
}

export{
    Products
}