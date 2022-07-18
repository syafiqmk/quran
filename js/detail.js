$("document").ready(function() {
    let Params = new URLSearchParams(window.location.search);
    let surah = Params.get('surah');
    console.log(surah);

    $.ajax({
        'url': 'https://equran.id/api/surat/' + surah,
        'method': 'GET',
        'success': function(result) {
            $("#nama-surah").html(`
                ${result.nama_latin} (${result.nama})
            `)
            $("#arti-surah").html(result.arti)
            $("#tempat-turun").html(`
                Diturun-kan di ${result.tempat_turun}
            `)
            $("#deskripsi").html(result.deskripsi)

            // data ayat
            $.each(result.ayat, function(i, val) {
                $("#surah-row").append(`
                    <div class="col-md-7 my-4">
                        <h5 class="text-end arab">${val.ar}</h5>
                        <h6>${val.tr}</h6>
                        <p>${val.idn}</p>
                    </div>
                `)
            })
        }
    })
})