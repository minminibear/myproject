// class名：data-follow="false"でアカウント一人ひとりがすでにフォローしているのかをチェック。
// そしてtrueの場合：ボタンに対してisFollowクラスを追加する。
$(function () {
    $(".js-account-item").each(function () {
        var $this = $(this);
        var $thisData = $this.data();
        if ($thisData.follow) {
            $this.find(".js-follow-btn").addClass("isFollow");
        }
    });

    // ボタンをクリックした時にフォローかフォロー解除かを切り替える
    // data-followがtrueの場合、
    // ・isFollowクラスを削除
    // ・ボタンのテキストを「フォローする」にする
    // ・data-followをfalseに変更する
    $(".js-follow-btn").on("click", function () {
        var $this = $(this);
        var $accountItem = $this.parents(".js-account-item");
        var $thisData = $accountItem.data();

        if ($thisData.follow) {
            //  ajax　(実際のプロダクトではajaxを使用してサーバーサイドにフォロー・解除の変更がされたことを送信しなければいけない)

            $this.removeClass("isFollow");
            $this.text("フォローする");
            $accountItem.data("follow", false);
        }   else {
            // ajax
            
            $this.addClass("isFollow");
            $this.text("フォロー中");
            $accountItem.data("follow", true);
        }
        console.log($thisData);
    });
});