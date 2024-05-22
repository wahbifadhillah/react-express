# Sharingvision Backend
Untuk mengaktifkan project, masukkan ini pada command line:
```
npm i
```
lalu
```
npm install -g sequelize-cli
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