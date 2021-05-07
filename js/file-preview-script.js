let file_array = [];

function scrollBottom() {
    let element = document.querySelector('.chat-item-body');
    element.scrollTop = element.scrollHeight - element.clientHeight;
}

scrollBottom();

$("#chat-file").change(function () {
    let input_files = document.getElementById('chat-file').files;

    $.each(input_files, function (index, value) {
        file_array.push(value);
        $('.preview__container').append(`
        <div class="preview__content">
            <div class="img file_img"><img src="img/icons/pdf_icon.svg" alt=""><img class="file-cross delete_file" data-id="${file_array.length - 1}" src="img/icons/close-cross.svg" alt=""></div>
         
            
           
        </div>
        `);
    });
});

$(document.body).on('click', '.delete_file', function () {
    let file_id = $(this).data('id');
    delete file_array[file_id];
    $(this).parent().remove();
});

//modal

// var modal3 = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn3 = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span3 = document.getElementsByClassName("close3")[0];

// // When the user clicks the button, open the modal 
// btn3.onclick = function () {
//     modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span3.onclick = function () {
//     modal3.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal3) {
//         modal3.style.display = "none";
//     }
// }


// //modal4


// var modal4 = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn4 = document.getElementById("myBtn4");

// // Get the <span> element that closes the modal
// var span4 = document.getElementsByClassName("close3")[0];

// // When the user clicks the button, open the modal 
// btn4.onclick = function () {
//     modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span4.onclick = function () {
//     modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal4) {
//         modal4.style.display = "none";
//     }
// }



$('.container-modal .title').each(function (idx, item) {
    var winnerId = "winner-" + idx;
    this.id = winnerId;
    $(this).click(function () {
        var btn = $("#winner-" + idx);
        var span = $(".close");
        var popId = $('#win-' + idx);
        btn.click(function () {
            $(popId).addClass('on');
            $('body').addClass('lorem');
        });
        span.click(function () {
            $(popId).removeClass('on');
            $('body').removeClass('lorem');
        });

    });
});
