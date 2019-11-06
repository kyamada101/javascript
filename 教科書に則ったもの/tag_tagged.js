//与えられた文字列をエスケープ処理
function escapeHtml(str){
    if (!str) {return '';}
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

//分解されたtemplatesとvaluesを順に連結
function e(templates, ...values){
    let result = '';
    for (let i = 0, len = templates.length; i < len; i++){
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}

let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${name}さん！`); //関数eの入力文字列はタグ付きテンプレート文字列