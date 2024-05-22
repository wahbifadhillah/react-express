# Sharingvision Frontend
## Halaman All Posts menampilkan tabs Published, Drafts dan Thrashed
Route: `/`
- Setiap tabs akan muncul list dalam bentuk tabel yang berisi title, category & action. Action ini berisi icon edit dan icon thrash.
- Jika klik icon edit maka akan ke halaman edit article dengan menampilkan title, content dan category yang dapat di edit serta tambahkan tombol “Publish” dan “Draft”.
- Jika klik icon thrash maka article akan pindah ke tab thrash.
## Halaman Add New untuk menambahkan Posts
Route: `/add`
- Pada halaman “Add New” buatlah form yang berisikan Title, Content dan Category serta ditambahkan tombol “Publish” dan “Draft”.
## Halaman Preview menampilkan semua Posts dengan status Publish
Route: `/preview`
- Pada halaman “Preview” akan menampilkan blog untuk masing-masing article dalam status “Publish” di sertai dengan pagination.

# Note
Menambahkan endpoint article/:limit/:offset/:status untuk mengatasi pagination. Endpoint ini memberikan data:
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

## Di gunakan pada:
### Preview.js
[Preview.js](src/components/Preview.js)
```javascript
const fetchData = async (offset) => {
		try {
			// Menambahkan endpoint article/:limit/:offset/:status untuk mengatasi pagination
			const res = await axios.get(`http://localhost:8000/article/${limit}/${offset}/publish`);
			setData(res.data.data);
			setTotalArticles(res.data.total);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};
```

# Library yang digunakan
- react
- @mui
- axios
- formik
- yup