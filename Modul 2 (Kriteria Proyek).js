//Web Server dapat menyimpan catatan (Kriteria 1)
/*
Tidak perlu menggunakan database, Cukup simpan pada memory server dalam bentuk array JavaScript.
web server harus menyediakan route dengan path ‘/notes’ dan method POST. 

Berikut struktur dari objek catatan yang perlu disimpan oleh server
{
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},

Dalam menyimpan atau menambahkan notes, client akan mengirimkan permintaan ke path dan method tersebut dengan membawa data JSON
{
 "title": "Judul Catatan",
 "tags": ["Tag 1", "Tag 2"],
 "body": "Konten catatan"
}

Jika permintaan client berhasil dilakukan, respons dari server harus memiliki status code 201 (created) dan mengembalikan data dalam bentuk JSON
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "V09YExygSUYogwWJ"
  }
}

Bila permintaan gagal dilakukan, berikan status code 500 dan kembalikan dengan data JSON dengan format berikut:
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "V09YExygSUYogwWJ"
  }
}
*/

//Web Server dapat menampilkan catatan (Kriteria 2)
/*
Ketika client melakukan permintaan pada path ‘/notes’ dengan method ‘GET’

maka server harus mengembalikan status code 200 (ok) serta seluruh data notes dalam bentuk array menggunakan JSON
{
  "status": "success",
  "data": {
    "notes": [
      {
        "id":"notes-V1StGXR8_Z5jdHi6B-myT",
        "title":"Catatan 1",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 1"
      },
      {
        "id":"notes-V1StGXR8_98apmLk3mm1",
        "title":"Catatan 2",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 2"
      }
    ]
  }
}

Jika belum ada catatan satu pun pada array, server bisa mengembalikan data notes dengan nilai array kosong
{
  "status": "success",
  "data": {
    "notes": []
  }
}

client juga bisa melakukan permintaan untuk mendapatkan catatan secara spesifik menggunakan id melalui path ‘/notes/{id}’ dengan method ‘GET’. 
Server harus mengembalikan status code 200 (ok) serta nilai satu objek catatan dalam bentuk JSON
{
  "status": "success",
  "data": {
    "note": {
      "id":"notes-V1StGXR8_Z5jdHi6B-myT",
      "title":"Catatan 1",
      "createdAt":"2020-12-23T23:00:09.686Z",
      "updatedAt":"2020-12-23T23:00:09.686Z",
      "tags":[
        "Tag 1",
        "Tag 2"
      ],
      "body":"Isi dari catatan 1"
    }
  }
}

Bila client melampirkan id catatan yang tidak ditemukan, server harus merespons dengan status code 404, dan data dalam bentuk JSON
{
  "status": "fail",
  "message": "Catatan tidak ditemukan"
}
*/

//Web Server dapat mengubah catatan (Kriteria 3)
/*
Ketika client meminta perubahan catatan, ia akan membuat permintaan ke path ‘/notes/{id}’, menggunakan method ‘PUT’, 
serta membawa data JSON pada body request yang merupakan data catatan terbaru   
{
  "title":"Judul Catatan Revisi",
  "tags":[
    "Tag 1",
    "Tag 2"
  ],
  "body":"Konten catatan"
}

Jika perubahan data berhasil dilakukan, server harus menanggapi dengan status code 200 (ok) dan membawa data JSON objek berikut pada body respons
{
  "status": "success",
  "message": "Catatan berhasil diperbaharui"
}

Bila id catatan tidak ditemukan, maka server harus merespons dengan status code 404 (not found) dan data JSON
{
  "status": "fail",
  "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
}
*/

//Web Server dapat menghapus catatan (Kriteria 4)
/*
client akan membuat permintaan pada path ‘/notes/{id}’ dengan method ‘DELETE’.
Ketika permintaan tersebut berhasil, maka server harus mengembalikan status code 200 (ok) serta data JSON
{
  "status": "success",
  "message": "Catatan berhasil dihapus"
}

Bila id catatan tidak ditemukan, maka server harus mengembalikan respons dengan status code 404 dan membawa data JSON
{
  "status": "fail",
  "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
}
*/

