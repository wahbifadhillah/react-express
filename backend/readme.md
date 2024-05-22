# Sharingvision Backend
Untuk mengaktifkan project, masukkan ini pada command line:
```
npm i
```
Install library migration
```
npm install -g sequelize-cli
```
Jalankan backend dengan
```
node index.js
```
## Membuat database article secara manual dengan nama “posts”
```mysql
CREATE DATABASE sharingvision;
USE sharingvision;

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('publish', 'draft', 'thrash') NOT NULL
);
```
### Menggunakan migrate sequelize-cli
Atur konfigurasi database di `config/config.json`. Lalu masukkan command `sequelize db:migrate`

## Endpoint
 `POST` `/article/`
 `GET` `/article/<limit>/<offset>`
 `GET` `/article/<id>`
 `PATCH` `/article/<id>`
 `DELETE` `/article/<id>`


 ## Validation
- Title: required, minimal 20 karakter 
- Content: required, minimal 200 karakter 
- Category: required, minimal 3 karakter

## Postman collection
`[Postman Collection](Article.postman_collection.json)

# Note
Menambahkan endpoint `/article/:limit/:offset/:status` untuk mengatasi pagination. Endpoint ini memberikan data:
```
{
    "data": [
        {                          
            "title": "",  
            "content": "", 
            "category":"", 
            "status": ""
        },
        {                          
            "title": "",  
            "content": "", 
            "category":"", 
            "status": ""
        },
    ],
    "total": 2
}
```

## Di inisiasi pada:
### Article Router
[Article Router](routes/articleRoutes.js)
```javascript
router.get("/:limit/:offset/:status", articleController.getAllArticlesWithStatus);
```
### Article Controller
[Article Controller](controllers/articleController.js)
```javascript
exports.getAllArticlesWithStatus = async (req, res, next) => {
	try {
		const limit = parseInt(req.params.limit) || 10;
		const offset = parseInt(req.params.offset) || 0;
		const articles = await Article.findAll({
			limit,
			offset,
			where: {
				status: req.params.status
			}
		});
		const totalPublished = await Article.count({
            where: { status: 'publish' } 
        });
		if (articles) {
			res.status(200).json({data: articles, total: totalPublished});
		} else {
			res.status(404).json({ error: "No articles found" });
		}
	} catch (err) {
		next(err);
	}
};
```

# Library yang digunakan
- cors
- express
- express-validator
- sequelize