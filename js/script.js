$("document").ready(function() {

    // get data surah
    $.ajax({
        'url': 'https://equran.id/api/surat',
        'method': 'GET',
        'success' : function(result) {
            $.each(result, function(i, val) {
                $("#data-surah").append(`
                    <tr>
                        <td>${val.nomor}</td>
                        <td>${val.nama_latin} (${val.nama})</td>
                        <td>${val.arti}</td>
                        <td>${val.jumlah_ayat}</td>
                        <td><a href="detail.html?surah=${val.nomor}" class="">Baca</a></td>
                    </tr>
                `)
            })
        }
    })
})