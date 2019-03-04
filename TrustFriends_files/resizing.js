       $(function() {
            $("#image_content img, .resizablebox").each(function() {
                var oImgWidth = $(this).width();
                var oImgHeight = $(this).height();
                $(this).css({
                    'max-width':oImgWidth+'px',
                    'max-height':oImgHeight+'px',
                    'width':'100%',
                    'height':'100%'
                });
            });
        });